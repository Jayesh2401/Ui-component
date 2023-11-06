import React, { useState, useEffect } from "react";
import "../Calender.css";

const CommonCalendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedMonth, setSelectedMonth] = useState<number>(
    new Date().getMonth()
  );
  const [selectedYear, setSelectedYear] = useState<number>(
    new Date().getFullYear()
  );
  const minYear = 2000;
  const maxYear = 2030;

  useEffect(() => {
    const currentDate = new Date();
    currentDate.setDate(15);
    setSelectedDate(currentDate);
    setSelectedMonth(currentDate.getMonth());
    setSelectedYear(currentDate.getFullYear());
  }, []);

  useEffect(() => {
    if (selectedMonth !== null && selectedYear !== null) {
      const daysInSelectedMonth = daysInMonth(selectedYear, selectedMonth);
      if (selectedDate && selectedDate.getDate() > daysInSelectedMonth) {
        setSelectedDate(null);
      }
    }
  }, [selectedMonth, selectedYear]);

  const daysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getCurrentMonth = () => {
    return selectedDate ? selectedDate.getMonth() : selectedMonth;
  };

  const getCurrentYear = () => {
    return selectedDate ? selectedDate.getFullYear() : selectedYear;
  };

  const renderCalendar = () => {
    const year = getCurrentYear();
    const month = getCurrentMonth();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const totalDays = daysInMonth(year, month);

    const days = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="empty-day"></div>);
    }

    for (let day = 1; day <= totalDays; day++) {
      days.push(
        <div
          key={`day-${day}`}
          className={`calendar-day ${
            selectedDate && selectedDate.getDate() === day ? "selected-day" : ""
          }`}
          onClick={() => handleDayClick(day)}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  const handleDayClick = (day: number) => {
    const year = getCurrentYear();
    const month = getCurrentMonth();
    setSelectedDate(new Date(year, month, day));
  };

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMonth(parseInt(event.target.value, 10));
  };

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(parseInt(event.target.value, 10));
  };

  const incrementMonth = () => {
    setSelectedDate(null);
    if (selectedMonth === 11) {
      setSelectedMonth(0);
      setSelectedYear(selectedYear + 1);
    } else {
      setSelectedMonth(selectedMonth + 1);
    }
  };

  const decrementMonth = () => {
    setSelectedDate(null);
    if (selectedMonth === 0) {
      setSelectedMonth(11);
      setSelectedYear(selectedYear - 1);
    } else {
      setSelectedMonth(selectedMonth - 1);
    }
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button onClick={() => setSelectedDate(null)}>Clear</button>
        <div className="month-year-select">
          <select value={selectedMonth} onChange={handleMonthChange}>
            {FULL.map((month, index) => (
              <option key={index} value={index}>
                {month}
              </option>
            ))}
          </select>
          <select value={selectedYear} onChange={handleYearChange}>
            {Array.from({ length: maxYear - minYear + 1 }, (_, index) => (
              <option key={index} value={minYear + index}>
                {minYear + index}
              </option>
            ))}
          </select>
        </div>
        <button onClick={decrementMonth}>&lt;</button>
        <button onClick={incrementMonth}>&gt;</button>
      </div>
      <div className="calendar-days">
        <div className="day-label">Sun</div>
        <div className="day-label">Mon</div>
        <div className="day-label">Tue</div>
        <div className="day-label">Wed</div>
        <div className="day-label">Thu</div>
        <div className="day-label">Fri</div>
        <div className="day-label">Sat</div>
        {renderCalendar()}
      </div>
    </div>
  );
};

const FULL: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default CommonCalendar;
