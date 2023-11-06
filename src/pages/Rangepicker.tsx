import React, { useState, useRef, forwardRef } from "react";
import DateRangePicker from "../Components/DateRangePicker";
import { subBusinessDays } from "date-fns";

function Rangepicker() {
  const defaultStartDate = new Date();
  const defaultEndDate = new Date();
  defaultEndDate.setDate(defaultEndDate.getDate() + 7);
  const calRef = useRef(null);

  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    defaultStartDate,
    defaultEndDate,
  ]);

  const handleDateChange = (startDate: Date | null, endDate: Date | null) => {
    setDateRange([startDate, endDate]);
  };

  const ExampleCustomInput = forwardRef<HTMLButtonElement, any>(
    ({ value, onClick }, ref) => (
      <button className="example-custom-input" onClick={onClick} ref={ref}>
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
      <h1>Rangepicker</h1>
      <div style={{}}>
        <DateRangePicker
          startDate={dateRange[0]}
          endDate={dateRange[1]}
          onChange={handleDateChange}
          monthsShown={window.innerWidth < 520 ? 1 : 2}
          selectsRange={true}
          dateFormat="MMM d, yyyy"
          placeholderText="Select a Date"
          customRef={calRef}
          highlightDates={highlightWithRanges}
          isClearable={false}
          customInputsComponent={<ExampleCustomInput />}
        />
      </div>
    </div>
  );
}

export default Rangepicker;
