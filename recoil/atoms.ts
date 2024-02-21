import { atom } from "recoil";

export const itemsState = atom({
  key: "itemsState",
  default: [
    {
      id: 1,
      project: "side",
      url: "/image/side.jpg",
    },
    {
      id: 2,
      project: "port",
      url: "/image/port.jpg",
    },
    {
      id: 3,
      project: "main",
      url: "/image/mainP.jpg",
    },
  ],
});

export const idState = atom({
  key: "testState",
  default: 0,
});
