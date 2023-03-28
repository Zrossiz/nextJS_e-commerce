import React from "react";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="not-found">
      <h1>Ой...</h1>
      <h2>Такой страницы здесь нет</h2>
      <p>
        Перейти на <Link href="/">главную страницу</Link>
      </p>
    </div>
  );
};

export default NotFoundPage;
