import { Product } from "@prisma/client"
import { axiosInstance } from "./instance"
import { APIRoutes } from "./constants";

export const search = async (query: string): Promise<Product[]> => {
    return (await axiosInstance.get<Product[]>(APIRoutes.SEARCH_PRODUCTS, { 'params': { query } })).data;
};
