'use client';

import { useEffect, useRef } from 'react';
import { turnstileKey } from '../lib/turnstile';

const SCRIPT_ID = 'cf-turnstile-script';
const SCRIPT_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';

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
  const siteKey = turnstileKey(process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY);

  useEffect(() => {
    if (!siteKey || !hostRef.current) return undefined;
    let cancelled = false;
    let ro;

    const scheduleFit = () => {
      requestAnimationFrame(() => fitWidget(wrapRef.current));
    };

    loadScript()
      .then(() => {
        if (cancelled || !hostRef.current || !window.turnstile) return;
        if (widgetId.current != null) {
          window.turnstile.remove(widgetId.current);
          widgetId.current = null;
        }
        widgetId.current = window.turnstile.render(hostRef.current, {
          sitekey: siteKey,
          theme: 'light',
          size: 'flexible',
          callback: (token) => onToken?.(token),
          'expired-callback': () => onToken?.(''),
          'error-callback': () => {
            onToken?.('');
            scheduleFit();
          }
        });
        scheduleFit();
        // Error / challenge UI can appear a moment after render.
        setTimeout(scheduleFit, 400);
        setTimeout(scheduleFit, 1200);
      })
      .catch(() => onToken?.(''));

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
        window.turnstile.remove(widgetId.current);
        widgetId.current = null;
      }
    };
  }, [siteKey, onToken]);

  if (!siteKey) return null;

  return (
    <div className="bbs-turnstile" ref={wrapRef}>
      <div ref={hostRef} className="bbs-turnstile-host" />
    </div>
  );
}
