'use client';

import React, { useEffect, useState } from 'react';

// Next
import { useParams, useRouter } from 'next/navigation';

// Services
import { getUserById } from '@/services/dataActions/users';

// Types
import { IUser } from '@/services/dataActions/users/type';

// Icons
import { ArrowRightIcon } from '@heroicons/react/24/solid';

// ----------------------------------------|| USER - COMPONENTS ||------------------------------------------------------

const UserView = () => {
  // Param
  const param = useParams();
  const id = param.id[0];

  // Router
  const router = useRouter();

  // States
  const [loading, setLoading] = useState<boolean>(false);
  const [userData, setUserData] = useState<IUser>();

  console.log(param.id);

  useEffect(() => {
    if (id) {
      setLoading(true);
      getUserById(Number(id))
        .then((res) => {
          if (res.status === 200) {
            setUserData(res.data);
            setLoading(false);
          }
        })
        .catch(() => {
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) {
    return (
      <div className='flex justify-center items-center h-dvh'>
        <h5 className='text-4xl font-light'>Loading ...</h5>
      </div>
    );
  }

  return (
    <div className='p-5'>
      <div className='flex justify-between items-center'>
        <div className='pb-3 py-2'>
          <h5 className='text-3xl font-light'>
            {userData?.name.firstname} {userData?.name.lastname}
          </h5>
          <p className='text-lg text-gray-500'>{userData?.email}</p>
        </div>
        <div className='cursor-pointer' onClick={() => router.push('/')}>
          <ArrowRightIcon className='size-8 text-blue-500' />
        </div>
      </div>

      <div className='w-full p-4 bg-white border border-gray-200 rounded-lg sm:p-8'>
        <div className='flex items-center justify-between mb-4'>
          <h5 className='text-xl font-bold leading-none text-gray-900 dark:text-white'>
            User Information
          </h5>
        </div>
        <div className='flow-root'>
          <ul
            role='list'
            className='divide-y divide-gray-200 dark:divide-gray-700'
          >
            <li className='py-3 sm:py-4'>
              <div className='flex items-center'>
                <div className='flex-1 min-w-0 ms-4'>
                  <p className='text-sm font-medium text-gray-900 truncate dark:text-white'>
                    Full Name:
                  </p>
                </div>
                <div className='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                  {userData?.name.firstname} {userData?.name.lastname}
                </div>
              </div>
            </li>
            <li className='py-3 sm:py-4'>
              <div className='flex items-center'>
                <div className='flex-1 min-w-0 ms-4'>
                  <p className='text-sm font-medium text-gray-900 truncate dark:text-white'>
                    User Name:
                  </p>
                </div>
                <div className='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                  {userData?.username}
                </div>
              </div>
            </li>
            <li className='py-3 sm:py-4'>
              <div className='flex items-center'>
                <div className='flex-1 min-w-0 ms-4'>
                  <p className='text-sm font-medium text-gray-900 truncate dark:text-white'>
                    Email:
                  </p>
                </div>
                <div className='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                  {userData?.email}
                </div>
              </div>
            </li>
            <li className='py-3 sm:py-4'>
              <div className='flex items-center'>
                <div className='flex-1 min-w-0 ms-4'>
                  <p className='text-sm font-medium text-gray-900 truncate dark:text-white'>
                    Phone:
                  </p>
                </div>
                <div className='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                  {userData?.phone}
                </div>
              </div>
            </li>
            <li className='py-3 sm:py-4'>
              <div className='flex items-center'>
                <div className='flex-1 min-w-0 ms-4'>
                  <p className='text-sm font-medium text-gray-900 truncate dark:text-white'>
                    Password:
                  </p>
                </div>
                <div className='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                  {userData?.password}
                </div>
              </div>
            </li>

            <li className='py-3 sm:py-4'>
              <div className='flex items-center'>
                <div className='flex-1 min-w-0 ms-4'>
                  <p className='text-sm font-medium text-gray-900 truncate dark:text-white'>
                    Address:
                  </p>
                </div>
                <div className='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                  {userData?.address.city}-{userData?.address.street}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserView;
