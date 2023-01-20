import { DatesType, TimeType } from "../types/times";
import { add, format, parseISO } from "date-fns";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { availableTimes } from "../utils/times";
import { useState } from "react";
import { de } from "date-fns/locale";
import { DateSelectButton } from "../components/DateSelectButton";
import { DetailHeader } from "../components/DetailHeaderLayout";

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
  const movieId = useLocation().pathname.split("/")[1];
  const navigate = useNavigate();
  return (
    <form
      className="flex flex-col justify-between h-full"
      onSubmit={(event) => {
        event.preventDefault();
        if (chosenDate && chosenTime) {
          const targetLocation = `${movieId}/booking/selectseats`;
          navigate(targetLocation);
        }
      }}
    >
      <div className="flex flex-col gap-6">
        <div className="space-y-5">
          <h3 className="font-bold text-sm text-white-dimmed">DATE</h3>
          <div className="grid grid-cols-4 grid-rows-4 gap-y-2 gap-x-1">
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
                <DateSelectButton
                  disabled={!available}
                  label={date}
                  onClick={(event) => {
                    event.preventDefault();
                    if (available) {
                      setChosenTime("");
                      setChosenDate(ISODate);
                    }
                  }}
                  selected={chosenDate === ISODate}
                />
              );
            })}
          </div>
        </div>
        {chosenDate && (
          <>
            <div className="bg-white-dimmed-heavy h-[1px]"></div>
            <div className="space-y-5">
              <h3 className="font-bold text-sm text-white-dimmed">TIME</h3>
              <div className="grid grid-cols-4 grid-rows-4 gap-y-2 gap-x-2">
                {Object.entries(dates[chosenDate]).map((timeSlot) => {
                  const [ISOTime, enabled] = timeSlot;
                  const dateObj = parseISO(ISOTime);
                  const time = format(dateObj, "HH:mm", { locale: de });
                  return (
                    <DateSelectButton
                      disabled={!enabled.bookable}
                      label={time}
                      onClick={(event) => {
                        event.preventDefault();
                        if (!event.currentTarget.disabled) {
                          setChosenTime(ISOTime);
                        }
                      }}
                      selected={chosenTime === ISOTime}
                      key={time}
                    />
                  );
                })}
              </div>
            </div>
          </>
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
