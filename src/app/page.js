import PostList from "@/components/PostList";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

// https://jsonplaceholder.typicode.com/posts

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Composants serveurs / clients</h1>
        <PostList />
      </div>
    </main>
  );
}
