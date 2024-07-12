import Image from "next/image";
import styles from "./page.module.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

<meta name="viewport" content="initial-scale=1, width=device-width" />

import Cards from '../components/cards/cards';
import Banner from "../components/banner/banner";

 
export default function Home() {

  return (
    <>
      <Banner />
      <main className={styles.main}>
        <Cards />
      </main>
    </>

  );
}
