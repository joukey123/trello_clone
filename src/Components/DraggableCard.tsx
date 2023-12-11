import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

interface IDraggableCard {
  toDo: string;
  index: number;
}
const List = styled.div<{ isDragging: boolean }>`
  background-color: ${(props) => (props.isDragging ? "#9c88ff" : "#dcdde1")};
  box-shadow: ${(props) =>
    props.isDragging ? "1px 1px 5px rgba(0,0,0,0.5)" : "none"};
  padding: 5px;
  margin-bottom: 10px;
  border-radius: 5px;
  color: ${(props) => (props.isDragging ? "white" : "black")};
`;
function DraggableCard({ toDo, index }: IDraggableCard) {
  return (
    <Draggable key={toDo} draggableId={toDo} index={index}>
      {(magic, snapshot) => (
        <List
          isDragging={snapshot.isDragging}
          ref={magic.innerRef}
          {...magic.draggableProps}
          {...magic.dragHandleProps}
        >
          {toDo}
        </List>
      )}
    </Draggable>
  );
}

export default React.memo(DraggableCard);
