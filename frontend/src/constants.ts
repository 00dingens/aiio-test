export const BE_HOST = "http://127.0.0.1:8000";
export const API = {
  products: BE_HOST + "/api/products/",
  subCategories: BE_HOST + "/api/subcategories/",
  subProducts: BE_HOST + "/api/subproducts/",
  selections: BE_HOST + "/api/selections/",
};
export const MOCK_DATA = {
  productNames: ["Computer Stuff", "Water Pumps", "Mills", "Toy Cars", "EMPs"],
  subcategoryNames: ["Axes", "Screws", "Plastic Parts", "Liquids"],
  subproductNames: [
    "Red Collectors",
    "Yellow Collectors",
    "Green Collectors",
    "Black Collectors",
    "Large Collectors",
    "Tiny Collectors",
  ],
};
