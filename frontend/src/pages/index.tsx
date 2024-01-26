import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Products from "./products";
import React, { useState } from "react";
import SelectionModal from "./selectionModal";
import SelectionsProvider from "./selectionsProvider";
import ApiProvider from "./ApiProvider";

export default function Home() {
  // Modal visibility and saving the selection
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = (save?: () => void) => {
    if (save) save();
    setShowModal(false);
  };

  return (
    <>
      <Head>
        <title>aiio Product Manager</title>
        <meta name="description" content="aiio Product Manager" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SelectionsProvider>
        <main className={`${styles.main}`}>
          <Products doneFunction={handleShowModal}></Products>
          <SelectionModal show={showModal} handleCloseModal={handleCloseModal}></SelectionModal>
        </main>
      </SelectionsProvider>
    </>
  );
}
