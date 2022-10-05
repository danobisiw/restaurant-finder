import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";
import MenuList from "../components/MenuList";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>PD DIRECT</title>
        <meta name="description" content="Restaurant Finder" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <MenuList/>
    </div>
  );
}
