import React from "react";
import ArticleCard from "../../components/ArticleCard";
import { homepage } from "../../constants";

function Articles() {
  return (
    <section className="section-container grid lg:grid-cols-4 lg:gap-[1rem] md:grid-cols-2 md:gap-[2rem] px-10 py-5">
      {homepage.articles.map((article, index) => (
        <ArticleCard
          key={index}
          title={article.title}
          description={article.description}
          author={article.author}
          date={article.date}
        />
      ))}
    </section>
  );
}

export default Articles;
