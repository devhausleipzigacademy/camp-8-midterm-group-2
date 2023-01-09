export type GenreItem = {
  symbol: string
}
export type GenreType = {
  romance: GenreItem,
  crime: GenreItem,
  history: GenreItem,
  action: GenreItem,
  documentary: GenreItem,
  horror: GenreItem,
  adventure: GenreItem,
  drama: GenreItem,
  music: GenreItem,
  animation: GenreItem,
  family: GenreItem,
  mystery: GenreItem,
  comedy: GenreItem,
  fantasy: GenreItem,
  "sciene fiction": GenreItem
  thriller: GenreItem,
}
export const genres: GenreType = {
  romance: { symbol: "😍" },
  crime: { symbol: "🚔" },
  history: { symbol: "⏳" },
  action: { symbol: "🧨" },
  documentary: { symbol: "🎥" },
  horror: { symbol: "🔪" },
  adventure: { symbol: "💎" },
  drama: { symbol: "🎭" },
  music: { symbol: "🎧" },
  animation: { symbol: "🦁" },
  family: { symbol: "👪" },
  mystery: { symbol: "🔎" },
  comedy: { symbol: "🤣" },
  fantasy: { symbol: "🦄" },
  "sciene fiction": { symbol: "👽" },
  thriller: { symbol: "😱" }
}