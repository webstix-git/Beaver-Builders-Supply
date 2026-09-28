'use client';

import React from 'react';
import HeaderHeightSync from './HeaderHeightSync';
import MobileNav from './MobileNav';
import '../styles/home.css';

const VENDOR_LOGOS = [
  { alt: 'Holiday Kitchens', src: '/Supplier%27s-logo/Kitchen-and-Bath/Cabinetry/hklogo_75th.png' },
  { alt: 'JSI Cabinetry', src: '/Supplier%27s-logo/Kitchen-and-Bath/Cabinetry/JSILogo-01_1.png' },
  { alt: 'Cabnova', src: '/Supplier%27s-logo/Kitchen-and-Bath/Cabinetry/logo_transparent.png' },
  { alt: 'Wood Harbor Custom Cabinetry', src: '/Supplier%27s-logo/Kitchen-and-Bath/Cabinetry/wood-harbor-.svg' },
  { alt: 'Cambria', src: '/Supplier%27s-logo/Kitchen-and-Bath/Countertops/cambria-h-rev-rgb-cusa-nav.svg', dark: true },
  { alt: 'Counter-Form', src: '/Supplier%27s-logo/Kitchen-and-Bath/Countertops/CounterFormLogo_cz.png' },
  { alt: 'Linnstone', src: '/Supplier%27s-logo/Kitchen-and-Bath/Countertops/linnstone.svg', dark: true },
  { alt: 'Q Quartz', src: '/Supplier%27s-logo/Kitchen-and-Bath/Countertops/qlogo-white-new.svg', dark: true },
  { alt: 'SFI Inc.', src: '/Supplier%27s-logo/Kitchen-and-Bath/Countertops/sfi-inc-logo.webp' },
  { alt: 'Trends', src: '/Supplier%27s-logo/Kitchen-and-Bath/Countertops/Trends-1.svg', dark: true },
  { alt: 'Keylink', src: '/Supplier%27s-logo/Decking-and-railing/240110_Keylink-Logo_Horizontal-Lockup_White.png', dark: true },
  { alt: 'Deckorators', src: '/Supplier%27s-logo/Decking-and-railing/deckorators-horizontal-notagline-whiteandred-logo.webp', dark: true },
  { alt: 'DSI', src: '/Supplier%27s-logo/Decking-and-railing/DSI-Logo-2022-White-with-tagline-CMYK.png', dark: true },
  { alt: 'TimberTech', src: '/Supplier%27s-logo/Decking-and-railing/media_17d01ea215a1921f4155d544e142f109d1cac8805.svg' },
  { alt: 'Trex', src: '/Supplier%27s-logo/Decking-and-railing/Trex-logo-30years-1996-2026-spruce-svg.svg' },
  { alt: 'Bayer Built Woodworks', src: '/Supplier%27s-logo/Exterior-Doors/68f66b6dafda001caff2b649_6a94dac957beeb6aff6e34ab99e36254_Bayer%20Built%20Logo.png' },
  { alt: 'Metropolitan Door Industries', src: '/Supplier%27s-logo/Exterior-Doors/mdi-logo-r-dkbl-trans.png' },
  { alt: 'Therma-Tru Doors', src: '/Supplier%27s-logo/Exterior-Doors/therma-tru-whb-logo.png' },
  { alt: 'Koch Doors', src: '/Supplier%27s-logo/Interior-Doors-and-Trim/Koch-Doors-Logo-New-1024x717.webp' },
  { alt: 'TruStile', src: '/Supplier%27s-logo/Interior-Doors-and-Trim/trustile-logo-white.svg', dark: true },
  { alt: 'Western Building Products', src: '/Supplier%27s-logo/Interior-Doors-and-Trim/WBP_logo.svg' },
  { alt: 'Malarkey Roofing Products', src: '/Supplier%27s-logo/Roofing/logo-horizontal-full-color.svg' },
  { alt: 'Metal Sales', src: '/Supplier%27s-logo/Roofing/logo-white-1.png', dark: true },
  { alt: 'CertainTeed', src: '/Supplier%27s-logo/Roofing/logo.svg' },
  { alt: 'Owens Corning', src: '/Supplier%27s-logo/Roofing/oc-logo.svg' },
  { alt: 'TruExterior', src: '/Supplier%27s-logo/Siding/Brand%3Dtruexterior%2C%20Color%3Dcolor.svg' },
  { alt: 'Versetta Stone', src: '/Supplier%27s-logo/Siding/Brand%3Dversetta%20stone%2C%20Color%3Dcolor.svg' },
  { alt: 'Evolve Stone', src: '/Supplier%27s-logo/Siding/evolvestone_logo_h_rgb_reverse_rts-local.webp', dark: true },
  { alt: 'James Hardie', src: '/Supplier%27s-logo/Siding/james-hardie-vector-logo.svg' },
  { alt: 'MAC Metal Architectural', src: '/Supplier%27s-logo/Siding/Logo-main5.svg' },
  { alt: 'Quality Edge', src: '/Supplier%27s-logo/Siding/qelogo6.jpg' },
  { alt: 'Royal Building Solutions', src: '/Supplier%27s-logo/Siding/rbs_horizontal_logo_en.png' },
  { alt: 'Andersen Windows & Doors', src: '/Supplier%27s-logo/Windows/andersen_logo_tm_rectangle_rgb.svg' },
  { alt: 'PARCO Windows & Patio Doors', src: '/Supplier%27s-logo/Windows/home.jpg' },
  { alt: 'North Star Windows & Doors', src: '/Supplier%27s-logo/Windows/logo.png' },
  { alt: 'Thermo-Tech Windows', src: '/Supplier%27s-logo/Windows/thermo-tech_logo.svg' }
];
const VENDORS_MAX_VISIBLE = 6;
const VENDOR_INTERVAL_MS = 4500;

