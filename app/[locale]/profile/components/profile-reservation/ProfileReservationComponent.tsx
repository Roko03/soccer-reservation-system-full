import { useTranslations } from "next-intl";
import styles from "./ProfileReservationComponent.module.scss";
import ProfilReservationListComponent from "./components/reservation-list/ProfilReservationListComponent";

interface ProfileReservationComponentProps {
  userId: string;
}

const ProfileReservationComponent: React.FC<
  ProfileReservationComponentProps
> = ({ userId }) => {
  const t = useTranslations("Index");
  return (
    <div className={styles.profile_reservation}>
      <h1>{t("reservationTitle")}</h1>
      <ProfilReservationListComponent userId={userId} />
    </div>
  );
};

export default ProfileReservationComponent;
