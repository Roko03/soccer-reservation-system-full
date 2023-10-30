"use client";
import { useEffect, useState } from "react";
import HeaderComponent from "../../../components/header/HeaderComponent";
import ProfileDescriptionComponent from "../profile-description/ProfileDescriptionComponent";
import ProfileReservationComponent from "../profile-reservation/ProfileReservationComponent";
import styles from "./ProfilePageSection.module.scss";
import getUser from "@/lib/getUser";
import parseJWT from "@/app/util/parseJWT";
import CircularProgressBar from "@/app/[locale]/components/circular-progress/CircularProgressBar";

const ProfilePageSection = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const { user } = await getUser();
      const parsedUser = parseJWT(user);
      setUserData(parsedUser);
      setIsLoading(false);
    })();
  }, []);

  if (userData == null)
    return (
      <>
        <HeaderComponent />
        <p>No data!</p>
      </>
    );

  if (isLoading)
    return (
      <>
        <HeaderComponent />
        <CircularProgressBar />
      </>
    );

  return (
    <>
      <HeaderComponent />
      <section className={styles.profile_container}>
        <ProfileDescriptionComponent user={userData} />
        <ProfileReservationComponent userId={userData.id} />
      </section>
    </>
  );
};

export default ProfilePageSection;
