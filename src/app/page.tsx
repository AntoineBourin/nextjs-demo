import styles from "./page.module.css";

export default async function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Types inhérents à Next.js</h1>
      </div>
    </main>
  );
}
