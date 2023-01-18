type CategoryType = 'front' | 'middle' | 'back'

type row = 'A' | 'B' | 'C' | 'D' | 'E' | 'F'
type col = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8'
type seat = `${row}-${col}`


type Seat = {
  category: CategoryType
  seat: seat
  available: boolean
}