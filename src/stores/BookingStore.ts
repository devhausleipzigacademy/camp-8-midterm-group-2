import create from "zustand";
import { persist } from "zustand/middleware";

type SeatStore = {
  seatsChosen: string[];
  setSeatsChosen: (seats: string[]) => void;
  clear: () => void;
};

export const useSeatStore = create<SeatStore>()(
  persist(
    (set) => ({
      seatsChosen: [],
      setSeatsChosen: (seats) => set({ seatsChosen: seats }),
      clear: () => {
        set({ seatsChosen: [] });
      },
    }),
    { name: "seat-store" }
  )
);
