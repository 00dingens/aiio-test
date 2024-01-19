import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Products from "./products";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";

const inter = Inter({ subsets: ["latin"] });

export const SelectionContext = React.createContext<{
  selectedP: Set<number>;
  toggleP: (pId: number) => void;
  selectedSC: Set<number>;
  toggleSC: (scId: number) => void;
  selectedSP: Set<number>;
  toggleSP: (scId: number) => void;
}>({
  selectedP: new Set(),
  toggleP: () => {},
  selectedSC: new Set(),
  toggleSC: () => {},
  selectedSP: new Set(),
  toggleSP: () => {},
});

const toggle = (id: number, selection: Set<number>, setter: (newSet: Set<number>) => void) => {
  if (selection.has(id)) {
    selection.delete(id);
  } else {
    selection.add(id);
  }
  // TODO this is ugly, there should be a better way to trigger re-render
  setter(new Set(selection));
};

export default function Home() {
  const [selectedP, setProducts] = useState<Set<number>>(new Set());
  const toggleP = (id: number) => toggle(id, selectedP, setProducts);
  const [selectedSC, setSubCategories] = useState<Set<number>>(new Set());
  const toggleSC = (id: number) => toggle(id, selectedSC, setSubCategories);
  const [selectedSP, setSubProducts] = useState<Set<number>>(new Set());
  const toggleSP = (id: number) => toggle(id, selectedSP, setSubProducts);

  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => {
    alert("TODO Sending data");
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
        <main className={`${styles.main} ${inter.className}`}>
          <Products doneFunction={handleShowModal}></Products>

          <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Body className="text-dark">
              <h3>Products</h3>
              <p> {Array.from(selectedP).sort().join(",")}</p>
              <h3>Sub categories</h3>
              <p> {Array.from(selectedSC).sort().join(",")}</p>
              <h3>Sub products</h3>
              <p> {Array.from(selectedSP).sort().join(",")}</p>
            </Modal.Body>
            <Modal.Footer className="justify-content-between">
              <p></p>
              <a className="primary" onClick={handleCloseModal}>
                SAVE
              </a>
            </Modal.Footer>
          </Modal>
        </main>
      </SelectionContext.Provider>
    </>
  );
}
