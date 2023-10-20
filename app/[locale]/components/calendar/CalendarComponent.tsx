"use client";
import { useState } from "react";
import styles from "./CalendarComponent.module.scss";
import Calendar from "react-calendar";
import "./calendar.scss";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const CalendarComponent = () => {
  const [date, setDate] = useState<Value>(new Date());

  const onChange = (value: Value) => {
    let date = value as Date;
    setDate(date);
  };

  return (
    <div className={styles.calendar_component}>
      <Calendar
        onChange={onChange}
        value={date}
        minDate={new Date()}
        view="month"
      />
    </div>
  );
};

export default CalendarComponent;
