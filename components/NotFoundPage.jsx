'use client';

import React from 'react';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import { MATERIALS_NAV } from './MaterialsDropdown';
import '../styles/inside.css';

const linkStyle = { color: '#313893', textDecoration: 'underline', textUnderlineOffset: '3px' };

export default class NotFoundPage extends React.Component {
  state = { menu: null, scrolled: false };

  componentDidMount() {
    this.handleScroll = () => {
      const scrolled = window.scrollY > 80;
      if (scrolled !== this.state.scrolled) this.setState({ scrolled });
    };
    window.addEventListener('scroll', this.handleScroll, { passive: true });
    this.handleScroll();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
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
            className="bbs-hero-banner"
            style={{
              position: 'relative',
              background: "#14183A url('/bbs-img/bbs-building.jpg') 43% 62%/cover no-repeat",
              minHeight: '420px',
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
                Page Not Found
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
                The page you requested is unavailable or may have moved. Browse the site pages below to continue.
              </p>
            </div>
          </section>
        </div>
        <section style={{ padding: '25px 0 112px' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
            <nav
              aria-label="Breadcrumb"
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
              <span style={{ color: '#14183A', fontWeight: '600' }}>Page Not Found</span>
            </nav>
          </div>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
            <div style={{ marginTop: '0' }}>
              <h2
                style={{
                  margin: '0',
                  fontFamily: "'Roboto Condensed',sans-serif",
                  fontSize: 'clamp(30px,3vw,38px)',
                  fontWeight: '700',
                  letterSpacing: '-.015em',
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
                  fontFamily: "'Roboto Condensed',sans-serif",
                  fontSize: 'clamp(30px,3vw,38px)',
                  fontWeight: '700',
                  letterSpacing: '-.015em',
                  textTransform: 'uppercase',
                  color: '#14183A',
                  lineHeight: '1.05',
                }}
              >
                Materials
              </h2>
              <ul style={{ margin: '24px 0 0', paddingLeft: '22px', listStyle: 'disc', color: '#4A4F6A' }}>
                {MATERIALS_NAV.map((item) => (
                  <li key={item.slug} style={{ padding: '5px 0', fontSize: '18px' }}>
                    <a className="hv-b2d6c8" href={item.href} style={linkStyle}>
                      {item.name}
                    </a>
                    {item.children?.length > 0 && (
                      <ul style={{ margin: '8px 0 4px', paddingLeft: '22px', listStyle: 'disc' }}>
                        {item.children.map((child) => (
                          <li key={child.slug} style={{ padding: '4px 0', fontSize: '17px' }}>
                            <a className="hv-b2d6c8" href={child.href} style={linkStyle}>
                              {child.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ marginTop: '56px' }}>
              <h2
                style={{
                  margin: '0',
                  fontFamily: "'Roboto Condensed',sans-serif",
                  fontSize: 'clamp(30px,3vw,38px)',
                  fontWeight: '700',
                  letterSpacing: '-.015em',
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
                    href="/#showroom"
                    style={{ color: '#313893', textDecoration: 'underline', textUnderlineOffset: '3px' }}
                  >
                    Interactive Showroom
                  </a>
                </li>
                <li style={{ padding: '5px 0', fontSize: '18px' }}>
                  <a
                    className="hv-b2d6c8"
                    href="/design"
                    style={{ color: '#313893', textDecoration: 'underline', textUnderlineOffset: '3px' }}
                  >
                    Drafting & Design
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
              <a
                className="hv-66db52"
                href="/"
                style={{
                  display: 'inline-block',
                  padding: '15px 26px',
                  border: '1.5px solid #313893',
                  color: '#313893',
                  fontWeight: '700',
                  borderRadius: '3px',
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
