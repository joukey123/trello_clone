import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  align-items: center;
  position: relative;
  input {
    border: 0;
    background-color: transparent;
    position: absolute;
    left: 0;
  }
  button {
    border: 0;
    cursor: pointer;
    padding: 5px;
    margin-left: 150px;
  }
`;

interface IListEditProps {
  toDoText: string;
  isClick?: boolean;
}
function ListEdit({ toDoText }: IListEditProps) {
  const { register, handleSubmit, setValue } = useForm<IListEditProps>();

  const onVaild = () => {};
  return (
    <Form onSubmit={handleSubmit(onVaild)}>
      <input {...register("toDoText")} value={toDoText} />
      <button>수정</button>
    </Form>
  );
}

export default React.memo(ListEdit);
