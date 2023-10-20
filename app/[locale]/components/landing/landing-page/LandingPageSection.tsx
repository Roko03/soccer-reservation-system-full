import HeaderComponent from "../../header/HeaderComponent";
import styles from "./LandingPageSection.module.scss";
import LandingCardsListComponent from "../landing-cards/LandingCardsListComponent";

interface LandingPageSectionProps {
  stadiums: Stadium[];
}

const LandingPageSection: React.FC<LandingPageSectionProps> = ({
  stadiums,
}) => {
  return (
    <>
      <HeaderComponent />
      <section className={styles.landing_container}>
        <LandingCardsListComponent stadiums={stadiums} />
      </section>
    </>
  );
};

export default LandingPageSection;