export default class HomePage extends React.Component {
  state = { menu: null, scrolled: false, vendorIndex: 0, vendorAnimate: true, lightbox: null };

  componentDidMount() {
    this.handleScroll = () => {
      const scrolled = window.scrollY > 80;
      if (scrolled !== this.state.scrolled) this.setState({ scrolled });
    };
    window.addEventListener('scroll', this.handleScroll, { passive: true });
    this.handleScroll();
    this.handleKey = (e) => {
      if (this.state.lightbox === null) return;
      if (e.key === 'Escape') this.closeLightbox();
      else if (e.key === 'ArrowLeft') this.stepLightbox(-1);
      else if (e.key === 'ArrowRight') this.stepLightbox(1);
    };
    window.addEventListener('keydown', this.handleKey);
    this.vendorTimer = setInterval(() => this.advanceVendors(), VENDOR_INTERVAL_MS);
    // The page is rendered after load, so the browser's own jump to #section has nothing to land on.
    // The hash is dropped after the jump so a refresh opens the page at the top.
    history.scrollRestoration = 'manual';
    const target = location.hash && document.getElementById(location.hash.slice(1));
    if (target) {
      setTimeout(() => window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 66, behavior: 'auto' }), 300);
      history.replaceState(null, '', location.pathname + location.search);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('keydown', this.handleKey);
    clearInterval(this.vendorTimer);
    clearTimeout(this.vendorRewind);
    document.body.style.overflow = '';
  }

  advanceVendors() {
    const next = this.state.vendorIndex + 1;
    this.setState({ vendorIndex: next, vendorAnimate: true });
    // The track ends with clones of the first slides; once they are showing, jump back without animating.
    if (next >= VENDOR_LOGOS.length) {
      this.vendorRewind = setTimeout(() => this.setState({ vendorIndex: 0, vendorAnimate: false }), 700);
    }
  }

  openLightbox(i) {
    document.body.style.overflow = 'hidden';
    this.setState({ lightbox: i });
  }

  closeLightbox() {
    document.body.style.overflow = '';
    this.setState({ lightbox: null });
  }

  stepLightbox(delta) {
    const n = this.galleryCount;
    this.setState({ lightbox: (this.state.lightbox + delta + n) % n });
  }

  renderVals() {
    const gallery = [
      { src: '/bbs-img/gal-772664461.jpg', tag: 'Windows and doors showroom', cls: 'is-big' },
      { src: '/bbs-img/gal-481260257.jpg', tag: 'Showroom kitchen display', cls: '' },
      { src: '/New-img/Gallery/481156425_1168577174970380_7119339270187395847_n.jpg', tag: 'Covered patio', cls: '' },
      { src: '/New-img/Gallery/763655490_1583238900170870_5720930948362635318_n.jpg', tag: 'Fireplace and built-ins', cls: '' },
      { src: '/New-img/Gallery/814761710_1621274093034017_989278391605795611_n.jpg', tag: 'Detached garage', cls: '' }
    ].map((g, i) => ({ ...g, open: () => this.openLightbox(i) }));
    this.galleryCount = gallery.length;
    const active = this.state.lightbox === null ? null : gallery[this.state.lightbox];
    return {
      headerClass: this.state.scrolled ? 'is-sticky' : '',
      vendorSlides: VENDOR_LOGOS.concat(VENDOR_LOGOS.slice(0, VENDORS_MAX_VISIBLE)).map(v => ({ ...v, dark: !!v.dark, light: !v.dark })),
      vendorIndex: this.state.vendorIndex,
      vendorTransition: this.state.vendorAnimate ? 'transform .6s ease' : 'none',
      gallery,
      lightboxOpen: active !== null,
      lightboxSrc: active ? active.src : '',
      lightboxAlt: active ? active.tag : '',
      closeLightbox: () => this.closeLightbox(),
      prevImage: (e) => { e.stopPropagation(); this.stepLightbox(-1); },
      nextImage: (e) => { e.stopPropagation(); this.stepLightbox(1); },
      stopClick: (e) => e.stopPropagation(),
      values: [{ n: '01', t: 'Quality' }, { n: '02', t: 'Honesty' }, { n: '03', t: 'Personal Service' }, { n: '04', t: 'Community' }],
      materialsOpen: this.state.menu === 'm',
      designOpen: this.state.menu === 'd',
      openMaterials: () => this.setState({ menu: 'm' }),
      openDesign: () => this.setState({ menu: 'd' }),
      closeMenu: () => this.setState({ menu: null }),
      props4: [
        { n: '01', t: 'Trusted Expertise', d: 'A sales team that knows the products and helps you choose.' },
        { n: '02', t: 'Local Roots', d: 'Locally owned and neighbor-first for 75 years.' },
        { n: '03', t: 'Planning to Delivery', d: 'Design, drafting, materials, and delivery in one place.' },
        { n: '04', t: 'Focus on Value', d: 'Quality, value, and service balanced for every project.' }
      ],
      materials: [
        { name: 'Kitchen & Bath', href: '/materials#kitchen-bath', d: 'Cabinetry, countertops, and fixtures for kitchens and baths.', img: '/New-img/Homepage/kitchen-and-bath.jpg' },
        { name: 'Decking & Railing', href: '/materials#decking-railing', d: 'Composite and wood decking with matching railing systems.', img: '/bbs-img/bbs-deck.jpg' },
        { name: 'Windows', href: '/materials#windows', d: 'Energy-efficient replacement and new-construction windows.', img: '/New-img/Homepage/windows.jpg' },
        { name: 'Exterior Doors', href: '/materials#exterior-doors', d: 'Entry, patio, and storm doors built for Wisconsin winters.', img: '/New-img/Homepage/exterior-doors.jpg' },
        { name: 'Interior Doors & Trim', href: '/materials#interior-doors-trim', d: 'Doors, millwork, and trim packages for finished interiors.', img: '/New-img/Homepage/Interior-doors-and-trim.jpg' },
        { name: 'Siding', href: '/materials#siding', d: 'Engineered, fiber cement, and vinyl siding with accessories.', img: '/New-img/Homepage/siding.jpg' },
        { name: 'Roofing', href: '/materials#roofing', d: 'Shingles, underlayment, and ventilation from trusted brands.', img: '/New-img/Homepage/roofing.jpg' }
      ],
      yard: ['Framing Lumber', 'Manufactured Trusses', 'Engineered Products', 'Building Science', 'Cabinets & Tops'],
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
                <a href="/" style={{ padding: '10px 9px', color: '#fff', borderBottom: '2px solid #E31E26' }}>
                  Home
                </a>
                <div style={{ position: 'relative' }} onMouseEnter={vals.openMaterials} onMouseLeave={vals.closeMenu}>
                  <a
                    className="hv-6d2547"
                    href="/materials"
                    style={{ padding: '10px 9px', color: '#fff', display: 'flex', gap: '6px', alignItems: 'center' }}
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
                      {vals.materials.map((m, i) => (
                        <a
                          key={i}
                          className="hv-348c4d"
                          href={m.href}
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
                <MobileNav active="home" />
              </div>
            </div>
            <HeaderHeightSync />
          </header>
          <section
            className="bbs-home-hero"
            style={{
              position: 'relative',
              background:
                "#242A4C url('/hero-images-building/building-under-construction.jpg') right center/auto max(844px,100%) no-repeat",
              minHeight: '844px',
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
              style={{
                position: 'relative',
                maxWidth: '1280px',
                width: '100%',
                margin: '0 auto',
                // The extra top padding clears the header and the extra bottom padding clears the stats box that
                // overlaps the hero by 64px, so the visible space above and below the text is equal.
                padding: 'calc(var(--bbs-header-h, 78px) + 48px) 32px 112px',
              }}
            >
              <div style={{ maxWidth: '640px' }}>
                <div
                  style={{
                    display: 'flex',
                    gap: '14px',
                    alignItems: 'center',
                    color: '#fff',
                    fontFamily: "'Roboto Condensed',sans-serif",
                    fontSize: '14px',
                    fontWeight: '600',
                    letterSpacing: '.08em',
                    textTransform: 'uppercase',
                  }}
                >
                  Third-generation · Holmen, Wisconsin
                </div>
                <h1
                  style={{
                    margin: '22px 0 0',
                    fontFamily: "'Roboto Condensed',sans-serif",
                    fontWeight: '700',
                    fontSize: 'clamp(48px,6.4vw,68px)',
                    lineHeight: '1.05',
                    color: '#fff',
                    textTransform: 'uppercase',
                    letterSpacing: '-.015em',
                    textWrap: 'balance',
                  }}
                >
                  Building the Coulee Region for 75 years.
                </h1>
                <p
                  style={{
                    margin: '24px 0 0',
                    fontSize: '18px',
                    lineHeight: '1.55',
                    color: '#fff',
                    maxWidth: '540px',
                    textWrap: 'pretty',
                  }}
                >
                  Quality materials, design support, and expert guidance for builders and homeowners, from the first sketch
                  to delivery on site.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginTop: '36px' }}>
                  <a
                    className="hv-4d7e21"
                    href="/materials"
                    style={{
                      whiteSpace: 'nowrap',
                      flexShrink: '0',
                      padding: '17px 30px',
                      background: '#fff',
                      color: '#000',
                      fontWeight: '700',
                      fontSize: '17px',
                      borderRadius: '3px',
                    }}
                  >
                    Browse Materials
                  </a>
                  <a
                    className="hv-770bf8"
                    href="https://www.google.com/maps/search/?api=1&query=Beaver+Builders+Supply+N6838+Builders+Ct+Holmen+WI+54636"
                    target="_blank"
                    rel="noopener"
                    style={{
                      whiteSpace: 'nowrap',
                      flexShrink: '0',
                      padding: '16px 29px',
                      border: '1.5px solid #fff',
                      color: '#fff',
                      fontWeight: '700',
                      fontSize: '17px',
                      borderRadius: '3px',
                    }}
                  >
                    Visit the Showroom
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
        <section style={{ position: 'relative', zIndex: '2', padding: '0 32px' }}>
          <div
            style={{
              maxWidth: '1216px',
              margin: '-64px auto 0',
              background: '#fff',
              boxShadow: '0 24px 60px rgba(20,24,58,.14)',
              borderTop: '4px solid #313893',
              display: 'flex',
              flexWrap: 'wrap',
            }}
          >
            {vals.props4.map((p, i) => (
              <div
                key={i}
                style={{
                  flex: '1 1 calc((820px - 100%) * 999)',
                  minWidth: '0',
                  padding: '34px 30px',
                  borderRight: '1px solid #ECEDF3',
                  borderBottom: '1px solid #ECEDF3',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}
              >
                <div
                  style={{
                    fontFamily: "'Roboto Condensed',sans-serif",
                    fontSize: '24px',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '0',
                    color: '#14183A',
                    lineHeight: '1.1',
                  }}
                >
                  {p.t}
                </div>
                <div style={{ fontSize: '18px', lineHeight: '1.5', color: '#4A4F6A' }}>{p.d}</div>
              </div>
            ))}
          </div>
        </section>
        <section id="materials" style={{ padding: '104px 0 112px', background: '#fff' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '24px',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
              }}
            >
              <div style={{ maxWidth: '640px' }}>
                <div
                  style={{
                    color: '#E31E26',
                    fontFamily: "'Roboto Condensed',sans-serif",
                    fontSize: '17px',
                    fontWeight: '700',
                    letterSpacing: '.08em',
                    textTransform: 'uppercase',
                  }}
                >
                  Materials
                </div>
                <h2
                  style={{
                    margin: '12px 0 0',
                    fontFamily: "'Roboto Condensed',sans-serif",
                    fontSize: 'clamp(38px,4.6vw,58px)',
                    lineHeight: '1.1',
                    fontWeight: '700',
                    letterSpacing: '-.015em',
                    textTransform: 'uppercase',
                    color: '#14183A',
                  }}
                >
                  The right product for the job, from brands we stand behind.
                </h2>
              </div>
              <p style={{ margin: '0', maxWidth: '420px', fontSize: '18px', lineHeight: '1.55', color: '#4A4F6A' }}>
                With so many options on the market, our sales team helps you find the brand and product that fits your
                quality, value, and budget.
              </p>
            </div>
            <div
              style={{
                marginTop: '56px',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill,minmax(min(100%,280px),1fr))',
                gap: '28px',
              }}
            >
              {vals.materials.map((m, i) => (
                <a
                  key={i}
                  className="hv-935324"
                  href={m.href}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    background: '#fff',
                    border: '1px solid #E4E5EE',
                    borderRadius: '4px',
                    overflow: 'hidden',
                    color: '#14183A',
                    boxShadow: '0 1px 2px rgba(20,24,58,.04)',
                    transition: 'transform .25s ease,box-shadow .25s ease,border-color .25s ease',
                  }}
                >
                  <div style={{ position: 'relative', aspectRatio: '16/11', overflow: 'hidden', background: '#E9EAF1' }}>
                    <img
                      src={m.img}
                      alt=""
                      style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        left: '0',
                        bottom: '0',
                        width: '56px',
                        height: '4px',
                        background: '#313893',
                      }}
                    />
                  </div>
                  <div style={{ padding: '24px 24px 0', display: 'flex', flexDirection: 'column', gap: '10px', flex: '1' }}>
                    <div
                      style={{
                        fontFamily: "'Roboto Condensed',sans-serif",
                        fontSize: '26px',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        letterSpacing: '0',
                        lineHeight: '1.1',
                      }}
                    >
                      {m.name}
                    </div>
                    <div style={{ fontSize: '18px', lineHeight: '1.5', color: '#4A4F6A', textWrap: 'pretty' }}>{m.d}</div>
                  </div>
                  <div
                    style={{
                      margin: '22px 24px 0',
                      padding: '16px 0 20px',
                      borderTop: '1px solid #ECEDF3',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      fontWeight: '700',
                      fontSize: '15px',
                      color: '#313893',
                    }}
                  >
                    <span>View vendors</span>
                    <span
                      style={{
                        width: '34px',
                        height: '34px',
                        borderRadius: '50%',
                        background: '#F3F4F9',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#E31E26',
                        fontSize: '17px',
                      }}
                    >
                      →
                    </span>
                  </div>
                </a>
              ))}
              <div
                style={{
                  background: '#14183A',
                  borderRadius: '4px',
                  padding: '32px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '28px',
                  color: '#fff',
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "'Roboto Condensed',sans-serif",
                      fontSize: '15px',
                      fontWeight: '700',
                      letterSpacing: '.08em',
                      textTransform: 'uppercase',
                      color: '#fff',
                    }}
                  >
                    Also in the yard
                  </div>
                  <ul
                    style={{
                      margin: '18px 0 0',
                      padding: '0',
                      listStyle: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0',
                    }}
                  >
                    {vals.yard.map((y, i) => (
                      <li
                        key={i}
                        style={{
                          padding: '11px 0',
                          borderBottom: '1px solid rgba(255,255,255,.12)',
                          fontFamily: "'Roboto Condensed',sans-serif",
                          fontSize: '20px',
                          fontWeight: '600',
                          textTransform: 'uppercase',
                          letterSpacing: '0',
                        }}
                      >
                        {y}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  className="hv-6a96a5"
                  href="/contact"
                  style={{
                    alignSelf: 'flex-start',
                    padding: '14px 22px',
                    background: '#E31E26',
                    color: '#fff',
                    fontWeight: '700',
                    borderRadius: '3px',
                  }}
                >
                  Ask our sales team
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="showroom" style={{ background: '#14183A', color: '#fff' }}>
          <div
            style={{
              maxWidth: '1280px',
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,480px),1fr))',
            }}
          >
            <div style={{ minHeight: '520px', background: "url('/assets/showroom.jpg') center/cover no-repeat" }} />
            <div style={{ padding: '96px 56px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div
                style={{
                  color: '#fff',
                  fontFamily: "'Roboto Condensed',sans-serif",
                  fontSize: '17px',
                  fontWeight: '700',
                  letterSpacing: '.08em',
                  textTransform: 'uppercase',
                }}
              >
                Interactive Showroom
              </div>
              <h2
                style={{
                  margin: '12px 0 0',
                  fontFamily: "'Roboto Condensed',sans-serif",
                  fontSize: 'clamp(38px,4.6vw,58px)',
                  lineHeight: '1.1',
                  fontWeight: '700',
                  letterSpacing: '-.015em',
                  textTransform: 'uppercase',
                }}
              >
                See it, touch it, open it before you build with it.
              </h2>
              <p style={{ margin: '24px 0 0', fontSize: '18px', lineHeight: '1.6', color: '#fff', textWrap: 'pretty' }}>
                Walk through full-scale displays of siding, decking, railing, windows, doors, and finished interiors.
                Compare colors and textures side by side with a member of our team who knows the products.
              </p>
              <div
                style={{
                  marginTop: '32px',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))',
                  gap: '20px',
                  borderTop: '1px solid rgba(255,255,255,.18)',
                  paddingTop: '28px',
                }}
              >
                <div>
                  <div style={{ fontWeight: '700', fontSize: '20px' }}>Call ahead</div>
                  <a
                    className="hv-b2d6c8"
                    href="tel:6085263232"
                    style={{
                      display: 'inline-block',
                      marginTop: '4px',
                      color: '#fff',
                      fontFamily: "'Roboto Condensed',sans-serif",
                      fontSize: '32px',
                      fontWeight: '700',
                      lineHeight: '1.2',
                    }}
                  >
                    608-526-3232
                  </a>
                </div>
                <div>
                  <div style={{ fontWeight: '700', fontSize: '16px' }}>Visit us</div>
                  <a
                    className="hv-b2d6c8"
                    href="https://www.google.com/maps/search/?api=1&query=Beaver+Builders+Supply+N6838+Builders+Ct+Holmen+WI+54636"
                    target="_blank"
                    rel="noopener"
                    style={{ display: 'block', marginTop: '4px', color: '#fff', fontSize: '18px', lineHeight: '1.5' }}
                  >
                    N6838 Builders Ct.
                    <br />
                    Holmen, WI 54636
                  </a>
                </div>
              </div>
              <div style={{ marginTop: '36px' }}>
                <a
                  className="hv-6a96a5"
                  href="https://www.google.com/maps/search/?api=1&query=Beaver+Builders+Supply+N6838+Builders+Ct+Holmen+WI+54636"
                  target="_blank"
                  rel="noopener"
                  style={{
                    display: 'inline-block',
                    padding: '17px 30px',
                    background: '#E31E26',
                    color: '#fff',
                    fontWeight: '700',
                    fontSize: '17px',
                    borderRadius: '3px',
                  }}
                >
                  Plan a Showroom Visit
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="design" style={{ padding: '112px 0', background: '#F6F4EF' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
            <div style={{ maxWidth: '720px' }}>
              <div
                style={{
                  color: '#E31E26',
                  fontFamily: "'Roboto Condensed',sans-serif",
                  fontSize: '17px',
                  fontWeight: '700',
                  letterSpacing: '.08em',
                  textTransform: 'uppercase',
                }}
              >
                Drafting & Design
              </div>
              <h2
                style={{
                  margin: '12px 0 0',
                  fontFamily: "'Roboto Condensed',sans-serif",
                  fontSize: 'clamp(38px,4.6vw,58px)',
                  lineHeight: '1.1',
                  fontWeight: '700',
                  letterSpacing: '-.015em',
                  textTransform: 'uppercase',
                  color: '#14183A',
                }}
              >
                Plan it right before the first board is cut.
              </h2>
            </div>
            <div
              style={{
                marginTop: '48px',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,420px),1fr))',
                gap: '28px',
              }}
            >
              <a
                className="hv-5e9b76"
                href="/design#drafting-contract"
                style={{
                  background: '#fff',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  color: '#14183A',
                  boxShadow: '0 1px 2px rgba(20,24,58,.05)',
                  transition: 'transform .25s ease,box-shadow .25s ease',
                }}
              >
                <img
                  src="/New-img/Homepage/drafting-contract.jpg"
                  alt=""
                  style={{ width: '100%', aspectRatio: '16/8', objectFit: 'cover', display: 'block' }}
                />
                <div
                  style={{
                    padding: '40px 44px 44px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '18px',
                    flex: '1',
                    borderTop: '4px solid #313893',
                  }}
                >
                  <h3
                    style={{
                      margin: '0',
                      fontFamily: "'Roboto Condensed',sans-serif",
                      fontSize: '32px',
                      fontWeight: '700',
                      letterSpacing: '-.015em',
                      textTransform: 'uppercase',
                      color: '#14183A',
                      lineHeight: '1.1',
                    }}
                  >
                    Drafting Contract
                  </h3>
                  <p style={{ margin: '0', fontSize: '18px', lineHeight: '1.6', color: '#4A4F6A' }}>
                    Work with our in-house drafting team on plans for new homes, additions, and remodels. Start with the
                    drafting contract and we'll take it from there.
                  </p>
                  <span
                    className="hv-bd5fa7"
                    style={{
                      marginTop: 'auto',
                      alignSelf: 'flex-start',
                      padding: '14px 22px',
                      background: '#313893',
                      color: '#fff',
                      fontWeight: '700',
                      borderRadius: '3px',
                    }}
                  >
                    Open the drafting contract
                  </span>
                </div>
              </a>
              <a
                className="hv-5e9b76"
                href="/design#design-tools"
                style={{
                  background: '#fff',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  color: '#14183A',
                  boxShadow: '0 1px 2px rgba(20,24,58,.05)',
                  transition: 'transform .25s ease,box-shadow .25s ease',
                }}
              >
                <img
                  src="/bbs-img/gal-741821004.jpg"
                  alt=""
                  style={{ width: '100%', aspectRatio: '16/8', objectFit: 'cover', display: 'block' }}
                />
                <div
                  style={{
                    padding: '40px 44px 44px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '18px',
                    flex: '1',
                    borderTop: '4px solid #313893',
                  }}
                >
                  <h3
                    style={{
                      margin: '0',
                      fontFamily: "'Roboto Condensed',sans-serif",
                      fontSize: '32px',
                      fontWeight: '700',
                      letterSpacing: '-.015em',
                      textTransform: 'uppercase',
                      color: '#14183A',
                      lineHeight: '1.1',
                    }}
                  >
                    Brand Design Tools
                  </h3>
                  <p style={{ margin: '0', fontSize: '18px', lineHeight: '1.6', color: '#4A4F6A' }}>
                    Visualize siding colors, deck layouts, windows, and cabinetry with interactive tools from the
                    manufacturers we carry. Bring your ideas in and we'll help price them out.
                  </p>
                  <span
                    className="hv-6a96a5"
                    style={{
                      marginTop: 'auto',
                      alignSelf: 'flex-start',
                      padding: '14px 22px',
                      background: '#E31E26',
                      color: '#fff',
                      fontWeight: '700',
                      borderRadius: '3px',
                    }}
                  >
                    Explore design tools
                  </span>
                </div>
              </a>
            </div>
          </div>
        </section>
        <section style={{ padding: '96px 0', borderBottom: '1px solid #E4E5EE' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px', textAlign: 'center' }}>
            <div
              style={{
                color: '#E31E26',
                fontFamily: "'Roboto Condensed',sans-serif",
                fontSize: '17px',
                fontWeight: '700',
                letterSpacing: '.08em',
                textTransform: 'uppercase',
              }}
            >
              Our Suppliers
            </div>
            <h2
              style={{
                margin: '12px auto 0',
                fontFamily: "'Roboto Condensed',sans-serif",
                fontSize: 'clamp(38px,4.6vw,58px)',
                lineHeight: '1.1',
                fontWeight: '700',
                letterSpacing: '-.015em',
                textTransform: 'uppercase',
                color: '#14183A',
              }}
            >
              Brands we carry
            </h2>
            <div
              style={{
                margin: '48px auto 0',
                maxWidth: '560px',
                height: '136px',
                display: 'grid',
                gridTemplateColumns: 'clamp(116px,32%,180px) 1fr',
                background: '#fff',
                border: '1px solid #E4E5EE',
                borderRadius: '4px',
                overflow: 'hidden',
                boxShadow: '0 24px 60px rgba(20,24,58,.14)',
              }}
            >
              <div
                style={{
                  background: '#14183A',
                  color: '#fff',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  padding: '0 12px',
                  textAlign: 'center',
                }}
              >
                <span
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: '#E31E26',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
                    <path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7.3L12 17.8 5.8 21.5l1.6-7.3L2 9.5l7.1-.6z" />
                  </svg>
                </span>
                <span
                  style={{
                    fontFamily: "'Roboto Condensed',sans-serif",
                    fontSize: 'clamp(14px,3.6vw,17px)',
                    fontWeight: '700',
                    letterSpacing: '.08em',
                    lineHeight: '1.15',
                    textTransform: 'uppercase',
                  }}
                >
                  Main Supplier
                </span>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0 24px',
                  minWidth: '0',
                }}
              >
                <img
                  src="/Supplier%27s-logo/Main-supplier-logo/MC_Logo_Gray.png"
                  alt="Mid Continent Cabinetry"
                  style={{ height: '52px', width: 'auto', maxWidth: '100%', objectFit: 'contain', display: 'block' }}
                />
              </div>
            </div>
            <div className="bbs-vendors" style={{ marginTop: '24px' }}>
              <div
                className="bbs-vendor-track"
                style={{
                  transform: `translateX(calc((100% + 16px) / var(--pv) * -${vals.vendorIndex}))`,
                  transition: vals.vendorTransition,
                }}
              >
                {vals.vendorSlides.map((v, i) => (
                  <React.Fragment key={i}>
                    {v.light && (
                      <div
                        className="bbs-vendor hv-2083a0"
                        style={{
                          height: '88px',
                          background: '#F6F7FA',
                          border: '1px solid #ECEDF3',
                          borderRadius: '4px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'background .2s,border-color .2s',
                        }}
                      >
                        <div style={{ position: 'relative', width: '80%', height: '52px' }}>
                          <img
                            src={v.src}
                            alt={v.alt}
                            style={{
                              position: 'absolute',
                              inset: '0',
                              width: '100%',
                              height: '100%',
                              objectFit: 'contain',
                            }}
                          />
                        </div>
                      </div>
                    )}
                    {v.dark && (
                      <div
                        className="bbs-vendor hv-7b0429"
                        style={{
                          height: '88px',
                          background: '#14183A',
                          border: '1px solid #14183A',
                          borderRadius: '4px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'background .2s,border-color .2s',
                        }}
                      >
                        <div style={{ position: 'relative', width: '80%', height: '52px' }}>
                          <img
                            src={v.src}
                            alt={v.alt}
                            style={{
                              position: 'absolute',
                              inset: '0',
                              width: '100%',
                              height: '100%',
                              objectFit: 'contain',
                            }}
                          />
                        </div>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section id="about" style={{ padding: '120px 0', background: '#F6F4EF', overflow: 'hidden' }}>
          <div
            className="bbs-split"
            style={{
              maxWidth: '1280px',
              margin: '0 auto',
              padding: '0 32px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,460px),1fr))',
              gap: '80px',
              alignItems: 'center',
            }}
          >
            <div className="bbs-split-media bbs-about-media" style={{ position: 'relative', padding: '0 0 56px 0' }}>
              <img
                src="/New-img/Homepage/about-us-img-1.jpg"
                alt=""
                style={{ width: '86%', aspectRatio: '4/5', objectFit: 'cover', display: 'block', borderRadius: '4px' }}
              />
              <img
                src="/New-img/Homepage/about-us-img-2.jpg"
                alt=""
                style={{
                  position: 'absolute',
                  right: '0',
                  bottom: '0',
                  width: '48%',
                  aspectRatio: '1/1',
                  objectFit: 'cover',
                  display: 'block',
                  borderRadius: '4px',
                  border: '8px solid #F6F4EF',
                }}
              />
              <div
                className="bbs-about-badge"
                style={{
                  position: 'absolute',
                  left: '-12px',
                  background: '#E31E26',
                  color: '#fff',
                  borderRadius: '3px',
                  boxShadow: '0 18px 40px rgba(227,30,38,.28)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2px',
                }}
              >
                <span
                  className="bbs-about-badge-num"
                  style={{
                    fontFamily: "'Roboto Condensed',sans-serif",
                    fontWeight: '700',
                    lineHeight: '.85',
                  }}
                >
                  75
                </span>
                <span
                  className="bbs-about-badge-label"
                  style={{
                    fontFamily: "'Roboto Condensed',sans-serif",
                    fontWeight: '700',
                    letterSpacing: '.08em',
                    textTransform: 'uppercase',
                  }}
                >
                  Years in Holmen
                </span>
              </div>
            </div>
            <div className="bbs-split-text">
              <div
                style={{
                  color: '#E31E26',
                  fontFamily: "'Roboto Condensed',sans-serif",
                  fontSize: '17px',
                  fontWeight: '700',
                  letterSpacing: '.08em',
                  textTransform: 'uppercase',
                }}
              >
                About Us
              </div>
              <h2
                style={{
                  margin: '12px 0 0',
                  fontFamily: "'Roboto Condensed',sans-serif",
                  fontSize: 'clamp(38px,4.6vw,58px)',
                  lineHeight: '1.05',
                  fontWeight: '700',
                  letterSpacing: '-.015em',
                  textTransform: 'uppercase',
                  color: '#14183A',
                  textWrap: 'balance',
                }}
              >
                Three generations. One neighborhood.
              </h2>
              <p style={{ margin: '24px 0 0', fontSize: '18px', lineHeight: '1.6', color: '#4A4F6A', textWrap: 'pretty' }}>
                Beaver Builders' Supply is a locally owned, third-generation building supply company. We employ local
                neighbors, and most of our customers find us through someone they trust. We've earned that by being honest,
                knowing our products, and standing behind every order.
              </p>
              <div
                style={{
                  marginTop: '36px',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,200px),1fr))',
                  gap: '12px',
                }}
              >
                {vals.values.map((v, i) => (
                  <div
                    key={i}
                    style={{
                      background: '#fff',
                      borderRadius: '4px',
                      padding: '18px 20px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                      boxShadow: '0 1px 2px rgba(20,24,58,.05)',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Roboto Condensed',sans-serif",
                        fontSize: '20px',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        letterSpacing: '0',
                        color: '#14183A',
                      }}
                    >
                      {v.t}
                    </span>
                  </div>
                ))}
              </div>
              <div
                style={{
                  marginTop: '28px',
                  background: '#14183A',
                  color: '#fff',
                  borderRadius: '4px',
                  padding: '30px 32px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}
              >
                <span
                  style={{
                    fontFamily: "'Roboto Condensed',sans-serif",
                    fontSize: '64px',
                    lineHeight: '.5',
                    color: '#fff',
                    fontWeight: '700',
                    height: '28px',
                  }}
                >
                  “
                </span>
                <blockquote
                  style={{
                    margin: '0',
                    fontFamily: "'Roboto Condensed',sans-serif",
                    fontSize: '24px',
                    lineHeight: '1.2',
                    fontWeight: '600',
                  }}
                >
                  We believe customers should feel like they’re working with a trusted neighbor, not just another supplier.
                </blockquote>
              </div>
              <div className="bbs-split-cta bbs-about-cta" style={{ marginTop: '32px' }}>
                <a
                  className="hv-66db52"
                  href="/about"
                  style={{
                    display: 'inline-block',
                    padding: '15px 26px',
                    border: '1.5px solid #313893',
                    color: '#313893',
                    fontWeight: '700',
                    borderRadius: '3px',
                  }}
                >
                  Read our story
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="gallery" style={{ padding: '112px 0' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
              }}
            >
              <div>
                <div
                  style={{
                    color: '#E31E26',
                    fontFamily: "'Roboto Condensed',sans-serif",
                    fontSize: '17px',
                    fontWeight: '700',
                    letterSpacing: '.08em',
                    textTransform: 'uppercase',
                  }}
                >
                  Gallery
                </div>
                <h2
                  style={{
                    margin: '12px 0 0',
                    fontFamily: "'Roboto Condensed',sans-serif",
                    fontSize: 'clamp(38px,4.6vw,58px)',
                    lineHeight: '1.1',
                    fontWeight: '700',
                    letterSpacing: '-.015em',
                    textTransform: 'uppercase',
                    color: '#14183A',
                  }}
                >
                  Job sites, showroom, and the yard
                </h2>
              </div>
            </div>
            <div className="bbs-gal" style={{ marginTop: '40px' }}>
              {vals.gallery.map((g, i) => (
                <div key={i} className={`bbs-gal-item ${g.cls}`} onClick={g.open}>
                  <img
                    src={g.src}
                    alt={g.tag}
                    style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              ))}
            </div>
            <div style={{ marginTop: '40px', textAlign: 'center' }}>
              <a
                className="hv-66db52"
                href="/gallery"
                style={{
                  display: 'inline-block',
                  padding: '15px 26px',
                  border: '1.5px solid #313893',
                  color: '#313893',
                  fontWeight: '700',
                  borderRadius: '3px',
                }}
              >
                View full gallery
              </a>
            </div>
          </div>
          {vals.lightboxOpen && (
            <div className="bbs-lightbox" onClick={vals.closeLightbox}>
              <img className="bbs-lightbox-img" src={vals.lightboxSrc} alt={vals.lightboxAlt} onClick={vals.stopClick} />
              <button className="bbs-lb-btn bbs-lb-prev" type="button" aria-label="Previous image" onClick={vals.prevImage}>
                <svg className="bbs-ico" width="26" height="26" viewBox="0 0 24 24">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button className="bbs-lb-btn bbs-lb-next" type="button" aria-label="Next image" onClick={vals.nextImage}>
                <svg className="bbs-ico" width="26" height="26" viewBox="0 0 24 24">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
              <button className="bbs-lb-btn bbs-lb-close" type="button" aria-label="Close" onClick={vals.closeLightbox}>
                <svg className="bbs-ico" width="24" height="24" viewBox="0 0 24 24">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          )}
        </section>
        <section
          id="contact"
          style={{
            position: 'relative',
            background: "#14183A url('/New-img/Homepage/cta-banner.jpg') center/cover no-repeat",
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
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            <h2
              style={{
                margin: '0',
                fontFamily: "'Roboto Condensed',sans-serif",
                fontSize: 'clamp(38px,4.6vw,58px)',
                lineHeight: '1.05',
                fontWeight: '700',
                letterSpacing: '-.015em',
                textTransform: 'uppercase',
                textWrap: 'balance',
              }}
            >
              Let's talk about your project.
            </h2>
            <p style={{ margin: '22px 0 0', fontSize: '18px', lineHeight: '1.6', color: '#fff', maxWidth: '560px' }}>
              Tell us what you're building. A member of our sales team will follow up with product options and pricing.
            </p>
            <div
              style={{ marginTop: '40px', display: 'flex', flexWrap: 'wrap', gap: '14px', justifyContent: 'flex-start' }}
            >
              <a
                className="hv-6a96a5"
                href="tel:6085263232"
                style={{
                  whiteSpace: 'nowrap',
                  padding: '18px 32px',
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
                  padding: '16px 30px',
                  border: '1.5px solid #fff',
                  color: '#fff',
                  fontWeight: '700',
                  fontSize: '17px',
                  borderRadius: '3px',
                }}
              >
                Email Our Sales Team
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
              {vals.materials.map((m, i) => (
                <a key={i} className="hv-b2d6c8" href={m.href} style={{ color: '#fff' }}>
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
