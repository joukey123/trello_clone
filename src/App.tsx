import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toDo } from "./Atoms";
import Board from "./Components/Board";
import { useForm } from "react-hook-form";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-width: 800px;
  margin: 0 auto;
`;

const Boards = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  :last-child {
    grid-column: 1/4;
  }
`;

interface IForm {
  text: string;
}

function App() {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const [toDos, setTodo] = useRecoilState(toDo);

  const onVaild = (text: IForm) => {
    console.log(text);
    setTodo((allBoards) => {
      return {
        [text.text]: [],
        ...allBoards,
      };
    });
    setValue("text", "");
  };

  const onDragEnd = (info: DropResult) => {
    const { destination, source } = info;
    if (!destination) return;
    if (destination?.droppableId === source.droppableId) {
      setTodo((allBoards) => {
        const boardCopy = [...allBoards[source.droppableId]];
        const taskObj = boardCopy[source.index];
        boardCopy.splice(source.index, 1);
        boardCopy.splice(destination?.index, 0, taskObj);
        return {
          ...allBoards,
          [source.droppableId]: boardCopy,
        };
      });
    }
    if (destination.droppableId !== source.droppableId) {
      setTodo((allBoards) => {
        const sourceBoard = [...allBoards[source.droppableId]];
        const taskObj = sourceBoard[source.index];
        const destinationBoard = [...allBoards[destination.droppableId]];
        sourceBoard.splice(source.index, 1);
        destinationBoard.splice(destination.index, 0, taskObj);
        return {
          ...allBoards,
          [source.droppableId]: sourceBoard,
          [destination.droppableId]: destinationBoard,
        };
      });
    }
    if (destination.droppableId === "Delete") {
      console.log("delete");
      setTodo((allBoards) => {
        return {
          ...allBoards,
          [destination.droppableId]: [],
        };
      });
    }

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
        <form onSubmit={handleSubmit(onVaild)}>
          <input {...register("text")} placeholder="Add Board" />
        </form>
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
