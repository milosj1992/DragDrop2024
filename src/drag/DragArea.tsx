import React from "react";
import { useDragContext } from "./DragContext";
import { List } from "@mui/material";
type ItemType = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
};

type DragAreaProps = {
  items: ItemType[];
  onChange: (items: ItemType[]) => void;
  children: React.ReactNode;
};

export const DragArea: React.FC<DragAreaProps> = ({
  items,
  onChange,
  children,
}) => {
  const { draggedItem, setDraggedItem, dropIndex, setDropIndex } =
    useDragContext();

  const handleDrop = (e: React.DragEvent<HTMLUListElement>) => {
    e.preventDefault();
    if (
      draggedItem !== null &&
      dropIndex !== null &&
      (dropIndex as any) !== (draggedItem as any).index
    ) {
      const updatedItems = [...items];

      updatedItems.splice(
        (dropIndex as { index: number }).index,
        0,
        updatedItems.splice((draggedItem as { index: number }).index, 1)[0]
      );
      onChange(updatedItems);
      setDraggedItem(null);
      setDropIndex(null); // Reset dropIndex after the drop
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLUListElement>) => {
    e.preventDefault();
  };

  return (

    <List onDrop={handleDrop} onDragOver={handleDragOver}>
      {children}
    </List>
  );
};
