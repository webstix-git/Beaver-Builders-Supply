import HeaderHeightSync from './HeaderHeightSync';

function NavLink({ href, active, children }) {
  return active ? (
    <a href={href} style={{ padding: '10px 14px', color: '#fff', borderBottom: '2px solid #E31E26' }}>
      {children}
    </a>
  ) : (
    <a href={href} className="hv-6d2547" style={{ padding: '10px 14px', color: '#fff' }}>
      {children}
    </a>
  );
}

export default function SiteHeader({ active, vals }) {
  return (
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
        <a href="/" style={{ display: 'block', flex: '0 0 auto' }}>
          <img className="bbs-logo" src="/assets/logo-white.png" alt="Beaver Builders' Supply" />
        </a>
        <nav
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '4px',
            alignItems: 'center',
            marginRight: '10px',
            fontFamily: "'Barlow Condensed',sans-serif",
            fontSize: '19px',
            fontWeight: '600',
            letterSpacing: '.04em',
            textTransform: 'uppercase',
          }}
        >
          <NavLink href="/">Home</NavLink>
          <div style={{ position: 'relative' }} onMouseEnter={vals.openMaterials} onMouseLeave={vals.closeMenu}>
            <a
              className="hv-6d2547"
              href="/materials"
              style={{ padding: '10px 14px', color: '#fff', display: 'flex', gap: '6px', alignItems: 'center' }}
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
                  fontFamily: "'Source Sans 3',sans-serif",
                  textTransform: 'none',
                  letterSpacing: '0',
                  fontSize: '16px',
                  fontWeight: '500',
                }}
              >
                <a
                  className="hv-348c4d"
                  href="/materials#kitchen-bath"
                  style={{ display: 'block', padding: '10px 20px', color: '#14183A' }}
                >
                  Kitchen & Bath
                </a>
                <a
                  className="hv-348c4d"
                  href="/materials#decking-railing"
                  style={{ display: 'block', padding: '10px 20px', color: '#14183A' }}
                >
                  Decking & Railing
                </a>
                <a
                  className="hv-348c4d"
                  href="/materials#windows"
                  style={{ display: 'block', padding: '10px 20px', color: '#14183A' }}
                >
                  Windows
                </a>
                <a
                  className="hv-348c4d"
                  href="/materials#exterior-doors"
                  style={{ display: 'block', padding: '10px 20px', color: '#14183A' }}
                >
                  Exterior Doors
                </a>
                <a
                  className="hv-348c4d"
                  href="/materials#interior-doors-trim"
                  style={{ display: 'block', padding: '10px 20px', color: '#14183A' }}
                >
                  Interior Doors & Trim
                </a>
                <a
                  className="hv-348c4d"
                  href="/materials#siding"
                  style={{ display: 'block', padding: '10px 20px', color: '#14183A' }}
                >
                  Siding
                </a>
                <a
                  className="hv-348c4d"
                  href="/materials#roofing"
                  style={{ display: 'block', padding: '10px 20px', color: '#14183A' }}
                >
                  Roofing
                </a>
              </div>
            )}
          </div>
          <div style={{ position: 'relative' }} onMouseEnter={vals.openDesign} onMouseLeave={vals.closeMenu}>
            <a
              className="hv-6d2547"
              href="/design"
              style={{
                padding: '10px 14px',
                color: '#fff',
                display: 'flex',
                gap: '6px',
                alignItems: 'center',
                ...(active === 'design' ? { borderBottom: '2px solid #E31E26' } : {}),
              }}
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
                  fontFamily: "'Source Sans 3',sans-serif",
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
          <NavLink href="/gallery" active={active === 'gallery'}>
            Gallery
          </NavLink>
          <NavLink href="/about" active={active === 'about'}>
            About
          </NavLink>
          <NavLink href="/contact" active={active === 'contact'}>
            Contact
          </NavLink>
          <a
            className="hv-6a96a5"
            href="/contact"
            style={{
              marginLeft: '10px',
              padding: '12px 22px',
              background: '#E31E26',
              color: '#fff',
              borderRadius: '2px',
            }}
          >
            Request a Quote
          </a>
        </nav>
      </div>
      <HeaderHeightSync />
    </header>
  );
}
