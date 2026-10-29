import './fonts.css';
import './globals.css';
import '../styles/hover.css';
import ScrollTopButton from '../components/ScrollTopButton';
import TrackingScripts from '../components/TrackingScripts';
import JsonLd from '../components/JsonLd';
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL, absoluteUrl } from '../lib/site';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Building Materials in Holmen, WI`,
    template: `%s | ${SITE_NAME}`
  },
  description: SITE_DESCRIPTION,
  alternates: { canonical: absoluteUrl('/') },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/icon0.svg', type: 'image/svg+xml' },
      { url: '/icon1.png', sizes: '96x96', type: 'image/png' }
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }]
  },
  openGraph: {
    title: `${SITE_NAME} | Building Materials in Holmen, WI`,
    description: SITE_DESCRIPTION,
    url: absoluteUrl('/'),
    siteName: SITE_NAME,
    type: 'website',
    locale: 'en_US'
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | Building Materials in Holmen, WI`,
    description: SITE_DESCRIPTION
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();

  return (
    <html lang="en">
      <head>
        {gaId ? (
          <>
            {/* Google tag (gtag.js) — from NEXT_PUBLIC_GA_MEASUREMENT_ID */}
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${gaId}');
`
              }}
            />
          </>
        ) : null}
      </head>
      <body>
        <TrackingScripts />
        <JsonLd />
        <div id="dc-root">
          <div className="sc-host">{children}</div>
        </div>
        <ScrollTopButton />
      </body>
    </html>
  );
}
