'use client';

import React from 'react';
import HeaderHeightSync from './HeaderHeightSync';
import TopBar from './TopBar';
import MobileNav from './MobileNav';
import MaterialsDropdown from './MaterialsDropdown';
import '../styles/home.css';
import SiteFooter from './SiteFooter';

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
            <TopBar />
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
                  {vals.materialsOpen && <MaterialsDropdown />}
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
                padding: 'calc(var(--bbs-header-h, 125px) + 48px) 32px 112px',
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
        <section
          id="contact"
          style={{
            position: 'relative',
            marginTop: '80px',
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
        <SiteFooter />
      </div>
    );
  }
}
