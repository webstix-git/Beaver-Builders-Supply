'use client';

import React from 'react';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import '../styles/inside.css';
import '../styles/contact-form.css';

const FORM_FIELDS = ['name', 'email', 'phone', 'type', 'message'];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const fieldOk = (name, value) => value !== '' && (name !== 'email' || EMAIL_RE.test(value));
export default class ContactPage extends React.Component {
  state = { menu: null, scrolled: false, errors: {}, formError: '' };

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

  validate(form) {
    const values = {};
    const errors = {};
    for (const name of FORM_FIELDS) {
      values[name] = form.elements.namedItem(name).value.trim();
      if (!fieldOk(name, values[name])) errors[name] = true;
    }
    const missing = FORM_FIELDS.some((name) => values[name] === '');
    const badEmail = values.email !== '' && !EMAIL_RE.test(values.email);
    let formError = '';
    if (missing && badEmail) formError = 'Please fill in all required fields and enter a valid email address.';
    else if (missing) formError = 'Please fill in all required fields before sending your message.';
    else if (badEmail) formError = 'Please enter a valid email address.';
    return { values, errors, formError };
  }

  renderVals() {

    return {
      headerClass: this.state.scrolled ? 'is-sticky' : '',
      materialsOpen: this.state.menu === 'm',
      designOpen: this.state.menu === 'd',
      openMaterials: () => this.setState({ menu: 'm' }),
      openDesign: () => this.setState({ menu: 'd' }),
      closeMenu: () => this.setState({ menu: null }),
      hasFormError: this.state.formError !== '',
      formError: this.state.formError,
      errName: this.state.errors.name ? 'is-error' : '',
      errEmail: this.state.errors.email ? 'is-error' : '',
      errPhone: this.state.errors.phone ? 'is-error' : '',
      errType: this.state.errors.type ? 'is-error' : '',
      errMessage: this.state.errors.message ? 'is-error' : '',
      formChange: (e) => {
        if (this.state.formError) {
          const { errors, formError } = this.validate(e.currentTarget);
          this.setState({ errors: Object.fromEntries(Object.keys(errors).filter((n) => this.state.errors[n]).map((n) => [n, true])), formError: Object.keys(errors).some((n) => this.state.errors[n]) ? formError : '' });
        }
      },
      submitForm: (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const { values, errors, formError } = this.validate(form);
        this.setState({ errors, formError });
        if (formError) {
          form.elements.namedItem(FORM_FIELDS.find((n) => errors[n])).focus();
          return;
        }
        const body = [
          'Name: ' + values.name,
          'Email: ' + values.email,
          'Phone: ' + values.phone,
          'Project type: ' + values.type,
          '',
          values.message
        ].join('\n');
        window.location.href = 'mailto:sales@beaverbuilderssupply.com?subject=' +
          encodeURIComponent('Quote request: ' + values.type) + '&body=' + encodeURIComponent(body);
      }
    };
  }

