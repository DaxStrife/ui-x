import React, { useState, useEffect, useRef } from "react";

import cn from "@/utils/cn";

import { Ic_datepicker } from "@/icons/Ic_datepicker";
import { Ic_arrow_left, Ic_arrow_right, Ic_select } from "@/icons/Ic_arrow";

const Week = ({ weekDays }) => {
  return (
    <div className="grid grid-cols-7 mb-1">
      {weekDays.map((item, index) => (
        <span className="col-span-1 text-center h-6 text-gray-400" key={index}>
          {item}
        </span>
      ))}
    </div>
  );
};

const Header = (props) => {
  const {
    minYear = 1950,
    maxYear = 2050,
    location = "",
    currentDate,
    handleChangeYear,
    handlePrevMonth,
    handleNextMonth,
  } = props;

  const [open, setOpen] = useState(false);
  const selectRef = useRef(null);

  const currentYear = new Date(currentDate).getFullYear();
  const currentMonth = new Date(currentDate).toLocaleDateString(location, {
    month: "long",
  });

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex justify-between">
      <button type="button" onClick={handlePrevMonth}>
        <Ic_arrow_left />
      </button>

      <div className="flex gap-3">
        <span id="currentMonth" className="capitalize">
          {currentMonth}
        </span>
        <div className="relative">
          <div className="flex gap-1 cursor-pointer" onClick={() => setOpen(true)}>
            {currentYear}
            <div className="content-center">
              <Ic_select className="size-4" />
            </div>
          </div>
          {open && (
            <select
              ref={selectRef}
              id="select-year"
              onChange={(e) => {
                handleChangeYear(Number(e.target.value)), setOpen(false);
              }}
              className="p-1 left-1/2 -translate-x-1/2 absolute rounded [&::-webkit-scrollbar]:w-[6px] [&::-webkit-scrollbar-thumb]:bg-slate-600/50 [&::-webkit-scrollbar-thumb]:rounded-md"
              value={currentYear}
              aria-label="Select Year"
              size="7"
            >
              {Array.from({ length: maxYear - minYear + 1 }, (_, index) => {
                const year = minYear + index;
                return (
                  <option
                    key={year}
                    className={`cursor-pointer py-1 px-2 rounded ${
                      year === currentYear ? "bg-blue-600 text-white" : "hover:bg-blue-200 bg-white text-black"
                    }`}
                    value={year}
                  >
                    {year}
                  </option>
                );
              })}
            </select>
          )}
        </div>
      </div>

      <button type="button" onClick={handleNextMonth}>
        <Ic_arrow_right />
      </button>
    </div>
  );
};

const Card = (props) => {
  const {
    settings,
    currentDate,
    handlePrevMonth,
    handleNextMonth,
    handleChangeYear,
    handleChangeHour,
    selectedHour,
    datepickerContainerRef,
    daysContainerRef,
    cardClassName,
  } = props;
  return (
    <div className="absolute z-10 top-full w-full">
      <div
        ref={datepickerContainerRef}
        className={cn(`p-4 bg-slate-800 rounded-lg shadow-lg text-white mt-2 w-full max-w-xs ${cardClassName}`)}
      >
        <Header
          location={settings.location}
          minYear={settings.minYear}
          maxYear={settings.maxYear}
          currentDate={currentDate}
          handlePrevMonth={handlePrevMonth}
          handleNextMonth={handleNextMonth}
          handleChangeYear={handleChangeYear}
        />
        <div className="p-1">
          <Week weekDays={settings.weekDays} />
          <div className="grid grid-cols-7 mb-1" ref={daysContainerRef} id="days-container"></div>

          {settings.hour && (
            <div className="relative max-w-max">
              <input
                type="time"
                id="input-time"
                value={selectedHour}
                onChange={(e) => handleChangeHour(e.target.value)}
                className="px-3 py-1 rounded-lg bg-slate-600"
              />
            </div>
          )}
        </div>
      </div>

      <style>
        {`
          #input-time::-webkit-calendar-picker-indicator {
            bottom: 0;
            color: transparent;
            cursor: pointer;
            height: auto;
            left: 0;
            opacity: 0;
            position: absolute;
            right: 0;
            top: 0;
            width: 100%
          }
        `}
      </style>
    </div>
  );
};

