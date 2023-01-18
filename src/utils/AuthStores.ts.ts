import create from "zustand";
import { persist } from "zustand/middleware";

//Create a User type that has a username and a avatarUrl
type User = {
    username: string;
    avatarUrl: string;
}

//Create a type for your AuthStore that can hold a user and a token, as well as updaters
type AuthStore = {
    token: string;
    user: User
    setUser: (user: User) => void; //setUser receives an updated user later
    setToken: (tokenResponse: string) => void;
    clear: () => void;
  };

//implement an initialState
const initialState = {
    token: "",
    user: {
        username: "",
        avatarUrl: "",
    },
}

//implement the store (state values and setters)
export const useAuthStore = create<AuthStore>()(
    persist(
    //what does set do exactly
      (set) => ({
        ...initialState,
        setUser: (user) => set({ user }),
        setToken: (token) => set({ token }),
        clear: () => set({ ...initialState }),
      }),
      {
        name: "user-auth",
      }
    )
  );