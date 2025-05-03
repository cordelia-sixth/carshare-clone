import { ClipboardList, House, Map } from 'lucide-react';

export const SPMenu = () => {
  return (
    <div className="border-t border-gray-300 p-1 md:hidden">
      <ul className="flex justify-around">
        <li>
          <House size={18} className="m-auto" />
          <p className="text-[10px] text-gray-600">ホーム・予約一覧</p>
        </li>
        <li>
          <Map size={18} className="m-auto" />
          <p className="text-[10px] text-gray-600">地図から探す</p>
        </li>
        <li>
          <ClipboardList size={18} className="m-auto" />
          <p className="text-[10px] text-gray-600">ダッシュボード</p>
        </li>
      </ul>
    </div>
  );
};
