import styles from "./page.module.css";
import Link from "next/link";

export default async function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Rendu progressif : Streaming</h1>
        <Link href="/demo">Page de démo</Link>
      </div>
    </main>
  );
}
