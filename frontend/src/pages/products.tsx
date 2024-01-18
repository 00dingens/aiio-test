import styles from "@/styles/Home.module.css";

const products = [
  { productName: "Cabbage", productId: 1 },
  { productName: "Garlic", productId: 2 },
  { productName: "Apple", productId: 3 },
];

export default function Product() {
  return (
    <div className="products">
      <div className="productsHeader">
        <h2>Products</h2>
        <button className="btn">DONE</button>
      </div>

      <div className="productsBody">
        {products.map((product) => (
          <li key={product.productId}>{product.productName}</li>
        ))}
      </div>
      <div className="productsFooter center">
        <button className="btn">+ ADD PRODUCT</button>
      </div>
    </div>
  );
}
