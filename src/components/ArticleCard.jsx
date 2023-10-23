import React from "react";
import { images } from "../constants";
import { IconCheck } from "@tabler/icons-react";

function ArticleCard({ title, description, author, date }) {
  return (
    <div className="flex flex-col shadow-md mt-[1rem] rounded-lg">
      <img src={images.PostImage} alt="post-image" />
      <div className="px-[2rem] mt-[1rem]">
        <h2 className="text-dark-soft">{title}</h2>
        <p className="text-dark-light">{description}</p>
        <button className="text-primary">Read More</button>
      </div>
      <div className="mt-[1rem] flex flex-row justify-between p-[2rem] items-center">
        <div className="flex flex-row items-center gap-[1rem]">
          <div>
            <img src={images.ProfilePhoto} alt="" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold italic text-dark-soft">{author}</span>
            <span className="flex flex-row gap-1 items-center text-dark-light italic">
              <IconCheck className="bg-success/20 text-success rounded-full p-[.2rem]" />
              Verifed Writer
            </span>
          </div>
        </div>
        <div className="font-bold text-dark-light italic">{date}</div>
      </div>
    </div>
  );
}

export default ArticleCard;
