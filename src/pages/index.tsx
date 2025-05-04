import { GuideLink } from '@/components/guideLink';
import { Information } from '@/components/information';
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
      className={`${geistSans.className} ${geistMono.className} font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="m-auto max-w-[960px] space-y-3 p-4">
        <div className="space-y-3 md:grid md:grid-cols-2 md:gap-3">
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
        </div>

        <Information information="ご利用にはユーザー登録が必要になります。" />
      </main>
    </div>
  );
}
