import { ClipboardList, House, Map, User } from 'lucide-react';
import Link from 'next/link';
import { useAuth } from '../providers/auth-provider';

export const PCMenu = () => {
  const { user, loading } = useAuth();

  return (
    <div className="hidden items-center gap-3 md:flex">
      <ul className="flex gap-2">
        <li className="cursor-pointer rounded-md border border-gray-300 p-2">
          <House size={15} />
        </li>
        <li className="cursor-pointer rounded-md border border-gray-300 p-2">
          <Link href="search">
            <Map size={15} />
          </Link>
        </li>
        <li className="cursor-pointer rounded-md border border-gray-300 p-2">
          <ClipboardList size={15} />
        </li>
        {user ? (
          <li className="cursor-pointer rounded-md border border-gray-300 p-2">
            <User size={15} />
          </li>
        ) : null}
      </ul>
    </div>
  );
};
