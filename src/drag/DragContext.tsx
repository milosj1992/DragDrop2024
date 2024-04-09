import React, { createContext, useState } from "react";
type DraggedItemType = {
  index: number | null;
};

type DragNDrop = DraggedItemType | null | number;

type DragContextType = {
  draggedItem: DragNDrop;
  setDraggedItem: (item: DragNDrop) => void;
  dropIndex: DragNDrop;
  setDropIndex: (index: DragNDrop) => void;
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

  return (
    <DragContext.Provider
      value={{ draggedItem, setDraggedItem, dropIndex, setDropIndex }}
    >
      {children}
    </DragContext.Provider>
  );
};
