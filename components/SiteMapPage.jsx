'use client';

import React from 'react';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import '../styles/inside.css';


export default class SiteMapPage extends React.Component {
  state = { menu: null, scrolled: false };

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

  renderVals() {

    return {
      headerClass: this.state.scrolled ? 'is-sticky' : '',
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
          <SiteHeader vals={vals} />
          <section
            style={{
              position: 'relative',
              background: "#14183A url('/bbs-img/bbs-building.jpg') 43% 62%/cover no-repeat",
              minHeight: '420px',
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
                Site Map
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
                Every page on our website in one place.
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
              <span style={{ color: '#14183A', fontWeight: '600' }}>Site Map</span>
            </div>
          </div>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
            <div style={{ marginTop: '0' }}>
              <h2
                style={{
                  margin: '0',
                  fontFamily: "'Barlow Condensed',sans-serif",
                  fontSize: 'clamp(30px,3vw,38px)',
                  fontWeight: '700',
                  letterSpacing: '.02em',
                  textTransform: 'uppercase',
                  color: '#14183A',
                  lineHeight: '1.05',
                }}
              >
                Main Pages
              </h2>
              <ul style={{ margin: '24px 0 0', paddingLeft: '22px', listStyle: 'disc', color: '#4A4F6A' }}>
                <li style={{ padding: '5px 0', fontSize: '18px' }}>
                  <a
                    className="hv-b2d6c8"
                    href="/"
                    style={{ color: '#313893', textDecoration: 'underline', textUnderlineOffset: '3px' }}
                  >
                    Home
                  </a>
                </li>
                <li style={{ padding: '5px 0', fontSize: '18px' }}>
                  <a
                    className="hv-b2d6c8"
                    href="/materials"
                    style={{ color: '#313893', textDecoration: 'underline', textUnderlineOffset: '3px' }}
                  >
                    Materials
                  </a>
                </li>
                <li style={{ padding: '5px 0', fontSize: '18px' }}>
                  <a
                    className="hv-b2d6c8"
                    href="/design"
                    style={{ color: '#313893', textDecoration: 'underline', textUnderlineOffset: '3px' }}
                  >
                    Design
                  </a>
                </li>
                <li style={{ padding: '5px 0', fontSize: '18px' }}>
                  <a
                    className="hv-b2d6c8"
                    href="/design#drafting-contract"
                    style={{ color: '#313893', textDecoration: 'underline', textUnderlineOffset: '3px' }}
                  >
                    Drafting Contract
                  </a>
                </li>
                <li style={{ padding: '5px 0', fontSize: '18px' }}>
                  <a
                    className="hv-b2d6c8"
                    href="/design#design-tools"
                    style={{ color: '#313893', textDecoration: 'underline', textUnderlineOffset: '3px' }}
                  >
                    Brand & Product Design Tools
                  </a>
                </li>
                <li style={{ padding: '5px 0', fontSize: '18px' }}>
                  <a
                    className="hv-b2d6c8"
                    href="/gallery"
                    style={{ color: '#313893', textDecoration: 'underline', textUnderlineOffset: '3px' }}
                  >
                    Gallery
                  </a>
                </li>
                <li style={{ padding: '5px 0', fontSize: '18px' }}>
                  <a
                    className="hv-b2d6c8"
                    href="/about"
                    style={{ color: '#313893', textDecoration: 'underline', textUnderlineOffset: '3px' }}
                  >
                    About Us
                  </a>
                </li>
                <li style={{ padding: '5px 0', fontSize: '18px' }}>
                  <a
                    className="hv-b2d6c8"
                    href="/contact"
                    style={{ color: '#313893', textDecoration: 'underline', textUnderlineOffset: '3px' }}
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div style={{ marginTop: '56px' }}>
              <h2
                style={{
                  margin: '0',
                  fontFamily: "'Barlow Condensed',sans-serif",
                  fontSize: 'clamp(30px,3vw,38px)',
                  fontWeight: '700',
                  letterSpacing: '.02em',
                  textTransform: 'uppercase',
                  color: '#14183A',
                  lineHeight: '1.05',
                }}
              >
                Materials
              </h2>
              <ul style={{ margin: '24px 0 0', paddingLeft: '22px', listStyle: 'disc', color: '#4A4F6A' }}>
                <li style={{ padding: '5px 0', fontSize: '18px' }}>
                  <a
                    className="hv-b2d6c8"
                    href="/materials#kitchen-bath"
                    style={{ color: '#313893', textDecoration: 'underline', textUnderlineOffset: '3px' }}
                  >
                    Kitchen & Bath
                  </a>
                </li>
                <li style={{ padding: '5px 0', fontSize: '18px' }}>
                  <a
                    className="hv-b2d6c8"
                    href="/materials#decking-railing"
                    style={{ color: '#313893', textDecoration: 'underline', textUnderlineOffset: '3px' }}
                  >
                    Decking & Railing
                  </a>
                </li>
                <li style={{ padding: '5px 0', fontSize: '18px' }}>
                  <a
                    className="hv-b2d6c8"
                    href="/materials#windows"
                    style={{ color: '#313893', textDecoration: 'underline', textUnderlineOffset: '3px' }}
                  >
                    Windows
                  </a>
                </li>
                <li style={{ padding: '5px 0', fontSize: '18px' }}>
                  <a
                    className="hv-b2d6c8"
                    href="/materials#exterior-doors"
                    style={{ color: '#313893', textDecoration: 'underline', textUnderlineOffset: '3px' }}
                  >
                    Exterior Doors
                  </a>
                </li>
                <li style={{ padding: '5px 0', fontSize: '18px' }}>
                  <a
                    className="hv-b2d6c8"
                    href="/materials#interior-doors-trim"
                    style={{ color: '#313893', textDecoration: 'underline', textUnderlineOffset: '3px' }}
                  >
                    Interior Doors & Trim
                  </a>
                </li>
                <li style={{ padding: '5px 0', fontSize: '18px' }}>
                  <a
                    className="hv-b2d6c8"
                    href="/materials#siding"
                    style={{ color: '#313893', textDecoration: 'underline', textUnderlineOffset: '3px' }}
                  >
                    Siding
                  </a>
                </li>
                <li style={{ padding: '5px 0', fontSize: '18px' }}>
                  <a
                    className="hv-b2d6c8"
                    href="/materials#roofing"
                    style={{ color: '#313893', textDecoration: 'underline', textUnderlineOffset: '3px' }}
                  >
                    Roofing
                  </a>
                </li>
              </ul>
            </div>
            <div style={{ marginTop: '56px' }}>
              <h2
                style={{
                  margin: '0',
                  fontFamily: "'Barlow Condensed',sans-serif",
                  fontSize: 'clamp(30px,3vw,38px)',
                  fontWeight: '700',
                  letterSpacing: '.02em',
                  textTransform: 'uppercase',
                  color: '#14183A',
                  lineHeight: '1.05',
                }}
              >
                On the Home Page
              </h2>
              <ul style={{ margin: '24px 0 0', paddingLeft: '22px', listStyle: 'disc', color: '#4A4F6A' }}>
                <li style={{ padding: '5px 0', fontSize: '18px' }}>
                  <a
                    className="hv-b2d6c8"
                    href="/#materials"
                    style={{ color: '#313893', textDecoration: 'underline', textUnderlineOffset: '3px' }}
                  >
                    Materials
                  </a>
                </li>
                <li style={{ padding: '5px 0', fontSize: '18px' }}>
                  <a
                    className="hv-b2d6c8"
                    href="/#showroom"
                    style={{ color: '#313893', textDecoration: 'underline', textUnderlineOffset: '3px' }}
                  >
                    Interactive Showroom
                  </a>
                </li>
                <li style={{ padding: '5px 0', fontSize: '18px' }}>
                  <a
                    className="hv-b2d6c8"
                    href="/#design"
                    style={{ color: '#313893', textDecoration: 'underline', textUnderlineOffset: '3px' }}
                  >
                    Drafting & Design
                  </a>
                </li>
                <li style={{ padding: '5px 0', fontSize: '18px' }}>
                  <a
                    className="hv-b2d6c8"
                    href="/#about"
                    style={{ color: '#313893', textDecoration: 'underline', textUnderlineOffset: '3px' }}
                  >
                    About Us
                  </a>
                </li>
                <li style={{ padding: '5px 0', fontSize: '18px' }}>
                  <a
                    className="hv-b2d6c8"
                    href="/#gallery"
                    style={{ color: '#313893', textDecoration: 'underline', textUnderlineOffset: '3px' }}
                  >
                    Gallery
                  </a>
                </li>
                <li style={{ padding: '5px 0', fontSize: '18px' }}>
                  <a
                    className="hv-b2d6c8"
                    href="/#contact"
                    style={{ color: '#313893', textDecoration: 'underline', textUnderlineOffset: '3px' }}
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div style={{ marginTop: '56px' }}>
              <h2
                style={{
                  margin: '0',
                  fontFamily: "'Barlow Condensed',sans-serif",
                  fontSize: 'clamp(30px,3vw,38px)',
                  fontWeight: '700',
                  letterSpacing: '.02em',
                  textTransform: 'uppercase',
                  color: '#14183A',
                  lineHeight: '1.05',
                }}
              >
                Policies & Information
              </h2>
              <ul style={{ margin: '24px 0 0', paddingLeft: '22px', listStyle: 'disc', color: '#4A4F6A' }}>
                <li style={{ padding: '5px 0', fontSize: '18px' }}>
                  <a
                    className="hv-b2d6c8"
                    href="/privacy-policy"
                    style={{ color: '#313893', textDecoration: 'underline', textUnderlineOffset: '3px' }}
                  >
                    Privacy Policy
                  </a>
                </li>
                <li style={{ padding: '5px 0', fontSize: '18px' }}>
                  <a
                    className="hv-b2d6c8"
                    href="/ai-policy"
                    style={{ color: '#313893', textDecoration: 'underline', textUnderlineOffset: '3px' }}
                  >
                    AI Policy
                  </a>
                </li>
                <li style={{ padding: '5px 0', fontSize: '18px' }}>
                  <a
                    className="hv-b2d6c8"
                    href="/ai-readiness-service-index"
                    style={{ color: '#313893', textDecoration: 'underline', textUnderlineOffset: '3px' }}
                  >
                    AI Readiness Service Index
                  </a>
                </li>
                <li style={{ padding: '5px 0', fontSize: '18px' }}>
                  <a
                    className="hv-b2d6c8"
                    href="/site-map"
                    style={{ color: '#313893', textDecoration: 'underline', textUnderlineOffset: '3px' }}
                  >
                    Site Map
                  </a>
                </li>
              </ul>
            </div>
            <div style={{ marginTop: '56px' }}>
              <a
                className="hv-66db52"
                href="/"
                style={{
                  display: 'inline-block',
                  padding: '15px 26px',
                  border: '1.5px solid #313893',
                  color: '#313893',
                  fontWeight: '700',
                  borderRadius: '2px',
                }}
              >
                Back to Home
              </a>
            </div>
          </div>
        </section>
        <SiteFooter />
      </div>
    );
  }
}
