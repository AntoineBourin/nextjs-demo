import LoginForm from "@/components/loginForm/LoginForm";
import styles from "./page.module.css";

export default async function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Connectez-vous</h1>
        <LoginForm />
      </div>
    </main>
  );
}
