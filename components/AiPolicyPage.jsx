'use client';

import React from 'react';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import '../styles/inside.css';
import '../styles/policy-doc.css';


export default class AiPolicyPage extends React.Component {
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
                AI Policy
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
                How we use artificial intelligence responsibly while keeping people in charge of the work.
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
              <span style={{ color: '#14183A', fontWeight: '600' }}>AI Policy</span>
            </div>
          </div>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
            <div style={{ marginBottom: '32px', fontSize: '14px', color: '#6A6F8C' }}>Last updated: September 25, 2026</div>
            <article className="bbs-doc" style={{ minWidth: '0', maxWidth: '860px' }}>
              <section id="our-approach">
                <h2>Our Approach</h2>
                <p>
                  At Beaver Builders Supply, our business is built on personal service and honest advice. We may use
                  artificial intelligence (AI) tools to help our team work more efficiently, but people remain responsible
                  for the advice, pricing, and service you receive.
                </p>
              </section>
              <section id="how-we-use-ai">
                <h2>How We Use AI</h2>
                <ul>
                  <li>Drafting and editing website and marketing content</li>
                  <li>Summarizing product information provided by manufacturers</li>
                  <li>Organizing internal notes, schedules, and routine tasks</li>
                </ul>
                <p>Everything produced with the help of AI is reviewed by a member of our team before it is used.</p>
              </section>
              <section id="what-we-dont-do">
                <h2>What We Do Not Use AI For</h2>
                <ul>
                  <li>Final pricing, quotes, or credit decisions without review by our staff</li>
                  <li>Product recommendations that have not been checked by our sales team</li>
                  <li>Pretending to be a person when you are talking with an automated tool</li>
                </ul>
              </section>
              <section id="accuracy">
                <h2>Accuracy</h2>
                <p>
                  Product specifications, availability, and pricing are confirmed with manufacturers and our sales team. If
                  you notice information on our website that looks wrong, please let us know so we can correct it.
                </p>
              </section>
              <section id="your-information">
                <h2>Your Information and AI Tools</h2>
                <p>
                  We do not enter customers' personal information into public AI tools. When we use AI services, we choose
                  tools with appropriate privacy and security protections. See our{' '}
                  <a href="/privacy-policy">Privacy Policy</a> for how we handle personal information.
                </p>
              </section>
              <section id="ai-and-our-website">
                <h2>AI Assistants and Our Website</h2>
                <p>
                  Search engines and AI assistants may read the public pages of our website. To help them describe our
                  business accurately, we publish an <a href="/ai-readiness-service-index">AI Readiness Service Index</a>{' '}
                  with a plain summary of who we are and what we offer.
                </p>
              </section>
              <section id="changes">
                <h2>Changes to This Policy</h2>
                <p>
                  We will update this policy as our use of AI changes. The "Last updated" date shows when it was last
                  changed.
                </p>
              </section>
              <section id="contact">
                <h2>Questions</h2>
                <p>If you have questions about how we use AI, contact us:</p>
                <p>
                  <strong>Beaver Builders Supply</strong>
                  <br />
                  N6838 Builders Ct., Holmen, WI 54636
                  <br />
                  Phone: <a href="tel:6085263232">608-526-3232</a>
                  <br />
                  Email: <a href="mailto:info@beaverbuilderssupply.com">info@beaverbuilderssupply.com</a>
                </p>
              </section>
            </article>
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
