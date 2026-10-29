'use client';

import React from 'react';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import Turnstile, { getTurnstileResponse } from './Turnstile';
import '../styles/inside.css';
import '../styles/contact-form.css';

const FORM_FIELDS = ['name', 'email', 'phone', 'type', 'message'];
const PROJECT_TYPES = [
  'Kitchen & Bath',
  'Decking & Railing',
  'Windows',
  'Exterior Doors',
  'Interior Doors & Trim',
  'Siding',
  'Roofing',
  'Drafting & Design',
  'Other'
];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TURNSTILE_ENABLED = Boolean(process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY?.replace(/^0x/, '').trim());
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.beaverbuilderssupply.com').replace(/\/$/, '');
const CONTACT_ENDPOINT = (
  process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT ||
  'https://ywwxvriolxwuqcwjaluh.supabase.co/functions/v1/form-submit/80c762ed-f07f-4120-a5b6-8e97d8164ea8'
).trim();
const fieldOk = (name, value) => value !== '' && (name !== 'email' || EMAIL_RE.test(value));
export default class ContactPage extends React.Component {
  state = {
    menu: null,
    scrolled: false,
    errors: {},
    formError: '',
    turnstileToken: '',
    submitting: false,
    projectType: '',
    typeOpen: false,
    typeMenuUp: false,
    typeMenuStyle: null
  };
  typeWrapRef = React.createRef();
  typeBtnRef = React.createRef();
  typeMenuRef = React.createRef();

  setTurnstileToken = (token) => {
    const turnstileToken = token || '';
    this.setState((prev) => ({
      turnstileToken,
      // Clear the verification error as soon as Turnstile succeeds.
      formError:
        turnstileToken && prev.formError === 'Please complete the verification check before sending.'
          ? ''
          : prev.formError
    }));
  };

  closeTypeMenu = () => {
    if (this.state.typeOpen) this.setState({ typeOpen: false, typeMenuUp: false, typeMenuStyle: null });
  };

  measureTypeMenu = () => {
    const btn = this.typeBtnRef.current;
    if (!btn) return null;
    const rect = btn.getBoundingClientRect();
    const gap = 4;
    const maxH = Math.min(240, Math.floor(window.innerHeight * 0.42));
    const spaceBelow = window.innerHeight - rect.bottom - gap;
    const spaceAbove = rect.top - gap;
    const openUp = spaceBelow < Math.min(maxH, 180) && spaceAbove > spaceBelow;
    const height = Math.max(120, Math.min(maxH, openUp ? spaceAbove : spaceBelow));
    const width = Math.max(0, rect.width);
    const left = rect.left;
    return {
      typeMenuUp: openUp,
      typeMenuStyle: openUp
        ? { position: 'fixed', left, width, bottom: window.innerHeight - rect.top + gap, top: 'auto', maxHeight: height }
        : { position: 'fixed', left, width, top: rect.bottom + gap, bottom: 'auto', maxHeight: height }
    };
  };

  openTypeMenu = () => {
    const measured = this.measureTypeMenu();
    if (!measured) {
      this.setState({ typeOpen: true });
      return;
    }
    this.setState({ typeOpen: true, ...measured });
  };

  toggleTypeMenu = () => {
    if (this.state.typeOpen) this.closeTypeMenu();
    else this.openTypeMenu();
  };

  componentDidMount() {
    this.handleScroll = () => {
      const scrolled = window.scrollY > 80;
      if (scrolled !== this.state.scrolled) this.setState({ scrolled });
      if (this.state.typeOpen) this.closeTypeMenu();
    };
    this.handleResize = () => {
      if (!this.state.typeOpen) return;
      const measured = this.measureTypeMenu();
      if (measured) this.setState(measured);
    };
    this.handleDocPointer = (e) => {
      if (!this.state.typeOpen) return;
      const wrap = this.typeWrapRef.current;
      const menu = this.typeMenuRef.current;
      if (wrap?.contains(e.target) || menu?.contains(e.target)) return;
      this.closeTypeMenu();
    };
    this.handleDocKey = (e) => {
      if (e.key === 'Escape') this.closeTypeMenu();
    };
    window.addEventListener('scroll', this.handleScroll, { passive: true });
    window.addEventListener('resize', this.handleResize);
    document.addEventListener('pointerdown', this.handleDocPointer);
    document.addEventListener('keydown', this.handleDocKey);
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
    window.removeEventListener('resize', this.handleResize);
    document.removeEventListener('pointerdown', this.handleDocPointer);
    document.removeEventListener('keydown', this.handleDocKey);
    document.body.style.overflow = '';
  }

