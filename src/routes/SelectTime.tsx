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
  const [chosenTime, setChosenTime] = useState("");
  const dates = useLoaderData() as DatesType;
  return (
    <form
      className="flex flex-col justify-between h-full"
      onSubmit={(event) => {
        event.preventDefault();
        console.log(chosenDate);
      }}
    >
      <div className="flex flex-col gap-6">
        <div className="space-y-5">
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
                    if (available) {
                      setChosenTime("");
                      setChosenDate(ISODate);
                    }
                  }}
                >
                  {date}
                  <input
                    type="radio"
                    name="dateInput"
                    value={ISODate}
                    className="hidden"
                  />
                </label>
              );
            })}
          </div>
        </div>
        <div className="bg-white-dimmed-heavy h-[1px]"></div>
        {chosenDate && (
          <div className="space-y-5">
            <h3 className="font-bold text-sm text-white-dimmed">TIME</h3>
            <div className="grid grid-cols-4 grid-rows-[2rem_2rem_2rem_2rem] gap-y-2 gap-x-2">
              {Object.entries(dates[chosenDate]).map((timeSlot) => {
                const [ISOTime, bookable] = timeSlot;
                const dateObj = parseISO(ISOTime);
                const time = format(dateObj, "HH:mm", { locale: de });
                return (
                  <label
                    key={time}
                    className={clsx(
                      "px-2 py-1 rounded text-center",
                      !bookable ? "text-dark-light" : "text-white-dimmed",
                      chosenTime === ISOTime && "bg-yellow text-dark"
                    )}
                    onClick={(event) => {
                      if (bookable) setChosenTime(ISOTime);
                    }}
                  >
                    {time}
                    <input
                      type="radio"
                      name="timeInput"
                      value={ISOTime}
                      className="hidden"
                    />
                  </label>
                );
              })}
            </div>
          </div>
        )}
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
