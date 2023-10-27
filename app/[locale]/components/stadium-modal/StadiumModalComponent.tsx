import styles from "./StadiumModalComponent.module.scss";
import Image from "next/image";
import StadiumDescription from "./components/stadium-description/StadiumDescription";
import { useEffect, useState } from "react";
import CircularProgressBar from "../circular-progress/CircularProgressBar";
import ButtonComponent from "../button/ButtonComponent";
import { useTranslations } from "next-intl";
import getUser from "@/lib/getUser";
import parseJWT from "@/app/util/parseJWT";
import makeReservation from "@/lib/makeReservation";

interface StadiumModalComponentProps {
  stadiumId: string;
  closeDialog: () => void;
  setFailedLogin: () => void;
}

const StadiumModalComponent: React.FC<StadiumModalComponentProps> = ({
  stadiumId,
  closeDialog,
  setFailedLogin,
}) => {
  const t = useTranslations("Index");
  const [stadium, setStadium] = useState<Stadium | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [stadiumReservation, setStadiumReservation] = useState<Reservation>({
    name: "",
    userId: "",
    phoneNumber: 0,
    startDate: "",
    time: "",
  });

  useEffect(() => {
    (async () => {
      const { user } = await getUser();
      const parsedUser = parseJWT(user);
      setStadiumReservation((prev) => ({
        ...prev,
        name: parsedUser.username,
        userId: parsedUser.id,
      }));
    })();
  }, []);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_BACK_BASE_URL}/api/stadium/${stadiumId}`)
      .then((response) => response.json())
      .then((data) => {
        setStadium(data);
        setIsLoading(false);
      });
  }, []);

  const submitReservation = (date: string, time: string) => {
    setStadiumReservation((prev) => ({ ...prev, startDate: date, time: time }));
  };

  const onSubmit = async () => {
    const response = await makeReservation(stadiumId, stadiumReservation);

    if (response == null) {
      setFailedLogin();
      setStadiumReservation((prev) => ({
        ...prev,
        phoneNumber: 0,
        startDate: "",
        time: "",
      }));
      closeDialog();
    } else {
      setStadiumReservation((prev) => ({
        ...prev,
        phoneNumber: 0,
        startDate: "",
        time: "",
      }));
      closeDialog();
    }
  };

  const buttonEnable =
    stadiumReservation.startDate !== "" &&
    stadiumReservation.time !== "" &&
    stadiumReservation.phoneNumber !== 0;

  if (isLoading) return <CircularProgressBar />;
  if (!stadium) return <h1>No data!</h1>;

  return (
    <div className={styles.stadium_modal}>
      <div className={styles.stadium_modal_image_box}>
        <Image
          src={stadium.imageUrl}
          fill
          alt="image"
          className={styles.stadium_modal_image_box__image}
        />
        <div className={styles.stadium_modal_image_box__overlay}></div>
        <h3 className={styles.stadium_modal_image_box__title}>
          {stadium.name}
        </h3>
      </div>
      <div className={styles.stadium_modal__description}>
        <StadiumDescription
          stadiumReservation={stadiumReservation}
          stadionId={stadium._id}
          submitReservation={submitReservation}
          setStadiumReservation={setStadiumReservation}
        />
        <ButtonComponent
          variant={"reserve"}
          onClick={onSubmit}
          isEnable={!buttonEnable}
        >
          <p>{t("reserveButton")}</p>
        </ButtonComponent>
      </div>
    </div>
  );
};

export default StadiumModalComponent;
