import styles from "./page.module.scss";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Index");
  return (
    <main className={styles.main}>
      <h1>Početna</h1>
    </main>
  );
}
