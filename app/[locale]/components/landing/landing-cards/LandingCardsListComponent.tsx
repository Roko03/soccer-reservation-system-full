import styles from "./LandingCardsListComponent.module.scss";
import LandingCardComponent from "./landing-card/LandingCardComponent";

interface LandingCardsListComponentProps {
  stadiums: Stadium[];
  setOpenModal: (id: string) => void;
}

const LandingCardsListComponent: React.FC<LandingCardsListComponentProps> = ({
  stadiums,
  setOpenModal,
}) => {
  return (
    <div className={styles.landing_cards_list}>
      {stadiums.map((stadium, index) => {
        return (
          <LandingCardComponent
            stadium={stadium}
            key={index}
            setOpenModal={setOpenModal}
          />
        );
      })}
    </div>
  );
};

export default LandingCardsListComponent;
