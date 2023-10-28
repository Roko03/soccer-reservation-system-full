import { use, useState } from "react";
import styles from "./ProfileDescriptionComponent.module.scss";
import Image from "next/image";
import { useTranslations } from "next-intl";
import updateUser from "@/lib/updateUser";

interface ProfileDescriptionComponentProps {
  user: UserData;
}

const ProfileDescriptionComponent: React.FC<
  ProfileDescriptionComponentProps
> = ({ user }) => {
  const t = useTranslations("Index");
  const [isEdit, setIsEdit] = useState(false);
  const [userEdit, setUserEdit] = useState({
    id: user.id,
    username: user.username,
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const data = {
      ...userEdit,
      [name]: value,
    };

    setUserEdit(data);
  };

  const confirmChange = async () => {
    if (user.username !== userEdit.username) {
      const response = await updateUser(userEdit);
    }
    setIsEdit(false);
  };

  return (
    <aside className={styles.profile_description}>
      <h1>{t("profilTitle")}</h1>
      <div className={styles.profile_image}>
        <Image src={"/profile.svg"} alt="profil" fill />
      </div>
      <div className={styles.username_container}>
        <h3>{t("username")}:</h3>
        <div className={styles.profile_username}>
          {!isEdit ? (
            <>
              <p>{userEdit.username}</p>
              <Image
                src={"/pencil.svg"}
                width={18}
                height={18}
                alt="pencil"
                onClick={() => setIsEdit(true)}
              />
            </>
          ) : (
            <>
              <input
                value={userEdit.username}
                name={"username"}
                onChange={onChange}
                className={styles.username_input}
              />
              <Image
                src={"/check.svg"}
                width={18}
                height={18}
                alt="check"
                onClick={confirmChange}
              />
            </>
          )}
        </div>
      </div>
      <div className={styles.email_container}>
        <h3>Email:</h3>
        <p>{user.email}</p>
      </div>
    </aside>
  );
};

export default ProfileDescriptionComponent;
