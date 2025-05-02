import Link from 'next/link';
import { ReactNode } from 'react';

type Props = {
  icon: ReactNode;
  title: string;
  url: string;
  description: string;
};

/**
 * アプリケーション全体で使うご案内リンクコンポーネント
 * @param icon lucidaアイコン
 * @param title タイトル
 * @param description 説明文
 * @param url 遷移先URL
 */
export const GuideLink = ({ icon, title, description, url }: Props) => {
  return (
    <Link
      href={url}
      className="flex gap-2 rounded-lg bg-blue-500 px-4 py-4 text-white"
    >
      <div className="mt-0.5">{icon}</div>
      <div>
        <p className="text-xl font-bold">{title}</p>
        <p>{description}</p>
      </div>
    </Link>
  );
};
