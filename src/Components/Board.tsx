import styled from "styled-components";
import DraggableCard from "./DraggableCard";
import { Droppable } from "react-beautiful-dnd";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 5px;
  padding: 10px;
`;

interface Ilist {
  isDraggingOver: boolean;
  isdraggingFromThisWith: boolean;
}
const Lists = styled.div<Ilist>`
  background-color: ${(props) =>
    props.isDraggingOver
      ? "#f5f6fa"
      : props.isdraggingFromThisWith
      ? "#dcdde1"
      : "transparent"};
  flex-grow: 1;
  transition: background-color 0.3s ease-in-out;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 10px;
  color: ${(props) => props.theme.textColor};
`;

interface IBoard {
  toDos: string[];
  boardId: string;
}

function Board({ toDos, boardId }: IBoard) {
  return (
    <Wrapper>
      <Title>{boardId}</Title>

      <Droppable droppableId={boardId}>
        {(magic, snapshot) => (
          <Lists
            isdraggingFromThisWith={Boolean(snapshot.draggingFromThisWith)}
            isDraggingOver={snapshot.isDraggingOver}
            ref={magic.innerRef}
            {...magic.droppableProps}
          >
            {toDos.map((toDo, index) => (
              <DraggableCard key={toDo} toDo={toDo} index={index} />
            ))}
            {magic.placeholder}
          </Lists>
        )}
      </Droppable>
    </Wrapper>
  );
}

export default Board;
