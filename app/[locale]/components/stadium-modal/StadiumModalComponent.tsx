import styles from "./StadiumModalComponent.module.scss";
import Image from "next/image";
import StadiumDescription from "./components/stadium-description/StadiumDescription";
import { useEffect, useState } from "react";
import CircularProgressBar from "../circular-progress/CircularProgressBar";
import ButtonComponent from "../button/ButtonComponent";
import { useTranslations } from "next-intl";

interface StadiumModalComponentProps {
  stadiumId: string;
}

const StadiumModalComponent: React.FC<StadiumModalComponentProps> = ({
  stadiumId,
}) => {
  const t = useTranslations("Index");
  const [stadium, setStadium] = useState<Stadium | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [stadiumReservation, setStadiumReservation] = useState<Reservation>({
    name: "",
    phoneNumber: 0,
    startDate: "",
    time: "",
  });

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

  console.log(stadiumReservation);

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
          onClick={() => {
            console.log("ej");
          }}
        >
          <p>{t("reserveButton")}</p>
        </ButtonComponent>
      </div>
    </div>
  );
};

export default StadiumModalComponent;
