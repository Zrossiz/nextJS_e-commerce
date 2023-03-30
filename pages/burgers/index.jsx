import React from "react";
import Link from "next/link";
import styles from "../../styles/Burgers.module.css";
import Image from "next/image";

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/items");
  const data = await res.json();
  return {
    props: { burgers: data },
  };
};

const Burgers = ({ burgers }) => {
  return (
    <div>
      <h1>Наши бургеры</h1>
      {burgers &&
        burgers.map((item, index) => {
          return (
            <Link
              href={`/burgers/${item.id}`}
              key={item.id}
              className={styles.burgerCard}
            >
              <div>
                <Image
                  className={styles.imageContainer}
                  src={item.image}
                  alt="Картинка"
                  width={200}
                  height={200}
                />
              </div>
              <div>{item.name}</div>
              <div>{item.desc}</div>
              <div>{item.price}</div>
            </Link>
          );
        })}
    </div>
  );
};

export default Burgers;
