import styles from "./StadiumModalComponent.module.scss";
import Image from "next/image";
import StadiumDescription from "./components/stadium-description/StadiumDescription";

interface StadiumModalComponentProps {
  stadiumId: string;
}

const StadiumModalComponent: React.FC<StadiumModalComponentProps> = ({
  stadiumId,
}) => {
  return (
    <div className={styles.stadium_modal}>
      <div className={styles.stadium_modal_image_box}>
        <Image
          src={"/background.jpg"}
          fill
          alt="image"
          className={styles.stadium_modal_image_box__image}
        />
        <div className={styles.stadium_modal_image_box__overlay}></div>
        <h3 className={styles.stadium_modal_image_box__title}>Naslov</h3>
      </div>
      <div className={styles.stadium_modal__description}>
        <StadiumDescription />
      </div>
    </div>
  );
};

export default StadiumModalComponent;
