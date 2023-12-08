import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toDo } from "./Atoms";
import Board from "./Components/Board";

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-width: 500px;
  margin: 0 auto;
`;

const Boards = styled.div`
  display: grid;
  width: 100%;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
`;

function App() {
  const [toDos, setTodo] = useRecoilState(toDo);
  const onDragEnd = ({ draggableId, destination, source }: DropResult) => {
    // if (!destination) return;
    // setTodo((oldTodo) => {
    //   const toDoCopy = [...oldTodo];
    //   toDoCopy.splice(source.index, 1);
    //   toDoCopy.splice(destination?.index, 0, draggableId);
    //   return toDoCopy;
    // });
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrap>
        <Boards>
          {Object.keys(toDos).map((item) => (
            <Board key={item} boardId={item} toDos={toDos[item]} />
          ))}
        </Boards>
      </Wrap>
    </DragDropContext>
  );
}

export default App;
