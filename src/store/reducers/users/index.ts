// Redux
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

// Services
import { getUsersList } from '@/services/dataActions/users';

// Types
import { IUser } from '@/services/dataActions/users/type';

interface UsersState {
  users: IUser[];
  loading: boolean;
  error: string | null;
}

// ----------------------------------------|| USERS - SLICES ||----------------------------------------------------------

const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
};

// Thunk to fetch users
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await getUsersList();
  return response.data;
});

const usersSlice = createSlice({
  name: 'usersSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchUsers.fulfilled,
        (state, action: PayloadAction<IUser[]>) => {
          state.users = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch users';
      });
  },
});

export default usersSlice.reducer;
