import { useTranslations } from "next-intl";
import styles from "./StadiumDescription.module.scss";
import CalendarComponent from "../../../calendar/CalendarComponent";

interface StadiumDescriptionProps {
  stadiumReservation: Reservation;
  stadionId: string;
  submitReservation: (date: string, time: string) => void;
  setStadiumReservation: (value: Reservation) => void;
}

const StadiumDescription: React.FC<StadiumDescriptionProps> = ({
  stadiumReservation,
  stadionId,
  submitReservation,
  setStadiumReservation,
}) => {
  const t = useTranslations("Index");

  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const data = {
      ...stadiumReservation,
      [name]: value,
    };

    setStadiumReservation(data);
  };

  return (
    <>
      <div className={styles.contact_container}>
        <h2>{t("contactTitle")}</h2>
        <input
          type="tel"
          name={"phoneNumber"}
          placeholder="Enter your phone number"
          value={
            stadiumReservation.phoneNumber === 0
              ? ""
              : stadiumReservation.phoneNumber
          }
          onChange={onValueChange}
        />
      </div>
      <h3>{t("availableTitle")}</h3>
      <CalendarComponent
        stadionId={stadionId}
        stadiumReservation={stadiumReservation}
        submitReservation={submitReservation}
      />
    </>
  );
};

export default StadiumDescription;
