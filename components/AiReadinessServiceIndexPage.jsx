'use client';

import React from 'react';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import '../styles/inside.css';
import '../styles/policy-doc.css';


export default class AiReadinessServiceIndexPage extends React.Component {
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
                AI Readiness Service Index
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
                A plain summary of our business, services, and brands for AI assistants, search tools, and anyone who wants
                the facts at a glance.
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
              <span style={{ color: '#14183A', fontWeight: '600' }}>AI Readiness Service Index</span>
            </div>
          </div>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
            <div style={{ marginBottom: '32px', fontSize: '14px', color: '#6A6F8C' }}>Last updated: September 25, 2026</div>
            <article className="bbs-doc" style={{ minWidth: '0', maxWidth: '860px' }}>
              <section id="business-profile">
                <h2>Business Profile</h2>
                <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '14px' }}>
                  <tbody>
                    <tr>
                      <th
                        style={{
                          textAlign: 'left',
                          verticalAlign: 'top',
                          padding: '14px 20px 14px 0',
                          borderBottom: '1px solid #E4E5EE',
                          fontSize: '16px',
                          color: '#14183A',
                          width: '34%',
                        }}
                      >
                        Business name
                      </th>
                      <td
                        style={{
                          padding: '14px 0',
                          borderBottom: '1px solid #E4E5EE',
                          fontSize: '16px',
                          lineHeight: '1.6',
                          color: '#4A4F6A',
                        }}
                      >
                        Beaver Builders Supply
                      </td>
                    </tr>
                    <tr>
                      <th
                        style={{
                          textAlign: 'left',
                          verticalAlign: 'top',
                          padding: '14px 20px 14px 0',
                          borderBottom: '1px solid #E4E5EE',
                          fontSize: '16px',
                          color: '#14183A',
                          width: '34%',
                        }}
                      >
                        Business type
                      </th>
                      <td
                        style={{
                          padding: '14px 0',
                          borderBottom: '1px solid #E4E5EE',
                          fontSize: '16px',
                          lineHeight: '1.6',
                          color: '#4A4F6A',
                        }}
                      >
                        Locally owned building supply company
                      </td>
                    </tr>
                    <tr>
                      <th
                        style={{
                          textAlign: 'left',
                          verticalAlign: 'top',
                          padding: '14px 20px 14px 0',
                          borderBottom: '1px solid #E4E5EE',
                          fontSize: '16px',
                          color: '#14183A',
                          width: '34%',
                        }}
                      >
                        Ownership
                      </th>
                      <td
                        style={{
                          padding: '14px 0',
                          borderBottom: '1px solid #E4E5EE',
                          fontSize: '16px',
                          lineHeight: '1.6',
                          color: '#4A4F6A',
                        }}
                      >
                        Third-generation, locally owned
                      </td>
                    </tr>
                    <tr>
                      <th
                        style={{
                          textAlign: 'left',
                          verticalAlign: 'top',
                          padding: '14px 20px 14px 0',
                          borderBottom: '1px solid #E4E5EE',
                          fontSize: '16px',
                          color: '#14183A',
                          width: '34%',
                        }}
                      >
                        Established
                      </th>
                      <td
                        style={{
                          padding: '14px 0',
                          borderBottom: '1px solid #E4E5EE',
                          fontSize: '16px',
                          lineHeight: '1.6',
                          color: '#4A4F6A',
                        }}
                      >
                        1951
                      </td>
                    </tr>
                    <tr>
                      <th
                        style={{
                          textAlign: 'left',
                          verticalAlign: 'top',
                          padding: '14px 20px 14px 0',
                          borderBottom: '1px solid #E4E5EE',
                          fontSize: '16px',
                          color: '#14183A',
                          width: '34%',
                        }}
                      >
                        Address
                      </th>
                      <td
                        style={{
                          padding: '14px 0',
                          borderBottom: '1px solid #E4E5EE',
                          fontSize: '16px',
                          lineHeight: '1.6',
                          color: '#4A4F6A',
                        }}
                      >
                        N6838 Builders Ct., Holmen, WI 54636
                      </td>
                    </tr>
                    <tr>
                      <th
                        style={{
                          textAlign: 'left',
                          verticalAlign: 'top',
                          padding: '14px 20px 14px 0',
                          borderBottom: '1px solid #E4E5EE',
                          fontSize: '16px',
                          color: '#14183A',
                          width: '34%',
                        }}
                      >
                        Service area
                      </th>
                      <td
                        style={{
                          padding: '14px 0',
                          borderBottom: '1px solid #E4E5EE',
                          fontSize: '16px',
                          lineHeight: '1.6',
                          color: '#4A4F6A',
                        }}
                      >
                        La Crosse, Holmen, and the Coulee Region of Wisconsin
                      </td>
                    </tr>
                    <tr>
                      <th
                        style={{
                          textAlign: 'left',
                          verticalAlign: 'top',
                          padding: '14px 20px 14px 0',
                          borderBottom: '1px solid #E4E5EE',
                          fontSize: '16px',
                          color: '#14183A',
                          width: '34%',
                        }}
                      >
                        Customers
                      </th>
                      <td
                        style={{
                          padding: '14px 0',
                          borderBottom: '1px solid #E4E5EE',
                          fontSize: '16px',
                          lineHeight: '1.6',
                          color: '#4A4F6A',
                        }}
                      >
                        Builders and homeowners
                      </td>
                    </tr>
                    <tr>
                      <th
                        style={{
                          textAlign: 'left',
                          verticalAlign: 'top',
                          padding: '14px 20px 14px 0',
                          borderBottom: '1px solid #E4E5EE',
                          fontSize: '16px',
                          color: '#14183A',
                          width: '34%',
                        }}
                      >
                        Phone
                      </th>
                      <td
                        style={{
                          padding: '14px 0',
                          borderBottom: '1px solid #E4E5EE',
                          fontSize: '16px',
                          lineHeight: '1.6',
                          color: '#4A4F6A',
                        }}
                      >
                        <a href="tel:6085263232">608-526-3232</a>
                      </td>
                    </tr>
                    <tr>
                      <th
                        style={{
                          textAlign: 'left',
                          verticalAlign: 'top',
                          padding: '14px 20px 14px 0',
                          borderBottom: '1px solid #E4E5EE',
                          fontSize: '16px',
                          color: '#14183A',
                          width: '34%',
                        }}
                      >
                        Sales email
                      </th>
                      <td
                        style={{
                          padding: '14px 0',
                          borderBottom: '1px solid #E4E5EE',
                          fontSize: '16px',
                          lineHeight: '1.6',
                          color: '#4A4F6A',
                        }}
                      >
                        <a href="mailto:sales@beaverbuilderssupply.com">sales@beaverbuilderssupply.com</a>
                      </td>
                    </tr>
                    <tr>
                      <th
                        style={{
                          textAlign: 'left',
                          verticalAlign: 'top',
                          padding: '14px 20px 14px 0',
                          borderBottom: '1px solid #E4E5EE',
                          fontSize: '16px',
                          color: '#14183A',
                          width: '34%',
                        }}
                      >
                        General email
                      </th>
                      <td
                        style={{
                          padding: '14px 0',
                          borderBottom: '1px solid #E4E5EE',
                          fontSize: '16px',
                          lineHeight: '1.6',
                          color: '#4A4F6A',
                        }}
                      >
                        <a href="mailto:info@beaverbuilderssupply.com">info@beaverbuilderssupply.com</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </section>
              <section id="services">
                <h2>Services</h2>
                <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '14px' }}>
                  <tbody>
                    <tr>
                      <th
                        style={{
                          textAlign: 'left',
                          verticalAlign: 'top',
                          padding: '14px 20px 14px 0',
                          borderBottom: '1px solid #E4E5EE',
                          fontSize: '16px',
                          color: '#14183A',
                          width: '34%',
                        }}
                      >
                        Building materials
                      </th>
                      <td
                        style={{
                          padding: '14px 0',
                          borderBottom: '1px solid #E4E5EE',
                          fontSize: '16px',
                          lineHeight: '1.6',
                          color: '#4A4F6A',
                        }}
                      >
                        Kitchen & bath, decking & railing, windows, exterior doors, interior doors & trim, siding, and
                        roofing
                      </td>
                    </tr>
                    <tr>
                      <th
                        style={{
                          textAlign: 'left',
                          verticalAlign: 'top',
                          padding: '14px 20px 14px 0',
                          borderBottom: '1px solid #E4E5EE',
                          fontSize: '16px',
                          color: '#14183A',
                          width: '34%',
                        }}
                      >
                        Yard products
                      </th>
                      <td
                        style={{
                          padding: '14px 0',
                          borderBottom: '1px solid #E4E5EE',
                          fontSize: '16px',
                          lineHeight: '1.6',
                          color: '#4A4F6A',
                        }}
                      >
                        Framing lumber, manufactured trusses, engineered products, building science products, cabinets &
                        tops
                      </td>
                    </tr>
                    <tr>
                      <th
                        style={{
                          textAlign: 'left',
                          verticalAlign: 'top',
                          padding: '14px 20px 14px 0',
                          borderBottom: '1px solid #E4E5EE',
                          fontSize: '16px',
                          color: '#14183A',
                          width: '34%',
                        }}
                      >
                        Sales guidance
                      </th>
                      <td
                        style={{
                          padding: '14px 0',
                          borderBottom: '1px solid #E4E5EE',
                          fontSize: '16px',
                          lineHeight: '1.6',
                          color: '#4A4F6A',
                        }}
                      >
                        A sales team that helps customers choose the brand and product that fits their quality, value, and
                        budget
                      </td>
                    </tr>
                    <tr>
                      <th
                        style={{
                          textAlign: 'left',
                          verticalAlign: 'top',
                          padding: '14px 20px 14px 0',
                          borderBottom: '1px solid #E4E5EE',
                          fontSize: '16px',
                          color: '#14183A',
                          width: '34%',
                        }}
                      >
                        Interactive showroom
                      </th>
                      <td
                        style={{
                          padding: '14px 0',
                          borderBottom: '1px solid #E4E5EE',
                          fontSize: '16px',
                          lineHeight: '1.6',
                          color: '#4A4F6A',
                        }}
                      >
                        Full-scale displays of siding, decking, railing, windows, doors, and finished interiors
                      </td>
                    </tr>
                    <tr>
                      <th
                        style={{
                          textAlign: 'left',
                          verticalAlign: 'top',
                          padding: '14px 20px 14px 0',
                          borderBottom: '1px solid #E4E5EE',
                          fontSize: '16px',
                          color: '#14183A',
                          width: '34%',
                        }}
                      >
                        Drafting contract
                      </th>
                      <td
                        style={{
                          padding: '14px 0',
                          borderBottom: '1px solid #E4E5EE',
                          fontSize: '16px',
                          lineHeight: '1.6',
                          color: '#4A4F6A',
                        }}
                      >
                        In-house drafting for new homes, additions, and remodels
                      </td>
                    </tr>
                    <tr>
                      <th
                        style={{
                          textAlign: 'left',
                          verticalAlign: 'top',
                          padding: '14px 20px 14px 0',
                          borderBottom: '1px solid #E4E5EE',
                          fontSize: '16px',
                          color: '#14183A',
                          width: '34%',
                        }}
                      >
                        Brand design tools
                      </th>
                      <td
                        style={{
                          padding: '14px 0',
                          borderBottom: '1px solid #E4E5EE',
                          fontSize: '16px',
                          lineHeight: '1.6',
                          color: '#4A4F6A',
                        }}
                      >
                        Interactive manufacturer tools to visualize siding and roofing colors, deck layouts, windows, doors,
                        and countertops
                      </td>
                    </tr>
                    <tr>
                      <th
                        style={{
                          textAlign: 'left',
                          verticalAlign: 'top',
                          padding: '14px 20px 14px 0',
                          borderBottom: '1px solid #E4E5EE',
                          fontSize: '16px',
                          color: '#14183A',
                          width: '34%',
                        }}
                      >
                        Delivery
                      </th>
                      <td
                        style={{
                          padding: '14px 0',
                          borderBottom: '1px solid #E4E5EE',
                          fontSize: '16px',
                          lineHeight: '1.6',
                          color: '#4A4F6A',
                        }}
                      >
                        Materials delivered to the job site
                      </td>
                    </tr>
                  </tbody>
                </table>
              </section>
              <section id="brands">
                <h2>Brands We Carry</h2>
                <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '14px' }}>
                  <tbody>
                    <tr>
                      <th
                        style={{
                          textAlign: 'left',
                          verticalAlign: 'top',
                          padding: '14px 20px 14px 0',
                          borderBottom: '1px solid #E4E5EE',
                          fontSize: '16px',
                          color: '#14183A',
                          width: '34%',
                        }}
                      >
                        Kitchen & Bath: Cabinetry
                      </th>
                      <td
                        style={{
                          padding: '14px 0',
                          borderBottom: '1px solid #E4E5EE',
                          fontSize: '16px',
                          lineHeight: '1.6',
                          color: '#4A4F6A',
                        }}
                      >
                        Mid Continent Cabinetry (main supplier), Holiday Kitchens, JSI Cabinetry, Cabnova, Wood Harbor
                        Custom Cabinetry
                      </td>
                    </tr>
                    <tr>
                      <th
                        style={{
                          textAlign: 'left',
                          verticalAlign: 'top',
                          padding: '14px 20px 14px 0',
                          borderBottom: '1px solid #E4E5EE',
                          fontSize: '16px',
                          color: '#14183A',
                          width: '34%',
                        }}
                      >
                        Kitchen & Bath: Countertops
                      </th>
                      <td
                        style={{
                          padding: '14px 0',
                          borderBottom: '1px solid #E4E5EE',
                          fontSize: '16px',
                          lineHeight: '1.6',
                          color: '#4A4F6A',
                        }}
                      >
                        Cambria, Counter-Form, Linnstone, Q Quartz, SFI Inc., Trends
                      </td>
                    </tr>
                    <tr>
                      <th
                        style={{
                          textAlign: 'left',
                          verticalAlign: 'top',
                          padding: '14px 20px 14px 0',
                          borderBottom: '1px solid #E4E5EE',
                          fontSize: '16px',
                          color: '#14183A',
                          width: '34%',
                        }}
                      >
                        Decking & Railing
                      </th>
                      <td
                        style={{
                          padding: '14px 0',
                          borderBottom: '1px solid #E4E5EE',
                          fontSize: '16px',
                          lineHeight: '1.6',
                          color: '#4A4F6A',
                        }}
                      >
                        Keylink, Deckorators, DSI, TimberTech, Trex
                      </td>
                    </tr>
                    <tr>
                      <th
                        style={{
                          textAlign: 'left',
                          verticalAlign: 'top',
                          padding: '14px 20px 14px 0',
                          borderBottom: '1px solid #E4E5EE',
                          fontSize: '16px',
                          color: '#14183A',
                          width: '34%',
                        }}
                      >
                        Windows
                      </th>
                      <td
                        style={{
                          padding: '14px 0',
                          borderBottom: '1px solid #E4E5EE',
                          fontSize: '16px',
                          lineHeight: '1.6',
                          color: '#4A4F6A',
                        }}
                      >
                        Andersen Windows & Doors, PARCO Windows & Patio Doors, North Star Windows & Doors, Thermo-Tech
                        Windows
                      </td>
                    </tr>
                    <tr>
                      <th
                        style={{
                          textAlign: 'left',
                          verticalAlign: 'top',
                          padding: '14px 20px 14px 0',
                          borderBottom: '1px solid #E4E5EE',
                          fontSize: '16px',
                          color: '#14183A',
                          width: '34%',
                        }}
                      >
                        Exterior Doors
                      </th>
                      <td
                        style={{
                          padding: '14px 0',
                          borderBottom: '1px solid #E4E5EE',
                          fontSize: '16px',
                          lineHeight: '1.6',
                          color: '#4A4F6A',
                        }}
                      >
                        Bayer Built Woodworks, Metropolitan Door Industries, Therma-Tru Doors
                      </td>
                    </tr>
                    <tr>
                      <th
                        style={{
                          textAlign: 'left',
                          verticalAlign: 'top',
                          padding: '14px 20px 14px 0',
                          borderBottom: '1px solid #E4E5EE',
                          fontSize: '16px',
                          color: '#14183A',
                          width: '34%',
                        }}
                      >
                        Interior Doors & Trim
                      </th>
                      <td
                        style={{
                          padding: '14px 0',
                          borderBottom: '1px solid #E4E5EE',
                          fontSize: '16px',
                          lineHeight: '1.6',
                          color: '#4A4F6A',
                        }}
                      >
                        Bayer Built Woodworks, Koch Doors, Metropolitan Door Industries, TruStile, Western Building Products
                      </td>
                    </tr>
                    <tr>
                      <th
                        style={{
                          textAlign: 'left',
                          verticalAlign: 'top',
                          padding: '14px 20px 14px 0',
                          borderBottom: '1px solid #E4E5EE',
                          fontSize: '16px',
                          color: '#14183A',
                          width: '34%',
                        }}
                      >
                        Siding
                      </th>
                      <td
                        style={{
                          padding: '14px 0',
                          borderBottom: '1px solid #E4E5EE',
                          fontSize: '16px',
                          lineHeight: '1.6',
                          color: '#4A4F6A',
                        }}
                      >
                        CertainTeed, TruExterior, Versetta Stone, Evolve Stone, James Hardie, MAC Metal Architectural,
                        Quality Edge, Royal Building Solutions
                      </td>
                    </tr>
                    <tr>
                      <th
                        style={{
                          textAlign: 'left',
                          verticalAlign: 'top',
                          padding: '14px 20px 14px 0',
                          borderBottom: '1px solid #E4E5EE',
                          fontSize: '16px',
                          color: '#14183A',
                          width: '34%',
                        }}
                      >
                        Roofing
                      </th>
                      <td
                        style={{
                          padding: '14px 0',
                          borderBottom: '1px solid #E4E5EE',
                          fontSize: '16px',
                          lineHeight: '1.6',
                          color: '#4A4F6A',
                        }}
                      >
                        CertainTeed, Malarkey Roofing Products, Metal Sales, Owens Corning
                      </td>
                    </tr>
                  </tbody>
                </table>
              </section>
              <section id="key-pages">
                <h2>Key Pages</h2>
                <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '14px' }}>
                  <tbody>
                    <tr>
                      <th
                        style={{
                          textAlign: 'left',
                          verticalAlign: 'top',
                          padding: '14px 20px 14px 0',
                          borderBottom: '1px solid #E4E5EE',
                          fontSize: '16px',
                          color: '#14183A',
                          width: '34%',
                        }}
                      >
                        Home
                      </th>
                      <td
                        style={{
                          padding: '14px 0',
                          borderBottom: '1px solid #E4E5EE',
                          fontSize: '16px',
                          lineHeight: '1.6',
                          color: '#4A4F6A',
                        }}
                      >
                        <a href="/">Beaver Builders Supply home page</a>
                      </td>
                    </tr>
                    <tr>
                      <th
                        style={{
                          textAlign: 'left',
                          verticalAlign: 'top',
                          padding: '14px 20px 14px 0',
                          borderBottom: '1px solid #E4E5EE',
                          fontSize: '16px',
                          color: '#14183A',
                          width: '34%',
                        }}
                      >
                        Materials
                      </th>
                      <td
                        style={{
                          padding: '14px 0',
                          borderBottom: '1px solid #E4E5EE',
                          fontSize: '16px',
                          lineHeight: '1.6',
                          color: '#4A4F6A',
                        }}
                      >
                        <a href="/materials">Materials and brands by category</a>
                      </td>
                    </tr>
                    <tr>
                      <th
                        style={{
                          textAlign: 'left',
                          verticalAlign: 'top',
                          padding: '14px 20px 14px 0',
                          borderBottom: '1px solid #E4E5EE',
                          fontSize: '16px',
                          color: '#14183A',
                          width: '34%',
                        }}
                      >
                        Design
                      </th>
                      <td
                        style={{
                          padding: '14px 0',
                          borderBottom: '1px solid #E4E5EE',
                          fontSize: '16px',
                          lineHeight: '1.6',
                          color: '#4A4F6A',
                        }}
                      >
                        <a href="/design">Drafting contract and brand design tools</a>
                      </td>
                    </tr>
                    <tr>
                      <th
                        style={{
                          textAlign: 'left',
                          verticalAlign: 'top',
                          padding: '14px 20px 14px 0',
                          borderBottom: '1px solid #E4E5EE',
                          fontSize: '16px',
                          color: '#14183A',
                          width: '34%',
                        }}
                      >
                        Gallery
                      </th>
                      <td
                        style={{
                          padding: '14px 0',
                          borderBottom: '1px solid #E4E5EE',
                          fontSize: '16px',
                          lineHeight: '1.6',
                          color: '#4A4F6A',
                        }}
                      >
                        <a href="/gallery">Job sites, showroom, and the yard</a>
                      </td>
                    </tr>
                    <tr>
                      <th
                        style={{
                          textAlign: 'left',
                          verticalAlign: 'top',
                          padding: '14px 20px 14px 0',
                          borderBottom: '1px solid #E4E5EE',
                          fontSize: '16px',
                          color: '#14183A',
                          width: '34%',
                        }}
                      >
                        About Us
                      </th>
                      <td
                        style={{
                          padding: '14px 0',
                          borderBottom: '1px solid #E4E5EE',
                          fontSize: '16px',
                          lineHeight: '1.6',
                          color: '#4A4F6A',
                        }}
                      >
                        <a href="/about">Our story and values</a>
                      </td>
                    </tr>
                    <tr>
                      <th
                        style={{
                          textAlign: 'left',
                          verticalAlign: 'top',
                          padding: '14px 20px 14px 0',
                          borderBottom: '1px solid #E4E5EE',
                          fontSize: '16px',
                          color: '#14183A',
                          width: '34%',
                        }}
                      >
                        Contact Us
                      </th>
                      <td
                        style={{
                          padding: '14px 0',
                          borderBottom: '1px solid #E4E5EE',
                          fontSize: '16px',
                          lineHeight: '1.6',
                          color: '#4A4F6A',
                        }}
                      >
                        <a href="/contact">Phone, email, directions, and quote requests</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </section>
              <section id="common-questions">
                <h2>Common Questions</h2>
                <p>
                  <strong>Where is Beaver Builders Supply located?</strong>
                  <br />
                  N6838 Builders Ct., Holmen, WI 54636, serving La Crosse and the Coulee Region.
                </p>
                <p>
                  <strong>Who do you serve?</strong>
                  <br />
                  Builders and homeowners, from the first sketch to delivery on site.
                </p>
                <p>
                  <strong>Can I see products before I buy?</strong>
                  <br />
                  Yes. Our interactive showroom has full-scale displays of siding, decking, railing, windows, doors, and
                  finished interiors.
                </p>
                <p>
                  <strong>Do you help with plans?</strong>
                  <br />
                  Yes. Our in-house drafting team works on plans for new homes, additions, and remodels.
                </p>
                <p>
                  <strong>How do I get a quote?</strong>
                  <br />
                  Call 608-526-3232, email sales@beaverbuilderssupply.com, or use the form on our{' '}
                  <a href="/contact">Contact page</a>.
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
