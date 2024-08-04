import React from 'react';

// ---------------------------------------------|| LOADING - HOME ||----------------------------------------------------

const Loading: React.FC = () => {
  return (
    <div role='status' className='divide-y divide-gray-200 animate-pulse'>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((_, i) => (
        <div key={i} className='py-3 flex items-center justify-between'>
          <div>
            <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5'></div>
            <div className='w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700'></div>
          </div>
          <div className='h-2.5 bg-gray-300 rounded-full w-4'></div>
        </div>
      ))}
    </div>
  );
};

export default Loading;
