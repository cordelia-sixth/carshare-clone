import { ClipboardList, House, Map } from 'lucide-react';
import { Button } from '../button';

export const PCMenu = () => {
  return (
    <div className="hidden items-center gap-3 md:flex">
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
  );
};
