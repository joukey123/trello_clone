import React, { useRef } from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import ListEdit from "./ListEdit";

interface IDraggableCard {
  toDoId: number;
  toDoText: string;
  index: number;
}
interface Ilist {
  $isDragging: boolean;
  $draggingOver: string | undefined | null;
}
const List = styled.div<Ilist>`
  background-color: ${(props) =>
    props.$draggingOver === "Delete"
      ? "#e84118"
      : props.$isDragging
      ? "#9c88ff"
      : "#dcdde1"};
  /* background-color: ${(props) =>
    props.$isDragging ? "#9c88ff" : "#dcdde1"}; */
  box-shadow: ${(props) =>
    props.$isDragging ? "1px 1px 5px rgba(0,0,0,0.5)" : "none"};
  padding: 5px;
  margin-bottom: 10px;
  border-radius: 5px;
  color: ${(props) => (props.$isDragging ? "white" : "black")};
`;

function DraggableCard({ toDoId, toDoText, index }: IDraggableCard) {
  return (
    <Draggable key={toDoId} draggableId={toDoId + ""} index={index}>
      {(magic, snapshot) => (
        <List
          $draggingOver={snapshot.draggingOver}
          $isDragging={snapshot.isDragging}
          ref={magic.innerRef}
          {...magic.draggableProps}
          {...magic.dragHandleProps}
        >
          <ListEdit toDoText={toDoText} />
        </List>
      )}
    </Draggable>
  );
}

export default React.memo(DraggableCard);
