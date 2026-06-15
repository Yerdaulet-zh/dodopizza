import { axiosInstance } from './instance';
import { APIRoutes } from './constants';
import { Ingredient } from '@prisma/client';

export const getAll = async (): Promise<Ingredient[]> => {
  return (await axiosInstance.get<Ingredient[]>(APIRoutes.INGREDIENTS)).data;
};
