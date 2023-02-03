import { ServerIcon } from "@heroicons/react/20/solid";
import create from "zustand";
import { persist } from "zustand/middleware";

//Type for Token
export type TokenResponse = {
  user_id: string | null;
  user_email: string | null;
};

//Type for FakeUser in DB
export interface FakeUser {
  id: string;
  email: string;
  password: string;
  username: string;
  avatarurl: string;
}

//Fake-UserDB
export const exampleDB: Array<FakeUser> = [
  {
    id: "1",
    email: "default@gmail.com",
    password: "1234abcd",
    username: "first_user2020",
    avatarurl:
      "https://docs.readyplayer.me/ready-player-me/avatars/2d-avatars/examples",
  },
];
//corresponds to schema.prisma, without saltAndHash
interface modelUser {
  identifier: string | null,
  // saltAndHash: string,
  name: string | null,
  email: string | null,
  avatarUrl?: string | null,
  liked: Array<String> | Array<null>,
  bookings: Array<Object> | Array<null>,
}

type AuthStore = {
  user: modelUser;
  token: TokenResponse;
  setUser: (user: modelUser) => void;
  setToken: (tokenResponse: string) => void;
  clear: () => void;
};

const initialState = {
  user: {} as modelUser,
  token: undefined,
};

//https://pub.dev/documentation/nhost_sdk/latest/nhost_sdk/AuthStore-class.html
export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      token: {user_id: null, user_email: null},
      user: {
        identifier: null,
        name: null,
        email: null,
        liked: [null],
        bookings: [null],
      } as modelUser,
      setToken: (token_placeholder: TokenResponse) => set({ token: token_placeholder }),
      setUser: (userFromDB: modelUser) => set({user: userFromDB}),
      clear: () => set({ ...initialState }),
    }),
    {
      name: "blog-auth",
    }
  )
);
