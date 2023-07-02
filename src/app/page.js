import Link from "next/link";
import Login from "../components/login/Login";
import styles from "./page.module.css";

export default async function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Page de connexion</h1>
        <Login />
        <Link href="/protected">Page protégée</Link>
      </div>
    </main>
  );
}
