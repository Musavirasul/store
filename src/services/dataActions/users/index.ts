import { AxiosResponse } from 'axios';
import api from '@/services/axiosConfig';

// Types
import { IUser } from '@/services/dataActions/users/type';

export const getUsersList = (): Promise<AxiosResponse<IUser[]>> => {
  return api.get('/users');
};

export const getUserById = (id: number): Promise<AxiosResponse<IUser>> => {
  return api.get(`/users/${id}`);
};
