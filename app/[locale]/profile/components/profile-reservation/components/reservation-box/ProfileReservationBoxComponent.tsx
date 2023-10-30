import ButtonComponent from "@/app/[locale]/components/button/ButtonComponent";
import styles from "./ProfileReservationBoxComponent.module.scss";
import { useTranslations } from "next-intl";

interface ProfileReservationBoxComponentProps {
  reservation: ReservationMongo;
  deleteReservation: (id: string) => void;
}

const ProfileReservationBoxComponent: React.FC<
  ProfileReservationBoxComponentProps
> = ({ reservation, deleteReservation }) => {
  const t = useTranslations("Index");
  return (
    <div className={styles.reservation_box}>
      <div className={styles.reservation_box__description}>
        <p>{reservation.startDate}</p>
        <span>-</span>
        <p>{reservation.time}</p>
        <p>{reservation.stadiumId}</p>
      </div>
      <ButtonComponent
        variant={"delete"}
        onClick={() => deleteReservation(reservation._id)}
      >
        <p>{t("delete")}</p>
      </ButtonComponent>
    </div>
  );
};

export default ProfileReservationBoxComponent;
