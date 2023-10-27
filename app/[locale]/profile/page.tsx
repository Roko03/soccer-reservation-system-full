import styles from "./page.module.scss";
import ProfilePageSection from "./components/profile-page/ProfilePageSection";

export default async function Profile() {
  return (
    <main className={styles.main}>
      <ProfilePageSection />
    </main>
  );
}
