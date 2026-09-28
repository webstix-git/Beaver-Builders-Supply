'use client';

import React from 'react';
import HeaderHeightSync from './HeaderHeightSync';
import MobileNav from './MobileNav';
import '../styles/materials.css';

const U = id => (window.__resources || {})[id] || `https://images.unsplash.com/${id}?w=1200&q=80`;
const CATS = [
  { slug: 'kitchen-bath', name: 'Kitchen & Bath', img: '/New-img/Materials/kitchen-and-bath.jpg', intro: 'Cabinetry, countertops, and fixtures for new kitchens, remodels, and bathrooms. Our team helps you compare door styles, finishes, and layouts, then coordinates measurements and delivery.', items: ['Cabinetry', 'Countertops & Tops', 'Vanities', 'Hardware'], n: 4 },
  { slug: 'decking-railing', name: 'Decking & Railing', img: '/New-img/Materials/decking-and-railing.jpg', intro: 'Composite and wood decking with matching railing systems, built to hold up to Wisconsin seasons. See full-size deck and rail displays in our showroom before you choose.', items: ['Composite Decking', 'Wood Decking', 'Railing Systems', 'Fasteners & Lighting'], n: 4 },
  { slug: 'windows', name: 'Windows', img: '/New-img/Materials/windows.jpg', intro: 'Energy-efficient windows for new construction and replacement projects. We help you balance performance, style, and budget for every opening in the house.', items: ['Double-Hung', 'Casement', 'Picture & Specialty', 'Replacement'], n: 4 },
  { slug: 'exterior-doors', name: 'Exterior Doors', img: '/New-img/Materials/exterior-door.jpg', intro: 'Entry, patio, and storm doors that seal tight and look right. Choose from fiberglass, steel, and wood options with the hardware and glass to match.', items: ['Entry Doors', 'Patio Doors', 'Storm Doors', 'Hardware'], n: 4 },
  { slug: 'interior-doors-trim', name: 'Interior Doors & Trim', img: '/New-img/Materials/interioir-doors-and-trim.jpg', intro: 'Interior doors, millwork, and trim packages for finished interiors. We can quote complete door and trim packages directly from your plans.', items: ['Interior Doors', 'Millwork', 'Base & Casing', 'Stair Parts'], n: 4 },
  { slug: 'siding', name: 'Siding', img: '/New-img/Materials/siding.jpg', intro: 'Engineered wood, fiber cement, and vinyl siding with trim and accessories. Our showroom features full-scale siding walls so you can see color and texture in real light.', items: ['Engineered Wood', 'Fiber Cement', 'Vinyl', 'Trim & Soffit'], n: 4 },
  { slug: 'roofing', name: 'Roofing', img: '/New-img/Materials/roofing.jpg', intro: 'Shingles, underlayment, and ventilation from brands we trust. We help builders and homeowners put together a complete roofing system for lasting performance.', items: ['Shingles', 'Underlayment', 'Ventilation', 'Flashing'], n: 4 }
];
// Brand logos by category; categories without an entry keep the placeholder boxes. dark: white logo shown on a dark tile.
const BRAND_LOGOS = {
  'kitchen-bath': {
    suffix1: ' - Cabinetry',
    main1: { alt: 'Wood Harbor Custom Cabinetry', href: 'https://www.woodharbor.com/', src: '/Supplier%27s-logo/Kitchen-and-Bath/Cabinetry/wood-harbor-.svg' },
    vendors1: [
      { alt: 'Holiday Kitchens', href: 'https://www.holidaykitchens.com/', src: '/Supplier%27s-logo/Kitchen-and-Bath/Cabinetry/hklogo_75th.png' },
      { alt: 'JSI Cabinetry', href: 'https://www.jsicabinetry.com/', src: '/Supplier%27s-logo/Kitchen-and-Bath/Cabinetry/JSILogo-01_1.png' },
      { alt: 'Cabnova', href: 'https://cabnova.com/', src: '/Supplier%27s-logo/Kitchen-and-Bath/Cabinetry/logo_transparent.png' }
    ],
    suffix2: ' - Countertops',
    main2: { alt: 'Cambria', href: 'https://www.cambriausa.com/', src: '/Supplier%27s-logo/Kitchen-and-Bath/Countertops/cambria-h-rev-rgb-cusa-nav.svg', dark: true },
    vendors2: [
      { alt: 'Counter-Form', href: 'https://counter-form.com/', src: '/Supplier%27s-logo/Kitchen-and-Bath/Countertops/CounterFormLogo_cz.png' },
      { alt: 'Linnstone', href: 'https://www.linnstone.com/', src: '/Supplier%27s-logo/Kitchen-and-Bath/Countertops/linnstone.svg', dark: true },
      { alt: 'Q Quartz', href: 'https://www.msisurfaces.com/quartz-countertops/', src: '/Supplier%27s-logo/Kitchen-and-Bath/Countertops/qlogo-white-new.svg', dark: true },
      { alt: 'SFI Inc.', href: 'https://sinksbysfi.com/', src: '/Supplier%27s-logo/Kitchen-and-Bath/Countertops/sfi-inc-logo.webp' },
      { alt: 'Trends', href: 'https://www.trendsflooring.com/trends-in-quartz', src: '/Supplier%27s-logo/Kitchen-and-Bath/Countertops/Trends-1.svg', dark: true }
    ]
  },
  'decking-railing': {
    main1: { alt: 'Deckorators', href: 'https://www.deckorators.com/', src: '/Supplier%27s-logo/Decking-and-railing/deckorators-horizontal-notagline-whiteandred-logo.webp', dark: true },
    main2: { alt: 'DSI', href: 'https://www.diggerspecialties.com/', src: '/Supplier%27s-logo/Decking-and-railing/DSI-Logo-2022-White-with-tagline-CMYK.png', dark: true },
    vendors1: [
      { alt: 'Keylink', href: 'https://keylinkonline.com/', src: '/Supplier%27s-logo/Decking-and-railing/240110_Keylink-Logo_Horizontal-Lockup_White.png', dark: true },
      { alt: 'TimberTech', href: 'https://www.timbertech.com/', src: '/Supplier%27s-logo/Decking-and-railing/media_17d01ea215a1921f4155d544e142f109d1cac8805.svg' },
      { alt: 'Trex', href: 'https://www.trex.com/', src: '/Supplier%27s-logo/Decking-and-railing/Trex-logo-30years-1996-2026-spruce-svg.svg' }
    ]
  },
  windows: {
    main1: { alt: 'Andersen Windows & Doors', href: 'https://www.andersenwindows.com/', src: '/Supplier%27s-logo/Windows/andersen_logo_tm_rectangle_rgb.svg' },
    vendors1: [
      { alt: 'PARCO Windows & Patio Doors', href: 'https://www.parcowindows.com/', src: '/Supplier%27s-logo/Windows/home.jpg' },
      { alt: 'North Star Windows & Doors', href: 'https://www.northstarwindows.com/', src: '/Supplier%27s-logo/Windows/logo.png' },
      { alt: 'Thermo-Tech Windows', href: 'https://ttwindows.com/', src: '/Supplier%27s-logo/Windows/thermo-tech_logo.svg' }
    ]
  },
  'exterior-doors': {
    main1: { alt: 'Bayer Built Woodworks', href: 'https://www.bayerbuilt.com/', src: '/Supplier%27s-logo/Exterior-Doors/68f66b6dafda001caff2b649_6a94dac957beeb6aff6e34ab99e36254_Bayer%20Built%20Logo.png' },
    vendors1: [
      { alt: 'Metropolitan Door Industries', href: 'https://www.metropolitandoor.com/', src: '/Supplier%27s-logo/Exterior-Doors/mdi-logo-r-dkbl-trans.png' },
      { alt: 'Therma-Tru Doors', href: 'https://www.thermatru.com/', src: '/Supplier%27s-logo/Exterior-Doors/therma-tru-whb-logo.png' },
      null
    ]
  },
  'interior-doors-trim': {
    main1: { alt: 'Bayer Built Woodworks', href: 'https://www.bayerbuilt.com/', src: '/Supplier%27s-logo/Interior-Doors-and-Trim/68f66b6dafda001caff2b649_6a94dac957beeb6aff6e34ab99e36254_Bayer%20Built%20Logo%20%281%29.png' },
    vendors1: [
      { alt: 'Koch Doors', href: 'https://kochandco.com/doors/', src: '/Supplier%27s-logo/Interior-Doors-and-Trim/Koch-Doors-Logo-New-1024x717.webp' },
      { alt: 'Metropolitan Door Industries', href: 'https://www.metropolitandoor.com/', src: '/Supplier%27s-logo/Interior-Doors-and-Trim/mdi-logo-r-dkbl-trans.png' },
      { alt: 'TruStile', href: 'https://www.trustile.com/', src: '/Supplier%27s-logo/Interior-Doors-and-Trim/trustile-logo-white.svg', dark: true },
      { alt: 'Western Building Products', href: 'https://western1.com/', src: '/Supplier%27s-logo/Interior-Doors-and-Trim/WBP_logo.svg' }
    ]
  },
  siding: {
    vendors1: [
      { alt: 'CertainTeed', href: 'https://www.certainteed.com/', src: '/Supplier%27s-logo/Siding/logo.svg' },
      { alt: 'TruExterior', href: 'https://www.truexterior.com/', src: '/Supplier%27s-logo/Siding/Brand%3Dtruexterior%2C%20Color%3Dcolor.svg' },
      { alt: 'Versetta Stone', href: 'https://versettastone.com/', src: '/Supplier%27s-logo/Siding/Brand%3Dversetta%20stone%2C%20Color%3Dcolor.svg' },
      { alt: 'Evolve Stone', href: 'https://evolvestone.com/', src: '/Supplier%27s-logo/Siding/evolvestone_logo_h_rgb_reverse_rts-local.webp', dark: true },
      { alt: 'James Hardie', href: 'https://www.jameshardie.com/', src: '/Supplier%27s-logo/Siding/james-hardie-vector-logo.svg' },
      { alt: 'MAC Metal Architectural', href: 'https://macmetalarchitectural.com/en/', src: '/Supplier%27s-logo/Siding/Logo-main5.svg' },
      { alt: 'Quality Edge', href: 'https://qualityedge.com/', src: '/Supplier%27s-logo/Siding/qelogo6.jpg' },
      { alt: 'Royal Building Solutions', href: 'https://www.royalbuildingsolutions.com/en/products/category/siding', src: '/Supplier%27s-logo/Siding/rbs_horizontal_logo_en.png' }
    ]
  },
  roofing: {
    main1: { alt: 'Malarkey Roofing Products', href: 'https://www.malarkeyroofing.com/', src: '/Supplier%27s-logo/Roofing/logo-horizontal-full-color.svg' },
    vendors1: [
      { alt: 'Metal Sales', href: 'https://www.metalsales.us.com/', src: '/Supplier%27s-logo/Roofing/logo-white-1.png', dark: true },
      { alt: 'CertainTeed', href: 'https://www.certainteed.com/', src: '/Supplier%27s-logo/Roofing/logo.svg' },
      { alt: 'Owens Corning', href: 'https://www.owenscorning.com/', src: '/Supplier%27s-logo/Roofing/oc-logo.svg' }
    ]
  }
};
const logoVals = l => ({ src: l ? l.src : '', alt: l ? l.alt : '', href: l && l.href ? l.href : '#', target: l && l.href ? '_blank' : '_self', has: !!l, none: !l, light: !!l && !l.dark, dark: !!(l && l.dark), bg: l && l.dark ? '#14183A' : '#F6F7FA' });
function brandVals(x) {
  const b = BRAND_LOGOS[x.slug] || {};
  const main = (k, l) => { const v = logoVals(l); return { [k + 'Src']: v.src, [k + 'Alt']: v.alt, [k + 'Href']: v.href, [k + 'Target']: v.target, [k + 'None']: v.none, [k + 'Light']: v.light, [k + 'Dark']: v.dark }; };
  return {
    suffix1: b.suffix1 || '',
    suffix2: b.suffix2 || '',
    ...main('m1', b.main1),
    ...main('m2', b.main2),
    vendors: (b.vendors1 || Array(x.n).fill(null)).map(logoVals),
    vendors2: (b.vendors2 || []).map(logoVals)
  };
}
export default class MaterialsPage extends React.Component {
  state = { menu: null, sel: 'kitchen-bath', scrolled: false, navTop: 67 };
  componentDidMount() {
    this.onScroll = () => {
      const scrolled = window.scrollY > 80;
      if (scrolled !== this.state.scrolled) this.setState({ scrolled });
      let cur = CATS[0].slug;
      for (const c of CATS) { const el = document.getElementById(c.slug); if (el && el.getBoundingClientRect().top <= this.offset() + 20) cur = c.slug; }
      if (cur !== this.state.sel) this.setState({ sel: cur });
    };
    this.onResize = () => { this.measureHeader(); this.syncSlider(); };
    window.addEventListener('scroll', this.onScroll, { passive: true });
    window.addEventListener('resize', this.onResize);
    this.tabsRow = document.querySelector('.bbs-tabs-row');
    this.tabsRow?.addEventListener('scroll', this.syncSlider, { passive: true });
    document.fonts?.ready.then(this.syncSlider);
    this.measureHeader();
    this.syncSlider();
    this.onScroll();
    const h = (location.hash || '').slice(1);
    if (CATS.some(c => c.slug === h)) setTimeout(() => this.go(h, 'auto'), 300);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
    window.removeEventListener('resize', this.onResize);
    this.tabsRow?.removeEventListener('scroll', this.syncSlider);
  }
  // When the tabs row is wider than the screen it swipes sideways, and the slide bar under it shows the visible
  // part of the row. Dragging the thumb scrolls the row; tapping the track centers the thumb there.
  syncSlider = () => {
    const row = this.tabsRow;
    const bar = document.querySelector('.bbs-tabs-slider');
    if (!row || !bar) return;
    bar.hidden = row.scrollWidth <= row.clientWidth + 1;
    if (bar.hidden) return;
    const thumb = bar.firstElementChild;
    thumb.style.width = `${(row.clientWidth / row.scrollWidth) * 100}%`;
    thumb.style.left = `${(row.scrollLeft / row.scrollWidth) * 100}%`;
  };
  dragSlider = (e) => {
    const row = this.tabsRow;
    const bar = e.currentTarget;
    if (!row) return;
    const ratio = row.scrollWidth / bar.clientWidth;
    if (e.target === bar) row.scrollLeft = (e.clientX - bar.getBoundingClientRect().left) * ratio - row.clientWidth / 2;
    const startX = e.clientX;
    const start = row.scrollLeft;
    const move = (ev) => { row.scrollLeft = start + (ev.clientX - startX) * ratio; };
    const end = () => {
      bar.removeEventListener('pointermove', move);
      bar.removeEventListener('pointerup', end);
      bar.removeEventListener('pointercancel', end);
    };
    bar.setPointerCapture(e.pointerId);
    bar.addEventListener('pointermove', move);
    bar.addEventListener('pointerup', end);
    bar.addEventListener('pointercancel', end);
  };
  // The tabs bar sits under the compact (sticky) header, so its height is measured with the sticky styles applied.
  measureHeader() {
    const hd = document.querySelector('.bbs-header');
    if (!hd) return;
    const wasSticky = hd.classList.contains('is-sticky');
    hd.classList.add('bbs-measure', 'is-sticky');
    const h = hd.offsetHeight;
    if (!wasSticky) { hd.classList.remove('is-sticky'); void hd.offsetHeight; }
    hd.classList.remove('bbs-measure');
    if (h && h !== this.state.navTop) this.setState({ navTop: h });
  }
  offset() {
    const tabs = document.querySelector('.bbs-tabs');
    return this.state.navTop + (tabs ? tabs.offsetHeight : 0);
  }
  go(slug, behavior) {
    const el = document.getElementById(slug);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - this.offset(), behavior: behavior || 'smooth' });
    try { history.replaceState(null, '', '#' + slug); } catch (_) {}
  }
  pick(slug) {
    return e => { if (e) e.preventDefault(); this.setState({ sel: slug, menu: null }); this.go(slug); };
  }
  renderVals() {
    const cats = CATS.map((x, i) => ({ ...x, pick: this.pick(x.slug), num: String(i + 1).padStart(2, '0'), lower: x.name.toLowerCase(), first: i === 0, padTop: i === 0 ? '25px' : '96px', extraMain: x.slug === 'decking-railing' || x.slug === 'siding', extraGroup: x.slug === 'kitchen-bath', vendorCols: x.slug === 'siding' ? 'repeat(auto-fit,minmax(min(100%,max(220px,calc((100% - 60px) / 4))),1fr))' : 'repeat(auto-fit,minmax(min(100%,220px),1fr))', bg: i % 2 ? '#F6F4EF' : '#fff', ...brandVals(x), color: x.slug === this.state.sel ? '#313893' : '#4A4F6A', bar: x.slug === this.state.sel ? '#E31E26' : 'transparent' }));
    return {
      cats,
      headerClass: this.state.scrolled ? 'is-sticky' : '',
      navTop: this.state.navTop,
      dragSlider: this.dragSlider,
      materialsOpen: this.state.menu === 'm',
      designOpen: this.state.menu === 'd',
      openMaterials: () => this.setState({ menu: 'm' }),
      openDesign: () => this.setState({ menu: 'd' }),
      closeMenu: () => this.setState({ menu: null })
    };
  }

  render() {
    const vals = this.renderVals();
    return (
      <div style={{ minWidth: '0' }}>
        <div style={{ position: 'relative' }}>
          <header className={`bbs-header ${vals.headerClass}`}>
            <div
              className="bbs-header-inner"
              style={{
                maxWidth: '1280px',
                margin: '0 auto',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px 32px',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ flex: '1 1 0', display: 'flex' }}>
                <a href="/" style={{ display: 'block', flex: '0 0 auto' }}>
                  <img className="bbs-logo" src="/assets/logo-white.png" alt="Beaver Builders' Supply" />
                </a>
              </div>
              <nav
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '4px',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flex: '0 1 auto',
                  fontFamily: "'Roboto Condensed',sans-serif",
                  fontSize: '18px',
                  fontWeight: '600',
                  letterSpacing: '.02em',
                  textTransform: 'uppercase',
                }}
              >
                <a className="hv-6d2547" href="/" style={{ padding: '10px 9px', color: '#fff' }}>
                  Home
                </a>
                <div style={{ position: 'relative' }} onMouseEnter={vals.openMaterials} onMouseLeave={vals.closeMenu}>
                  <a
                    className="hv-6d2547"
                    href="/materials"
                    style={{
                      padding: '10px 9px',
                      color: '#fff',
                      display: 'flex',
                      gap: '6px',
                      alignItems: 'center',
                      borderBottom: '2px solid #E31E26',
                    }}
                  >
                    Materials <span style={{ fontSize: '11px' }}>▾</span>
                  </a>
                  {vals.materialsOpen && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '100%',
                        left: '0',
                        background: '#fff',
                        minWidth: '250px',
                        boxShadow: '0 18px 40px rgba(20,24,58,.16)',
                        borderTop: '3px solid #E31E26',
                        padding: '8px 0',
                        fontFamily: "'Roboto',sans-serif",
                        textTransform: 'none',
                        letterSpacing: '0',
                        fontSize: '16px',
                        fontWeight: '500',
                      }}
                    >
                      {vals.cats.map((m, i) => (
                        <a
                          key={i}
                          className="hv-348c4d"
                          href={`#${m.slug}`}
                          onClick={m.pick}
                          style={{ display: 'block', padding: '10px 20px', color: '#14183A' }}
                        >
                          {m.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
                <div style={{ position: 'relative' }} onMouseEnter={vals.openDesign} onMouseLeave={vals.closeMenu}>
                  <a
                    className="hv-6d2547"
                    href="/design"
                    style={{ padding: '10px 9px', color: '#fff', display: 'flex', gap: '6px', alignItems: 'center' }}
                  >
                    Design <span style={{ fontSize: '11px' }}>▾</span>
                  </a>
                  {vals.designOpen && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '100%',
                        left: '0',
                        background: '#fff',
                        minWidth: '250px',
                        boxShadow: '0 18px 40px rgba(20,24,58,.16)',
                        borderTop: '3px solid #E31E26',
                        padding: '8px 0',
                        fontFamily: "'Roboto',sans-serif",
                        textTransform: 'none',
                        letterSpacing: '0',
                        fontSize: '16px',
                        fontWeight: '500',
                      }}
                    >
                      <a
                        className="hv-348c4d"
                        href="/design#drafting-contract"
                        style={{ display: 'block', padding: '10px 20px', color: '#14183A' }}
                      >
                        Drafting Contract
                      </a>
                      <a
                        className="hv-348c4d"
                        href="/design#design-tools"
                        style={{ display: 'block', padding: '10px 20px', color: '#14183A' }}
                      >
                        Brand & Product Design Tools
                      </a>
                    </div>
                  )}
                </div>
                <a className="hv-6d2547" href="/gallery" style={{ padding: '10px 9px', color: '#fff' }}>
                  Gallery
                </a>
                <a className="hv-6d2547" href="/about" style={{ padding: '10px 9px', color: '#fff' }}>
                  About
                </a>
                <a className="hv-6d2547" href="/contact" style={{ padding: '10px 9px', color: '#fff' }}>
                  Contact
                </a>
              </nav>
              <div style={{ flex: '1 1 0', display: 'flex', justifyContent: 'flex-end' }}>
                <a
                  className="bbs-header-quote hv-6a96a5"
                  href="/contact"
                  style={{
                    flex: '0 0 auto',
                    fontFamily: "'Roboto Condensed',sans-serif",
                    fontSize: '19px',
                    fontWeight: '600',
                    letterSpacing: '.02em',
                    textTransform: 'uppercase',
                    padding: '12px 22px',
                    background: '#E31E26',
                    color: '#fff',
                    borderRadius: '3px',
                  }}
                >
                  Request a Quote
                </a>
                <MobileNav active="materials" onMaterial={(slug, e) => this.pick(slug)(e)} />
              </div>
            </div>
            <HeaderHeightSync />
          </header>
          <section
            className="bbs-hero-banner"
            style={{
              position: 'relative',
              background: '#14183A url("/bbs-img/mat-hero.jpg") center 60%/cover no-repeat',
              minHeight: '480px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: '0',
                background: 'linear-gradient(90deg,rgba(0,0,0,.82) 0%,rgba(0,0,0,.6) 48%,rgba(0,0,0,.2) 100%)',
              }}
            />
            <div
              className="bbs-hero-inner"
              style={{ position: 'relative', maxWidth: '1280px', width: '100%', margin: '0 auto' }}
            >
              <h1
                style={{
                  margin: '0',
                  fontFamily: "'Roboto Condensed',sans-serif",
                  fontWeight: '700',
                  letterSpacing: '-.015em',
                  fontSize: 'clamp(52px,6.4vw,60px)',
                  lineHeight: '1.05',
                  color: '#fff',
                  textTransform: 'uppercase',
                }}
              >
                Materials
              </h1>
              <p
                style={{
                  margin: '18px 0 0',
                  fontSize: '18px',
                  lineHeight: '1.55',
                  color: '#fff',
                  maxWidth: '600px',
                  textWrap: 'pretty',
                }}
              >
                Quality products from brands we trust, chosen with the help of a sales team that knows how each one performs
                in the Coulee Region.
              </p>
            </div>
          </section>
        </div>
        <nav
          className="bbs-tabs"
          style={{
            background: '#fff',
            borderBottom: '1px solid #E4E5EE',
            position: 'sticky',
            top: `${vals.navTop}px`,
            zIndex: '15',
            boxShadow: '0 6px 18px rgba(20,24,58,.05)',
          }}
        >
          <div
            className="bbs-tabs-row"
            style={{
              maxWidth: '1280px',
              margin: '0 auto',
              padding: '0 32px',
              display: 'flex',
              gap: '0 31px',
            }}
          >
            {vals.cats.map((c, i) => (
              <a
                key={i}
                className="hv-720251"
                href={`#${c.slug}`}
                onClick={c.pick}
                style={{
                  flex: '1 1 auto',
                  textAlign: 'center',
                  whiteSpace: 'nowrap',
                  padding: '20px 0 17px',
                  fontFamily: "'Roboto Condensed',sans-serif",
                  fontSize: '16px',
                  fontWeight: '700',
                  letterSpacing: '.02em',
                  textTransform: 'uppercase',
                  color: c.color,
                  borderBottom: `3px solid ${c.bar}`,
                }}
              >
                {c.name}
              </a>
            ))}
          </div>
          <div className="bbs-tabs-slider" hidden onPointerDown={vals.dragSlider}>
            <span />
          </div>
        </nav>
        {vals.cats.map((cur, i) => (
          <section
            key={i}
            id={cur.slug}
            style={{
              scrollMarginTop: '64px',
              padding: `${cur.padTop} 0 104px`,
              background: cur.bg,
              borderTop: '1px solid #E4E5EE',
            }}
          >
            <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
              {cur.first && (
                <div
                  style={{
                    marginBottom: '56px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '10px',
                    alignItems: 'center',
                    fontSize: '15px',
                    color: '#4A4F6A',
                  }}
                >
                  <a className="hv-b2d6c8" href="/" style={{ color: '#313893' }}>
                    Home
                  </a>
                  <span style={{ color: '#9CA0BE' }}>/</span>
                  <span style={{ color: '#14183A', fontWeight: '600' }}>Materials</span>
                </div>
              )}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,460px),1fr))',
                  gap: '64px',
                  alignItems: 'center',
                }}
              >
                <div>
                  <h2
                    style={{
                      margin: '0',
                      fontFamily: "'Roboto Condensed',sans-serif",
                      fontSize: 'clamp(38px,4.6vw,58px)',
                      lineHeight: '1.05',
                      fontWeight: '700',
                      letterSpacing: '-.015em',
                      textTransform: 'uppercase',
                      color: '#14183A',
                    }}
                  >
                    {cur.name}
                  </h2>
                  <p
                    style={{
                      margin: '22px 0 0',
                      fontSize: '18px',
                      lineHeight: '1.6',
                      color: '#4A4F6A',
                      textWrap: 'pretty',
                    }}
                  >
                    {cur.intro}
                  </p>
                  <div style={{ marginTop: '28px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                    {cur.items.map((it, j) => (
                      <span
                        key={j}
                        style={{
                          padding: '9px 16px',
                          background: '#fff',
                          border: '1px solid #E4E5EE',
                          borderRadius: '40px',
                          fontSize: '15px',
                          fontWeight: '600',
                          color: '#313893',
                        }}
                      >
                        {it}
                      </span>
                    ))}
                  </div>
                  <div style={{ marginTop: '36px', display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
                    <a
                      className="hv-6a96a5"
                      href="/contact"
                      style={{
                        whiteSpace: 'nowrap',
                        padding: '16px 28px',
                        background: '#E31E26',
                        color: '#fff',
                        fontWeight: '700',
                        fontSize: '17px',
                        borderRadius: '3px',
                      }}
                    >
                      Get a Quote
                    </a>
                    <a
                      className="hv-66db52"
                      href="https://www.google.com/maps/search/?api=1&query=Beaver+Builders+Supply+N6838+Builders+Ct+Holmen+WI+54636"
                      target="_blank"
                      rel="noopener"
                      style={{
                        whiteSpace: 'nowrap',
                        padding: '15px 27px',
                        border: '1.5px solid #313893',
                        color: '#313893',
                        fontWeight: '700',
                        fontSize: '17px',
                        borderRadius: '3px',
                      }}
                    >
                      See It in the Showroom
                    </a>
                  </div>
                </div>
                <div style={{ position: 'relative' }}>
                  <img
                    src={cur.img}
                    alt=""
                    style={{ width: '100%', aspectRatio: '5/4', objectFit: 'cover', display: 'block', borderRadius: '4px' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      left: '0',
                      bottom: '0',
                      width: '96px',
                      height: '6px',
                      background: '#313893',
                    }}
                  />
                </div>
              </div>
              <div
                style={{
                  marginTop: '64px',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '12px',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                }}
              >
                <div
                  style={{
                    fontFamily: "'Roboto Condensed',sans-serif",
                    fontSize: '24px',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    color: '#14183A',
                  }}
                >
                  {cur.name} brands{cur.suffix1}
                </div>
                <div style={{ fontSize: '18px', color: '#4A4F6A' }}>
                  Select a brand to visit the manufacturer's website.
                </div>
              </div>
              <a
                className="hv-b766f3"
                href={cur.m1Href}
                target={cur.m1Target}
                rel="noopener noreferrer"
                style={{
                  marginTop: '20px',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,320px),1fr))',
                  background: '#fff',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  border: '1px solid #E4E5EE',
                  boxShadow: '0 18px 44px rgba(20,24,58,.08)',
                  color: '#14183A',
                  transition: 'transform .25s ease,box-shadow .25s ease',
                }}
              >
                <div
                  style={{
                    minHeight: '200px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRight: '1px solid #ECEDF3',
                    padding: '32px',
                  }}
                >
                  {cur.m1None && (
                    <div
                      style={{
                        width: 'min(100%,320px)',
                        height: '116px',
                        border: '1.5px dashed #9CA0BE',
                        borderRadius: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#6A6F8C',
                        fontSize: '15px',
                        fontWeight: '600',
                      }}
                    >
                      Main supplier logo
                    </div>
                  )}
                  {cur.m1Light && (
                    <div style={{ position: 'relative', width: 'min(100%,320px)', height: '116px' }}>
                      <img
                        src={cur.m1Src}
                        alt={cur.m1Alt}
                        style={{
                          position: 'absolute',
                          inset: '0',
                          width: '100%',
                          height: '100%',
                          padding: '0',
                          boxSizing: 'border-box',
                          objectFit: 'contain',
                          display: 'block',
                        }}
                      />
                    </div>
                  )}
                  {cur.m1Dark && (
                    <div
                      style={{
                        position: 'relative',
                        width: 'min(100%,320px)',
                        height: '116px',
                        background: '#14183A',
                        borderRadius: '4px',
                      }}
                    >
                      <img
                        src={cur.m1Src}
                        alt={cur.m1Alt}
                        style={{
                          position: 'absolute',
                          inset: '0',
                          width: '100%',
                          height: '100%',
                          padding: '20px 32px',
                          boxSizing: 'border-box',
                          objectFit: 'contain',
                          display: 'block',
                        }}
                      />
                    </div>
                  )}
                </div>
                <div
                  style={{
                    padding: '36px 40px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    gap: '14px',
                  }}
                >
                  <span
                    style={{
                      alignSelf: 'flex-start',
                      padding: '6px 12px',
                      background: '#E31E26',
                      color: '#fff',
                      borderRadius: '2px',
                      fontFamily: "'Roboto Condensed',sans-serif",
                      fontSize: '14px',
                      fontWeight: '700',
                      letterSpacing: '.08em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Main Supplier
                  </span>
                  <div
                    style={{
                      fontFamily: "'Roboto Condensed',sans-serif",
                      fontSize: '28px',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      lineHeight: '1.1',
                    }}
                  >
                    Our primary {cur.lower} line
                  </div>
                  <p style={{ margin: '0', fontSize: '18px', lineHeight: '1.6', color: '#4A4F6A' }}>
                    The brand we stock deepest and recommend most often, with full displays in our Holmen showroom.
                  </p>
                  <span style={{ fontWeight: '700', color: '#313893' }}>Visit manufacturer website ↗</span>
                </div>
              </a>
              {cur.extraMain && (
                <a
                  className="hv-b766f3"
                  href={cur.m2Href}
                  target={cur.m2Target}
                  rel="noopener noreferrer"
                  style={{
                    marginTop: '20px',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,320px),1fr))',
                    background: '#fff',
                    borderRadius: '4px',
                    overflow: 'hidden',
                    border: '1px solid #E4E5EE',
                    boxShadow: '0 18px 44px rgba(20,24,58,.08)',
                    color: '#14183A',
                    transition: 'transform .25s ease,box-shadow .25s ease',
                  }}
                >
                  <div
                    style={{
                      minHeight: '200px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRight: '1px solid #ECEDF3',
                      padding: '32px',
                    }}
                  >
                    {cur.m2None && (
                      <div
                        style={{
                          width: 'min(100%,320px)',
                          height: '116px',
                          border: '1.5px dashed #9CA0BE',
                          borderRadius: '4px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#6A6F8C',
                          fontSize: '15px',
                          fontWeight: '600',
                        }}
                      >
                        Main supplier logo
                      </div>
                    )}
                    {cur.m2Light && (
                      <div style={{ position: 'relative', width: 'min(100%,320px)', height: '116px' }}>
                        <img
                          src={cur.m2Src}
                          alt={cur.m2Alt}
                          style={{
                            position: 'absolute',
                            inset: '0',
                            width: '100%',
                            height: '100%',
                            padding: '0',
                            boxSizing: 'border-box',
                            objectFit: 'contain',
                            display: 'block',
                          }}
                        />
                      </div>
                    )}
                    {cur.m2Dark && (
                      <div
                        style={{
                          position: 'relative',
                          width: 'min(100%,320px)',
                          height: '116px',
                          background: '#14183A',
                          borderRadius: '4px',
                        }}
                      >
                        <img
                          src={cur.m2Src}
                          alt={cur.m2Alt}
                          style={{
                            position: 'absolute',
                            inset: '0',
                            width: '100%',
                            height: '100%',
                            padding: '20px 32px',
                            boxSizing: 'border-box',
                            objectFit: 'contain',
                            display: 'block',
                          }}
                        />
                      </div>
                    )}
                  </div>
                  <div
                    style={{
                      padding: '36px 40px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      gap: '14px',
                    }}
                  >
                    <span
                      style={{
                        alignSelf: 'flex-start',
                        padding: '6px 12px',
                        background: '#E31E26',
                        color: '#fff',
                        borderRadius: '2px',
                        fontFamily: "'Roboto Condensed',sans-serif",
                        fontSize: '14px',
                        fontWeight: '700',
                        letterSpacing: '.08em',
                        textTransform: 'uppercase',
                      }}
                    >
                      Main Supplier
                    </span>
                    <div
                      style={{
                        fontFamily: "'Roboto Condensed',sans-serif",
                        fontSize: '28px',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        lineHeight: '1.1',
                      }}
                    >
                      Our primary {cur.lower} line
                    </div>
                    <p style={{ margin: '0', fontSize: '18px', lineHeight: '1.6', color: '#4A4F6A' }}>
                      The brand we stock deepest and recommend most often, with full displays in our Holmen showroom.
                    </p>
                    <span style={{ fontWeight: '700', color: '#313893' }}>Visit manufacturer website ↗</span>
                  </div>
                </a>
              )}
              <div style={{ marginTop: '20px', display: 'grid', gridTemplateColumns: cur.vendorCols, gap: '20px' }}>
                {cur.vendors.map((v, j) => (
                  <a
                    key={j}
                    className="hv-25c4e5"
                    href={v.href}
                    target={v.target}
                    rel="noopener noreferrer"
                    style={{
                      background: '#fff',
                      border: '1px solid #E4E5EE',
                      borderRadius: '4px',
                      padding: '22px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '16px',
                      color: '#14183A',
                      transition: 'transform .2s ease,box-shadow .2s ease,border-color .2s ease',
                    }}
                  >
                    <div
                      style={{
                        height: '84px',
                        background: v.bg,
                        borderRadius: '3px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#8A8EA8',
                        fontSize: '14px',
                      }}
                    >
                      {v.none && <>Vendor logo</>}
                      {v.has && (
                        <div style={{ position: 'relative', width: '80%', height: '52px' }}>
                          <img
                            src={v.src}
                            alt={v.alt}
                            style={{
                              position: 'absolute',
                              inset: '0',
                              width: '100%',
                              height: '100%',
                              padding: '0',
                              boxSizing: 'border-box',
                              objectFit: 'contain',
                              display: 'block',
                            }}
                          />
                        </div>
                      )}
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        fontSize: '15px',
                        fontWeight: '700',
                        color: '#313893',
                      }}
                    >
                      <span>Visit website</span>
                      <span style={{ color: '#E31E26' }}>↗</span>
                    </div>
                  </a>
                ))}
              </div>
              {cur.extraGroup && (
                <>
                  <div
                    style={{
                      marginTop: '64px',
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '12px',
                      justifyContent: 'space-between',
                      alignItems: 'baseline',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'Roboto Condensed',sans-serif",
                        fontSize: '24px',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        color: '#14183A',
                      }}
                    >
                      {cur.name} brands{cur.suffix2}
                    </div>
                    <div style={{ fontSize: '18px', color: '#4A4F6A' }}>
                      Select a brand to visit the manufacturer's website.
                    </div>
                  </div>
                  <a
                    className="hv-b766f3"
                    href={cur.m2Href}
                    target={cur.m2Target}
                    rel="noopener noreferrer"
                    style={{
                      marginTop: '20px',
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,320px),1fr))',
                      background: '#fff',
                      borderRadius: '4px',
                      overflow: 'hidden',
                      border: '1px solid #E4E5EE',
                      boxShadow: '0 18px 44px rgba(20,24,58,.08)',
                      color: '#14183A',
                      transition: 'transform .25s ease,box-shadow .25s ease',
                    }}
                  >
                    <div
                      style={{
                        minHeight: '200px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRight: '1px solid #ECEDF3',
                        padding: '32px',
                      }}
                    >
                      {cur.m2None && (
                        <div
                          style={{
                            width: 'min(100%,320px)',
                            height: '116px',
                            border: '1.5px dashed #9CA0BE',
                            borderRadius: '4px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#6A6F8C',
                            fontSize: '15px',
                            fontWeight: '600',
                          }}
                        >
                          Main supplier logo
                        </div>
                      )}
                      {cur.m2Light && (
                        <div style={{ position: 'relative', width: 'min(100%,320px)', height: '116px' }}>
                          <img
                            src={cur.m2Src}
                            alt={cur.m2Alt}
                            style={{
                              position: 'absolute',
                              inset: '0',
                              width: '100%',
                              height: '100%',
                              padding: '0',
                              boxSizing: 'border-box',
                              objectFit: 'contain',
                              display: 'block',
                            }}
                          />
                        </div>
                      )}
                      {cur.m2Dark && (
                        <div
                          style={{
                            position: 'relative',
                            width: 'min(100%,320px)',
                            height: '116px',
                            background: '#14183A',
                            borderRadius: '4px',
                          }}
                        >
                          <img
                            src={cur.m2Src}
                            alt={cur.m2Alt}
                            style={{
                              position: 'absolute',
                              inset: '0',
                              width: '100%',
                              height: '100%',
                              padding: '20px 32px',
                              boxSizing: 'border-box',
                              objectFit: 'contain',
                              display: 'block',
                            }}
                          />
                        </div>
                      )}
                    </div>
                    <div
                      style={{
                        padding: '36px 40px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        gap: '14px',
                      }}
                    >
                      <span
                        style={{
                          alignSelf: 'flex-start',
                          padding: '6px 12px',
                          background: '#E31E26',
                          color: '#fff',
                          borderRadius: '2px',
                          fontFamily: "'Roboto Condensed',sans-serif",
                          fontSize: '14px',
                          fontWeight: '700',
                          letterSpacing: '.08em',
                          textTransform: 'uppercase',
                        }}
                      >
                        Main Supplier
                      </span>
                      <div
                        style={{
                          fontFamily: "'Roboto Condensed',sans-serif",
                          fontSize: '28px',
                          fontWeight: '700',
                          textTransform: 'uppercase',
                          lineHeight: '1.1',
                        }}
                      >
                        Our primary {cur.lower} line
                      </div>
                      <p style={{ margin: '0', fontSize: '18px', lineHeight: '1.6', color: '#4A4F6A' }}>
                        The brand we stock deepest and recommend most often, with full displays in our Holmen showroom.
                      </p>
                      <span style={{ fontWeight: '700', color: '#313893' }}>Visit manufacturer website ↗</span>
                    </div>
                  </a>
                  <div style={{ marginTop: '20px', display: 'grid', gridTemplateColumns: cur.vendorCols, gap: '20px' }}>
                    {cur.vendors2.map((v, j) => (
                      <a
                        key={j}
                        className="hv-25c4e5"
                        href={v.href}
                        target={v.target}
                        rel="noopener noreferrer"
                        style={{
                          background: '#fff',
                          border: '1px solid #E4E5EE',
                          borderRadius: '4px',
                          padding: '22px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '16px',
                          color: '#14183A',
                          transition: 'transform .2s ease,box-shadow .2s ease,border-color .2s ease',
                        }}
                      >
                        <div
                          style={{
                            height: '84px',
                            background: v.bg,
                            borderRadius: '3px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#8A8EA8',
                            fontSize: '14px',
                          }}
                        >
                          {v.none && <>Vendor logo</>}
                          {v.has && (
                            <div style={{ position: 'relative', width: '80%', height: '52px' }}>
                              <img
                                src={v.src}
                                alt={v.alt}
                                style={{
                                  position: 'absolute',
                                  inset: '0',
                                  width: '100%',
                                  height: '100%',
                                  padding: '0',
                                  boxSizing: 'border-box',
                                  objectFit: 'contain',
                                  display: 'block',
                                }}
                              />
                            </div>
                          )}
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            fontSize: '15px',
                            fontWeight: '700',
                            color: '#313893',
                          }}
                        >
                          <span>Visit website</span>
                          <span style={{ color: '#E31E26' }}>↗</span>
                        </div>
                      </a>
                    ))}
                  </div>
                </>
              )}
            </div>
          </section>
        ))}
        <section
          style={{
            position: 'relative',
            background: '#14183A url("/New-img/Materials/Cta-banner.jpg") center/cover no-repeat',
            color: '#fff',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: '0',
              background: 'linear-gradient(90deg,rgba(0,0,0,.9) 0%,rgba(0,0,0,.6) 50%,rgba(0,0,0,.15) 100%)',
            }}
          />
          <div
            style={{
              position: 'relative',
              maxWidth: '1280px',
              margin: '0 auto',
              padding: '52px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '32px',
              alignItems: 'flex-start',
            }}
          >
            <div style={{ maxWidth: '640px' }}>
              <h2
                style={{
                  margin: '0',
                  fontFamily: "'Roboto Condensed',sans-serif",
                  fontSize: 'clamp(38px,4.6vw,58px)',
                  lineHeight: '1.1',
                  fontWeight: '700',
                  letterSpacing: '-.015em',
                  textTransform: 'uppercase',
                }}
              >
                Not sure which brand fits your project?
              </h2>
              <p style={{ margin: '18px 0 0', fontSize: '18px', lineHeight: '1.6', color: '#fff' }}>
                Talk with our sales team or stop by the showroom to compare products side by side.
              </p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
              <a
                className="hv-6a96a5"
                href="tel:6085263232"
                style={{
                  whiteSpace: 'nowrap',
                  padding: '18px 30px',
                  background: '#E31E26',
                  color: '#fff',
                  fontWeight: '700',
                  fontSize: '17px',
                  borderRadius: '3px',
                }}
              >
                Call 608-526-3232
              </a>
              <a
                className="hv-770bf8"
                href="mailto:sales@beaverbuilderssupply.com"
                style={{
                  whiteSpace: 'nowrap',
                  padding: '16px 28px',
                  border: '1.5px solid #fff',
                  color: '#fff',
                  fontWeight: '700',
                  fontSize: '17px',
                  borderRadius: '3px',
                }}
              >
                Email Sales
              </a>
            </div>
          </div>
        </section>
        <footer style={{ background: '#14183A', color: '#fff' }}>
          <div
            className="bbs-footer-grid"
            style={{ maxWidth: '1280px', margin: '0 auto', padding: '64px 32px 32px', display: 'grid', gap: '40px' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <img
                src="/assets/logo-white.png"
                alt="Beaver Builders' Supply"
                style={{
                  maxHeight: '48px',
                  maxWidth: '100%',
                  width: 'auto',
                  height: 'auto',
                  display: 'block',
                  alignSelf: 'flex-start',
                }}
              />
              <div style={{ fontSize: '18px', lineHeight: '1.6' }}>
                Locally owned since 1951.
                <br />
                Serving La Crosse and the Coulee Region.
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <a
                  className="bbs-ficon hv-1ff11b"
                  href="https://www.facebook.com/beaverbuilderssupply"
                  target="_blank"
                  rel="noopener"
                  aria-label="Facebook"
                  style={{
                    width: '40px',
                    height: '40px',
                    border: '1px solid rgba(255,255,255,.25)',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg className="bbs-ico" width="18" height="18" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a
                  className="bbs-ficon hv-1ff11b"
                  href="https://www.instagram.com/beaverbuilderssupply/"
                  target="_blank"
                  rel="noopener"
                  aria-label="Instagram"
                  style={{
                    width: '40px',
                    height: '40px',
                    border: '1px solid rgba(255,255,255,.25)',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg className="bbs-ico" width="18" height="18" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a
                  className="bbs-ficon hv-1ff11b"
                  href="https://www.pinterest.com/beaverbuilderssupply/"
                  target="_blank"
                  rel="noopener"
                  aria-label="Pinterest"
                  style={{
                    width: '40px',
                    height: '40px',
                    border: '1px solid rgba(255,255,255,.25)',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg className="bbs-ico" width="18" height="18" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12.2 10.5 10.2 21.5" />
                    <path d="M9.1 12.6C8.5 9.6 10.5 7 13.2 7c2.4 0 3.8 1.6 3.8 3.6 0 2.7-1.5 4.6-3.5 4.6-.9 0-1.7-.6-1.6-1.4" />
                  </svg>
                </a>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '16px' }}>
              <div
                style={{
                  fontFamily: "'Roboto Condensed',sans-serif",
                  fontSize: '17px',
                  fontWeight: '700',
                  letterSpacing: '.06em',
                  textTransform: 'uppercase',
                  color: '#fff',
                }}
              >
                Quick Links
              </div>
              <a className="hv-b2d6c8" href="/" style={{ color: '#fff' }}>
                Home
              </a>
              <a className="hv-b2d6c8" href="/materials" style={{ color: '#fff' }}>
                Materials
              </a>
              <a className="hv-b2d6c8" href="/design" style={{ color: '#fff' }}>
                Design
              </a>
              <a className="hv-b2d6c8" href="/gallery" style={{ color: '#fff' }}>
                Gallery
              </a>
              <a className="hv-b2d6c8" href="/about" style={{ color: '#fff' }}>
                About
              </a>
              <a className="hv-b2d6c8" href="/contact" style={{ color: '#fff' }}>
                Contact
              </a>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '16px' }}>
              <div
                style={{
                  fontFamily: "'Roboto Condensed',sans-serif",
                  fontSize: '17px',
                  fontWeight: '700',
                  letterSpacing: '.06em',
                  textTransform: 'uppercase',
                  color: '#fff',
                }}
              >
                Materials
              </div>
              {vals.cats.map((m, i) => (
                <a key={i} className="hv-b2d6c8" href={`#${m.slug}`} onClick={m.pick} style={{ color: '#fff' }}>
                  {m.name}
                </a>
              ))}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '16px', lineHeight: '1.5' }}>
              <div
                style={{
                  fontFamily: "'Roboto Condensed',sans-serif",
                  fontSize: '17px',
                  fontWeight: '700',
                  letterSpacing: '.06em',
                  textTransform: 'uppercase',
                  color: '#fff',
                }}
              >
                Contact Us
              </div>
              <a
                className="hv-b2d6c8"
                href="tel:6085263232"
                style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', color: '#fff', fontWeight: '600' }}
              >
                <span className="bbs-ficon" style={{ paddingTop: '2px' }}>
                  <svg className="bbs-ico" width="18" height="18" viewBox="0 0 24 24">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                608-526-3232
              </a>
              <a
                className="hv-b2d6c8"
                href="https://www.google.com/maps/search/?api=1&query=Beaver+Builders+Supply+N6838+Builders+Ct+Holmen+WI+54636"
                target="_blank"
                rel="noopener"
                style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', color: '#fff' }}
              >
                <span className="bbs-ficon" style={{ paddingTop: '2px' }}>
                  <svg className="bbs-ico" width="18" height="18" viewBox="0 0 24 24">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <span>
                  N6838 Builders Ct.
                  <br />
                  Holmen, WI 54636
                </span>
              </a>
              <a
                className="hv-b2d6c8"
                href="mailto:info@beaverbuilderssupply.com"
                style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', color: '#fff', overflowWrap: 'anywhere' }}
              >
                <span className="bbs-ficon" style={{ paddingTop: '2px' }}>
                  <svg className="bbs-ico" width="18" height="18" viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </span>
                info@beaverbuilderssupply.com
              </a>
            </div>
          </div>
          <div
            style={{
              maxWidth: '1280px',
              margin: '0 auto',
              padding: '20px 32px 32px',
              borderTop: '1px solid rgba(255,255,255,.12)',
              fontSize: '14px',
              color: '#fff',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px 14px',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          >
            <span>© 2026 Beaver Builders' Supply. All rights reserved.</span>
            <span style={{ width: '1px', height: '14px', background: 'rgba(255,255,255,.3)' }} />
            <a className="hv-b2d6c8" href="/site-map" style={{ color: '#fff', fontSize: '16px', textDecoration: 'underline' }}>
              Site Map
            </a>
            <span style={{ width: '1px', height: '14px', background: 'rgba(255,255,255,.3)' }} />
            <a className="hv-b2d6c8" href="/privacy-policy" style={{ color: '#fff', fontSize: '16px', textDecoration: 'underline' }}>
              Privacy Policy
            </a>
            <span style={{ width: '1px', height: '14px', background: 'rgba(255,255,255,.3)' }} />
            <a className="hv-b2d6c8" href="/ai-policy" style={{ color: '#fff', fontSize: '16px', textDecoration: 'underline' }}>
              AI Policy
            </a>
            <span style={{ width: '1px', height: '14px', background: 'rgba(255,255,255,.3)' }} />
            <a
              className="hv-b2d6c8"
              href="/ai-readiness-service-index"
              style={{ color: '#fff', fontSize: '16px', textDecoration: 'underline' }}
            >
              AI Readiness Service Index
            </a>
          </div>
        </footer>
      </div>
    );
  }
}
