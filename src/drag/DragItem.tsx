import React from "react";
import { useDragContext } from "./DragContext";
import { ListItem, ListItemText } from '@mui/material';

type DragItemProps = {
  index: number | null;
  children: React.ReactNode;
};

export const DragItem: React.FC<DragItemProps> = ({ index, children }) => {
  const { setDraggedItem, setDropIndex } = useDragContext();

  const handleDragStart = (e: React.DragEvent<HTMLLIElement>) => {
  
    setDraggedItem({ index });
  };

  const handleDragEnd = (e: React.DragEvent<HTMLLIElement>) => {
 
    setDraggedItem(null);
  };

  const handleDragOver = (e: React.DragEvent<HTMLLIElement>) => {
    e.preventDefault(); // Necessary to allow drop

    setDropIndex({ index });
  };

  return (
    <ListItem
    draggable
    onDragStart={handleDragStart}
    onDragEnd={handleDragEnd}
    onDragOver={handleDragOver}
    data-index={index}
    sx={{ cursor: 'grab', marginBottom: '4px', backgroundColor: 'rgba(0, 0, 0, 0.04)' }}
  >
    <ListItemText>{children}</ListItemText>
  </ListItem>
  );
};
