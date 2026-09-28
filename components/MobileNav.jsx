'use client';

import { useEffect, useRef, useState } from 'react';

const MATERIALS = [
  { slug: 'kitchen-bath', name: 'Kitchen & Bath' },
  { slug: 'decking-railing', name: 'Decking & Railing' },
  { slug: 'windows', name: 'Windows' },
  { slug: 'exterior-doors', name: 'Exterior Doors' },
  { slug: 'interior-doors-trim', name: 'Interior Doors & Trim' },
  { slug: 'siding', name: 'Siding' },
  { slug: 'roofing', name: 'Roofing' }
];
const DESIGN = [
  { href: '/design#drafting-contract', name: 'Drafting Contract' },
  { href: '/design#design-tools', name: 'Brand & Product Design Tools' }
];
// Keep in sync with the max-width in globals.css that swaps the desktop menu for the hamburger.
const MOBILE_QUERY = '(max-width: 1229px)';

function Chevron({ open }) {
  return (
    <svg className="bbs-ico" width="18" height="18" viewBox="0 0 24 24" style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform .2s ease' }}>
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

// onMaterial lets the Materials page scroll to a section itself instead of following the link.
export default function MobileNav({ active, onMaterial }) {
  const [open, setOpen] = useState(false);
  const [sub, setSub] = useState(null);
  const burgerRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    const mq = window.matchMedia(MOBILE_QUERY);
    const onMq = () => { if (!mq.matches) setOpen(false); };
    window.addEventListener('keydown', onKey);
    mq.addEventListener('change', onMq);
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      window.removeEventListener('keydown', onKey);
      mq.removeEventListener('change', onMq);
      document.body.style.overflow = '';
      burgerRef.current?.focus({ preventScroll: true });
    };
  }, [open]);

  const close = () => { setOpen(false); setSub(null); };
  const toggleSub = (name) => setSub(sub === name ? null : name);
  const linkClass = (name) => `bbs-mnav-link${active === name ? ' is-active' : ''}`;

  return (
    <div className="bbs-mnav-root">
      <button
        ref={burgerRef}
        className="bbs-burger"
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="bbs-mnav"
        onClick={() => setOpen(true)}
      >
        <svg className="bbs-ico" width="26" height="26" viewBox="0 0 24 24">
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>
      <div className={`bbs-mnav-backdrop${open ? ' is-open' : ''}`} onClick={close} />
      <nav id="bbs-mnav" className={`bbs-mnav${open ? ' is-open' : ''}`} aria-label="Main menu" inert={!open}>
        <div className="bbs-mnav-head">
          <a href="/" onClick={close}>
            <img src="/assets/logo-white.png" alt="Beaver Builders' Supply" style={{ height: '32px', width: 'auto', display: 'block' }} />
          </a>
          <button ref={closeRef} className="bbs-burger" type="button" aria-label="Close menu" onClick={close}>
            <svg className="bbs-ico" width="26" height="26" viewBox="0 0 24 24">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <a className={linkClass('home')} href="/" onClick={close}>Home</a>
        <div className="bbs-mnav-row">
          <a className={linkClass('materials')} href="/materials" onClick={close}>Materials</a>
          <button className="bbs-mnav-toggle" type="button" aria-label="Show materials" aria-expanded={sub === 'm'} onClick={() => toggleSub('m')}>
            <Chevron open={sub === 'm'} />
          </button>
        </div>
        {sub === 'm' && (
          <div className="bbs-mnav-sub">
            {MATERIALS.map((m) => (
              <a
                key={m.slug}
                href={`/materials#${m.slug}`}
                onClick={(e) => { if (onMaterial) onMaterial(m.slug, e); close(); }}
              >
                {m.name}
              </a>
            ))}
          </div>
        )}
        <div className="bbs-mnav-row">
          <a className={linkClass('design')} href="/design" onClick={close}>Design</a>
          <button className="bbs-mnav-toggle" type="button" aria-label="Show design services" aria-expanded={sub === 'd'} onClick={() => toggleSub('d')}>
            <Chevron open={sub === 'd'} />
          </button>
        </div>
        {sub === 'd' && (
          <div className="bbs-mnav-sub">
            {DESIGN.map((d) => (
              <a key={d.href} href={d.href} onClick={close}>{d.name}</a>
            ))}
          </div>
        )}
        <a className={linkClass('gallery')} href="/gallery" onClick={close}>Gallery</a>
        <a className={linkClass('about')} href="/about" onClick={close}>About</a>
        <a className={linkClass('contact')} href="/contact" onClick={close}>Contact</a>
        <a className="bbs-mnav-quote hv-6a96a5" href="/contact" onClick={close}>Request a Quote</a>
      </nav>
    </div>
  );
}
