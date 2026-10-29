'use client';

import React from 'react';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import '../styles/inside.css';


export default class AboutPage extends React.Component {
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
      closeMenu: () => this.setState({ menu: null }),
      values: [{ n: '01', t: 'Quality' }, { n: '02', t: 'Honesty' }, { n: '03', t: 'Personal Service' }, { n: '04', t: 'Community' }]
    };
  }

  render() {
    const vals = this.renderVals();
    return (
      <div style={{ minWidth: '0' }}>
        <div style={{ position: 'relative' }}>
          <SiteHeader active="about" vals={vals} />
          <section
            className="bbs-hero-banner"
            style={{
              position: 'relative',
              background: "#14183A url('/New-img/About/hero-banner.jpg') center 45%/cover no-repeat",
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
                About Us
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
                A family tradition spanning three generations, serving homeowners and builders in our community for more
                than 75 years.
              </p>
            </div>
          </section>
        </div>
        <section style={{ padding: '25px 0 0', background: '#F6F4EF' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
            <div
              style={{
                marginBottom: '0',
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
              <span style={{ color: '#14183A', fontWeight: '600' }}>About Us</span>
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
                alt="Beaver Builders' Supply team and yard in Holmen, Wisconsin"
                style={{ width: '86%', aspectRatio: '4/5', objectFit: 'cover', display: 'block', borderRadius: '4px' }}
                loading="lazy"
                decoding="async"
              />
              <img
                src="/New-img/Homepage/about-us-img-2.jpg"
                alt="Building materials and project work from Beaver Builders' Supply"
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
                loading="lazy"
                decoding="async"
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
            </div>
          </div>
        </section>
        <section id="our-story" style={{ padding: '96px 0 112px', background: '#fff', scrollMarginTop: '88px' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,460px),1fr))',
                gap: '64px',
                alignItems: 'center',
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
                  Our Story
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
                  }}
                >
                  Built on a family tradition
                </h2>
                <p
                  style={{ margin: '22px 0 0', fontSize: '18px', lineHeight: '1.6', color: '#4A4F6A', textWrap: 'pretty' }}
                >
                  Beaver Builders' Supply is built on a family tradition spanning three generations. We were created to serve
                  local homeowners and builders with dependable products, expert guidance, and a neighbor-first approach.
                </p>
                <p
                  style={{ margin: '16px 0 0', fontSize: '18px', lineHeight: '1.6', color: '#4A4F6A', textWrap: 'pretty' }}
                >
                  That purpose has not changed. We are locally owned, we employ local neighbors, and our business stays
                  rooted in the community we have served for more than 75 years. When you do business with us, you are doing
                  business with your neighbors.
                </p>
                <div style={{ marginTop: '28px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  <span
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
                    Locally Owned
                  </span>
                  <span
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
                    Three Generations
                  </span>
                  <span
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
                    Local Neighbors
                  </span>
                  <span
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
                    75+ Years
                  </span>
                </div>
              </div>
              <div style={{ position: 'relative' }}>
                <img
                  src="/New-img/About/our-story.jpg"
                  alt="Stone fireplace with built-in cabinets and shelving"
                  style={{ width: '100%', aspectRatio: '5/4', objectFit: 'cover', display: 'block', borderRadius: '4px' }}
                 loading="lazy" decoding="async" />
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
          </div>
        </section>
        <section style={{ padding: '104px 0 112px', background: '#F6F4EF' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
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
              Experience
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
              What we handle in-house
            </h2>
            <div
              style={{
                marginTop: '24px',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill,minmax(min(100%,280px),1fr))',
                gap: '28px',
              }}
            >
              <a
                className="hv-935324"
                href="/contact"
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
                    src="/New-img/About/product-guidance.jpg"
                    alt="Sales team providing product guidance in the showroom"
                    style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover' }}
                   loading="lazy" decoding="async" />
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
                  <h3
                    style={{
                      margin: '0',
                      fontFamily: "'Roboto Condensed',sans-serif",
                      fontSize: '26px',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '0',
                      lineHeight: '1.1',
                    }}
                  >
                    Product Guidance
                  </h3>
                  <div style={{ fontSize: '18px', lineHeight: '1.5', color: '#4A4F6A', textWrap: 'pretty' }}>
                    A sales team that knows how each product performs and helps you choose what fits your quality, value,
                    and budget.
                  </div>
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
                  <span>Talk to our sales team</span>
                  <span aria-hidden="true" style={{ display: 'flex', flex: '0 0 auto', color: '#E31E26' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="3" y1="12" x2="21" y2="12" />
                      <polyline points="14 5 21 12 14 19" />
                    </svg>
                  </span>
                </div>
              </a>
              <a
                className="hv-935324"
                href="/materials#kitchen-bath"
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
                    src="/New-img/About/kitchen-and-bath.jpg"
                    alt="Kitchen and bath design display"
                    style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover' }}
                   loading="lazy" decoding="async" />
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
                  <h3
                    style={{
                      margin: '0',
                      fontFamily: "'Roboto Condensed',sans-serif",
                      fontSize: '26px',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '0',
                      lineHeight: '1.1',
                    }}
                  >
                    Kitchen & Bath Design
                  </h3>
                  <div style={{ fontSize: '18px', lineHeight: '1.5', color: '#4A4F6A', textWrap: 'pretty' }}>
                    In-house cabinet design for kitchens, baths, storage rooms, garages, and more.
                  </div>
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
                  <span>Kitchen & bath</span>
                  <span aria-hidden="true" style={{ display: 'flex', flex: '0 0 auto', color: '#E31E26' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="3" y1="12" x2="21" y2="12" />
                      <polyline points="14 5 21 12 14 19" />
                    </svg>
                  </span>
                </div>
              </a>
              <a
                className="hv-935324"
                href="/design#drafting-contract"
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
                    src="/New-img/About/drafting-and-layout.jpg"
                    alt="Drafting and layout plans for a building project"
                    style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover' }}
                   loading="lazy" decoding="async" />
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
                  <h3
                    style={{
                      margin: '0',
                      fontFamily: "'Roboto Condensed',sans-serif",
                      fontSize: '26px',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '0',
                      lineHeight: '1.1',
                    }}
                  >
                    Drafting & Layout
                  </h3>
                  <div style={{ fontSize: '18px', lineHeight: '1.5', color: '#4A4F6A', textWrap: 'pretty' }}>
                    Our staff helps you lay out your new home or project, at no extra cost when you build with Beaver.
                  </div>
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
                  <span>Drafting contract</span>
                  <span aria-hidden="true" style={{ display: 'flex', flex: '0 0 auto', color: '#E31E26' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="3" y1="12" x2="21" y2="12" />
                      <polyline points="14 5 21 12 14 19" />
                    </svg>
                  </span>
                </div>
              </a>
              <a
                className="hv-935324"
                href="/contact"
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
                    src="/New-img/About/custom-truss.jpg"
                    alt="Custom roof trusses built in-house"
                    style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover' }}
                   loading="lazy" decoding="async" />
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
                  <h3
                    style={{
                      margin: '0',
                      fontFamily: "'Roboto Condensed',sans-serif",
                      fontSize: '26px',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '0',
                      lineHeight: '1.1',
                    }}
                  >
                    Custom Trusses
                  </h3>
                  <div style={{ fontSize: '18px', lineHeight: '1.5', color: '#4A4F6A', textWrap: 'pretty' }}>
                    We are the only local lumber yard that builds trusses in-house, and every truss is custom built.
                  </div>
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
                  <span>Ask about trusses</span>
                  <span aria-hidden="true" style={{ display: 'flex', flex: '0 0 auto', color: '#E31E26' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="3" y1="12" x2="21" y2="12" />
                      <polyline points="14 5 21 12 14 19" />
                    </svg>
                  </span>
                </div>
              </a>
            </div>
          </div>
        </section>
        <section style={{ background: '#14183A', color: '#fff' }}>
          <div
            style={{
              maxWidth: '1280px',
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,480px),1fr))',
            }}
          >
            <div style={{ minHeight: '520px', background: "url('/New-img/Gallery/500103430_9727345597385236_2873127610018809278_n.jpg') center/cover no-repeat" }} role="img" aria-label="Finished home with siding, windows, and entry door" />
            <div
              style={{
                padding: '96px clamp(24px,5vw,56px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  color: '#E31E26',
                  fontFamily: "'Roboto Condensed',sans-serif",
                  fontSize: '17px',
                  fontWeight: '700',
                  letterSpacing: '.08em',
                  textTransform: 'uppercase',
                  color: '#fff',
                }}
              >
                Why Us
              </div>
              <h2
                style={{
                  margin: '12px 0 0',
                  fontFamily: "'Roboto Condensed',sans-serif",
                  fontSize: 'clamp(32px,4.05vw,58px)',
                  lineHeight: '1.1',
                  fontWeight: '700',
                  letterSpacing: '-.015em',
                  textTransform: 'uppercase',
                }}
              >
                What matters most
                <br />
                to us
              </h2>
              <p style={{ margin: '24px 0 0', fontSize: '18px', lineHeight: '1.6', color: '#fff', textWrap: 'pretty' }}>
                Quality, honesty, personal service, and community. We believe customers should feel like they’re working
                with a trusted neighbor, not just another supplier.
              </p>
              <div
                style={{
                  marginTop: '32px',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,220px),1fr))',
                  gap: '28px 32px',
                  borderTop: '1px solid rgba(255,255,255,.18)',
                  paddingTop: '28px',
                }}
              >
                <div>
                  <h3
                    style={{
                      margin: '0',
                      fontFamily: "'Roboto Condensed',sans-serif",
                      fontSize: '24px',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '0',
                      lineHeight: '1.1',
                    }}
                  >
                    Quality
                  </h3>
                  <div style={{ marginTop: '8px', color: '#fff', fontSize: '18px', lineHeight: '1.5' }}>
                    Dependable products from brands we stand behind, recommended by people who know how they perform.
                  </div>
                </div>
                <div>
                  <h3
                    style={{
                      margin: '0',
                      fontFamily: "'Roboto Condensed',sans-serif",
                      fontSize: '24px',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '0',
                      lineHeight: '1.1',
                    }}
                  >
                    Honesty
                  </h3>
                  <div style={{ marginTop: '8px', color: '#fff', fontSize: '18px', lineHeight: '1.5' }}>
                    Straight answers and honest recommendations, so you can make the right call for your project and budget.
                  </div>
                </div>
                <div>
                  <h3
                    style={{
                      margin: '0',
                      fontFamily: "'Roboto Condensed',sans-serif",
                      fontSize: '24px',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '0',
                      lineHeight: '1.1',
                    }}
                  >
                    Personal Service
                  </h3>
                  <div style={{ marginTop: '8px', color: '#fff', fontSize: '18px', lineHeight: '1.5' }}>
                    You work with people who take the time to understand your project, from the first conversation to
                    delivery on site.
                  </div>
                </div>
                <div>
                  <h3
                    style={{
                      margin: '0',
                      fontFamily: "'Roboto Condensed',sans-serif",
                      fontSize: '24px',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '0',
                      lineHeight: '1.1',
                    }}
                  >
                    Community
                  </h3>
                  <div style={{ marginTop: '8px', color: '#fff', fontSize: '18px', lineHeight: '1.5' }}>
                    Locally owned, staffed by local neighbors, and rooted in the community we have served for more than 75
                    years.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section style={{ padding: '104px 0 112px', background: '#fff' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
            <div style={{ maxWidth: '760px' }}>
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
                Service Area
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
                Serving La Crosse and the Coulee Region
              </h2>
              <p style={{ margin: '22px 0 0', maxWidth: '640px', fontSize: '18px', lineHeight: '1.55', color: '#4A4F6A' }}>
                From our showroom and lumber yard in Holmen, we serve builders and homeowners across La Crosse and the
                Coulee Region, with materials delivered right to your job site.
              </p>
            </div>
            <div
              style={{
                marginTop: '48px',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,420px),1fr))',
                background: '#fff',
                borderRadius: '4px',
                overflow: 'hidden',
                border: '1px solid #E4E5EE',
                boxShadow: '0 18px 44px rgba(20,24,58,.08)',
              }}
            >
              <iframe
                title="Map to Beaver Builders' Supply"
                src="https://maps.google.com/maps?q=N6838+Builders+Ct+Holmen+WI+54636&output=embed"
                loading="lazy"
                style={{
                  display: 'block',
                  width: '100%',
                  minHeight: '420px',
                  height: '100%',
                  border: '0',
                  borderRight: '1px solid #ECEDF3',
                }}
              />
              <div style={{ padding: '36px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
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
                  Visit Us
                </span>
                <div
                  style={{
                    marginTop: '14px',
                    fontFamily: "'Roboto Condensed',sans-serif",
                    fontSize: '28px',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    lineHeight: '1.1',
                    color: '#14183A',
                  }}
                >
                  Showroom & lumber yard in Holmen
                </div>
                <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ padding: '16px 0', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <span
                      style={{
                        fontFamily: "'Roboto Condensed',sans-serif",
                        fontSize: '15px',
                        fontWeight: '700',
                        letterSpacing: '.08em',
                        textTransform: 'uppercase',
                        color: '#E31E26',
                      }}
                    >
                      Showroom & Yard
                    </span>
                    <span style={{ fontSize: '18px', fontWeight: '600', lineHeight: '1.45', color: '#14183A' }}>
                      <a
                        className="hv-b2d6c8"
                        href="https://www.google.com/maps/search/?api=1&query=Beaver+Builders+Supply+N6838+Builders+Ct+Holmen+WI+54636"
                        target="_blank"
                        rel="noopener"
                        style={{ color: '#14183A' }}
                      >
                        N6838 Builders Ct., Holmen, WI 54636
                      </a>
                      <br />
                      <span style={{ fontWeight: '400', color: '#4A4F6A' }}>
                        Just off the MH/McHugh exit, near Holmen High School.
                      </span>
                    </span>
                  </div>
                  <div
                    style={{
                      padding: '16px 0',
                      borderTop: '1px solid #ECEDF3',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Roboto Condensed',sans-serif",
                        fontSize: '15px',
                        fontWeight: '700',
                        letterSpacing: '.08em',
                        textTransform: 'uppercase',
                        color: '#E31E26',
                      }}
                    >
                      Hours
                    </span>
                    <span style={{ fontSize: '18px', fontWeight: '600', lineHeight: '1.45', color: '#14183A' }}>
                      Monday to Friday, 7:30 AM to 4:30 PM
                    </span>
                  </div>
                  <div
                    style={{
                      padding: '16px 0',
                      borderTop: '1px solid #ECEDF3',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Roboto Condensed',sans-serif",
                        fontSize: '15px',
                        fontWeight: '700',
                        letterSpacing: '.08em',
                        textTransform: 'uppercase',
                        color: '#E31E26',
                      }}
                    >
                      Phone
                    </span>
                    <span style={{ fontSize: '18px', fontWeight: '600', lineHeight: '1.45', color: '#14183A' }}>
                      <a className="hv-b2d6c8" href="tel:6085263232" style={{ color: '#14183A' }}>
                        608-526-3232
                      </a>
                    </span>
                  </div>
                </div>
                <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
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
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          style={{
            position: 'relative',
            background: "#14183A url('/assets/showroom.jpg') center/cover no-repeat",
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
