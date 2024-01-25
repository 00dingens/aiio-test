import Subcategories from "./subcategories";
import { useContext } from "react";
import { Product } from "@/types";
import { SelectionContext } from "./selectionsProvider";
import { ApiContext } from "./ApiProvider";

/*const products: Product[] = [
  { productName: "Cabbage", productId: 1 },
  { productName: "Garlic", productId: 2 },
  { productName: "Apple", productId: 3 },
];*/

export default function Products({ doneFunction }: { doneFunction: () => void }) {
  const { selectedP, toggleP, selectedSC, selectedSP, ..._ } = useContext(SelectionContext);
  const { getProducts } = useContext(ApiContext);
  const [products, loading] = getProducts();

  return (
    <div className="products listing">
      <div className="listing-header list-group-item d-flex justify-content-between align-items-center">
        <p className="d-block placeholder">&nbsp;</p>
        <h3 className="center m-auto">Products</h3>
        <button type="button" className="btn btn-light" onClick={doneFunction}>
          DONE
        </button>
      </div>

      <div className="listing-body">
        <ul className="list-group">
          {products.map((product) => (
            <li key={product.productId} className="list-group-item">
              <div className="p-3 d-flex justify-content-between align-items-center">
                {product.productName}
                <input
                  defaultChecked={selectedP.has(product.productId)}
                  type="checkbox"
                  className="form-check-input"
                  onClick={() => toggleP(product.productId, product)}
                ></input>
              </div>

              {selectedP.has(product.productId) && <Subcategories></Subcategories>}
            </li>
          ))}
        </ul>
      </div>
      <div className="listing-footer center">
        <button type="button" className="btn btn-light">
          ＋ ADD PRODUCT
        </button>
      </div>
    </div>
  );
}
