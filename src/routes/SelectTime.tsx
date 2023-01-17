import { DatesType, TimeType } from "../types/times";
import { add } from "date-fns";
import { useLoaderData } from "react-router-dom";
import { availableTimes } from "../utils/times";

export async function selectTimeLoader(): Promise<DatesType> {
  const today = new Date();
  today.setHours(0);
  today.setMinutes(0);
  today.setSeconds(0);
  today.setMilliseconds(0);

  const dates: DatesType = {};

  for (let i = 0; i < 14; i++) {
    const newDay = add(today, { days: i });
    const times = createTimes(newDay);
    dates[newDay.toISOString()] = times;
  }

  function createTimes(day: Date): TimeType {
    const times: TimeType = {};

    availableTimes.map((time) => {
      const newDate = new Date(day.valueOf());

      const [hour, minute] = time.split(":");
      newDate.setHours(Number(hour));
      newDate.setMinutes(Number(minute));

      const newDateString = newDate.toISOString();
      times[newDateString] = { bookable: Math.random() < 0.5 };
    });
    // make times for a whole day completely unbookable
    if (Math.random() < 0.25) {
      for (const time in times) {
        times[time].bookable = false;
      }
    }
    return times;
  }
  return dates;
}

export function SelectTime(): JSX.Element {
  const dates = useLoaderData() as DatesType;
  return (
    <div>
      <h1>Time</h1>
    </div>
  );
}
