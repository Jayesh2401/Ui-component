import React, { useState, useRef, forwardRef } from "react";
import DatePicker from "../Components/DatePicker";
import { addBusinessDays, subBusinessDays } from "date-fns";

function Datepicker() {
  const defaultDate = new Date();
  const calRef = useRef(null);

  const [selectedDate, setSelectedDate] = useState<Date | null>(defaultDate);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const ExampleCustomInputs = forwardRef<HTMLButtonElement, any>(
    ({ value, onClick }, ref) => (
      <button className="example-custom-inputs" onClick={onClick} ref={ref}>
        <span style={{ marginRight: "10px" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            id="SvgjsSvg1055"
            width="20"
            height="20"
            version="1.1"
          >
            <defs id="SvgjsDefs1056" />
            <g id="SvgjsG1057">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 22"
                width="20"
                height="20"
              >
                <g
                  fill="none"
                  fillRule="evenodd"
                  stroke="#000000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  transform="translate(1 1)"
                  className="colorStroke000 svgStroke"
                >
                  <rect
                    width="18"
                    height="18"
                    y="2"
                    rx="2"
                    fill="#ffffff"
                    className="color000 svgShape"
                  />
                  <path
                    d="M13 0v4M5 0v4M0 8h18"
                    fill="#ffffff"
                    className="color000 svgShape"
                  />
                </g>
              </svg>
            </g>
          </svg>
        </span>
        {value}
      </button>
    )
  );

  const highlightWithRanges = [
    {
      "react-datepicker__day--highlighted-custom-1": [
        subBusinessDays(new Date(), 3),
      ],
    },
    {
      "react-datepicker__day--highlighted-event": [
        new Date(2023, 9, 15),
        new Date(2023, 9, 26),
      ],
    },
  ];

  return (
    <div>
      <h1>Datepicker</h1>
      <div style={{}}>
        <DatePicker
          customRef={calRef}
          selectedDate={selectedDate}
          onChange={handleDateChange}
          isClearable={false}
          minYear={2000}
          maxYear={2025}
          inline={false}
          dateFormat="MMMM d, yyyy"
          placeholderText="Select a Date"
          shouldCloseOnSelect={false}
          highlightDates={highlightWithRanges}
          customInputsComponent={<ExampleCustomInputs />}
          customHeader={true}
        />
      </div>
    </div>
  );
}

export default Datepicker;
