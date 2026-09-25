import './fonts.css';
import './globals.css';
import '../styles/hover.css';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <div id="dc-root">
          <div className="sc-host">{children}</div>
        </div>
      </body>
    </html>
  );
}
