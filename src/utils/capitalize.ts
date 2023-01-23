
export function capitalizeString(s: string): string {

  const splitted = s.split(" ")

  return splitted.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }).join(' ')

}