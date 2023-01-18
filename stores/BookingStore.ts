import create from "zustand/react"
import { persist } from 'zustand/middleware'

type CategoryType = 'front' | 'middle' | 'back'

type row = 'A' | 'B' | 'C' | 'D' | 'E' | 'F'
type col = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8'
type seat = `${row}-${col}`


type Seat = {
  category: CategoryType
  seat: seat
  available: boolean
}
type Seats = {
  [key in seat]: 
}

type SeatStore = {
  seats: Seats
  setSeat: (seat: Seat) => void
  clear: () => void
}


const initialState = {
  seats: {}
}


export const useSeatStore = create<SeatStore>()(

  persist((set) => ({
    ...initialState,
    setSeat: (seat) => set({ seat }),
    clear: () => set({ ...initialState })

  }), { name: 'seat-store' })
)