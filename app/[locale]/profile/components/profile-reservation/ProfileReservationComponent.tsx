import { useTranslations } from "next-intl";
import styles from "./ProfileReservationComponent.module.scss";

const ProfileReservationComponent = () => {
  const t = useTranslations("Index");
  return (
    <div className={styles.profile_reservation}>
      <h1>{t("reservationTitle")}</h1>
    </div>
  );
};

export default ProfileReservationComponent;
