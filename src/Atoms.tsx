import { atom } from "recoil";

interface ItoDoState {
  [key: string]: string[];
}

export const toDo = atom<ItoDoState>({
  key: "todo",
  default: {
    to_do: ["a", "b", "c"],
    doing: ["d", "e"],
    done: ["f"],
  },
});
