'use client';

import React from 'react';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import '../styles/inside.css';
import '../styles/policy-doc.css';


export default class PrivacyPolicyPage extends React.Component {
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
                  fontFamily: "'Barlow Condensed',sans-serif",
                  fontWeight: '700',
                  fontSize: 'clamp(52px,6.4vw,60px)',
                  lineHeight: '.95',
                  color: '#fff',
                  textTransform: 'uppercase',
                }}
              >
                Privacy Policy
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
                How we collect, use, and protect the information you share with us.
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
              <span style={{ color: '#14183A', fontWeight: '600' }}>Privacy Policy</span>
            </div>
          </div>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
            <div style={{ marginBottom: '32px', fontSize: '14px', color: '#6A6F8C' }}>Last updated: September 25, 2026</div>
            <article className="bbs-doc" style={{ minWidth: '0', maxWidth: '860px' }}>
              <section id="overview">
                <h2>Overview</h2>
                <p>
                  Beaver Builders Supply ("we," "us," or "our") respects your privacy. This policy explains what information
                  we collect when you visit our website, contact us, or do business with us, how we use it, and the choices
                  you have.
                </p>
              </section>
              <section id="information-we-collect">
                <h2>Information We Collect</h2>
                <p>
                  <strong>Information you give us.</strong> When you call, email, submit a form, request a quote, or place
                  an order, we may collect your name, email address, phone number, mailing or job site address, and details
                  about your project.
                </p>
                <p>
                  <strong>Information collected automatically.</strong> Like most websites, our site may record basic
                  technical information such as your browser type, device, pages visited, and the site that referred you.
                  This helps us keep the site working and understand how it is used.
                </p>
              </section>
              <section id="how-we-use-information">
                <h2>How We Use Information</h2>
                <ul>
                  <li>To respond to questions and prepare quotes</li>
                  <li>To process orders, schedule deliveries, and provide customer service</li>
                  <li>To help with product selection, drafting, and design services you request</li>
                  <li>To improve our website, products, and services</li>
                  <li>To send updates you have asked to receive</li>
                  <li>To meet legal, tax, and accounting requirements</li>
                </ul>
              </section>
              <section id="cookies">
                <h2>Cookies</h2>
                <p>
                  Our website may use cookies and similar technologies to remember your preferences and measure site
                  traffic. You can set your browser to refuse cookies or alert you when cookies are being sent. Some parts
                  of the site may not work properly without them.
                </p>
              </section>
              <section id="sharing">
                <h2>How We Share Information</h2>
                <p>We do not sell your personal information. We share it only when needed to serve you, including with:</p>
                <ul>
                  <li>Manufacturers and suppliers, to fulfill orders, special orders, and warranty claims</li>
                  <li>Service providers who help us with delivery, payments, website hosting, and communications</li>
                  <li>Government authorities or others when required by law or to protect our rights</li>
                </ul>
              </section>
              <section id="security">
                <h2>Data Security and Retention</h2>
                <p>
                  We use reasonable safeguards to protect your information. No method of transmission or storage is
                  completely secure, so we cannot guarantee absolute security. We keep information only as long as needed
                  for the purposes described in this policy or as required by law.
                </p>
              </section>
              <section id="your-choices">
                <h2>Your Choices</h2>
                <p>
                  You can ask us to access, correct, or delete the personal information we hold about you, and you can opt
                  out of marketing messages at any time by using the unsubscribe link in an email or by contacting us.
                </p>
              </section>
              <section id="children">
                <h2>Children's Privacy</h2>
                <p>
                  Our website is intended for adults and is not directed to children under 13. We do not knowingly collect
                  personal information from children.
                </p>
              </section>
              <section id="third-party-links">
                <h2>Third-Party Links</h2>
                <p>
                  Our website links to manufacturer and partner websites. We are not responsible for the privacy practices
                  of those sites, and we encourage you to review their policies.
                </p>
              </section>
              <section id="changes">
                <h2>Changes to This Policy</h2>
                <p>We may update this policy from time to time. The "Last updated" date shows when it was last changed.</p>
              </section>
              <section id="contact">
                <h2>Contact Us</h2>
                <p>If you have questions about this policy or your information, contact us:</p>
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
