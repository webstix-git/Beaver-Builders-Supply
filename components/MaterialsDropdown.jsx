export const MATERIALS_NAV = [
  {
    name: 'Kitchen & Bath',
    href: '/materials#kitchen-bath',
    slug: 'kitchen-bath',
    children: [
      { name: 'Cabinetry', href: '/materials#cabinetry', slug: 'cabinetry' },
      { name: 'Countertops', href: '/materials#countertops', slug: 'countertops' }
    ]
  },
  {
    name: 'Decking & Railing',
    href: '/materials#decking-railing',
    slug: 'decking-railing'
  },
  {
    name: 'Windows & Doors',
    href: '/materials#windows',
    slug: 'windows',
    children: [
      { name: 'Windows', href: '/materials#windows', slug: 'windows' },
      { name: 'Exterior Doors', href: '/materials#exterior-doors', slug: 'exterior-doors' },
      { name: 'Interior Doors & Trim', href: '/materials#interior-doors-trim', slug: 'interior-doors-trim' }
    ]
  },
  {
    name: 'Roofing & Siding',
    href: '/materials#roofing',
    slug: 'roofing',
    children: [
      { name: 'Roofing', href: '/materials#roofing', slug: 'roofing' },
      { name: 'Siding', href: '/materials#siding', slug: 'siding' }
    ]
  }
];

const itemStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '16px',
  padding: '10px 20px',
  color: '#14183A',
};

// onSelect(slug, event) lets the Materials page switch tabs without a full navigation.
export default function MaterialsDropdown({ onSelect, hrefFor }) {
  const linkHref = (item) => (hrefFor ? hrefFor(item) : item.href);
  const onClick = (item) => (e) => {
    if (onSelect) onSelect(item.slug, e);
  };

  return (
    <div
      className="bbs-dd"
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
      {MATERIALS_NAV.map((item) =>
        item.children ? (
          <div key={item.name} className="bbs-dd-item">
            <a className="hv-348c4d" href={linkHref(item)} onClick={onClick(item)} style={itemStyle}>
              {item.name}
              <span aria-hidden="true" style={{ fontSize: '12px', color: '#313893' }}>
                ▸
              </span>
            </a>
            <div className="bbs-dd-flyout">
              {item.children.map((child) => (
                <a
                  key={child.name}
                  className="hv-348c4d"
                  href={linkHref(child)}
                  onClick={onClick(child)}
                  style={{ display: 'block', padding: '10px 20px', color: '#14183A' }}
                >
                  {child.name}
                </a>
              ))}
            </div>
          </div>
        ) : (
          <a
            key={item.name}
            className="hv-348c4d"
            href={linkHref(item)}
            onClick={onClick(item)}
            style={{ display: 'block', padding: '10px 20px', color: '#14183A' }}
          >
            {item.name}
          </a>
        )
      )}
    </div>
  );
}
