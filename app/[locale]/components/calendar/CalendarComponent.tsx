"use client";
import { useEffect, useState } from "react";
import styles from "./CalendarComponent.module.scss";
import Calendar from "react-calendar";
import "./calendar.scss";
import getAvailableTimes from "@/lib/getAvailableTime";
import formatDate from "@/app/util/formatDate";
import CircularProgressBar from "../circular-progress/CircularProgressBar";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

interface CalendarComponentProps {
  stadiumReservation: Reservation;
  stadionId: string;
  submitReservation: (date: string, time: string) => void;
}

const CalendarComponent: React.FC<CalendarComponentProps> = ({
  stadiumReservation,
  stadionId,
  submitReservation,
}) => {
  const [date, setDate] = useState(new Date());
  const [availableTime, setAvailableTime] = useState<null | string[]>(null);
  const [isLoading, setIsLoading] = useState(false);

  const onChange = (value: Value) => {
    let date = value as Date;
    setDate(date);
  };

  useEffect(() => {
    setIsLoading(true);
    const getTimes = async () => {
      const data = await getAvailableTimes(stadionId, formatDate(date));
      setAvailableTime(data);
      setIsLoading(false);
    };
    getTimes();
  }, [date]);

  return (
    <div className={styles.calendar_component}>
      <Calendar
        onChange={onChange}
        value={date}
        minDate={new Date()}
        view="month"
      />
      <div className={styles.calendar_times}>
        {isLoading && <CircularProgressBar />}
        {!availableTime && <h3>No available time!</h3>}
        {!isLoading &&
          availableTime &&
          availableTime.map((time, index) => {
            const isActive =
              formatDate(date) === stadiumReservation.startDate &&
              time === stadiumReservation.time;
            return (
              <AvailableTimeComponent
                time={time}
                key={index}
                isActive={isActive}
                submitReservation={() => {
                  submitReservation(formatDate(date), time);
                }}
              />
            );
          })}
      </div>
    </div>
  );
};

interface AvailableTimeComponentProps {
  time: string;
  isActive: boolean;
  submitReservation: () => void;
}

const AvailableTimeComponent: React.FC<AvailableTimeComponentProps> = ({
  time,
  isActive,
  submitReservation,
}) => {
  return (
    <div
      className={`${styles.time_component} ${
        isActive ? styles.time_component_active : ""
      }`}
      onClick={submitReservation}
    >
      <h3>{time}</h3>
    </div>
  );
};

export default CalendarComponent;
