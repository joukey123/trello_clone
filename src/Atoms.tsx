import { atom } from "recoil";

export interface IToDo {
  id: number;
  text: string;
}

interface ItoDoState {
  [key: string]: IToDo[];
}

export const toDo = atom<ItoDoState>({
  key: "todo",
  default: {
    "To Do": [],
    Doing: [],
    Done: [],
  },
});
