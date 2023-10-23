import React from "react";
import ArticleCard from "../../components/ArticleCard";
import { homepage } from "../../constants";
import { IconArrowRight } from "@tabler/icons-react";

function Articles() {
  return (
    <section className="flex flex-col">
      <div className="section-container grid lg:grid-cols-4 lg:gap-[1rem] md:grid-cols-2 md:gap-[2rem] px-10 py-5">
        {homepage.articles.map((article, index) => (
          <ArticleCard
            key={index}
            title={article.title}
            description={article.description}
            author={article.author}
            date={article.date}
          />
        ))}
      </div>

      <button className="mt-[1rem] px-[1rem] py-[.5rem] border-2 border-solid border-primary rounded-full text-primary font-bold flex flex-row items-center mx-auto hover:bg-primary hover:text-white transition-all ease-in-out duration-200">
        <span>More Articles</span>
        <IconArrowRight className="ml-[.5rem]" />
      </button>
    </section>
  );
}

export default Articles;
