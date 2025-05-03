import { Menu } from 'lucide-react';
import { Button } from './button';
import { PCMenu } from './menu/pc-menu';

/**
 * ヘッダーコンポーネント
 */
export const Header = () => {
  return (
    <header className="border-b-1 border-gray-300">
      <div className="m-auto flex max-w-[960px] justify-between px-4 py-2">
        <div className="flex items-center gap-3">
          <Menu />
          <h1 className="text-xl">CAR-SHARE</h1>
        </div>
        <div className="flex gap-2">
          <PCMenu />
          <Button handleClick={() => {}}>ログイン</Button>
        </div>
      </div>
    </header>
  );
};
