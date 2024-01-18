import styles from "@/styles/Home.module.css";

const products = [
  { productName: "Cabbage", productId: 1 },
  { productName: "Garlic", productId: 2 },
  { productName: "Apple", productId: 3 },
];

export default function Product() {
  return (
    <div className="products">
      <div className="productsHeader list-group-item d-flex justify-content-between align-items-center">
        <p className="d-block placeholder">&nbsp;</p>
        <h2 className="center m-auto">Products</h2>
        <button type="button" className="btn btn-light">
          DONE
        </button>
      </div>

      <div className="productsBody">
        <ul className="list-group">
          {products.map((product) => (
            <li
              key={product.productId}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {product.productName}
              <input type="checkbox" className="form-check-input"></input>
            </li>
          ))}
        </ul>
      </div>
      <div className="productsFooter center">
        <button type="button" className="btn btn-light">
          + ADD PRODUCT
        </button>
      </div>
    </div>
  );
}