  render() {
    const vals = this.renderVals();
    return (
      <div style={{ minWidth: '0' }}>
        <div style={{ position: 'relative' }}>
          <SiteHeader active="contact" vals={vals} />
          <section
            className="bbs-hero-banner"
            style={{
              position: 'relative',
              background: "#14183A url('/New-img/Contact/hero-section.jpg') center 60%/cover no-repeat",
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
                  fontFamily: "'Barlow Condensed',sans-serif",
                  fontWeight: '700',
                  fontSize: 'clamp(52px,6.4vw,60px)',
                  lineHeight: '.95',
                  color: '#fff',
                  textTransform: 'uppercase',
                }}
              >
                Contact Us
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
                Tell us what you're building. A member of our sales team will follow up with product options and pricing.
              </p>
            </div>
          </section>
        </div>
        <section style={{ padding: '25px 0 112px', background: '#F6F4EF' }}>
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
              <span style={{ color: '#14183A', fontWeight: '600' }}>Contact Us</span>
            </div>
          </div>
          <div
            style={{
              maxWidth: '1280px',
              margin: '0 auto',
              padding: '0 32px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,440px),1fr))',
              gap: '56px',
              alignItems: 'start',
            }}
          >
            <div
              style={{
                background: '#fff',
                borderTop: '4px solid #E31E26',
                borderRadius: '4px',
                boxShadow: '0 24px 60px rgba(20,24,58,.12)',
                padding: '40px',
              }}
            >
              <div
                style={{
                  fontFamily: "'Barlow Condensed',sans-serif",
                  fontSize: '32px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  color: '#14183A',
                  lineHeight: '1',
                }}
              >
                Request a Quote
              </div>
              <p style={{ margin: '12px 0 0', fontSize: '16px', lineHeight: '1.6', color: '#4A4F6A' }}>
                Share a few details and we'll get back to you with options and pricing.
              </p>
              <p style={{ margin: '8px 0 0', fontSize: '15px', lineHeight: '1.6', color: '#4A4F6A' }}>
                Fields marked with an asterisk (<span style={{ color: '#E31E26' }}>*</span>) are required.
              </p>
              <form
                onSubmit={vals.submitForm}
                onChange={vals.formChange}
                style={{
                  marginTop: '28px',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,220px),1fr))',
                  gap: '18px',
                }}
              >
                <label className="bbs-field">
                  <span>
                    Name <span style={{ color: '#E31E26' }}>*</span>
                  </span>
                  <input
                    className={`bbs-input ${vals.errName}`}
                    type="text"
                    name="name"
                    aria-required="true"
                    autoComplete="name"
                  />
                </label>
                <label className="bbs-field">
                  <span>
                    Email <span style={{ color: '#E31E26' }}>*</span>
                  </span>
                  <input
                    className={`bbs-input ${vals.errEmail}`}
                    type="email"
                    name="email"
                    aria-required="true"
                    autoComplete="email"
                  />
                </label>
                <label className="bbs-field">
                  <span>
                    Phone <span style={{ color: '#E31E26' }}>*</span>
                  </span>
                  <input
                    className={`bbs-input ${vals.errPhone}`}
                    type="tel"
                    name="phone"
                    aria-required="true"
                    autoComplete="tel"
                  />
                </label>
                <label className="bbs-field">
                  <span>
                    Project type <span style={{ color: '#E31E26' }}>*</span>
                  </span>
                  <select className={`bbs-input ${vals.errType}`} name="type" aria-required="true">
                    <option value="">Select a project type</option>
                    <option>Kitchen & Bath</option>
                    <option>Decking & Railing</option>
                    <option>Windows</option>
                    <option>Exterior Doors</option>
                    <option>Interior Doors & Trim</option>
                    <option>Siding</option>
                    <option>Roofing</option>
                    <option>Drafting & Design</option>
                    <option>Other</option>
                  </select>
                </label>
                <label className="bbs-field" style={{ gridColumn: '1 / -1' }}>
                  <span>
                    Tell us about your project <span style={{ color: '#E31E26' }}>*</span>
                  </span>
                  <textarea className={`bbs-input ${vals.errMessage}`} name="message" rows="5" aria-required="true" />
                </label>
                {vals.hasFormError && (
                  <div
                    role="alert"
                    style={{
                      gridColumn: '1 / -1',
                      display: 'flex',
                      gap: '12px',
                      alignItems: 'flex-start',
                      padding: '14px 16px',
                      background: '#FDECEC',
                      border: '1px solid #F5B5B8',
                      borderLeft: '4px solid #E31E26',
                      borderRadius: '3px',
                      color: '#9B1117',
                      fontSize: '15px',
                      fontWeight: '600',
                      lineHeight: '1.5',
                    }}
                  >
                    <svg
                      className="bbs-ico"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      style={{ flex: '0 0 20px', marginTop: '1px' }}
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    <span>{vals.formError}</span>
                  </div>
                )}
                <div style={{ gridColumn: '1 / -1', display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
                  <button
                    className="hv-bb83fa"
                    type="submit"
                    style={{
                      whiteSpace: 'nowrap',
                      padding: '17px 30px',
                      background: '#E31E26',
                      color: '#fff',
                      fontWeight: '700',
                      fontSize: '17px',
                      borderRadius: '2px',
                      border: '0',
                      cursor: 'pointer',
                      fontFamily: 'inherit',
                    }}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            <div>
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
                Get in Touch
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
                Let's talk about your project.
              </h2>
              <p style={{ margin: '20px 0 0', fontSize: '18px', lineHeight: '1.65', color: '#4A4F6A', textWrap: 'pretty' }}>
                Call, email, or stop by the showroom. Our sales team will help you find the brand and product that fits your
                quality, value, and budget.
              </p>
              <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column' }}>
                <a
                  className="hv-2cfab4"
                  href="tel:6085263232"
                  style={{ display: 'flex', gap: '18px', alignItems: 'flex-start', padding: '22px 0', color: '#14183A' }}
                >
                  <span style={{ flex: '0 0 auto', paddingTop: '2px', color: '#313893' }}>
                    <svg className="bbs-ico" width="22" height="22" viewBox="0 0 24 24">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </span>
                  <span style={{ display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '0' }}>
                    <span
                      style={{
                        fontFamily: "'Barlow Condensed',sans-serif",
                        fontSize: '15px',
                        fontWeight: '700',
                        letterSpacing: '.14em',
                        textTransform: 'uppercase',
                        color: '#E31E26',
                      }}
                    >
                      Call Us
                    </span>
                    <span style={{ fontSize: '18px', fontWeight: '600', lineHeight: '1.4', overflowWrap: 'anywhere' }}>
                      608-526-3232
                    </span>
                  </span>
                </a>
                <a
                  className="hv-2cfab4"
                  href="mailto:sales@beaverbuilderssupply.com"
                  style={{
                    display: 'flex',
                    gap: '18px',
                    alignItems: 'flex-start',
                    padding: '22px 0',
                    borderTop: '1px solid #E4E5EE',
                    color: '#14183A',
                  }}
                >
                  <span style={{ flex: '0 0 auto', paddingTop: '2px', color: '#313893' }}>
                    <svg className="bbs-ico" width="22" height="22" viewBox="0 0 24 24">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </span>
                  <span style={{ display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '0' }}>
                    <span
                      style={{
                        fontFamily: "'Barlow Condensed',sans-serif",
                        fontSize: '15px',
                        fontWeight: '700',
                        letterSpacing: '.14em',
                        textTransform: 'uppercase',
                        color: '#E31E26',
                      }}
                    >
                      Email Our Sales Team
                    </span>
                    <span style={{ fontSize: '18px', fontWeight: '600', lineHeight: '1.4', overflowWrap: 'anywhere' }}>
                      sales@beaverbuilderssupply.com
                    </span>
                  </span>
                </a>
                <a
                  className="hv-2cfab4"
                  href="https://maps.google.com/?q=N6838+Builders+Ct+Holmen+WI+54636"
                  target="_blank"
                  rel="noopener"
                  style={{
                    display: 'flex',
                    gap: '18px',
                    alignItems: 'flex-start',
                    padding: '22px 0',
                    borderTop: '1px solid #E4E5EE',
                    color: '#14183A',
                  }}
                >
                  <span style={{ flex: '0 0 auto', paddingTop: '2px', color: '#313893' }}>
                    <svg className="bbs-ico" width="22" height="22" viewBox="0 0 24 24">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <span style={{ display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '0' }}>
                    <span
                      style={{
                        fontFamily: "'Barlow Condensed',sans-serif",
                        fontSize: '15px',
                        fontWeight: '700',
                        letterSpacing: '.14em',
                        textTransform: 'uppercase',
                        color: '#E31E26',
                      }}
                    >
                      Visit the Showroom
                    </span>
                    <span style={{ fontSize: '18px', fontWeight: '600', lineHeight: '1.4', overflowWrap: 'anywhere' }}>
                      N6838 Builders Ct.
                      <br />
                      Holmen, WI 54636
                    </span>
                  </span>
                </a>
                <a
                  className="hv-2cfab4"
                  href="mailto:info@beaverbuilderssupply.com"
                  style={{
                    display: 'flex',
                    gap: '18px',
                    alignItems: 'flex-start',
                    padding: '22px 0',
                    borderTop: '1px solid #E4E5EE',
                    color: '#14183A',
                  }}
                >
                  <span style={{ flex: '0 0 auto', paddingTop: '2px', color: '#313893' }}>
                    <svg className="bbs-ico" width="22" height="22" viewBox="0 0 24 24">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </span>
                  <span style={{ display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '0' }}>
                    <span
                      style={{
                        fontFamily: "'Barlow Condensed',sans-serif",
                        fontSize: '15px',
                        fontWeight: '700',
                        letterSpacing: '.14em',
                        textTransform: 'uppercase',
                        color: '#E31E26',
                      }}
                    >
                      General Questions
                    </span>
                    <span style={{ fontSize: '18px', fontWeight: '600', lineHeight: '1.4', overflowWrap: 'anywhere' }}>
                      info@beaverbuilderssupply.com
                    </span>
                  </span>
                </a>
              </div>
              <iframe
                title="Map to Beaver Builders Supply"
                src="https://maps.google.com/maps?q=N6838+Builders+Ct+Holmen+WI+54636&output=embed"
                loading="lazy"
                style={{
                  display: 'block',
                  marginTop: '16px',
                  width: '100%',
                  height: '320px',
                  border: '1px solid #E4E5EE',
                  borderRadius: '4px',
                }}
              />
            </div>
          </div>
        </section>
        <SiteFooter />
      </div>
    );
  }
}
