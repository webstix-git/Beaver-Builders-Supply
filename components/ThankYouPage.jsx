'use client';

import React from 'react';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import '../styles/inside.css';

export default class ThankYouPage extends React.Component {
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
              background: "#14183A url('/New-img/Contact/hero-section.jpg') center 60%/cover no-repeat",
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
                Contact - Thank You
              </h1>
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
              <a className="hv-b2d6c8" href="/contact" style={{ color: '#313893' }}>
                Contact Us
              </a>
              <span style={{ color: '#9CA0BE' }}>/</span>
              <span style={{ color: '#14183A', fontWeight: '600' }}>Thank You</span>
            </div>
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
              Request Received
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
              Thanks for contacting us!
            </h2>
            <p style={{ margin: '20px 0 0', fontSize: '18px', lineHeight: '1.6', color: '#4A4F6A', textWrap: 'pretty' }}>
              We will get in touch with you shortly.
            </p>
          </div>
        </section>
        <SiteFooter />
      </div>
    );
  }
}
