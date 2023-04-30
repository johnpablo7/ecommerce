import { ApiClient } from "@/utils/api-client";
import { API_KEY, API_URL } from "@/constants/api";
import { TGlobal } from "@/types/global";
import { TCategory } from "@/types/category";
import { TProduct } from "@/types/product";

// const api = axios.create({
//   baseURL: API_URL,
//   headers: {
//     Authorization: "Bearer " + API_KEY,
//     "Content-Type": "application/json;charset=utf-8",
//   },
// });

const apiClient = new ApiClient({
  baseURL: API_URL!,
  headers: {
    Authorization: "Bearer " + API_KEY,
  },
});

export const getGlobal = async () => {
  const { data } = await apiClient.get<{ data: TGlobal }>("/items/global", {
    next: { revalidate: 10 },
  });

  return data.data;
};

export const getCategories = async () => {
  const { data } = await apiClient.get<{ data: TCategory[] }>(
    "/items/categories",
    {
      next: { revalidate: 10 },
    }
  );

  return data.data;
};

export const getProducts = async (params?: string) => {
  const { data } = await apiClient.get<{ data: TProduct[] }>(
    "/items/products?" + params,
    {
      next: { revalidate: 10 },
    }
  );

  return data.data;
};

export function getImageUrl(id: string) {
  return API_URL + "/assets/" + id;
}

// https://directus.johnpablo7.com/items/categories?filter[parent][_null]=true

// https://directus.johnpablo7.com/items/categories?filter[slug]=oficina
