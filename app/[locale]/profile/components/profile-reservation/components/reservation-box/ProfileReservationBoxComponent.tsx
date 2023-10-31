import ButtonComponent from "@/app/[locale]/components/button/ButtonComponent";
import styles from "./ProfileReservationBoxComponent.module.scss";
import { useTranslations } from "next-intl";
import getStadium from "@/lib/getStadium";
import { useEffect, useState } from "react";

interface ProfileReservationBoxComponentProps {
  reservation: ReservationMongo;
  deleteReservation: (id: string) => void;
}

const ProfileReservationBoxComponent: React.FC<
  ProfileReservationBoxComponentProps
> = ({ reservation, deleteReservation }) => {
  const t = useTranslations("Index");
  const [stadiumName, setStadiumName] = useState<string>("");

  const getStadiumName = async (id: string) => {
    const stadium: Stadium = await getStadium(id);
    setStadiumName(stadium.name);
  };

  useEffect(() => {
    getStadiumName(reservation.stadiumId);
  }, []);

  return (
    <div className={styles.reservation_box}>
      <div className={styles.reservation_box__description}>
        <p>{reservation.startDate}</p>
        <span>-</span>
        <p>{reservation.time}</p>
        <span>-</span>
        <p>{stadiumName}</p>
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
