import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { toDo } from "../Atoms";
import styled from "styled-components";

const Form = styled.form`
  margin-bottom: 50px;

  input {
    padding: 10px;
    border-radius: 10px;
    outline: 0;
    border: 0;
  }
`;

interface IForm {
  text: string;
}

function AddBoard() {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const [toDos, setTodo] = useRecoilState(toDo);

  const onVaild = (newBoard: IForm) => {
    console.log(newBoard);
    setTodo((allBoards) => {
      return {
        [newBoard.text]: [],
        ...allBoards,
      };
    });
    setValue("text", "");
  };

  return (
    <Form onSubmit={handleSubmit(onVaild)}>
      <input {...register("text")} placeholder="Add Board" />
    </Form>
  );
}

export default AddBoard;
