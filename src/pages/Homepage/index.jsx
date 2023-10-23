import React from "react";
import MainLayout from "../../components/MainLayout";
import Hero from "./Hero";
import Articles from "./Articles";
import CTA from "./CTA";

function Homepage() {
  return (
    <div>
      <MainLayout>
        <Hero />
        <Articles />
        <CTA />
      </MainLayout>
    </div>
  );
}

export default Homepage;
