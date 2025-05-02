import { Footer } from '@/components/footer';
import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="px-6 antialiased">
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  );
}
