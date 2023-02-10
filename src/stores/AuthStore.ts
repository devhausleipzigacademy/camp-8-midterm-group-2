import { ServerIcon } from "@heroicons/react/20/solid";
import { unauthorizedUser } from "@prisma/client";
import create from "zustand";
import { persist } from "zustand/middleware";

//Type for Token
export type TokenResponse = {
  user_id: string | null;
  user_email: string | null;
};

//corresponds to schema.prisma, without saltAndHash
export interface modelUser {
  identifier: string | null;
  // saltAndHash: string,
  name: string | null;
  email: string | null;
  avatarUrl?: string | null;
  liked: Array<String> | Array<null>;
  bookings: Array<Object> | Array<null>;
}

export type AuthStore = {
  user: modelUser;
  token: TokenResponse;
  setUser: (user: modelUser) => void;
  setToken: (token: TokenResponse) => void;
  clear: () => void;
};

const initialStateAuthorized = {
  user: {} as modelUser,
  token: undefined,
};

//https://pub.dev/documentation/nhost_sdk/latest/nhost_sdk/AuthStore-class.html
export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      token: { user_id: null, user_email: null },
      user: {
        identifier: null,
        name: null,
        email: null,
        liked: [null],
        bookings: [null],
      } as modelUser,
      setToken: (tokenNewValue: TokenResponse) => set({ token: tokenNewValue }),
      setUser: (userNewValue: modelUser) => set({ user: userNewValue }),
      clear: () => set({ ...initialStateAuthorized }),
    }),
    {
      name: "authorized-user-token",
    }
  )
);



// ////TEMPORARY TOKEN
// export type TemporaryToken = {
//   email: string | null;
// };

// export type TemporaryAuthentification = {
//   user: unauthorizedUser;
//   token: TemporaryToken;
//   setUser: (user: unauthorizedUser) => void;
//   setToken: (token: TemporaryToken) => void;
//   clear: () => void;
// };

// const initialStateUnauthorized = {
//   user: {} as unauthorizedUser,
//   token: undefined,
// };

// export const findUser = create<TemporaryAuthentification>()(
//   //not presist
//   persist(
//     (set) => ({
//       token: { email: null, saltAndHash: null },
//       user: {
//         saltAndHash: null,
//       } as unauthorizedUser,
//       setToken: (tokenNewValue: TemporaryToken) => set({ token: tokenNewValue }),
//       setUser: (userNewValue: unauthorizedUser) => set({ user: userNewValue }),
//       clear: () => set({ ...initialStateUnauthorized }),
//     }),
//     {
//       name: "unauthorized-user-token",
//     }
//   )
// );
