import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>NUMBLE:: Coupang clone API</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Coupang clone API</h1>
      </main>
    </div>
  );
};

export default Home;
