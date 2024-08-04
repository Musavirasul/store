import React from 'react';

// Next
import Image from 'next/image';

// Redux
import { useAppDispatch } from '@/store/hooks';
import { addProduct, removeProduct } from '@/store/reducers/selectedProducts';

// Types
import { IProduct } from '@/services/dataActions/products/type';
interface IProductCardProps extends IProduct {
  mode: 'add' | 'remove';
}

// ------------------------------------------|| PRODUCT CARD - HOME || --------------------------------------------------------

const ProductCard: React.FC<IProductCardProps> = ({
  id,
  image,
  title,
  description,
  price,
  rating,
  category,
  mode,
}) => {
  // Store
  const dispatch = useAppDispatch();

  // Methods
  const handleAddProduct = () => {
    dispatch(
      addProduct({
        id,
        image,
        title,
        description,
        price,
        rating,
        category,
      })
    );
  };

  const handleRemoveProduct = () => {
    dispatch(removeProduct(id));
  };

  return (
    <div className='w-full max-w-sm bg-white border border-gray-200 rounded-lg'>
      <div className='image-container'>
        <Image
          fill
          className='image p-8 rounded-t-lg'
          src={image}
          alt='product image'
        />
      </div>
      <div className='px-3 pb-2'>
        <h5 className='truncate text-lg font-semibold text-gray-900 dark:text-white'>
          {title}
        </h5>
        <p className='truncate text-gray-500'>{description}</p>

        <div className='flex items-center justify-between mt-5'>
          <span className='text-lg font-bold text-gray-900'>${price}</span>
          <button
            onClick={mode === 'add' ? handleAddProduct : handleRemoveProduct}
            className={`text-white ${mode === 'add' ? 'bg-blue-700 hover:bg-blue-800' : 'bg-red-700 hover:bg-red-800'}  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center`}
          >
            {mode === 'add' ? 'Add to cart' : 'Remove'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
