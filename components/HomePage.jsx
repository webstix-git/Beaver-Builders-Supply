'use client';

import React from 'react';
import HeaderHeightSync from './HeaderHeightSync';
import MobileNav from './MobileNav';
import '../styles/home.css';

export default class HomePage extends React.Component {
  state = { menu: null, scrolled: false };

  componentDidMount() {
    this.handleScroll = () => {
      const scrolled = window.scrollY > 80;
      if (scrolled !== this.state.scrolled) this.setState({ scrolled });
    };
    window.addEventListener('scroll', this.handleScroll, { passive: true });
    this.handleScroll();
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
  }

  renderVals() {
    return {
      headerClass: this.state.scrolled ? 'is-sticky' : '',
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
        <section style={{ position: 'relative', zIndex: '2', padding: '0 32px 80px' }}>
          <div
            style={{
              maxWidth: '1216px',
              margin: '-64px auto 0',
              background: '#F6F4EF',
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
                  borderRight: '1px solid #DAD5C8',
                  borderBottom: '1px solid #DAD5C8',
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
        <section id="showroom" style={{ background: '#fff', color: '#000' }}>
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
                  color: '#E31E26',
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
              <p style={{ margin: '24px 0 0', fontSize: '18px', lineHeight: '1.6', color: '#000', textWrap: 'pretty' }}>
                Walk through full-scale displays of siding, decking, railing, windows, doors, and finished interiors.
                Compare colors and textures side by side with a member of our team who knows the products.
              </p>
              <div
                style={{
                  marginTop: '32px',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))',
                  gap: '20px',
                  borderTop: '1px solid #E4E5EE',
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
                      color: '#000',
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
                    style={{ display: 'block', marginTop: '4px', color: '#000', fontSize: '18px', lineHeight: '1.5' }}
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
                    Explore drafting contract
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
