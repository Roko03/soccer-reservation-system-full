"use client";
import HeaderComponent from "../../header/HeaderComponent";
import styles from "./LandingPageSection.module.scss";
import LandingCardsListComponent from "../landing-cards/LandingCardsListComponent";
import DialogComponent from "../../dialog/DialogComponent";
import { use, useEffect, useState } from "react";
import StadiumModalComponent from "../../stadium-modal/StadiumModalComponent";
import getUser from "@/lib/getUser";
import parseJWT from "@/app/util/parseJWT";

interface LandingPageSectionProps {
  stadiums: Stadium[];
}

const LandingPageSection: React.FC<LandingPageSectionProps> = ({
  stadiums,
}) => {
  const [openModal, setOpenModal] = useState({ id: "", open: false });

  const [userData, setUserData] = useState<any | null>(null);

  useEffect(() => {
    (async () => {
      const { user } = await getUser();
      setUserData(parseJWT(user));
    })();
  }, []);

  console.log(userData);

  return (
    <>
      <HeaderComponent />
      <section className={styles.landing_container}>
        <LandingCardsListComponent
          stadiums={stadiums}
          setOpenModal={(id: string) => setOpenModal({ id: id, open: true })}
        />
      </section>
      {openModal.open && (
        <DialogComponent
          closeDialog={() => setOpenModal({ id: "", open: false })}
        >
          <StadiumModalComponent stadiumId={openModal.id} />
        </DialogComponent>
      )}
    </>
  );
};

export default LandingPageSection;
