import '@fontsource/dm-sans/400.css';
import '@fontsource/dm-sans/500.css';
import '@fontsource/dm-sans/700.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import FloatingGradient from '../components/FloatingGradient';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <FloatingGradient />
      <Component {...pageProps} />
    </>
  );
}
