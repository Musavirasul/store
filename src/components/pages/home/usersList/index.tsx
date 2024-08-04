import React, { useMemo, useState } from 'react';

// Redux
import { useAppSelector } from '@/store/hooks';

// Components
import SearchInput from '@/components/common/searchInput';
import ListItem from '@/components/pages/home/usersList/listItem';
import Loading from '@/components/pages/home/usersList/loading';

// Hooks
import { useDebounce } from '@/hooks/debounce';

import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

// -------------------------------------|| USERS LIST - COMPONENTS ||---------------------------------------------------

const UsersList: React.FC = () => {
  // Store States
  const { users, loading } = useAppSelector((state) => state.userSlice);

  // States
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Methods
  const handleSearchChange = useDebounce(
    (value: string) => setSearchQuery(value),
    300
  );

  // Memoized filtered users
  const filteredUsers = useMemo(
    () =>
      users.filter((user) =>
        user.username.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    [users, searchQuery]
  );

  return (
    <div className='p-5 flex flex-col h-screen'>
      <div className='flex-shrink-0'>
        <h5 className='text-4xl font-light'>Users List</h5>

        <SearchInput
          className='my-5'
          placeholder='Search Users ...'
          onChange={(value: string) => handleSearchChange(value)}
        />
      </div>

      <SimpleBar className='flex-grow overflow-y-auto h-full'>
        {loading ? (
          <Loading />
        ) : (
          <ul role='list' className='divide-y divide-slate-200'>
            {filteredUsers.map((user) => (
              <ListItem key={user.username} {...user} />
            ))}
          </ul>
        )}
      </SimpleBar>
    </div>
  );
};

export default UsersList;
