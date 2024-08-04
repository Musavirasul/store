// Redux
import { combineReducers } from '@reduxjs/toolkit';

// Slices
import userSlice from '@/store/reducers/users';
import productsSlice from '@/store/reducers/products';
import selectedProductsSlice from '@/store/reducers/selectedProducts';

// Persist
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// ----------------------------------------|| COMBINE REDUCERS ||-------------------------------------------------------

const reducers = combineReducers({
  userSlice,
  productsSlice,
  selectedProductsSlice: persistReducer(
    {
      key: 'selectedProducts',
      storage,
    },
    selectedProductsSlice
  ),
});

export default reducers;