  validate(form) {
    const values = {};
    const errors = {};
    for (const name of FORM_FIELDS) {
      const el = form.elements.namedItem(name);
      values[name] = (el && el.value ? el.value : name === 'type' ? this.state.projectType : '').trim();
      if (!fieldOk(name, values[name])) errors[name] = true;
    }
    const missing = FORM_FIELDS.some((name) => values[name] === '');
    const badEmail = values.email !== '' && !EMAIL_RE.test(values.email);
    let formError = '';
    if (missing && badEmail) formError = 'Please fill in all required fields and enter a valid email address.';
    else if (missing) formError = 'Please fill in all required fields before sending your message.';
    else if (badEmail) formError = 'Please enter a valid email address.';
    else if (TURNSTILE_ENABLED && !this.getTurnstileToken()) {
      formError = 'Please complete the verification check before sending.';
    }
    return { values, errors, formError };
  }

  getTurnstileToken() {
    return (this.state.turnstileToken || getTurnstileResponse() || '').trim();
  }

  async submitToEndpoint(values, turnstileToken) {
    const res = await fetch(CONTACT_ENDPOINT, {
      method: 'POST',
      headers: { 'content-type': 'application/json', accept: 'application/json' },
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        phone: values.phone,
        type: values.type,
        message: values.message,
        'Project type': values.type,
        turnstileToken: turnstileToken || undefined
      })
    });
    const data = await res.json().catch(() => ({}));
    // Portal returns 201 + { success: true, redirect_url: "/thank-you" }
    if (!res.ok || data.success === false || data.success === 'false') {
      throw new Error(data.error || data.message || 'Unable to send your message. Please try again.');
    }
    const next = data.redirect_url || data.redirect || '/thank-you';
    window.location.assign(next.startsWith('http') ? next : next);
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
      submitting: this.state.submitting,
      setTurnstileToken: this.setTurnstileToken,
      projectType: this.state.projectType,
      typeOpen: this.state.typeOpen,
      typeMenuUp: this.state.typeMenuUp,
      typeMenuStyle: this.state.typeMenuStyle,
      typeWrapRef: this.typeWrapRef,
      typeBtnRef: this.typeBtnRef,
      typeMenuRef: this.typeMenuRef,
      toggleTypeMenu: this.toggleTypeMenu,
      pickProjectType: (value) => {
        const errors = { ...this.state.errors, type: false };
        const stillInvalid = FORM_FIELDS.some((n) => n !== 'type' && errors[n]);
        this.setState({
          projectType: value,
          typeOpen: false,
          typeMenuUp: false,
          typeMenuStyle: null,
          errors,
          formError: stillInvalid ? this.state.formError : ''
        });
      },
      errName: this.state.errors.name ? 'is-error' : '',
      errEmail: this.state.errors.email ? 'is-error' : '',
      errPhone: this.state.errors.phone ? 'is-error' : '',
      errType: this.state.errors.type ? 'is-error' : '',
      errMessage: this.state.errors.message ? 'is-error' : '',
      formChange: (e) => {
        if (this.state.formError) {
          const { errors, formError } = this.validate(e.currentTarget);
          this.setState({
            errors: Object.fromEntries(
              Object.keys(errors)
                .filter((n) => this.state.errors[n])
                .map((n) => [n, true])
            ),
            formError: Object.keys(errors).some((n) => this.state.errors[n]) ? formError : ''
          });
        }
      },
      submitForm: async (e) => {
        e.preventDefault();
        if (this.state.submitting) return;
        const form = e.currentTarget;
        const turnstileToken = this.getTurnstileToken();
        if (turnstileToken && turnstileToken !== this.state.turnstileToken) {
          this.setState({ turnstileToken });
        }
        const { values, errors, formError } = this.validate(form);
        this.setState({ errors, formError });
        if (formError) {
          const first = FORM_FIELDS.find((n) => errors[n]);
          if (first === 'type') {
            this.typeWrapRef.current?.querySelector('.bbs-select-btn')?.focus();
          } else if (first) {
            form.elements.namedItem(first)?.focus();
          }
          return;
        }

        this.setState({ submitting: true, formError: '' });
        try {
          await this.submitToEndpoint(values, turnstileToken);
        } catch (err) {
          this.setState({
            submitting: false,
            formError: err?.message || 'Unable to send your message. Please try again.'
          });
        }
      }
    };
  }

  render() {
    const vals = this.renderVals();
    return (
      <div style={{ minWidth: 0, maxWidth: '100%', overflowX: 'clip' }}>
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
                  fontFamily: "'Roboto Condensed',sans-serif",
                  fontWeight: '700',
                  letterSpacing: '-.015em',
                  fontSize: 'clamp(52px,6.4vw,60px)',
                  lineHeight: '1.05',
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
        <section className="bbs-contact-section">
          <div className="bbs-contact-wrap">
            <div className="bbs-contact-crumbs">
              <a className="hv-b2d6c8" href="/" style={{ color: '#313893' }}>
                Home
              </a>
              <span style={{ color: '#9CA0BE' }}>/</span>
              <span style={{ color: '#14183A', fontWeight: '600' }}>Contact Us</span>
            </div>
          </div>
          <div className="bbs-contact-wrap bbs-contact-layout">
            <div className="bbs-contact-card">
              <h3
                style={{
                  margin: '0',
                  fontFamily: "'Roboto Condensed',sans-serif",
                  fontSize: '32px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  color: '#14183A',
                  lineHeight: '1.1',
                }}
              >
                Request a Quote
              </h3>
              <p style={{ margin: '12px 0 0', fontSize: '18px', lineHeight: '1.6', color: '#4A4F6A' }}>
                Share a few details and we'll get back to you with options and pricing.
              </p>
              <p style={{ margin: '8px 0 0', fontSize: '18px', lineHeight: '1.6', color: '#4A4F6A' }}>
                Fields marked with an asterisk (<span style={{ color: '#E31E26' }}>*</span>) are required.
              </p>
              <form
                className="bbs-contact-form"
                onSubmit={vals.submitForm}
                onChange={vals.formChange}
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
                <div className="bbs-field bbs-field-type">
                  <span id="bbs-project-type-label">
                    Project type <span style={{ color: '#E31E26' }}>*</span>
                  </span>
                  <div className="bbs-select" ref={vals.typeWrapRef}>
                    <input type="hidden" name="type" value={vals.projectType} />
                    <button
                      ref={vals.typeBtnRef}
                      type="button"
                      className={`bbs-select-btn${vals.errType ? ' is-error' : ''}${vals.typeOpen ? ' is-open' : ''}`}
                      aria-haspopup="listbox"
                      aria-expanded={vals.typeOpen}
                      aria-controls="bbs-project-type-list"
                      aria-labelledby="bbs-project-type-label"
                      aria-required="true"
                      onClick={vals.toggleTypeMenu}
                    >
                      <span className={`bbs-select-label${vals.projectType ? '' : ' is-placeholder'}`}>
                        {vals.projectType || 'Select a project type'}
                      </span>
                      <svg className="bbs-select-chevron" viewBox="0 0 12 8" aria-hidden="true">
                        <path
                          d="M1 1.5l5 5 5-5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    {vals.typeOpen && (
                      <div
                        id="bbs-project-type-list"
                        ref={vals.typeMenuRef}
                        className={`bbs-select-menu${vals.typeMenuUp ? ' is-up' : ''}`}
                        role="listbox"
                        aria-labelledby="bbs-project-type-label"
                        style={vals.typeMenuStyle || undefined}
                      >
                        {PROJECT_TYPES.map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            role="option"
                            aria-selected={vals.projectType === opt}
                            className={`bbs-select-option${vals.projectType === opt ? ' is-active' : ''}`}
                            onClick={() => vals.pickProjectType(opt)}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
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
                <Turnstile onToken={vals.setTurnstileToken} />
                <div style={{ gridColumn: '1 / -1', display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
                  <button
                    className="hv-bb83fa"
                    type="submit"
                    disabled={vals.submitting}
                    style={{
                      whiteSpace: 'nowrap',
                      padding: '17px 30px',
                      background: '#E31E26',
                      color: '#fff',
                      fontWeight: '700',
                      fontSize: '17px',
                      borderRadius: '3px',
                      border: '0',
                      cursor: vals.submitting ? 'wait' : 'pointer',
                      fontFamily: 'inherit',
                      opacity: vals.submitting ? 0.7 : 1,
                    }}
                  >
                    {vals.submitting ? 'Sending…' : 'Send Message'}
                  </button>
                </div>
              </form>
            </div>
            <div style={{ minWidth: 0, maxWidth: '100%' }}>
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
                Get in Touch
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
                Let's talk about your project.
              </h2>
              <p style={{ margin: '20px 0 0', fontSize: '18px', lineHeight: '1.6', color: '#4A4F6A', textWrap: 'pretty' }}>
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
                        fontFamily: "'Roboto Condensed',sans-serif",
                        fontSize: '15px',
                        fontWeight: '700',
                        letterSpacing: '.08em',
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
                        fontFamily: "'Roboto Condensed',sans-serif",
                        fontSize: '15px',
                        fontWeight: '700',
                        letterSpacing: '.08em',
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
                  href="https://www.google.com/maps/search/?api=1&query=Beaver+Builders+Supply+N6838+Builders+Ct+Holmen+WI+54636"
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
                        fontFamily: "'Roboto Condensed',sans-serif",
                        fontSize: '15px',
                        fontWeight: '700',
                        letterSpacing: '.08em',
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
                        fontFamily: "'Roboto Condensed',sans-serif",
                        fontSize: '15px',
                        fontWeight: '700',
                        letterSpacing: '.08em',
                        textTransform: 'uppercase',
                        color: '#E31E26',
                      }}
                    >
                      General Questions
                    </span>
                    <span style={{ fontSize: '18px', fontWeight: '600', lineHeight: '1.4', overflowWrap: 'anywhere' }}>
                      sales@beaverbuilderssupply.com
                    </span>
                  </span>
                </a>
              </div>
              <iframe
                title="Map to Beaver Builders' Supply"
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
