'use client';

import React from 'react';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import '../styles/inside.css';


export default class DesignPage extends React.Component {
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
          <SiteHeader active="design" vals={vals} />
          <section
            className="bbs-hero-banner"
            style={{
              position: 'relative',
              background: "#14183A url('/New-img/Design/hero-section-banner.jpg') center 50%/cover no-repeat",
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
                Design
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
                Plan it right before the first board is cut. Work with our in-house drafting team, then explore design tools
                from the brands we carry.
              </p>
            </div>
          </section>
        </div>
        <section
          id="drafting-contract"
          style={{ padding: '25px 0 112px', background: '#F6F4EF', overflow: 'hidden', scrollMarginTop: '80px' }}
        >
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
              <span style={{ color: '#14183A', fontWeight: '600' }}>Design</span>
            </div>
          </div>
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
            <div className="bbs-split-media" style={{ position: 'relative' }}>
              <img
                src="/New-img/Design/drafting-contract.jpg"
                alt="New homes built with Beaver Builders' Supply"
                style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block', borderRadius: '4px' }}
              />
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
                Drafting Contract
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
                Plans drawn by people who know the materials
              </h2>
              <p style={{ margin: '24px 0 0', fontSize: '18px', lineHeight: '1.6', color: '#4A4F6A', textWrap: 'pretty' }}>
                Our in-house drafting team works with builders and homeowners on plans for new homes, additions, and
                remodels. When you build with Beaver, our staff will help you lay out your new home or project, so your
                plans and your materials come from the same team.
              </p>
              <p style={{ margin: '16px 0 0', fontSize: '18px', lineHeight: '1.6', color: '#4A4F6A', textWrap: 'pretty' }}>
                Getting started is simple. Review our drafting contract, tell us about your project, and we'll set up a
                time to sit down with you.
              </p>
              <ul style={{ margin: '28px 0 0', padding: '0', listStyle: 'none', display: 'grid', gap: '12px' }}>
                <li
                  style={{
                    display: 'flex',
                    gap: '14px',
                    alignItems: 'flex-start',
                    fontSize: '18px',
                    lineHeight: '1.5',
                    color: '#14183A',
                    fontWeight: '600',
                  }}
                >
                  <span
                    style={{
                      flex: '0 0 10px',
                      width: '10px',
                      height: '10px',
                      marginTop: '8px',
                      background: '#E31E26',
                      borderRadius: '2px',
                    }}
                  />
                  Plans for new homes, additions, and remodels
                </li>
                <li
                  style={{
                    display: 'flex',
                    gap: '14px',
                    alignItems: 'flex-start',
                    fontSize: '18px',
                    lineHeight: '1.5',
                    color: '#14183A',
                    fontWeight: '600',
                  }}
                >
                  <span
                    style={{
                      flex: '0 0 10px',
                      width: '10px',
                      height: '10px',
                      marginTop: '8px',
                      background: '#E31E26',
                      borderRadius: '2px',
                    }}
                  />
                  Layouts built around the products you choose
                </li>
                <li
                  style={{
                    display: 'flex',
                    gap: '14px',
                    alignItems: 'flex-start',
                    fontSize: '18px',
                    lineHeight: '1.5',
                    color: '#14183A',
                    fontWeight: '600',
                  }}
                >
                  <span
                    style={{
                      flex: '0 0 10px',
                      width: '10px',
                      height: '10px',
                      marginTop: '8px',
                      background: '#E31E26',
                      borderRadius: '2px',
                    }}
                  />
                  Coordination with our kitchen and bath cabinet designers
                </li>
                <li
                  style={{
                    display: 'flex',
                    gap: '14px',
                    alignItems: 'flex-start',
                    fontSize: '18px',
                    lineHeight: '1.5',
                    color: '#14183A',
                    fontWeight: '600',
                  }}
                >
                  <span
                    style={{
                      flex: '0 0 10px',
                      width: '10px',
                      height: '10px',
                      marginTop: '8px',
                      background: '#E31E26',
                      borderRadius: '2px',
                    }}
                  />
                  A materials list and pricing from our sales team
                </li>
              </ul>
              <div className="bbs-split-cta" style={{ marginTop: '36px', display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center' }}>
                <a
                  className="hv-6a96a5"
                  href="/documents/BBS_Drafting_Contract_2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
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
                  View the drafting contract
                </a>
                <a
                  className="hv-66db52"
                  href="tel:6085263232"
                  style={{
                    display: 'inline-block',
                    padding: '15px 26px',
                    border: '1.5px solid #313893',
                    color: '#313893',
                    fontWeight: '700',
                    borderRadius: '3px',
                  }}
                >
                  Call 608-526-3232
                </a>
              </div>
            </div>
          </div>
        </section>
        <section style={{ padding: '104px 0 112px', background: '#fff' }}>
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
                How Drafting Works
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
                From the first sketch to delivery on site
              </h2>
            </div>
            <div
              style={{
                marginTop: '56px',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill,minmax(min(100%,280px),1fr))',
                gap: '28px',
              }}
            >
              <div
                className="hv-935324"
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
                    src="/New-img/Design/request-the-contract.jpg"
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
                <div
                  style={{ padding: '24px 24px 28px', display: 'flex', flexDirection: 'column', gap: '10px', flex: '1' }}
                >
                  <span
                    style={{
                      width: '48px',
                      height: '48px',
                      background: '#E31E26',
                      color: '#fff',
                      fontFamily: "'Roboto Condensed',sans-serif",
                      fontSize: '32px',
                      fontWeight: '700',
                      lineHeight: '1.1',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    1
                  </span>
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
                    Review the Contract
                  </div>
                  <div style={{ fontSize: '18px', lineHeight: '1.5', color: '#4A4F6A', textWrap: 'pretty' }}>
                    Open our drafting contract to review the fees and terms, then tell us about your new home, addition, or
                    remodel.
                  </div>
                </div>
              </div>
              <div
                className="hv-935324"
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
                    src="/New-img/Design/design-staff.jpg"
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
                <div
                  style={{ padding: '24px 24px 28px', display: 'flex', flexDirection: 'column', gap: '10px', flex: '1' }}
                >
                  <span
                    style={{
                      width: '48px',
                      height: '48px',
                      background: '#E31E26',
                      color: '#fff',
                      fontFamily: "'Roboto Condensed',sans-serif",
                      fontSize: '32px',
                      fontWeight: '700',
                      lineHeight: '1.1',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    2
                  </span>
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
                    Meet Our Design Staff
                  </div>
                  <div style={{ fontSize: '18px', lineHeight: '1.5', color: '#4A4F6A', textWrap: 'pretty' }}>
                    Sit down with our team to lay out rooms, sizes, and the must-haves for your project.
                  </div>
                </div>
              </div>
              <div
                className="hv-935324"
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
                    src="/New-img/Design/review.jpg"
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
                <div
                  style={{ padding: '24px 24px 28px', display: 'flex', flexDirection: 'column', gap: '10px', flex: '1' }}
                >
                  <span
                    style={{
                      width: '48px',
                      height: '48px',
                      background: '#E31E26',
                      color: '#fff',
                      fontFamily: "'Roboto Condensed',sans-serif",
                      fontSize: '32px',
                      fontWeight: '700',
                      lineHeight: '1.1',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    3
                  </span>
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
                    Review Your Plans
                  </div>
                  <div style={{ fontSize: '18px', lineHeight: '1.5', color: '#4A4F6A', textWrap: 'pretty' }}>
                    We draft your plans in-house and walk through revisions with you until they are right.
                  </div>
                </div>
              </div>
              <div
                className="hv-935324"
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
                    src="/New-img/Design/build.jpg"
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
                <div
                  style={{ padding: '24px 24px 28px', display: 'flex', flexDirection: 'column', gap: '10px', flex: '1' }}
                >
                  <span
                    style={{
                      width: '48px',
                      height: '48px',
                      background: '#E31E26',
                      color: '#fff',
                      fontFamily: "'Roboto Condensed',sans-serif",
                      fontSize: '32px',
                      fontWeight: '700',
                      lineHeight: '1.1',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    4
                  </span>
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
                    Build with Beaver
                  </div>
                  <div style={{ fontSize: '18px', lineHeight: '1.5', color: '#4A4F6A', textWrap: 'pretty' }}>
                    Your plans become a materials list, and we deliver everything to your job site.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="design-tools" style={{ padding: '104px 0 112px', background: '#F6F4EF', scrollMarginTop: '80px' }}>
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
                Brand & Product Design Tools
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
                Try it before you build it
              </h2>
              <p style={{ margin: '20px 0 0', fontSize: '18px', lineHeight: '1.6', color: '#4A4F6A', textWrap: 'pretty' }}>
                Our brands offer free online tools to plan decks, try siding and roofing colors, and see windows, doors, and
                countertops before you buy. Bring your design to our showroom or send it to our sales team and we will help
                you price it out.
              </p>
            </div>
            <div
              style={{
                marginTop: '48px',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill,minmax(min(100%,280px),1fr))',
                gap: '20px',
              }}
            >
              <a
                className="hv-25c4e5"
                href="https://www.cambriausa.com/quartz-countertops/planning/tools/room-visualizer"
                target="_blank"
                rel="noopener"
                style={{
                  background: '#fff',
                  border: '1px solid #E4E5EE',
                  borderRadius: '4px',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  color: '#14183A',
                  transition: 'transform .2s ease,box-shadow .2s ease,border-color .2s ease',
                }}
              >
                <span
                  style={{
                    height: '96px',
                    borderRadius: '3px',
                    background: '#14183A',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span style={{ position: 'relative', width: '72%', height: '54px' }}>
                    <img
                      src="/Supplier%27s-logo/Kitchen-and-Bath/Countertops/cambria-h-rev-rgb-cusa-nav.svg"
                      alt="Cambria"
                      style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                  </span>
                </span>
                <span
                  style={{
                    marginTop: '6px',
                    fontFamily: "'Roboto Condensed',sans-serif",
                    fontSize: '15px',
                    fontWeight: '700',
                    letterSpacing: '.08em',
                    textTransform: 'uppercase',
                    color: '#E31E26',
                  }}
                >
                  Kitchen & Bath
                </span>
                <span
                  style={{
                    fontFamily: "'Roboto Condensed',sans-serif",
                    fontSize: '24px',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '0',
                    lineHeight: '1.1',
                  }}
                >
                  Cambria Room Visualizer
                </span>
                <span style={{ fontSize: '18px', lineHeight: '1.55', color: '#4A4F6A', flex: '1' }}>
                  Upload a photo of your kitchen or bath, or use a sample room, and preview Cambria quartz countertops and
                  backsplashes.
                </span>
                <span
                  style={{
                    marginTop: '6px',
                    paddingTop: '14px',
                    borderTop: '1px solid #ECEDF3',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '12px',
                    fontSize: '15px',
                    fontWeight: '700',
                    color: '#313893',
                  }}
                >
                  <span>Open design tool</span>
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
                </span>
              </a>
              <a
                className="hv-25c4e5"
                href="https://www.trex.com/build-your-deck/planyourdeck/deck-designer/"
                target="_blank"
                rel="noopener"
                style={{
                  background: '#fff',
                  border: '1px solid #E4E5EE',
                  borderRadius: '4px',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  color: '#14183A',
                  transition: 'transform .2s ease,box-shadow .2s ease,border-color .2s ease',
                }}
              >
                <span
                  style={{
                    height: '96px',
                    borderRadius: '3px',
                    background: '#F6F7FA',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span style={{ position: 'relative', width: '72%', height: '54px' }}>
                    <img
                      src="/Supplier%27s-logo/Decking-and-railing/Trex-logo-30years-1996-2026-spruce-svg.svg"
                      alt="Trex"
                      style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                  </span>
                </span>
                <span
                  style={{
                    marginTop: '6px',
                    fontFamily: "'Roboto Condensed',sans-serif",
                    fontSize: '15px',
                    fontWeight: '700',
                    letterSpacing: '.08em',
                    textTransform: 'uppercase',
                    color: '#E31E26',
                  }}
                >
                  Decking & Railing
                </span>
                <span
                  style={{
                    fontFamily: "'Roboto Condensed',sans-serif",
                    fontSize: '24px',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '0',
                    lineHeight: '1.1',
                  }}
                >
                  Trex Deck Designer
                </span>
                <span style={{ fontSize: '18px', lineHeight: '1.55', color: '#4A4F6A', flex: '1' }}>
                  Plan your deck in 3D with Trex decking and railing, then get a list of the materials you need.
                </span>
                <span
                  style={{
                    marginTop: '6px',
                    paddingTop: '14px',
                    borderTop: '1px solid #ECEDF3',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '12px',
                    fontSize: '15px',
                    fontWeight: '700',
                    color: '#313893',
                  }}
                >
                  <span>Open design tool</span>
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
                </span>
              </a>
              <a
                className="hv-25c4e5"
                href="https://www.timbertech.com/design/deck-designer/"
                target="_blank"
                rel="noopener"
                style={{
                  background: '#fff',
                  border: '1px solid #E4E5EE',
                  borderRadius: '4px',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  color: '#14183A',
                  transition: 'transform .2s ease,box-shadow .2s ease,border-color .2s ease',
                }}
              >
                <span
                  style={{
                    height: '96px',
                    borderRadius: '3px',
                    background: '#F6F7FA',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span style={{ position: 'relative', width: '72%', height: '54px' }}>
                    <img
                      src="/Supplier%27s-logo/Decking-and-railing/media_17d01ea215a1921f4155d544e142f109d1cac8805.svg"
                      alt="TimberTech"
                      style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                  </span>
                </span>
                <span
                  style={{
                    marginTop: '6px',
                    fontFamily: "'Roboto Condensed',sans-serif",
                    fontSize: '15px',
                    fontWeight: '700',
                    letterSpacing: '.08em',
                    textTransform: 'uppercase',
                    color: '#E31E26',
                  }}
                >
                  Decking & Railing
                </span>
                <span
                  style={{
                    fontFamily: "'Roboto Condensed',sans-serif",
                    fontSize: '24px',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '0',
                    lineHeight: '1.1',
                  }}
                >
                  TimberTech 3D Deck Designer
                </span>
                <span style={{ fontSize: '18px', lineHeight: '1.55', color: '#4A4F6A', flex: '1' }}>
                  Start from a template, a photo, or from scratch. Try decking, railing, and lighting, and download a
                  materials list.
                </span>
                <span
                  style={{
                    marginTop: '6px',
                    paddingTop: '14px',
                    borderTop: '1px solid #ECEDF3',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '12px',
                    fontSize: '15px',
                    fontWeight: '700',
                    color: '#313893',
                  }}
                >
                  <span>Open design tool</span>
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
                </span>
              </a>
              <a
                className="hv-25c4e5"
                href="https://www.deckorators.com/pages/deck-visualizer"
                target="_blank"
                rel="noopener"
                style={{
                  background: '#fff',
                  border: '1px solid #E4E5EE',
                  borderRadius: '4px',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  color: '#14183A',
                  transition: 'transform .2s ease,box-shadow .2s ease,border-color .2s ease',
                }}
              >
                <span
                  style={{
                    height: '96px',
                    borderRadius: '3px',
                    background: '#14183A',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span style={{ position: 'relative', width: '72%', height: '54px' }}>
                    <img
                      src="/Supplier%27s-logo/Decking-and-railing/deckorators-horizontal-notagline-whiteandred-logo.webp"
                      alt="Deckorators"
                      style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                  </span>
                </span>
                <span
                  style={{
                    marginTop: '6px',
                    fontFamily: "'Roboto Condensed',sans-serif",
                    fontSize: '15px',
                    fontWeight: '700',
                    letterSpacing: '.08em',
                    textTransform: 'uppercase',
                    color: '#E31E26',
                  }}
                >
                  Decking & Railing
                </span>
                <span
                  style={{
                    fontFamily: "'Roboto Condensed',sans-serif",
                    fontSize: '24px',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '0',
                    lineHeight: '1.1',
                  }}
                >
                  Deckorators Deck Visualizer
                </span>
                <span style={{ fontSize: '18px', lineHeight: '1.55', color: '#4A4F6A', flex: '1' }}>
                  Mix and match Deckorators decking, railing, and privacy screen colors on realistic home settings.
                </span>
                <span
                  style={{
                    marginTop: '6px',
                    paddingTop: '14px',
                    borderTop: '1px solid #ECEDF3',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '12px',
                    fontSize: '15px',
                    fontWeight: '700',
                    color: '#313893',
                  }}
                >
                  <span>Open design tool</span>
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
                </span>
              </a>
              <a
                className="hv-25c4e5"
                href="https://www.andersenwindows.com/ideas-and-inspiration/design-tool"
                target="_blank"
                rel="noopener"
                style={{
                  background: '#fff',
                  border: '1px solid #E4E5EE',
                  borderRadius: '4px',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  color: '#14183A',
                  transition: 'transform .2s ease,box-shadow .2s ease,border-color .2s ease',
                }}
              >
                <span
                  style={{
                    height: '96px',
                    borderRadius: '3px',
                    background: '#F6F7FA',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span style={{ position: 'relative', width: '72%', height: '54px' }}>
                    <img
                      src="/Supplier%27s-logo/Windows/andersen_logo_tm_rectangle_rgb.svg"
                      alt="Andersen"
                      style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                  </span>
                </span>
                <span
                  style={{
                    marginTop: '6px',
                    fontFamily: "'Roboto Condensed',sans-serif",
                    fontSize: '15px',
                    fontWeight: '700',
                    letterSpacing: '.08em',
                    textTransform: 'uppercase',
                    color: '#E31E26',
                  }}
                >
                  Windows
                </span>
                <span
                  style={{
                    fontFamily: "'Roboto Condensed',sans-serif",
                    fontSize: '24px',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '0',
                    lineHeight: '1.1',
                  }}
                >
                  Andersen Design Tool
                </span>
                <span style={{ fontSize: '18px', lineHeight: '1.55', color: '#4A4F6A', flex: '1' }}>
                  See what an Andersen window or door could look like with different colors and options.
                </span>
                <span
                  style={{
                    marginTop: '6px',
                    paddingTop: '14px',
                    borderTop: '1px solid #ECEDF3',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '12px',
                    fontSize: '15px',
                    fontWeight: '700',
                    color: '#313893',
                  }}
                >
                  <span>Open design tool</span>
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
                </span>
              </a>
              <a
                className="hv-25c4e5"
                href="https://www.thermatru.com/explore-products/design-your-door/"
                target="_blank"
                rel="noopener"
                style={{
                  background: '#fff',
                  border: '1px solid #E4E5EE',
                  borderRadius: '4px',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  color: '#14183A',
                  transition: 'transform .2s ease,box-shadow .2s ease,border-color .2s ease',
                }}
              >
                <span
                  style={{
                    height: '96px',
                    borderRadius: '3px',
                    background: '#F6F7FA',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span style={{ position: 'relative', width: '72%', height: '54px' }}>
                    <img
                      src="/Supplier%27s-logo/Exterior-Doors/therma-tru-whb-logo.png"
                      alt="Therma-Tru"
                      style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                  </span>
                </span>
                <span
                  style={{
                    marginTop: '6px',
                    fontFamily: "'Roboto Condensed',sans-serif",
                    fontSize: '15px',
                    fontWeight: '700',
                    letterSpacing: '.08em',
                    textTransform: 'uppercase',
                    color: '#E31E26',
                  }}
                >
                  Exterior Doors
                </span>
                <span
                  style={{
                    fontFamily: "'Roboto Condensed',sans-serif",
                    fontSize: '24px',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '0',
                    lineHeight: '1.1',
                  }}
                >
                  Therma-Tru Design Your Door
                </span>
                <span style={{ fontSize: '18px', lineHeight: '1.55', color: '#4A4F6A', flex: '1' }}>
                  Choose a door style, glass, finish, and hardware, then save your project to share with our sales team.
                </span>
                <span
                  style={{
                    marginTop: '6px',
                    paddingTop: '14px',
                    borderTop: '1px solid #ECEDF3',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '12px',
                    fontSize: '15px',
                    fontWeight: '700',
                    color: '#313893',
                  }}
                >
                  <span>Open design tool</span>
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
                </span>
              </a>
              <a
                className="hv-25c4e5"
                href="https://www.jameshardie.com/hardie-designer/"
                target="_blank"
                rel="noopener"
                style={{
                  background: '#fff',
                  border: '1px solid #E4E5EE',
                  borderRadius: '4px',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  color: '#14183A',
                  transition: 'transform .2s ease,box-shadow .2s ease,border-color .2s ease',
                }}
              >
                <span
                  style={{
                    height: '96px',
                    borderRadius: '3px',
                    background: '#F6F7FA',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span style={{ position: 'relative', width: '72%', height: '54px' }}>
                    <img
                      src="/Supplier%27s-logo/Siding/james-hardie-vector-logo.svg"
                      alt="James Hardie"
                      style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                  </span>
                </span>
                <span
                  style={{
                    marginTop: '6px',
                    fontFamily: "'Roboto Condensed',sans-serif",
                    fontSize: '15px',
                    fontWeight: '700',
                    letterSpacing: '.08em',
                    textTransform: 'uppercase',
                    color: '#E31E26',
                  }}
                >
                  Siding
                </span>
                <span
                  style={{
                    fontFamily: "'Roboto Condensed',sans-serif",
                    fontSize: '24px',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '0',
                    lineHeight: '1.1',
                  }}
                >
                  James Hardie Hardie Designer
                </span>
                <span style={{ fontSize: '18px', lineHeight: '1.55', color: '#4A4F6A', flex: '1' }}>
                  Upload a photo of your home and try James Hardie siding styles and colors, then save the images to share.
                </span>
                <span
                  style={{
                    marginTop: '6px',
                    paddingTop: '14px',
                    borderTop: '1px solid #ECEDF3',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '12px',
                    fontSize: '15px',
                    fontWeight: '700',
                    color: '#313893',
                  }}
                >
                  <span>Open design tool</span>
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
                </span>
              </a>
              <a
                className="hv-25c4e5"
                href="https://www.certainteed.com/design-tools"
                target="_blank"
                rel="noopener"
                style={{
                  background: '#fff',
                  border: '1px solid #E4E5EE',
                  borderRadius: '4px',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  color: '#14183A',
                  transition: 'transform .2s ease,box-shadow .2s ease,border-color .2s ease',
                }}
              >
                <span
                  style={{
                    height: '96px',
                    borderRadius: '3px',
                    background: '#F6F7FA',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span style={{ position: 'relative', width: '72%', height: '54px' }}>
                    <img
                      src="/Supplier%27s-logo/Siding/logo.svg"
                      alt="CertainTeed"
                      style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                  </span>
                </span>
                <span
                  style={{
                    marginTop: '6px',
                    fontFamily: "'Roboto Condensed',sans-serif",
                    fontSize: '15px',
                    fontWeight: '700',
                    letterSpacing: '.08em',
                    textTransform: 'uppercase',
                    color: '#E31E26',
                  }}
                >
                  Siding & Roofing
                </span>
                <span
                  style={{
                    fontFamily: "'Roboto Condensed',sans-serif",
                    fontSize: '24px',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '0',
                    lineHeight: '1.1',
                  }}
                >
                  CertainTeed ColorView
                </span>
                <span style={{ fontSize: '18px', lineHeight: '1.55', color: '#4A4F6A', flex: '1' }}>
                  Coordinate CertainTeed siding, roofing, and trim colors on a sample home or a photo of your own.
                </span>
                <span
                  style={{
                    marginTop: '6px',
                    paddingTop: '14px',
                    borderTop: '1px solid #ECEDF3',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '12px',
                    fontSize: '15px',
                    fontWeight: '700',
                    color: '#313893',
                  }}
                >
                  <span>Open design tool</span>
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
                </span>
              </a>
              <a
                className="hv-25c4e5"
                href="https://www.westlakeroyalbuildingproducts.com/design-tool"
                target="_blank"
                rel="noopener"
                style={{
                  background: '#fff',
                  border: '1px solid #E4E5EE',
                  borderRadius: '4px',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  color: '#14183A',
                  transition: 'transform .2s ease,box-shadow .2s ease,border-color .2s ease',
                }}
              >
                <span
                  style={{
                    height: '96px',
                    borderRadius: '3px',
                    background: '#F6F7FA',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span style={{ position: 'relative', width: '72%', height: '54px' }}>
                    <img
                      src="/Supplier%27s-logo/Siding/rbs_horizontal_logo_en.png"
                      alt="Westlake Royal"
                      style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                  </span>
                </span>
                <span
                  style={{
                    marginTop: '6px',
                    fontFamily: "'Roboto Condensed',sans-serif",
                    fontSize: '15px',
                    fontWeight: '700',
                    letterSpacing: '.08em',
                    textTransform: 'uppercase',
                    color: '#E31E26',
                  }}
                >
                  Siding, Trim & Stone
                </span>
                <span
                  style={{
                    fontFamily: "'Roboto Condensed',sans-serif",
                    fontSize: '24px',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '0',
                    lineHeight: '1.1',
                  }}
                >
                  Westlake Royal Design Canvas
                </span>
                <span style={{ fontSize: '18px', lineHeight: '1.55', color: '#4A4F6A', flex: '1' }}>
                  Upload a photo of your home or pick a sample home and try Westlake Royal siding, trim, stone, and roofing.
                </span>
                <span
                  style={{
                    marginTop: '6px',
                    paddingTop: '14px',
                    borderTop: '1px solid #ECEDF3',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '12px',
                    fontSize: '15px',
                    fontWeight: '700',
                    color: '#313893',
                  }}
                >
                  <span>Open design tool</span>
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
                </span>
              </a>
              <a
                className="hv-25c4e5"
                href="https://www.owenscorning.com/en-us/roofing/designeyeq"
                target="_blank"
                rel="noopener"
                style={{
                  background: '#fff',
                  border: '1px solid #E4E5EE',
                  borderRadius: '4px',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  color: '#14183A',
                  transition: 'transform .2s ease,box-shadow .2s ease,border-color .2s ease',
                }}
              >
                <span
                  style={{
                    height: '96px',
                    borderRadius: '3px',
                    background: '#F6F7FA',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span style={{ position: 'relative', width: '72%', height: '54px' }}>
                    <img
                      src="/Supplier%27s-logo/Roofing/oc-logo.svg"
                      alt="Owens Corning"
                      style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                  </span>
                </span>
                <span
                  style={{
                    marginTop: '6px',
                    fontFamily: "'Roboto Condensed',sans-serif",
                    fontSize: '15px',
                    fontWeight: '700',
                    letterSpacing: '.08em',
                    textTransform: 'uppercase',
                    color: '#E31E26',
                  }}
                >
                  Roofing
                </span>
                <span
                  style={{
                    fontFamily: "'Roboto Condensed',sans-serif",
                    fontSize: '24px',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '0',
                    lineHeight: '1.1',
                  }}
                >
                  Owens Corning Design EyeQ
                </span>
                <span style={{ fontSize: '18px', lineHeight: '1.55', color: '#4A4F6A', flex: '1' }}>
                  Try Owens Corning shingle colors on a sample home or upload a photo of your own house.
                </span>
                <span
                  style={{
                    marginTop: '6px',
                    paddingTop: '14px',
                    borderTop: '1px solid #ECEDF3',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '12px',
                    fontSize: '15px',
                    fontWeight: '700',
                    color: '#313893',
                  }}
                >
                  <span>Open design tool</span>
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
                </span>
              </a>
              <a
                className="hv-25c4e5"
                href="https://www.malarkeyroofing.com/roof-designer/"
                target="_blank"
                rel="noopener"
                style={{
                  background: '#fff',
                  border: '1px solid #E4E5EE',
                  borderRadius: '4px',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  color: '#14183A',
                  transition: 'transform .2s ease,box-shadow .2s ease,border-color .2s ease',
                }}
              >
                <span
                  style={{
                    height: '96px',
                    borderRadius: '3px',
                    background: '#F6F7FA',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span style={{ position: 'relative', width: '72%', height: '54px' }}>
                    <img
                      src="/Supplier%27s-logo/Roofing/logo-horizontal-full-color.svg"
                      alt="Malarkey"
                      style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                  </span>
                </span>
                <span
                  style={{
                    marginTop: '6px',
                    fontFamily: "'Roboto Condensed',sans-serif",
                    fontSize: '15px',
                    fontWeight: '700',
                    letterSpacing: '.08em',
                    textTransform: 'uppercase',
                    color: '#E31E26',
                  }}
                >
                  Roofing
                </span>
                <span
                  style={{
                    fontFamily: "'Roboto Condensed',sans-serif",
                    fontSize: '24px',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '0',
                    lineHeight: '1.1',
                  }}
                >
                  Malarkey Roof Designer
                </span>
                <span style={{ fontSize: '18px', lineHeight: '1.55', color: '#4A4F6A', flex: '1' }}>
                  Pick a home that looks like yours or upload a photo and explore Malarkey shingle colors.
                </span>
                <span
                  style={{
                    marginTop: '6px',
                    paddingTop: '14px',
                    borderTop: '1px solid #ECEDF3',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '12px',
                    fontSize: '15px',
                    fontWeight: '700',
                    color: '#313893',
                  }}
                >
                  <span>Open design tool</span>
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
                </span>
              </a>
            </div>
            <p style={{ margin: '28px 0 0', fontSize: '18px', lineHeight: '1.6', color: '#4A4F6A' }}>
              Design tools open on each manufacturer's website. Colors on screen can vary, so ask us for samples or visit
              our showroom before you choose.
            </p>
          </div>
        </section>
        <section
          style={{
            position: 'relative',
            background: "#14183A url('/New-img/Design/CTA-banner%20(2).jpg') 75% 72%/cover no-repeat",
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
