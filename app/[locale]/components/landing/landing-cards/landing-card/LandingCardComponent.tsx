import styles from "./LandingCardComponent.module.scss";
import Image from "next/image";

interface LandingCardComponentProps {
  stadium: Stadium;
  setOpenModal: (id: string) => void;
}

const LandingCardComponent: React.FC<LandingCardComponentProps> = ({
  stadium,
  setOpenModal,
}) => {
  return (
    <div
      className={styles.landing_card}
      onClick={() => setOpenModal(stadium._id)}
    >
      <div className={styles.landing_card__description}>
        <h3>{stadium.name}</h3>
        <span className={styles.location}>
          <Image src={"/location.svg"} alt="location" width={18} height={18} />
          <p>{stadium.location}</p>
        </span>
      </div>
      <Image
        src={stadium.imageUrl}
        fill
        alt="image"
        className={styles.landing_card__image}
      />
    </div>
  );
};

export default LandingCardComponent;
