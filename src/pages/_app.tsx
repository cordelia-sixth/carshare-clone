import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { SPMenu } from '@/components/menu/sp-menu';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="grid min-h-screen grid-rows-[auto_1fr_auto]">
        <Header />
        <Component {...pageProps} />
        <Footer />
        <SPMenu />
      </div>
    </>
  );
}
