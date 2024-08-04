import React, { useMemo, useState } from 'react';

// Redux
import { useAppSelector } from '@/store/hooks';

// Components
import SearchInput from '@/components/common/searchInput';
import ProductCard from '@/components/pages/home/productsList/productCard';

// Hooks
import { useDebounce } from '@/hooks/debounce';

import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

// --------------------------------------|| SELECTED PRODUCTS - HOME ||-------------------------------------------------

const SelectedProducts = () => {
  // Store State
  const { selectedList } = useAppSelector(
    (state) => state.selectedProductsSlice
  );

  // States
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Methods
  const handleSearchChange = useDebounce(
    (value: string) => setSearchQuery(value),
    300
  );

  // Memoized filtered users
  const filteredSelectedProducts = useMemo(
    () =>
      selectedList.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    [selectedList, searchQuery]
  );

  return (
    <div className='p-5 flex flex-col h-screen'>
      <div className='flex-shrink-0'>
        <h5 className='text-4xl font-light'>Selected Products</h5>

        <SearchInput
          className='my-5'
          placeholder='Search Selected Products ...'
          onChange={handleSearchChange}
        />
      </div>

      <SimpleBar className='flex-grow overflow-y-auto h-full'>
        {filteredSelectedProducts.length === 0 ? (
          <p className='text-lg text-center py-6'>No products selected.</p>
        ) : (
          <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-1.5'>
            {filteredSelectedProducts.map((product) => (
              <ProductCard key={product.id} mode='remove' {...product} />
            ))}
          </div>
        )}
      </SimpleBar>
    </div>
  );
};

export default SelectedProducts;
