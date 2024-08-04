'use client';

import React, { useEffect } from 'react';

// Redux
import { useAppDispatch } from '@/store/hooks';
import { fetchUsers } from '@/store/reducers/users';
import { fetchProducts } from '@/store/reducers/products';

// Components
import UsersList from '@/components/pages/home/usersList';
import ProductsList from '@/components/pages/home/productsList';
import SelectedProducts from '@/components/pages/home/selectedProducts';

// ------------------------------------------|| HOME VIEW ||------------------------------------------------------------

const HomeView: React.FC = () => {
  // Store
  const dispatch = useAppDispatch();

  // Call Api
  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchProducts());
  }, []);

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2'>
      <UsersList />
      <ProductsList />
      <SelectedProducts />
    </div>
  );
};

export default HomeView;
