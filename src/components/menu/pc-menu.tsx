import { ClipboardList, House, Map, User } from 'lucide-react';
import { useAuth } from '../providers/auth-provider';

export const PCMenu = () => {
  const { user, loading } = useAuth();

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
        {user ? (
          <li className="rounded-md border border-gray-300 p-2">
            <User size={15} />
          </li>
        ) : null}
      </ul>
    </div>
  );
};
