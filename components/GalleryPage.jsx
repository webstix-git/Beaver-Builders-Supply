'use client';

import React from 'react';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import '../styles/inside.css';
import '../styles/gallery.css';

const PHOTOS = [
  { src: '/bbs-img/gal-481260257.jpg', tag: 'Showroom kitchen display' },
  { src: '/bbs-img/gal-772716807.jpg', tag: 'Cabinet and countertop display' },
  { src: '/bbs-img/gal-480770058.jpg', tag: 'Waterfall island display' },
  { src: '/bbs-img/gal-481231765.jpg', tag: 'Showroom kitchen and bar' },
  { src: '/bbs-img/gal-772510836.jpg', tag: 'Siding, stone, and decking display' },
  { src: '/bbs-img/gal-772664461.jpg', tag: 'Windows and doors showroom' },
  { src: '/bbs-img/gal-741821004.jpg', tag: 'Siding and entry door project' },
  { src: '/bbs-img/gal-481660189.jpg', tag: 'Finished home' },
  { src: '/bbs-img/sec-09.jpg', tag: 'Covered patio' },
  { src: '/bbs-img/sec-08.jpg', tag: 'Siding project' },
  { src: '/bbs-img/gal-772696788.jpg', tag: 'Showroom siding, doors, and stone' },
  { src: '/bbs-img/sec-15.jpg', tag: 'Custom kitchen' },
  { src: '/bbs-img/gal-763249197.jpg', tag: 'Kitchen project' },
  { src: '/bbs-img/contact-hero.jpg', tag: 'Finished home' },
  { src: '/bbs-img/bbs-truss-delivery.jpg', tag: 'Truss delivery' },
  { src: '/bbs-img/gal-500289586.jpg', tag: 'Finished home' },
  { src: '/bbs-img/gal-481308960.jpg', tag: 'Kitchen project' },
  { src: '/bbs-img/gal-730473848.jpg', tag: 'Deck and exterior project' },
  { src: '/bbs-img/gal-482030819.jpg', tag: 'Patio door and siding project' },
  { src: '/bbs-img/sec-04.jpg', tag: 'Fireplace and built-ins' }
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
            style={{
              position: 'relative',
              background: "#14183A url('/bbs-img/gallery-hero.jpg') center 40%/cover no-repeat",
              minHeight: '480px',
              display: 'flex',
              alignItems: 'flex-end',
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
                  fontFamily: "'Barlow Condensed',sans-serif",
                  fontWeight: '700',
                  fontSize: 'clamp(52px,6.4vw,88px)',
                  lineHeight: '.95',
                  color: '#fff',
                  textTransform: 'uppercase',
                }}
              >
                Gallery
              </h1>
              <p
                style={{
                  margin: '18px 0 0',
                  fontSize: '20px',
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
                  fontFamily: "'Barlow Condensed',sans-serif",
                  fontSize: '17px',
                  fontWeight: '700',
                  letterSpacing: '.16em',
                  textTransform: 'uppercase',
                }}
              >
                Gallery
              </div>
              <h2
                style={{
                  margin: '12px 0 0',
                  fontFamily: "'Barlow Condensed',sans-serif",
                  fontSize: 'clamp(38px,4vw,54px)',
                  lineHeight: '1',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  color: '#14183A',
                }}
              >
                Job sites, showroom, and the yard
              </h2>
            </div>
            <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
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
          style={{
            position: 'relative',
            background: "#14183A url('/bbs-img/gallery-cta.jpg') center/cover no-repeat",
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
              padding: '88px 32px',
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
                  fontFamily: "'Barlow Condensed',sans-serif",
                  fontSize: 'clamp(36px,4vw,54px)',
                  lineHeight: '1',
                  fontWeight: '700',
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
                  borderRadius: '2px',
                }}
              >
                Call 608-526-3232
              </a>
              <a
                className="hv-9099e0"
                href="/contact"
                style={{
                  whiteSpace: 'nowrap',
                  padding: '17px 29px',
                  background: '#fff',
                  color: '#14183A',
                  fontWeight: '700',
                  fontSize: '17px',
                  borderRadius: '2px',
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
