import { getDictionary } from "@/lib/dictionaries";
import styles from "./page.module.css";

export default async function Home({ params: { lang } }) {
  const dict = await getDictionary(lang);
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>{dict.home.title}</h1>
      </div>
    </main>
  );
}
