import { useContext, useEffect, useState } from "react";
import { SelectionContext } from "./selectionsProvider";
import Subproducts from "./subproducts";
import { SubCategory } from "@/types";
import axios from "axios";

// TODO fetch data

export default function Subcategories({ productId }: { productId: number }) {
  const { selectedSC, toggleSC, ..._ } = useContext(SelectionContext);
  const [subcategories, setSubcategories] = useState([] as SubCategory[]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/subcategories/")
      .then((res) => res.json())
      // TODO filter in Backend
      .then((data) => data.filter((entry: SubCategory) => entry.productId == productId))
      .then((data) => {
        setSubcategories(data);
      });
  }, []);

  const addSubcategory = async () => {
    // We just add a dummy Subcategory.
    const newSubcategoryNames = ["Axes", "Screws", "Plastic Parts", "Liquids"];
    // TODO Show input field and use the input as Subcategory name
    const newSubcategory = {
      productId,
      subCategoryName: newSubcategoryNames[subcategories.length % newSubcategoryNames.length],
    };
    const response = await axios
      .post("http://127.0.0.1:8000/api/subcategories/", newSubcategory)
      .catch(function (error) {
        console.log(error.toJSON());
      });
    // TODO error handling
    console.log("saved subcategory. Response:", response);
    if (response) {
      setSubcategories([...subcategories, response.data]);
    }
  };

  const searchFilter = (subcategory: SubCategory, term: string) => {
    return term == "" || subcategory.subCategoryName.includes(term);
  };

  return (
    <div className="subcat listing">
      <div className="listing-header list-group-item d-flex justify-content-between align-items-center">
        <p className="d-block px-3">&nbsp;</p>
        <h3 className="center m-auto">Select Subcategories</h3>
        <h3 className="mx-3">⌄</h3>
      </div>

      <div className="listing-body">
        {subcategories.length == 0 ? (
          <div className="center text-dark p-3">
            This Product has no Subcategories yet. Please click the button!
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
            {subcategories.filter((subcategory) => searchFilter(subcategory, searchTerm)).length ==
              0 && (
              <div className="center text-dark p-3">No matches found for this search term!</div>
            )}
            <ul className="list-group">
              {subcategories
                .filter((subcategory) => searchFilter(subcategory, searchTerm))
                .map((subCategory) => (
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
                    {selectedSC.has(subCategory.subCategoryId) && (
                      <Subproducts subCategoryId={subCategory.subCategoryId}></Subproducts>
                    )}
                  </li>
                ))}
            </ul>
          </>
        )}
      </div>
      <div className="listing-footer center">
        <button type="button" className="btn btn-light" onClick={addSubcategory}>
          ＋ ADD SUBCATEGORY
        </button>
      </div>
    </div>
  );
}
