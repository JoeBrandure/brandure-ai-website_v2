import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Additional Meta Tags */}
        <meta name="application-name" content="Brandure AI" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Brandure AI" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
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
