import styled from "styled-components";
import DraggableCard from "./DraggableCard";
import { Droppable } from "react-beautiful-dnd";
import { useForm } from "react-hook-form";
import { IToDo, toDo } from "../Atoms";
import { useSetRecoilState } from "recoil";

const Wrapper = styled.div<{ $droppableId: string }>`
  display: flex;
  flex-direction: column;
  background-color: ${(props) =>
    props.$droppableId === "Delete" ? "tomato" : "white"};
  border-radius: 5px;
  padding: 10px;
`;
const Form = styled.form`
  width: 100%;
  display: flex;
  margin-bottom: 10px;
`;

interface Ilist {
  $isDraggingOver: boolean;
  $isdraggingFromThisWith: boolean;
  $droppableId: string;
}

const Lists = styled.div<Ilist>`
  background-color: ${(props) =>
    props.$droppableId === "Delete"
      ? "tomato"
      : props.$isDraggingOver
      ? "#f5f6fa"
      : props.$isdraggingFromThisWith
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
  toDos: IToDo[];
  boardId: string;
}
interface IForm {
  [boardId: string]: string;
}

function Board({ toDos, boardId }: IBoard) {
  const setToDos = useSetRecoilState(toDo);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const onValid = (data: IForm) => {
    const newTodo = {
      id: Date.now(),
      text: data[boardId],
    };
    setToDos((allBoards) => {
      return {
        ...allBoards,
        [boardId]: [...allBoards[boardId], newTodo],
      };
    });
    setValue(boardId, "");
  };
  return (
    <Wrapper $droppableId={boardId}>
      <Title>{boardId}</Title>
      {boardId !== "Delete" ? (
        <Form onSubmit={handleSubmit(onValid)}>
          <input
            {...register(boardId, { required: true })}
            type="text"
            placeholder={`write ${boardId}`}
          />
          <button>click</button>
        </Form>
      ) : null}
      <Droppable droppableId={boardId}>
        {(magic, snapshot) => (
          <Lists
            $isdraggingFromThisWith={Boolean(snapshot.draggingFromThisWith)}
            $isDraggingOver={snapshot.isDraggingOver}
            $droppableId={boardId}
            ref={magic.innerRef}
            {...magic.droppableProps}
          >
            {toDos.map((toDo, index) => (
              <DraggableCard
                key={toDo.id}
                toDoId={toDo.id}
                toDoText={toDo.text}
                index={index}
              />
            ))}
            {magic.placeholder}
          </Lists>
        )}
      </Droppable>
    </Wrapper>
  );
}

export default Board;
