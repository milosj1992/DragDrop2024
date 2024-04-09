import React, { createContext, useState } from "react";
type DraggedItemType = {
  index: number | null;
};
type DragContextType = {
  draggedItem: DraggedItemType | null | number;
  setDraggedItem: (item: DraggedItemType | null | number) => void;
  dropIndex: number | null | DraggedItemType;
  setDropIndex: (index: number | null | DraggedItemType) => void;
};

export const DragContext = createContext<DragContextType | undefined>(
  undefined
);

export const DragProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [draggedItem, setDraggedItem] = useState<
    number | null | DraggedItemType
  >(null);
  const [dropIndex, setDropIndex] = useState<number | null | DraggedItemType>(
    null
  );

  console.log(draggedItem);
  return (
    <DragContext.Provider
      value={{ draggedItem, setDraggedItem, dropIndex, setDropIndex }}
    >
      {children}
    </DragContext.Provider>
  );
};

export const useDragContext = () => {
  const context = React.useContext(DragContext);
  if (context === undefined) {
    throw new Error("useDragContext must be used within a DragProvider");
  }
  return context;
};
