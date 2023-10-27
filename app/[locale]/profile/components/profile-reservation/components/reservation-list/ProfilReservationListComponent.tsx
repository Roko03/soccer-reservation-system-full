import ProfileReservationBoxComponent from "../reservation-box/ProfileReservationBoxComponent";
import styles from "./ProfilReservationListComponent.module.scss";

const ProfilReservationListComponent = () => {
  const array = [1, 2, 3, 4];
  return (
    <div className={styles.reservation_list}>
      {array.map((el, index) => {
        return <ProfileReservationBoxComponent key={index} />;
      })}
    </div>
  );
};

export default ProfilReservationListComponent;
