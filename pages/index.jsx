import { Inter } from "next/font/google";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Жирные бургеры | Главная</title>
        <meta name="title" content="Жирные бургеры" />
      </Head>
      <div className={styles.container}>
        <h1 className={`${styles.title}`}>Главная</h1>
        <div className={styles.mainImage}>
          <Image src="/fatburger.png" width={400} height={300} alt="213" />
        </div>
        <p className={styles.text}>
          Что такое идеальный бургер? Лист свежего салата, мягкие булочки,
          сочное мясо. О других составляющих начинки можно поспорить, ведь это
          дело вкуса.
        </p>
        <p className={styles.text}>
          Есть ещё пара-тройка факторов, влияющих на аппетит: цены, качество
          обслуживания, правильная атмосфера заведения.
        </p>
        <Link href="burgers" className={styles.btn}>
          Все бургеры
        </Link>
      </div>
    </>
  );
}
