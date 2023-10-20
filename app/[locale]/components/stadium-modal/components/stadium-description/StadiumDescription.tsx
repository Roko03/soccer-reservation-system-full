import { useTranslations } from "next-intl";
import styles from "./StadiumDescription.module.scss";
import CalendarComponent from "../../../calendar/CalendarComponent";

interface StadiumDescriptionProps {}

const StadiumDescription: React.FC<StadiumDescriptionProps> = ({}) => {
  const t = useTranslations("Index");
  return (
    <>
      <h3>{t("availableTitle")}</h3>
      <CalendarComponent />
    </>
  );
};

export default StadiumDescription;
