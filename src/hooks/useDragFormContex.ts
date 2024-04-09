import React from "react";
import { DragContext } from "../drag/DragContext";

export const useDragContext = () => {
    const context = React.useContext(DragContext);
    if (context === undefined) {
      throw new Error("useDragContext must be used within a DragProvider");
    }
    return context;
  };