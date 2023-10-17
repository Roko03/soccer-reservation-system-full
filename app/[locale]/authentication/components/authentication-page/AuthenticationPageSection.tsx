"use client";
import styles from "./AuthenticationPageSections.module.scss";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useState } from "react";
import LoginFormComponent from "@/app/[locale]/components/login-form/LoginFormComponent";
import AuthenticationModalComponent from "../authentication-modal/AuthenticationModalComponent";
import SnackBarComponent from "@/app/[locale]/components/snack-bar/SnackBarComponent";

const AuthenticationPageSection = () => {
  const t = useTranslations("Index");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [failedLogin, setFailedLogin] = useState(false);

  const closeDialog = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section className={styles.landing_section}>
        <Image
          src={"/background.jpg"}
          alt="background-image"
          fill
          className={styles.landing_section__background}
        />
        <div className={styles.landing_section__filter}></div>
        <h3>{t("title")}</h3>
        <LoginFormComponent
          setIsModalOpen={() => setIsModalOpen(true)}
          setFailedLogin={() => setFailedLogin(true)}
        />
      </section>
      {isModalOpen && (
        <AuthenticationModalComponent closeDialog={closeDialog} />
      )}
      {failedLogin && (
        <SnackBarComponent
          variant={"error"}
          onClick={() => setFailedLogin(false)}
        >
          <p>{t("loginError")}</p>
        </SnackBarComponent>
      )}
    </>
  );
};

export default AuthenticationPageSection;
