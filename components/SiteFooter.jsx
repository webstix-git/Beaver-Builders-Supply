export default function SiteFooter() {
  return (
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
          <a className="hv-b2d6c8" href="/materials#kitchen-bath" style={{ color: '#fff' }}>
            Kitchen & Bath
          </a>
          <a className="hv-b2d6c8" href="/materials#decking-railing" style={{ color: '#fff' }}>
            Decking & Railing
          </a>
          <a className="hv-b2d6c8" href="/materials#windows" style={{ color: '#fff' }}>
            Windows
          </a>
          <a className="hv-b2d6c8" href="/materials#exterior-doors" style={{ color: '#fff' }}>
            Exterior Doors
          </a>
          <a className="hv-b2d6c8" href="/materials#interior-doors-trim" style={{ color: '#fff' }}>
            Interior Doors & Trim
          </a>
          <a className="hv-b2d6c8" href="/materials#siding" style={{ color: '#fff' }}>
            Siding
          </a>
          <a className="hv-b2d6c8" href="/materials#roofing" style={{ color: '#fff' }}>
            Roofing
          </a>
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
  );
}
