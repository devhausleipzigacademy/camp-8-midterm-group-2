import create from "zustand"
import { persist } from 'zustand/middleware'

type CategoryType = 'front' | 'middle' | 'back'

type row = 'A' | 'B' | 'C' | 'D' | 'E' | 'F'
type col = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8'
type seat = `${row}-${col}`


type SeatType = {
  category: CategoryType
  id: seat
  available: boolean
}
// const theSeatObject: SeatType = {
//   category: "back",
//   id: "A-7",
//   available: true
// }

type Seats = {
  // sadly didnt work :
  // [key in seat]: Seat
  // [key: seat]: Seat
  [key: string]: SeatType
}

type SeatStore = {
  seatsChosen: Seats | {}
  addSeatChosen: (seat: SeatType) => void
  removeSeatChosen: (seat: SeatType) => void
  clear: () => void
}





export const useSeatStore = create<SeatStore>()(

  persist((set, get) => ({

    seatsChosen: {},
    addSeatChosen: (seat) => {

      const seatsChosen = get().seatsChosen
      seatsChosen[seat.id] = seat
      set({ seatsChosen: seatsChosen })
    },

    removeSeatChosen: (seat) => {

      const seatsChosen = get().seatsChosen
      delete seatsChosen[seat.id]
      set({ seatsChosen: seatsChosen })
    },

    clear: () => {
      set({ seatsChosen: {} })
    }

  }), { name: 'seat-store' })
)