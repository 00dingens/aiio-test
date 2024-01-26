import { Product, SubCategory, SubProduct } from "@/types";
import { useContext } from "react";
import Modal from "react-bootstrap/Modal";
import { SelectionContext } from "./selectionsProvider";

export default function SelectionModal({
  handleCloseModal,
  show,
}: {
  handleCloseModal: (save?: () => void) => void;
  show: boolean;
}) {
  const { selectedP, selectedSC, selectedSP, saveSelection } = useContext(SelectionContext);

  return (
    <Modal show={show} onHide={handleCloseModal}>
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
        <a className="primary" onClick={() => handleCloseModal(saveSelection)}>
          SAVE
        </a>
      </Modal.Footer>
    </Modal>
  );
}