export const Datepicker = ({ options, value, setValue, className = "", cardClassName = "", ...props }) => {
  const defaults = {
    minYear: 1950,
    maxYear: 2050,
    location: "en-US",
    weekDays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    icon: true,
    hour: true,
    inputDateFormat: {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
    },
  };

  const settings = { ...defaults, ...options };

  const [currentDate, setCurrentDate] = useState(null);

  const [selectedHour, setSelectedHour] = useState("00:00");
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const daysContainerRef = useRef(null);
  const datepickerContainerRef = useRef(null);

  const renderCalendar = () => {
    const year = new Date(currentDate).getFullYear();
    const month = new Date(currentDate).getMonth();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const daysContainer = daysContainerRef.current;
    daysContainer.innerHTML = "";

    // Create empty spaces to align the calendar
    for (let i = 0; i < firstDayOfMonth; i++) {
      const emptyDiv = document.createElement("div");
      daysContainer.appendChild(emptyDiv);
    }

    // Render the days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      const dayDiv = document.createElement("div");
      dayDiv.className =
        "col-span-1 flex-1 font-semibold text-sm text-center hover:bg-slate-500 rounded-lg leading-6 h-8 content-center select-none cursor-pointer";

      const selectedDate = new Date(value);
      const selectedDay = selectedDate.getDate();
      const selectedYear = selectedDate.getFullYear();
      const selectedMonth = selectedDate.getMonth();

      if (i === selectedDay && year === selectedYear && month === selectedMonth) {
        dayDiv.classList.add("bg-blue-600");
      }

      dayDiv.textContent = i;

      // Add selection event
      dayDiv.addEventListener("click", () => {
        // Remove the selected day class from all days
        const allDayDivs = daysContainer.querySelectorAll("[data-day]");
        allDayDivs.forEach((d) => {
          d.classList.remove("bg-blue-600", "hover:bg-blue-600", "text-white");
          d.classList.add("hover:bg-slate-500"); // Restore hover to unselected
        });

        // Set new selected day
        const hour = document.getElementById("input-time");

        let selectedDate = `${month + 1}/${i}/${year}`;

        if (hour) {
          selectedDate = `${month + 1}/${i}/${year}/${hour.value}`;
        }

        setValue(selectedDate);

        // Add classes to the selected day
        dayDiv.classList.add("bg-blue-600", "text-white");

        // Remove hover for the selected
        dayDiv.classList.remove("hover:bg-slate-500");
      });

      // Mark this div as a valid day
      dayDiv.setAttribute("data-day", i);

      daysContainer.appendChild(dayDiv);
    }
  };

  const handlePrevMonth = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(new Date(prevDate).getMonth() - 1);
      return newDate;
    });
  };

  const handleNextMonth = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(new Date(prevDate).getMonth() + 1);
      return newDate;
    });
  };

  const handleChangeHour = (newHour) => {
    setSelectedHour(newHour);
    const newDay = new Date(value);

    const year = newDay.getFullYear();
    const month = newDay.getMonth();
    const day = newDay.getDate();

    const selectedDateValue = `${month + 1}/${day}/${year}/${newHour}`;
    setValue(selectedDateValue);
  };

  const handleToggleCalendar = () => {
    setIsCalendarOpen(true);
  };

  const handleChangeYear = (newYear) => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setFullYear(newYear);
      return newDate;
    });
  };

  useEffect(() => {
    if (daysContainerRef.current) {
      renderCalendar();
    }
  }, [currentDate, isCalendarOpen]);

  useEffect(() => {
    if (value && isCalendarOpen) {
      const newDay = new Date(value);
      setCurrentDate(newDay);

      let hour = newDay.getHours();
      let minutes = newDay.getMinutes();

      if (hour < 10) {
        hour = `0${hour}`;
      }
      if (minutes < 10) {
        minutes = `0${minutes}`;
      }

      setSelectedHour(`${hour}:${minutes}`);
    }
  }, [isCalendarOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (datepickerContainerRef.current && !datepickerContainerRef.current.contains(event.target)) {
        setIsCalendarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <div onClick={handleToggleCalendar} className="relative max-w-max">
        <input
          {...props}
          type="text"
          value={(value && new Date(value).toLocaleDateString(settings.location, settings.inputDateFormat)) || ""}
          readOnly
          className={cn(
            `h-10 capitalize px-3.5 rounded-lg ring-blue-200 transition-all focus:ring-[3px] bg-slate-100 ${className}`
          )}
        />

        {settings.icon && (
          <div className="absolute top-1/2 -translate-y-1/2 right-3">
            <Ic_datepicker />
          </div>
        )}
      </div>

      {isCalendarOpen && (
        <Card
          settings={settings}
          currentDate={currentDate}
          handlePrevMonth={handlePrevMonth}
          handleNextMonth={handleNextMonth}
          handleChangeYear={handleChangeYear}
          handleChangeHour={handleChangeHour}
          selectedHour={selectedHour}
          datepickerContainerRef={datepickerContainerRef}
          daysContainerRef={daysContainerRef}
          cardClassName={cardClassName}
        />
      )}
    </div>
  );
};
