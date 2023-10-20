import styles from "./LandingCardsListComponent.module.scss";
import LandingCardComponent from "./landing-card/LandingCardComponent";

interface LandingCardsListComponentProps {
  stadiums: Stadium[];
}

const LandingCardsListComponent: React.FC<LandingCardsListComponentProps> = ({
  stadiums,
}) => {
  return (
    <div className={styles.landing_cards_list}>
      {stadiums.map((stadium, index) => {
        return <LandingCardComponent stadium={stadium} key={index} />;
      })}
    </div>
  );
};

export default LandingCardsListComponent;
