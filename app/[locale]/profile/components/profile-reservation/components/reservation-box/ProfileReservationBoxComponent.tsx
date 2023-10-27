import ButtonComponent from "@/app/[locale]/components/button/ButtonComponent";
import styles from "./ProfileReservationBoxComponent.module.scss";
import { useTranslations } from "next-intl";

const ProfileReservationBoxComponent = () => {
  const t = useTranslations("Index");
  return (
    <div className={styles.reservation_box}>
      <div className={styles.reservation_box__description}>
        <p>2023-10-27</p>
        <span>-</span>
        <p>17:00</p>
      </div>
      <ButtonComponent variant={"delete"}>
        <p>{t("delete")}</p>
      </ButtonComponent>
    </div>
  );
};

export default ProfileReservationBoxComponent;
