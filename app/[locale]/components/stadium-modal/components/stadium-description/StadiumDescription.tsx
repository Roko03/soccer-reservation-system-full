import { useTranslations } from "next-intl";
import styles from "./StadiumDescription.module.scss";
import CalendarComponent from "../../../calendar/CalendarComponent";

interface StadiumDescriptionProps {
  stadiumReservation: Reservation;
  stadionId: string;
  submitReservation: (date: string, time: string) => void;
}

const StadiumDescription: React.FC<StadiumDescriptionProps> = ({
  stadiumReservation,
  stadionId,
  submitReservation,
}) => {
  const t = useTranslations("Index");
  return (
    <>
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
