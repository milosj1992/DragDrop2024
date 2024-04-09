import React, { useState } from "react";
import { DragProvider } from "./DragContext";
import { DragArea } from "./DragArea";
import { DragItem } from "./DragItem";
import users from "../data/users.json";
import UserItem from "./UserItem";
import { User } from "../types/drag";

export const DraggableUserList = () => {
  const [exampleUsers, setExampleUsers] = useState<User[]>(users);

  return (
    <DragProvider>
      
        <DragArea items={exampleUsers} onChange={setExampleUsers}>
          {exampleUsers.map((user, index) => (
            <DragItem key={user.email} index={index}>
              <UserItem name={user.firstName} email={user.email} />
            </DragItem>
          ))}
        </DragArea>
     
    </DragProvider>
  );
};
