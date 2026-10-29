import Script from 'next/script';

/**
 * Loads GTM when NEXT_PUBLIC_GTM_ID is set (e.g. GTM-XXXX).
 * GA4 is loaded from NEXT_PUBLIC_GA_MEASUREMENT_ID in app/layout.jsx <head>
 * so the measurement ID appears in View Source.
 */
export default function TrackingScripts() {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID?.trim();

  if (!gtmId) return null;

  return (
    <>
      <Script id="gtm-loader" strategy="afterInteractive">{`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${gtmId}');
      `}</Script>
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
          title="Google Tag Manager"
        />
      </noscript>
    </>
  );
}
