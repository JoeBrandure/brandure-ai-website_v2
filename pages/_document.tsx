import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Favicon and Tab Icons */}
        <link rel="icon" type="image/png" sizes="192x192" href="/Logos/brandure-logo-new-white-b-black-background.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/Logos/brandure-logo-new-white-b-black-background.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/Logos/brandure-logo-new-white-b-black-background.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/Logos/brandure-logo-new-white-b-black-background.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/Logos/brandure-logo-new-white-b-black-background.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/Logos/brandure-logo-new-white-b-black-background.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/Logos/brandure-logo-new-white-b-black-background.png" />
        <link rel="shortcut icon" href="/Logos/brandure-logo-new-white-b-black-background.png" />
        <link rel="mask-icon" href="/Logos/brandure-logo-new-white-b-black-background.png" color="#000000" />
        
        {/* Viewport and Mobile Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
        <meta name="application-name" content="Brandure AI" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Brandure AI" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#000000" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="B8KXnHTA-6kANnwu5f01X-ATSCKHprhZ3Ybc5K8l3Co" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script dangerouslySetInnerHTML={{
          __html: `
            // Ensure page starts at top on load
            window.addEventListener('load', () => {
              window.scrollTo(0, 0);
              document.querySelector('.main-container')?.scrollTo(0, 0);
            });
          `
        }} />
      </body>
    </Html>
  );
}
