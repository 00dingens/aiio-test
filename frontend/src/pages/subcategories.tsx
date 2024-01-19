import { useContext } from "react";
import { SelectionContext } from "./index";
import Subproducts from "./subproducts";

// TODO fetch data
const subcategories = [
  { productId: 1, subCategoryId: 1, subCategoryName: "Bearings" },
  { productId: 1, subCategoryId: 2, subCategoryName: "Current Collectors" },
  { productId: 1, subCategoryId: 3, subCategoryName: "Fans and Fan impellers" },
  { productId: 1, subCategoryId: 4, subCategoryName: "Insulators" },
  { productId: 1, subCategoryId: 5, subCategoryName: "Rotars and Stators" },
];

export default function Subcategories() {
  // TODO get productId from parent

  const { selectedSC, toggleSC, ..._ } = useContext(SelectionContext);

  return (
    <div className="subcat listing">
      <div className="listing-header list-group-item d-flex justify-content-between align-items-center">
        <p className="d-block px-3">&nbsp;</p>
        <h3 className="center m-auto">Select Subcategories</h3>
        <h3 className="mx-3">⌄</h3>
      </div>

      <div className="listing-body">
        <input type="text" className="form-control" placeholder="Search" />
        <ul className="list-group">
          {subcategories.map((subCategory) => (
            <li key={subCategory.subCategoryId} className="list-group-item">
              <div className="p-3 d-flex justify-content-between align-items-center">
                {subCategory.subCategoryName}
                <input
                  defaultChecked={selectedSC.has(subCategory.subCategoryId)}
                  type="checkbox"
                  className="form-check-input"
                  onClick={() => toggleSC(subCategory.subCategoryId, subCategory)}
                ></input>
              </div>
              {selectedSC.has(subCategory.subCategoryId) && <Subproducts></Subproducts>}
            </li>
          ))}
        </ul>
      </div>
      <div className="listing-footer center">
        <button type="button" className="btn btn-light">
          ＋ ADD SUBCATEGORY
        </button>
      </div>
    </div>
  );
}
