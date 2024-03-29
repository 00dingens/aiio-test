import { useContext, useEffect, useState } from "react";
import { SelectionContext } from "./selectionsProvider";
import { SubProduct } from "@/types";
import axios from "axios";
import { API, MOCK_DATA } from "@/constants";

export default function Subproducts({ subCategoryId }: { subCategoryId: number }) {
  const { selectedSP, toggleSP } = useContext(SelectionContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [subproducts, setSubproducts] = useState([] as SubProduct[]);

  useEffect(() => {
    fetch(API.subProducts)
      .then((res) => res.json())
      // TODO filter in Backend
      .then((data) => data.filter((entry: SubProduct) => entry.subCategoryId == subCategoryId))
      .then((data) => {
        setSubproducts(data);
      });
  }, []);

  const addSubproduct = async () => {
    // We just add a dummy Subproduct.

    // TODO Show input field and use the input as Subproduct name
    const newSubproduct = {
      subCategoryId,
      subProductName:
        MOCK_DATA.subproductNames[subproducts.length % MOCK_DATA.subproductNames.length],
    };
    const response = await axios.post(API.subProducts, newSubproduct).catch(function (error) {
      // TODO error handling
      console.log(error.toJSON());
    });
    console.log("saved subproduct. Response:", response);
    if (response) {
      setSubproducts([...subproducts, response.data]);
    }
  };

  const searchFilter = (subproduct: SubProduct, term: string) => {
    return term == "" || subproduct.subProductName.includes(term);
  };

  return (
    <div className="subpro listing">
      <div className="listing-header list-group-item d-flex justify-content-between align-items-center">
        <p className="d-block px-3">&nbsp;</p>
        <h3 className="center m-auto">Select Sub-Products</h3>
        <h3 className="mx-3">⌄</h3>
      </div>

      <div className="listing-body px-4">
        {subproducts.length == 0 ? (
          <div className="center text-dark p-3">
            This Subcategory has no Sub-Products yet. Please click the button!
          </div>
        ) : (
          <>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {subproducts.filter((subproduct) => searchFilter(subproduct, searchTerm)).length ==
              0 && (
              <div className="center text-dark p-3">No matches found for this search term!</div>
            )}
            <ul className="list-group">
              {subproducts
                .filter((subproduct) => searchFilter(subproduct, searchTerm))
                .map((subProduct) => (
                  <li key={subProduct.subProductId} className="list-group-item">
                    <div className="p-3 d-flex justify-content-between align-items-center">
                      {subProduct.subProductName}
                      <input
                        checked={selectedSP.has(subProduct.subProductId)}
                        type="checkbox"
                        className="form-check-input"
                        onClick={() => toggleSP(subProduct.subProductId, subProduct)}
                      ></input>
                    </div>
                  </li>
                ))}
            </ul>
          </>
        )}
      </div>
      <div className="listing-footer center">
        <button type="button" className="btn btn-light" onClick={addSubproduct}>
          ＋ ADD SUBPRODUCT
        </button>
      </div>
    </div>
  );
}
