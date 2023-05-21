import { Suspense } from "react";
import styles from "./page.module.css";
import Parallel from "./Parallel";
import Sequential from "./Sequential";

export default async function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Requêtes parallèles et séquentielles</h1>
        <h2>Rendu avec requêtes parallèles :</h2>
        <Suspense fallback={<p>Chargement ...</p>}>
          <Parallel />
        </Suspense>
        <h2>Rendu avec requêtes séquentielles :</h2>
        <Suspense fallback={<p>Chargement ...</p>}>
          <Sequential />
        </Suspense>
      </div>
    </main>
  );
}
