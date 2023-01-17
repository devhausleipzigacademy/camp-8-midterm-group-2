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
    return times;
  }
  return dates;
}

export function SelectTime(): JSX.Element {
  const dates = useLoaderData() as DatesType;
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="divide-y divide-white-dimmed-heavy flex flex-col gap-6">
        <div className="space-y-4">
          <h3 className="font-bold text-sm text-white-dimmed">DATE</h3>
          <div className="grid grid-cols-4">
            {[
              "21 Dec",
              "22 Dec",
              "23 Dec",
              "24 Dec",
              "25 Dec",
              "26 Dec",
              "27 Dec",
              "28 Dec",
              "29 Dec",
              "30 Dec",
              "31 Dec",
              "01 Jan",
            ].map((date) => {
              return (
                <button className="text-white-dimmed px-3 py-1">{date}</button>
              );
            })}
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="font-bold text-sm text-white-dimmed">TIME</h3>
          <div className="grid grid-cols-4">
            {availableTimes.map((time) => (
              <button className="text-white-dimmed px-2 py-1">{time}</button>
            ))}
          </div>
        </div>
      </div>
      <button className="bg-yellow rounded-lg w-full h-12 py-4 text-dark-light text-sm font-bold">
        Select Seat
      </button>
    </div>
  );
}
