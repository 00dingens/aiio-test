import { useState, ReactNode, createContext } from "react";
import { Product, SubCategory, SubProduct } from "@/types";

export const SelectionContext = createContext<{
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

export default function SelectionsProvider({ children }: { children: ReactNode }) {
  const [selectedP, setProducts] = useState<Map<number, Product>>(new Map());
  const toggleP = (id: number, object: Product) =>
    toggleObj<Product>(id, object, selectedP, setProducts);
  const [selectedSC, setSubCategories] = useState<Map<number, SubCategory>>(new Map());
  const toggleSC = (id: number, object: SubCategory) =>
    toggleObj<SubCategory>(id, object, selectedSC, setSubCategories);
  const [selectedSP, setSubProducts] = useState<Map<number, SubProduct>>(new Map());
  const toggleSP = (id: number, object: SubProduct) =>
    toggleObj<SubProduct>(id, object, selectedSP, setSubProducts);

  return (
    <>
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
        {children}
      </SelectionContext.Provider>
    </>
  );
}
