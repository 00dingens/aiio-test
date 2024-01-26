import Subcategories from "./subcategories";
import { useContext, useEffect, useState } from "react";
import { Product } from "@/types";
import { SelectionContext } from "./selectionsProvider";
import axios from "axios";
//import { ApiContext } from "./ApiProvider";

const newProductNames = ["Computer Stuff", "Water Pumps", "Mills", "Toy Cars", "EMPs"];

export default function Products({ doneFunction }: { doneFunction: () => void }) {
  const { selectedP, toggleP, selectedSC, selectedSP, ..._ } = useContext(SelectionContext);
  const [products, setProducts] = useState([] as Product[]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/products/")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const addProduct = async () => {
    // We just add a dummy product.
    // TODO Show input field and use the input as Product name
    const newProduct = {
      productName: newProductNames[products.length % newProductNames.length],
    };
    const response = await axios
      .post("http://127.0.0.1:8000/api/products/", newProduct)
      .catch(function (error) {
        console.log(error.toJSON());
      });
    // TODO error handling
    console.log("saved product. Response:", response);
    if (response) {
      setProducts([...products, response.data]);
    }
  };

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

              {selectedP.has(product.productId) && (
                <Subcategories productId={product.productId}></Subcategories>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="listing-footer center">
        <button type="button" className="btn btn-light" onClick={addProduct}>
          ＋ ADD PRODUCT
        </button>
      </div>
    </div>
  );
}
