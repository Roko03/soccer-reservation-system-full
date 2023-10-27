import { useTranslations } from "next-intl";
import styles from "./ProfileReservationComponent.module.scss";
import ProfilReservationListComponent from "./components/reservation-list/ProfilReservationListComponent";

const ProfileReservationComponent = () => {
  const t = useTranslations("Index");
  return (
    <div className={styles.profile_reservation}>
      <h1>{t("reservationTitle")}</h1>
      <ProfilReservationListComponent />
    </div>
  );
};

export default ProfileReservationComponent;
