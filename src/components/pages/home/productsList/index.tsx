import React, { useMemo, useState } from 'react';

// Redux
import { useAppSelector } from '@/store/hooks';

// Hooks
import { useDebounce } from '@/hooks/debounce';

// Components
import SearchInput from '@/components/common/searchInput';
import ProductCard from '@/components/pages/home/productsList/productCard';

import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

// -------------------------------------|| PRODUCTS LIST - HOME ||------------------------------------------------------

const ProductsList = () => {
  // Store States
  const { products, loading } = useAppSelector((state) => state.productsSlice);

  // States
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Methods
  const handleSearchChange = useDebounce(
    (value: string) => setSearchQuery(value),
    300
  );

  // Memoized filtered products
  const filteredProducts = useMemo(
    () =>
      products.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    [products, searchQuery]
  );

  return (
    <div className='p-5 flex flex-col h-screen'>
      <div className='flex-shrink-0'>
        <h5 className='text-4xl font-light'>Products List</h5>

        <SearchInput
          className='my-5'
          placeholder='Search Products ...'
          onChange={handleSearchChange}
        />
      </div>

      <SimpleBar className='flex-grow overflow-y-auto h-full'>
        <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-1.5'>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} mode='add' {...product} />
          ))}
        </div>
      </SimpleBar>
    </div>
  );
};

export default ProductsList;
