import React from "react";
import MainLayout from "../../components/MainLayout";
import Hero from "./Hero";
import Articles from "./Articles";

function Homepage() {
  return (
    <div>
      <MainLayout>
        <Hero />
        <Articles />
      </MainLayout>
    </div>
  );
}

export default Homepage;
