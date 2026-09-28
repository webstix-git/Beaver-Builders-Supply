'use client';

import React from 'react';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import '../styles/inside.css';
import '../styles/gallery.css';

// Every fifth photo, starting with the first, fills a block's large tile; keep 4:3 photos there so they are not trimmed.
const PHOTOS = [
  { src: '/bbs-img/gal-481260257.jpg', tag: 'Showroom kitchen display' },
  { src: '/bbs-img/gal-772716807.jpg', tag: 'Cabinet and countertop display' },
  { src: '/New-img/Gallery/481156425_1168577174970380_7119339270187395847_n.jpg', tag: 'Covered patio' },
  { src: '/New-img/Gallery/763805530_1583236630171097_3760181239488667736_n.jpg', tag: 'Custom kitchen cabinets' },
  { src: '/bbs-img/gal-480770058.jpg', tag: 'Waterfall island display' },
  { src: '/bbs-img/gal-772664461.jpg', tag: 'Windows and doors showroom' },
  { src: '/New-img/Gallery/510221658_9917744215012039_4218192731286335768_n.jpg', tag: 'Truss delivery' },
  { src: '/New-img/Gallery/763655490_1583238900170870_5720930948362635318_n.jpg', tag: 'Fireplace and built-ins' },
  { src: '/bbs-img/gal-481231765.jpg', tag: 'Showroom kitchen and bar' },
  { src: '/New-img/Gallery/500103430_9727345597385236_2873127610018809278_n.jpg', tag: 'Finished home' },
  { src: '/New-img/Gallery/814761710_1621274093034017_989278391605795611_n.jpg', tag: 'Detached garage' },
  { src: '/bbs-img/gal-772510836.jpg', tag: 'Siding, stone, and decking display' },
  { src: '/New-img/Gallery/481253203_1168705518290879_3201260945447998079_n.jpg', tag: 'Kitchen project' },
  { src: '/New-img/Gallery/753281987_1572552801239480_7179308573101564413_n.jpg', tag: 'New construction framing' },
  { src: '/bbs-img/gal-741821004.jpg', tag: 'Siding and entry door project' },
  { src: '/New-img/Gallery/814740749_1621274299700663_420377519032775124_n.jpg', tag: 'New home under construction' },
  { src: '/New-img/Gallery/512392257_9922877911165336_4796148681306932767_n.jpg', tag: 'Garage and shop building' },
  { src: '/New-img/Gallery/500811121_9735649009888228_3014671618398086198_n.jpg', tag: 'Kitchen with island' },
  { src: '/bbs-img/gal-772696788.jpg', tag: 'Showroom siding, doors, and stone' },
  { src: '/New-img/Gallery/816393815_1627307832430643_3345575578012989027_n.jpg', tag: 'Deck with lighted steps' }
];
const BLOCK_SIZE = 5;
export default class GalleryPage extends React.Component {
  state = { menu: null, scrolled: false, lightbox: null };

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
    // The hash is dropped after the jump so a refresh opens the page at the top.
    history.scrollRestoration = 'manual';
    const target = location.hash && document.getElementById(location.hash.slice(1));
    if (target) {
      setTimeout(() => window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 80, behavior: 'auto' }), 300);
      history.replaceState(null, '', location.pathname + location.search);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('keydown', this.handleKey);
    document.body.style.overflow = '';
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
    const n = PHOTOS.length;
    this.setState({ lightbox: (this.state.lightbox + delta + n) % n });
  }

  renderVals() {
    // Photos are laid out in blocks of one large and four small images; every other block is mirrored.
    const galleryBlocks = [];
    for (let start = 0; start < PHOTOS.length; start += BLOCK_SIZE) {
      galleryBlocks.push({
        cls: galleryBlocks.length % 2 ? 'is-flip' : '',
        items: PHOTOS.slice(start, start + BLOCK_SIZE).map((p, k) => ({
          ...p,
          cls: k === 0 ? 'is-big' : '',
          open: () => this.openLightbox(start + k)
        }))
      });
    }
    const active = this.state.lightbox === null ? null : PHOTOS[this.state.lightbox];
    return {
      headerClass: this.state.scrolled ? 'is-sticky' : '',
      materialsOpen: this.state.menu === 'm',
      designOpen: this.state.menu === 'd',
      openMaterials: () => this.setState({ menu: 'm' }),
      openDesign: () => this.setState({ menu: 'd' }),
      closeMenu: () => this.setState({ menu: null }),
      galleryBlocks,
      lightboxOpen: active !== null,
      lightboxSrc: active ? active.src : '',
      lightboxAlt: active ? active.tag : '',
      closeLightbox: () => this.closeLightbox(),
      prevImage: (e) => { e.stopPropagation(); this.stepLightbox(-1); },
      nextImage: (e) => { e.stopPropagation(); this.stepLightbox(1); },
      stopClick: (e) => e.stopPropagation()
    };
  }

  render() {
    const vals = this.renderVals();
    return (
      <div style={{ minWidth: '0' }}>
        <div style={{ position: 'relative' }}>
          <SiteHeader active="gallery" vals={vals} />
          <section
            className="bbs-hero-banner"
            style={{
              position: 'relative',
              background: "#14183A url('/New-img/Gallery/hero-section-banner.jpg') center 40%/cover no-repeat",
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
                Gallery
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
                Job sites, showroom, and the yard. A look at the projects we supply and the place where Coulee Region
                builders and homeowners pick their materials.
              </p>
            </div>
          </section>
        </div>
        <section style={{ padding: '25px 0 112px' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
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
              <span style={{ color: '#14183A', fontWeight: '600' }}>Gallery</span>
            </div>
          </div>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
            <div style={{ maxWidth: 'none' }}>
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
            <div className="bbs-gal-43" style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {vals.galleryBlocks.map((b, i) => (
                <div key={i} className={`bbs-gal ${b.cls}`}>
                  {b.items.map((g, j) => (
                    <div key={j} className={`bbs-gal-item ${g.cls}`} onClick={g.open}>
                      <img
                        src={g.src}
                        alt={g.tag}
                        style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          {vals.lightboxOpen && (
            <div className="bbs-lightbox" onClick={vals.closeLightbox}>
              <img className="bbs-lightbox-img is-natural" src={vals.lightboxSrc} alt={vals.lightboxAlt} onClick={vals.stopClick} />
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
          style={{
            position: 'relative',
            background: "#14183A url('/New-img/Gallery/cta-banner.jpg') center/cover no-repeat",
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
                Let's talk about your project.
              </h2>
              <p style={{ margin: '18px 0 0', fontSize: '18px', lineHeight: '1.6', color: '#fff' }}>
                Tell us what you're building. A member of our sales team will follow up with product options and pricing.
              </p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
              <a
                className="hv-6a96a5"
                href="tel:6085263232"
                style={{
                  whiteSpace: 'nowrap',
                  padding: '17px 30px',
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
                href="/contact"
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
                Contact Us
              </a>
            </div>
          </div>
        </section>
        <SiteFooter />
      </div>
    );
  }
}
