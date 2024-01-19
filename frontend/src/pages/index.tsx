import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Products from "./products";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Product, SubCategory, SubProduct } from "@/types";

export const SelectionContext = React.createContext<{
  selectedP: Map<number, Product>;
  toggleP: (pId: number, object: Product) => void;
  selectedSC: Map<number, SubCategory>;
  toggleSC: (pId: number, object: SubCategory) => void;
  selectedSP: Map<number, SubProduct>;
  toggleSP: (pId: number, object: SubProduct) => void;
}>({
  selectedP: new Map(),
  toggleP: () => {},
  selectedSC: new Map(),
  toggleSC: () => {},
  selectedSP: new Map(),
  toggleSP: () => {},
});

const toggleObj = <Type,>(
  id: number,
  obj: Type,
  selection: Map<number, Type>,
  setter: (newMap: Map<number, Type>) => void
) => {
  if (selection.has(id)) {
    selection.delete(id);
  } else {
    selection.set(id, obj);
  }
  // TODO this is ugly, there should be a better way to trigger re-render
  setter(new Map(selection));
};

export default function Home() {
  const [selectedP, setProducts] = useState<Map<number, Product>>(new Map());
  const toggleP = (id: number, object: Product) =>
    toggleObj<Product>(id, object, selectedP, setProducts);
  const [selectedSC, setSubCategories] = useState<Map<number, SubCategory>>(new Map());
  const toggleSC = (id: number, object: SubCategory) =>
    toggleObj<SubCategory>(id, object, selectedSC, setSubCategories);
  const [selectedSP, setSubProducts] = useState<Map<number, SubProduct>>(new Map());
  const toggleSP = (id: number, object: SubProduct) =>
    toggleObj<SubProduct>(id, object, selectedSP, setSubProducts);

  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = (send?: boolean) => {
    if (send) alert("TODO Sending data");
    setShowModal(false);
  };
  const handleShowModal = () => setShowModal(true);

  return (
    <>
      <Head>
        <title>aiio Product Manager</title>
        <meta name="description" content="aiio Product Manager" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SelectionContext.Provider
        value={{
          selectedP,
          toggleP,
          selectedSC,
          toggleSC,
          selectedSP,
          toggleSP,
        }}
      >
        <main className={`${styles.main}`}>
          <Products doneFunction={handleShowModal}></Products>

          <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Body className="text-dark p-4">
              <h3>Products</h3>
              <p>
                {Array.from((selectedP as Map<number, Product>).entries())
                  .map((x) => x[1].productName)
                  .sort()
                  .join(",")}
              </p>
              <h3>Sub categories</h3>
              <p>
                {Array.from((selectedSC as Map<number, SubCategory>).entries())
                  .map((x) => x[1].subCategoryName)
                  .sort()
                  .join(",")}
              </p>
              <h3>Sub products</h3>
              <p>
                {Array.from((selectedSP as Map<number, SubProduct>).entries())
                  .map((x) => x[1].subProductName)
                  .sort()
                  .join(",")}
              </p>
            </Modal.Body>
            <Modal.Footer className="justify-content-between">
              <p></p>
              <a className="primary" onClick={() => handleCloseModal(true)}>
                SAVE
              </a>
            </Modal.Footer>
          </Modal>
        </main>
      </SelectionContext.Provider>
    </>
  );
}
