import styles from "./page.module.css";

export default async function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Rendu statique pour les segments dynamiques</h1>
      </div>
    </main>
  );
}
