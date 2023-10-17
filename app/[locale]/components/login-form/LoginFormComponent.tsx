import { useTranslations } from "next-intl";
import styles from "./LoginFormComponent.module.scss";
import ButtonComponent from "../button/ButtonComponent";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import loginUser from "@/lib/loginUser";
import { useRouter } from "next/navigation";
import getUserForLogin from "@/lib/getUserForLogin";

interface LoginFormComponentProps {
  setIsModalOpen: () => void;
  setFailedLogin: () => void;
}

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(10),
});

type LoginSchema = z.infer<typeof loginSchema>;

const LoginFormComponent: React.FC<LoginFormComponentProps> = ({
  setIsModalOpen,
  setFailedLogin,
}) => {
  const route = useRouter();
  const t = useTranslations("Index");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LoginSchema>({ resolver: zodResolver(loginSchema) });

  const onSubmit: SubmitHandler<LoginData> = async (data) => {
    const resposne = await getUserForLogin(data);
    if (!resposne) {
      setFailedLogin();
      reset();
      return;
    }
    const { token } = resposne;

    const dataLogin = await loginUser(token);

    if (dataLogin) {
      route.push("/");
    }

    reset();
  };

  return (
    <form className={styles.login_form} onSubmit={handleSubmit(onSubmit)}>
      <h3>{t("loginTitle")}</h3>
      <input type="text" placeholder="Email" {...register("email")} />
      {errors.email && (
        <p className={styles.error}>{`${errors.email.message}`}</p>
      )}
      <input
        type="password"
        placeholder={t("password")}
        {...register("password")}
      />
      {errors.password && (
        <p className={styles.error}>{`${errors.password.message}`}</p>
      )}
      <ButtonComponent variant={"authentication"} isEnable={isSubmitting}>
        <p>{t("login")}</p>
      </ButtonComponent>
      <p className={styles.create_account} onClick={setIsModalOpen}>
        {t("createNewAccount")}
      </p>
    </form>
  );
};

export default LoginFormComponent;
