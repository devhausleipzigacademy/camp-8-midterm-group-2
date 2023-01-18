import create from "zustand";
import { persist } from "zustand/middleware";

//Create a User type that has a username and a avatarUrl
type User = {
    username: string;
    avatarUrl: string;
}

//Create a type for your AuthStore that can hold a user and a token, as well as updaters
type AuthStore = {
    email: string;
    token: string;
    user: User
    setEmail: (inputEmail: string) => void;
    setToken: (tokenResponse: string) => void;
    clear: () => void;
  };

//implement the store (state values and setters)
