import { atom } from "recoil";

interface ItoDoState {
  [key: string]: string[];
}

export const toDo = atom<ItoDoState>({
  key: "todo",
  default: {
    "To Do": ["a", "b", "c"],
    Doing: ["d", "e"],
    Done: ["f"],
  },
});
