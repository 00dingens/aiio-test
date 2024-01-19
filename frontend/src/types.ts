export type Product = {
  productName: string;
  productId: number;
};
export type SubCategory = {
  productId: number;
  subCategoryId: number;
  subCategoryName: string;
};
export type SubProduct = {
  subCategoryId: number;
  subProductId: number;
  subProductName: string;
};
export type Entry = Product | SubCategory | SubProduct;
