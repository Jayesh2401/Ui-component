import React, { forwardRef, useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../Datepicker.css";
import range from "lodash/range";
import { getMonth, getYear } from "date-fns";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

interface DatePickerProps {
  selectedDate: Date | null;
  onChange: (date: Date | null) => void;
  isClearable?: boolean;
  customInput?: any;
  minYear?: number;
  maxYear?: number;
  inline?: boolean;
  dateFormat?: string;
  placeholderText?: string;
  shouldCloseOnSelect?: boolean;
  highlightDates?: object | any;
  customRef?: any;
  customInputsComponent?: React.ReactElement;
  customHeader?: boolean;
}

const DatePicker: React.FC<DatePickerProps> = ({
  selectedDate,
  onChange,
  isClearable,
  customInput,
  minYear,
  maxYear,
  inline = false,
  dateFormat = "MMMM d, yyyy",
  placeholderText = "Select a Date",
  shouldCloseOnSelect = false,
  highlightDates,
  customRef,
  customInputsComponent,
  customHeader = false,
}) => {
  const defaultStartDate = new Date();
  const handleDateChange = (date: Date | null) => {
    onChange(date);
  };
  const minDate = minYear ? new Date(minYear, 0, 1) : undefined;
  const maxDate = maxYear ? new Date(maxYear, 11, 31) : undefined;
  const years = range(minYear || 1990, (maxYear || getYear(new Date())) + 1, 1);

  const months = [
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

  return (
    <div className="date-picker">
      <ReactDatePicker
        selected={selectedDate}
        ref={customRef}
        shouldCloseOnSelect={shouldCloseOnSelect}
        onChange={handleDateChange}
        dateFormat={dateFormat}
        placeholderText={placeholderText}
        customInput={customInput || customInputsComponent}
        isClearable={isClearable}
        inline={inline}
        minDate={minDate}
        highlightDates={highlightDates}
        maxDate={maxDate}
        renderCustomHeader={
          customHeader
            ? ({
                date,
                changeYear,
                changeMonth,
                decreaseMonth,
                increaseMonth,
                prevMonthButtonDisabled,
                nextMonthButtonDisabled,
              }) => (
                <div
                  style={{
                    margin: 10,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <button
                    onClick={decreaseMonth}
                    disabled={prevMonthButtonDisabled}
                    className="prevButton"
                  >
                    <ChevronUpIcon className="left-arrow" />
                  </button>
                  <div>
                    <select
                      className="custom-months "
                      value={months[getMonth(date)]}
                      onChange={({ target: { value } }) =>
                        changeMonth(months.indexOf(value))
                      }
                    >
                      {months.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <select
                      className="custom-year"
                      value={getYear(date)}
                      onChange={({ target: { value } }) =>
                        changeYear(parseInt(value))
                      }
                    >
                      {years.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button
                    onClick={increaseMonth}
                    disabled={nextMonthButtonDisabled}
                    className="nextButton"
                  >
                    <ChevronUpIcon className="right-arrow" />
                  </button>
                </div>
              )
            : undefined
        }
      >
        <div className="custom-buttonCalender">
          <button
            className="cancel-button"
            onClick={() => {
              if (customRef?.current) {
                handleDateChange(defaultStartDate);
                customRef?.current.setOpen(false);
              }
            }}
          >
            Cancel
          </button>
          <button
            className="apply-button"
            onClick={() => {
              if (customRef?.current) {
                customRef?.current.setOpen(false);
              }
            }}
          >
            Apply
          </button>
        </div>
      </ReactDatePicker>
    </div>
  );
};

export default DatePicker;
