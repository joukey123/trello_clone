import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

interface IDraggableCard {
  toDo: string;
  index: number;
}
const List = styled.div`
  background-color: #47c2ff;
  padding: 5px;
  margin-bottom: 5px;
  border-radius: 5px;
  color: black;
`;
function DraggableCard({ toDo, index }: IDraggableCard) {
  return (
    <Draggable key={toDo} draggableId={toDo} index={index}>
      {(magic) => (
        <List
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
