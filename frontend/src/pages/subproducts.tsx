import { useContext } from "react";
import { SelectionContext } from "./selectionsProvider";
import { ApiContext } from "./ApiProvider";

const subproducts = [
  { subCategoryId: 1, subProductId: 1, subProductName: "Blue Collectors" },
  { subCategoryId: 1, subProductId: 2, subProductName: "Red Collectors" },
];

export default function Subproducts() {
  const { selectedSP, toggleSP } = useContext(SelectionContext);

  return (
    <div className="subpro listing">
      <div className="listing-header list-group-item d-flex justify-content-between align-items-center">
        <p className="d-block px-3">&nbsp;</p>
        <h3 className="center m-auto">Select Sub-Products</h3>
        <h3 className="mx-3">⌄</h3>
      </div>

      <div className="listing-body px-4">
        <input type="text" className="form-control mb-2" placeholder="Search" />
        <ul className="list-group">
          {subproducts.map((subProduct) => (
            <li key={subProduct.subProductId} className="list-group-item">
              <div className="p-3 d-flex justify-content-between align-items-center">
                {subProduct.subProductName}
                <input
                  defaultChecked={selectedSP.has(subProduct.subProductId)}
                  type="checkbox"
                  className="form-check-input"
                  onClick={() => toggleSP(subProduct.subProductId, subProduct)}
                ></input>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="listing-footer center">
        <button type="button" className="btn btn-light">
          ＋ ADD SUBPRODUCT
        </button>
      </div>
    </div>
  );
}
