function Rule() {
  return <span className="bbs-topbar-rule" aria-hidden="true" />;
}

export default function TopBar() {
  return (
    <div className="bbs-topbar">
      <div className="bbs-topbar-inner">
        <div className="bbs-topbar-social">
          <div className="bbs-topbar-icons">
            <a href="https://www.facebook.com/beaverbuilderssupply" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg className="bbs-ico" width="18" height="18" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/beaverbuilderssupply/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg className="bbs-ico" width="18" height="18" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href="https://www.pinterest.com/beaverbuilderssupply/" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
              <svg className="bbs-ico" width="18" height="18" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <path d="M12.2 10.5 10.2 21.5" />
                <path d="M9.1 12.6C8.5 9.6 10.5 7 13.2 7c2.4 0 3.8 1.6 3.8 3.6 0 2.7-1.5 4.6-3.5 4.6-.9 0-1.7-.6-1.6-1.4" />
              </svg>
            </a>
          </div>
          <Rule />
          <a className="bbs-topbar-phone" href="tel:6085263232">
            <svg className="bbs-ico" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            608-526-3232
          </a>
        </div>
      </div>
    </div>
  );
}
