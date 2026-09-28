'use client';

import { useEffect } from 'react';

export default function HeaderHeightSync() {
  useEffect(() => {
    const header = document.querySelector('.bbs-header');
    if (!header) return undefined;
    const inner = header.querySelector('.bbs-header-inner');
    const root = document.documentElement;
    let stale = false;
    let timer;
    // Records where the visible header content ends (its bottom padding is transparent). The sticky header is
    // shorter, so only the resting state is measured; a resize while sticky is re-measured once the header is back
    // at rest and its padding transition has finished.
    const measure = () => {
      if (header.classList.contains('is-sticky')) {
        stale = true;
        return;
      }
      stale = false;
      const visible = header.offsetHeight - parseFloat(getComputedStyle(inner).paddingBottom);
      root.style.setProperty('--bbs-header-h', `${visible}px`);
    };
    const classWatch = new MutationObserver(() => {
      if (stale && !header.classList.contains('is-sticky')) {
        clearTimeout(timer);
        timer = setTimeout(measure, 300);
      }
    });
    classWatch.observe(header, { attributes: true, attributeFilter: ['class'] });
    window.addEventListener('resize', measure);
    document.fonts.ready.then(measure);
    measure();
    return () => {
      classWatch.disconnect();
      window.removeEventListener('resize', measure);
      clearTimeout(timer);
      root.style.removeProperty('--bbs-header-h');
    };
  }, []);
  return null;
}
