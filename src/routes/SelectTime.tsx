import { DatesType, TimeType } from "../types/times";
import {
  add,
  format,
  getDaysInMonth,
  getMonth,
  parseISO,
  setDate,
} from "date-fns";
import { useLoaderData } from "react-router-dom";
import { availableTimes } from "../utils/times";
import { useState } from "react";
import clsx from "clsx";
import { de } from "date-fns/locale";

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
  const [chosenDate, setChosenDate] = useState("");
  const dates = useLoaderData() as DatesType;
  return (
    <form
      className="flex flex-col justify-between h-full"
      onSubmit={(event) => {
        event.preventDefault();
        console.log(chosenDate);
      }}
    >
      <div className="divide-y divide-white-dimmed-heavy flex flex-col gap-6">
        <div className="space-y-4">
          <h3 className="font-bold text-sm text-white-dimmed">DATE</h3>
          <div className="grid grid-cols-4 grid-rows-[2rem_2rem_2rem_2rem] gap-y-2 gap-x-1">
            {Object.keys(dates).map((ISODate) => {
              //
              const dateObj = parseISO(ISODate);
              const date = format(dateObj, "dd LLL", { locale: de });

              // the following unreadable code checks if some date entries are bookable
              // because if they are all not the date is unavailable
              const available = Object.values(dates[ISODate]).some(
                (time) => time.bookable
              );

              return (
                <label
                  key={date}
                  className={clsx(
                    "px-2 py-1 rounded text-center",
                    !available ? "text-dark-light" : "text-white-dimmed",
                    chosenDate === ISODate && "bg-yellow text-dark"
                  )}
                  onClick={(event) => {
                    if (available) setChosenDate(ISODate);
                  }}
                >
                  {date}
                  <input
                    type="radio"
                    name="dateInput"
                    value={ISODate}
                    className="invisible"
                  />
                </label>
              );
            })}
          </div>
        </div>
        {/* <div className="space-y-4">
          <h3 className="font-bold text-sm text-white-dimmed">TIME</h3>
          <div className="grid grid-cols-4">
            {availableTimes.map((time) => (
              <button className="text-white-dimmed px-2 py-1">{time}</button>
            ))}
          </div>
        </div> */}
      </div>
      <button
        type="submit"
        className="bg-yellow rounded-lg w-full h-12 py-4 text-dark-light text-sm font-bold"
      >
        Select Seat
      </button>
    </form>
  );
}
