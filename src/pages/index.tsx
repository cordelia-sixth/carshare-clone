import { Button } from '@/components/button';
import { GuideLink } from '@/components/guideLink';
import { BookText, OctagonAlert } from 'lucide-react';
import { Geist, Geist_Mono } from 'next/font/google';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20`}
    >
      <main className="row-start-2 flex flex-col items-center gap-[32px] sm:items-start">
        <Button
          handleClick={() => {
            alert('hello');
          }}
        >
          ログイン
        </Button>
        <GuideLink
          icon={<BookText />}
          url="#"
          title="ご利用方法"
          description="こちらから利用方法をご確認ください。特に利用開始時・利用終了時の手順について、あらかじめご確認ください。"
        />
        <GuideLink
          icon={<OctagonAlert />}
          url="#"
          title="事故・トラブルの手引き"
          description="もしもの際に落ち着いて対応できるように、こちらから事故・トラブル時の手順について、あらかじめご確認ください。"
        />
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-[24px]"></footer>
    </div>
  );
}
