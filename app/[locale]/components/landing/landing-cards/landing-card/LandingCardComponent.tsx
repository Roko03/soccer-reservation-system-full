import styles from "./LandingCardComponent.module.scss";
import Image from "next/image";

interface LandingCardComponentProps {
  stadium: Stadium;
}

const LandingCardComponent: React.FC<LandingCardComponentProps> = ({
  stadium,
}) => {
  return (
    <div className={styles.landing_card}>
      <div className={styles.landing_card__description}>
        <h2>{stadium.name}</h2>
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
