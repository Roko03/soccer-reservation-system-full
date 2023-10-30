import { useEffect, useState } from "react";
import ProfileReservationBoxComponent from "../reservation-box/ProfileReservationBoxComponent";
import styles from "./ProfilReservationListComponent.module.scss";
import getUserReservation from "@/lib/getUserReservation";
import CircularProgressBar from "@/app/[locale]/components/circular-progress/CircularProgressBar";

interface ProfilReservationListComponentProps {
  userId: string;
}

const ProfilReservationListComponent: React.FC<
  ProfilReservationListComponentProps
> = ({ userId }) => {
  const [reservationArray, setReservationArray] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const reservationData = await getUserReservation(userId);
      setReservationArray(reservationData);
      setIsLoading(false);
    })();
  }, []);

  if (isLoading) return <CircularProgressBar />;

  return (
    <div className={styles.reservation_list}>
      {reservationArray.map((reservation, index) => {
        return (
          <ProfileReservationBoxComponent
            key={index}
            reservation={reservation}
          />
        );
      })}
    </div>
  );
};

export default ProfilReservationListComponent;
