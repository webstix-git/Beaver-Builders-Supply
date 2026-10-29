'use client';

import { useEffect, useRef } from 'react';
import { turnstileKey } from '../lib/turnstile';

const SCRIPT_ID = 'cf-turnstile-script';
const SCRIPT_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';

/** Latest Turnstile token for the contact form (iframe values are not readable via DOM). */
let latestToken = '';
let latestWidgetId = null;

export function getTurnstileResponse() {
  if (latestToken) return latestToken;
  try {
    if (latestWidgetId != null && window.turnstile?.getResponse) {
      return String(window.turnstile.getResponse(latestWidgetId) || '').trim();
    }
  } catch {
    /* ignore */
  }
  return '';
}

function loadScript() {
  if (typeof window === 'undefined') return Promise.resolve();
  if (window.turnstile) return Promise.resolve();
  const existing = document.getElementById(SCRIPT_ID);
  if (existing) {
    return new Promise((resolve) => {
      if (window.turnstile) resolve();
      else existing.addEventListener('load', () => resolve(), { once: true });
    });
  }
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.src = SCRIPT_SRC;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load Turnstile'));
    document.head.appendChild(script);
  });
}

function fitWidget(wrap) {
  if (!wrap) return;
  const host = wrap.querySelector('.bbs-turnstile-host') || wrap.firstElementChild;
  const widget = host?.firstElementChild || host;
  if (!widget) {
    wrap.style.height = '';
    return;
  }
  widget.style.transform = '';
  widget.style.transformOrigin = '';
  wrap.style.height = '';
  const avail = wrap.clientWidth;
  const need = Math.max(widget.scrollWidth, widget.getBoundingClientRect().width, 1);
  const scale = Math.min(1, avail / need);
  if (scale < 0.999) {
    widget.style.transformOrigin = 'left top';
    widget.style.transform = `scale(${scale})`;
    wrap.style.height = `${Math.ceil(widget.getBoundingClientRect().height)}px`;
  }
}

/**
 * Cloudflare Turnstile widget. Site key comes from NEXT_PUBLIC_TURNSTILE_SITE_KEY.
 * onToken(token | '') fires when the challenge completes or expires/errors.
 */
export default function Turnstile({ onToken }) {
  const wrapRef = useRef(null);
  const hostRef = useRef(null);
  const widgetId = useRef(null);
  const onTokenRef = useRef(onToken);
  const siteKey = turnstileKey(process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY);

  onTokenRef.current = onToken;

  useEffect(() => {
    if (!siteKey || !hostRef.current) return undefined;
    let cancelled = false;
    let ro;

    const emit = (token) => {
      latestToken = token || '';
      onTokenRef.current?.(latestToken);
    };

    const scheduleFit = () => {
      requestAnimationFrame(() => fitWidget(wrapRef.current));
    };

    loadScript()
      .then(() => {
        if (cancelled || !hostRef.current || !window.turnstile) return;
        if (widgetId.current != null) {
          try {
            window.turnstile.remove(widgetId.current);
          } catch {
            /* ignore */
          }
          widgetId.current = null;
        }
        widgetId.current = window.turnstile.render(hostRef.current, {
          sitekey: siteKey,
          theme: 'light',
          size: 'flexible',
          callback: (token) => {
            emit(token);
            scheduleFit();
          },
          'expired-callback': () => emit(''),
          'error-callback': () => {
            emit('');
            scheduleFit();
          },
          'timeout-callback': () => emit('')
        });
        latestWidgetId = widgetId.current;
        scheduleFit();
        setTimeout(scheduleFit, 400);
        setTimeout(scheduleFit, 1200);
      })
      .catch(() => emit(''));

    if (typeof ResizeObserver !== 'undefined' && wrapRef.current) {
      ro = new ResizeObserver(scheduleFit);
      ro.observe(wrapRef.current);
    }
    window.addEventListener('resize', scheduleFit);

    return () => {
      cancelled = true;
      ro?.disconnect();
      window.removeEventListener('resize', scheduleFit);
      if (widgetId.current != null && window.turnstile) {
        try {
          window.turnstile.remove(widgetId.current);
        } catch {
          /* ignore */
        }
        if (latestWidgetId === widgetId.current) {
          latestWidgetId = null;
          latestToken = '';
        }
        widgetId.current = null;
      }
    };
    // Intentionally depend only on siteKey — onToken is read via ref so the widget is not remounted.
  }, [siteKey]);

  if (!siteKey) return null;

  return (
    <div className="bbs-turnstile" ref={wrapRef}>
      <div ref={hostRef} className="bbs-turnstile-host" />
    </div>
  );
}
