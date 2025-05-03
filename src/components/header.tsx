import { ClipboardList, House, Map, Menu } from 'lucide-react';
import { Button } from './button';

/**
 * ヘッダーコンポーネント
 */
export const Header = () => {
  return (
    <header className="border-b-1 border-gray-300">
      <div className="m-auto flex max-w-[960px] justify-between p-4">
        <div className="flex items-center gap-3">
          <Menu />
          <h1>CAR-SHARE</h1>
        </div>
        <div className="flex items-center gap-3">
          <ul className="flex gap-2">
            <li className="rounded-md border border-gray-300 p-2">
              <House size={15} />
            </li>
            <li className="rounded-md border border-gray-300 p-2">
              <Map size={15} />
            </li>
            <li className="rounded-md border border-gray-300 p-2">
              <ClipboardList size={15} />
            </li>
          </ul>
          <Button handleClick={() => {}}>ログイン</Button>
        </div>
      </div>
    </header>
  );
};
