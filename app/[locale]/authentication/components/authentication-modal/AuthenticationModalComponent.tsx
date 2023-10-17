"use client";
import { useTranslations } from "next-intl";
import styles from "./AuthenticationModalComponent.module.scss";
import Image from "next/image";
import DialogComponent from "@/app/[locale]/components/dialog/DialogComponent";
import RegistrationForm from "@/app/[locale]/components/registration-form/RegistrationForm";
import { useState } from "react";
import SnackBarComponent from "@/app/[locale]/components/snack-bar/SnackBarComponent";

interface AuthenticationModalComponentProps {
  closeDialog: () => void;
}

const AuthenticationModalComponent: React.FC<
  AuthenticationModalComponentProps
> = ({ closeDialog }) => {
  const t = useTranslations("Index");
  const [successful, setSuccessful] = useState(false);
  const [error, setError] = useState(false);

  return (
    <>
      <DialogComponent closeDialog={closeDialog}>
        <div className={styles.authentication_modal}>
          <Image
            src={"/close.svg"}
            alt="close"
            width={36}
            height={36}
            className={styles.close_button}
            onClick={closeDialog}
          />
          <h2>{t("registerTitle")}</h2>
          <RegistrationForm
            setSuccessful={(value: boolean) => setSuccessful(value)}
            setError={(value: boolean) => setError(value)}
          />
        </div>
      </DialogComponent>
      {successful && (
        <SnackBarComponent
          onClick={() => setSuccessful(false)}
          variant={"successful"}
        >
          {<p>{t("successfulRegisterMessage")}</p>}
        </SnackBarComponent>
      )}
      {error && (
        <SnackBarComponent onClick={() => setError(false)} variant={"error"}>
          {<p>{t("errorRegisterMessage")}</p>}
        </SnackBarComponent>
      )}
    </>
  );
};

export default AuthenticationModalComponent;
