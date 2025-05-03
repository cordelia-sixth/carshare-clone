import Link from 'next/link';

/**
 * フッターコンポーネント
 */
export const Footer = () => {
  return (
    <footer className="">
      <div className="m-auto max-w-[960px] space-y-3 py-3">
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
      </div>
    </footer>
  );
};
