// Redux
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Types
import { IProduct } from '@/services/dataActions/products/type';
interface SelectedProductsState {
  selectedList: IProduct[];
}

// ----------------------------------------|| SELECTED PRODUCTS - SLICES ||----------------------------------------------------------

const initialState: SelectedProductsState = {
  selectedList: [],
};

const selectedProductsSlice = createSlice({
  name: 'selectedProductsSlice',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<IProduct>) => {
      state.selectedList.push(action.payload);
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      state.selectedList = state.selectedList.filter(
        (product) => product.id !== action.payload
      );
    },
  },
});

export const { addProduct, removeProduct } = selectedProductsSlice.actions;

export default selectedProductsSlice.reducer;
