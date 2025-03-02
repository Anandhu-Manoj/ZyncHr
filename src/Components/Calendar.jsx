// filepath: /D:/Mern/REACT/ZyncHR/zynchr/src/Components/Calendar.jsx
import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

const CalendarView = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Calendar View</h1>
      <Calendar onChange={onChange} value={date} />
    </div>
  );
};

export default CalendarView;