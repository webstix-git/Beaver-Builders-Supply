import './fonts.css';
import './globals.css';
import '../styles/hover.css';
import ScrollTopButton from '../components/ScrollTopButton';

export const metadata = {
  title: "Beaver Builders' Supply | Building Materials in Holmen, WI",
  description:
    'Locally owned, third-generation building supply company in Holmen, Wisconsin. Quality materials, design support, and expert guidance for builders and homeowners.'
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <div id="dc-root">
          <div className="sc-host">{children}</div>
        </div>
        <ScrollTopButton />
      </body>
    </html>
  );
}
