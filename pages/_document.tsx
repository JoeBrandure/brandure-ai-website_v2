import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
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
