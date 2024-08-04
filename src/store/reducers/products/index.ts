// Redux
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

// Services
import { getProductsList } from '@/services/dataActions/products';

// Types
import { IProduct } from '@/services/dataActions/products/type';

interface IProductState {
  products: IProduct[];
  loading: boolean;
  error: string | null;
}

// ----------------------------------------|| PRODUCTS - SLICES ||----------------------------------------------------------

const initialState: IProductState = {
  products: [],
  loading: false,
  error: null,
};

// Thunk to fetch products
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await getProductsList();
    return response.data;
  }
);

const productSlice = createSlice({
  name: 'productSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<IProduct[]>) => {
          state.products = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch users';
      });
  },
});

export default productSlice.reducer;
