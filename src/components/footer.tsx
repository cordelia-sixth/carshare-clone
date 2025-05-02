import Link from 'next/link';

/**
 * フッターコンポーネント
 */
export const Footer = () => {
  return (
    <footer className="space-y-4 px-6">
      <h1>CAR-SHARE</h1>
      <p>CAR-SHAREは良さげなカーシェアリングサービスです。</p>
      <ul className="flex gap-2">
        <li>
          <Link href="#">利用規約</Link>
        </li>
        <li>
          <Link href="#">会員規約</Link>
        </li>
        <li>
          <Link href="#">プライバシーポリシー</Link>
        </li>
      </ul>
    </footer>
  );
};
