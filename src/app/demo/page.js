import React, { Suspense } from "react";
import styles from "../page.module.css";
import User from "../User";
import Categories from "../Categories";

const DemoPage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Suspense fallback={<p>Chargement des utilisateurs ...</p>}>
          <User />
        </Suspense>
        <Suspense fallback={<p>Chargement des catégories ...</p>}>
          <Categories />
        </Suspense>
      </div>
    </main>
  );
};

export default DemoPage;
