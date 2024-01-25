import { Product, SubCategory, SubProduct } from "@/types";
import { createContext, ReactNode, useEffect, useState } from "react";

// I make this a ContextProvider for now, later this could be some Service

export const ApiContext = createContext<{
  getProducts: (callback: (result: Product[]) => void) => [Product[], boolean];
  getSubCategories: (pId?: number) => [SubCategory[], boolean];
  getSubProducts: (scId?: number) => [SubProduct[], boolean];
}>({
  getProducts: (_) => [[], true],
  getSubCategories: () => [[], true],
  getSubProducts: () => [[], true],
});

export default function ApiProvider({ children }: { children: ReactNode }) {
  const apiCall: <Type>(
    endpoint: string,
    callback?: (result: Type[]) => void
  ) => [Type[], boolean] = <Type,>(endpoint: string, callback?: (result: Type[]) => void) => {
    let result = [] as Type[];
    let loading = true;
    fetch("http://127.0.0.1:8000/" + endpoint + "?format=json") // CORS :-/ TODO: fix deployment
      .then((response) => response.json())
      .then((data) => {
        result = data as Type[];
        loading = false;
        console.log("loaded", typeof result);
        console.log(result);
        if (callback) {
          callback(result);
        }
      });
    return [result, loading];
  };

  const getProducts = (callback: (result: Product[]) => void) =>
    apiCall<Product>("/api/products/", callback);
  const getSubCategories = () => apiCall<SubCategory>("/api/subcategories/");
  const getSubProducts = () => apiCall<SubProduct>("/api/subproducts/");

  return (
    <>
      <ApiContext.Provider
        value={{
          getProducts,
          getSubCategories,
          getSubProducts,
        }}
      >
        {children}
      </ApiContext.Provider>
    </>
  );
}
