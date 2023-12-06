import { atom, selector } from "recoil";

export const minuteState = atom({
  key: "minute",
  default: 0,
});

export const hourSelector = selector({
  key: "hour",
  get: ({ get }) => {
    const minute = get(minuteState);
    return minute / 60;
  },
});
