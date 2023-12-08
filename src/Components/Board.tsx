import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import DraggableCard from "./DraggableCard";

const Lists = styled.div`
  background-color: white;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
`;
interface IBoard {
  toDos: string[];
  boardId: string;
}

function Board({ toDos, boardId }: IBoard) {
  return (
    <Droppable droppableId={boardId}>
      {(magic) => (
        <Lists ref={magic.innerRef} {...magic.droppableProps}>
          {boardId}
          {toDos.map((toDo, index) => (
            <DraggableCard key={toDo} toDo={toDo} index={index} />
          ))}
          {magic.placeholder}
        </Lists>
      )}
    </Droppable>
  );
}

export default Board;
