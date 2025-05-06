import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { SPMenu } from '@/components/menu/sp-menu';
import { updateUser } from '@/lib/authStore';

import { fireAuth } from '@/lib/firebase-auth';
import '@/styles/globals.css';
import { onAuthStateChanged } from 'firebase/auth';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  // マウント時にログイン状態の監視を開始
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(fireAuth, (firebaseUser) => {
      // 状態ストアにログイン状態を渡す
      updateUser(firebaseUser);
    });

    // アンマウント時にfirebaseとのコネクションを破棄
    return () => unsubscribe();
  }, []);

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
