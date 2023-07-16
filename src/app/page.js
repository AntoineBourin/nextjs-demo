import styles from "./page.module.css";

export const metadata = {
  title: "Bienvenue sur mon shop",
  description: "Pensez à parcourir nos 15 catégories !",
  openGraph: {
    images: [{ url: "/og" }],
  },
};

export default async function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Mon super shop</h1>
      </div>
    </main>
  );
}
