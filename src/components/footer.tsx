import Link from 'next/link';

/**
 * フッターコンポーネント
 */
export const Footer = () => {
  return (
    <footer className="border-t-1 border-gray-300">
      <div className="m-auto max-w-[960px] space-y-4 px-4 py-7">
        <div>
          <h1 className="text-xl">CAR-SHARE</h1>
          <p className="text-sm text-gray-500">
            CAR-SHAREは良さげなカーシェアリングサービスです。
          </p>
        </div>
        <ul className="flex gap-2 text-xs text-blue-500">
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
