import create from "zustand";
import { persist } from "zustand/middleware";

export interface User {
  id: string;
  email: string;
  password: string;
  username: string;
  avatarurl: string;
}

export const exampleDB: Array<User> = [
  {
    id: "1",
    email: "default@gmail.com",
    password: "1234abcd",
    username: "first_user2020",
    avatarurl:
      "https://docs.readyplayer.me/ready-player-me/avatars/2d-avatars/examples",
  },
];

type AuthStore = {
  id: string;
  email: string;
  token: string;
  setId: (id: string) => void;
  setToken: (tokenResponse: string) => void;
  clear: () => void;
};

const initialState = {
  id: "",
  email: "",
  password: "",
  username: "",
  token: "",
  avatarurl: "",
};

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      id: "",
      token: "",
      email: "",
      setId: (idInput: string) => set({ id: idInput }),
      setToken: (tokenResponse: string) => set({ token: tokenResponse }),
      clear: () => set({ ...initialState }),
    }),
    {
      name: "blog-auth",
    }
  )
);
