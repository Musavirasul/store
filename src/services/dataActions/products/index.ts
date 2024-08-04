import { AxiosResponse } from 'axios';
import api from '@/services/axiosConfig';

// Types
import { IProduct } from '@/services/dataActions/products/type';

export const getProductsList = (): Promise<AxiosResponse<IProduct[]>> => {
  return api.get('/products');
};

export const getProductById = (
  id: number
): Promise<AxiosResponse<IProduct>> => {
  return api.get(`/products/${id}`);
};
