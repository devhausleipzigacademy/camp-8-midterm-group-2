import { DatesType } from "../types/times";

export function selectTimeLoader(): DatesType {
  return {
    "0000T0000": {
      "00000T1234": { bookable: true },
      "00000T1235": { bookable: true },
    },
    "0001T0000": {
      "00000T1234": { bookable: true },
      "00000T1235": { bookable: false },
    },
  };
}

export function SelectTime(): JSX.Element {
  return (
    <div>
      <h1>Time</h1>
    </div>
  );
}
