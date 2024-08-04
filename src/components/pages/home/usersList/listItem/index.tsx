import React from 'react';

// Next
import { useRouter } from 'next/navigation';

// Icons
import { ArrowRightIcon } from '@heroicons/react/24/solid';

// Types
interface IListItemProps {
  id: number;
  name: {
    firstname: string;
    lastname: string;
  };
  email: string;
}

// -------------------------------------------|| LIST ITEM - HOME ||----------------------------------------------------

const ListItem: React.FC<IListItemProps> = ({ name, email, id }) => {
  // Router
  const router = useRouter();

  return (
    <li
      className='flex justify-between items-center p-3 hover:bg-gray-100 rounded cursor-pointer'
      onClick={() => router.push(`/user/${id}`)}
    >
      <div className='overflow-hidden'>
        <p className='text-sm font-medium text-slate-900'>
          {name.firstname} {name.lastname}
        </p>
        <p className='text-sm text-slate-500 truncate'>{email}</p>
      </div>

      <ArrowRightIcon className='size-4 text-blue-500' />
    </li>
  );
};

export default ListItem;
