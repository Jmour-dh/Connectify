import React from "react";
import BackgroundVideo from "./components/BackgroundVideo/BackgroundVideo";
import Bienvenue from "./components/Bienvenue/Bienvenue";
import Actualite from "./components/Actualite/Actualite";
import Nous from "./components/Nous/Nous";
import Contacter from "./components/Contacter/Contacter";
import Newsletter from "./components/Newsletter/Newsletter";

function HomePage() {
  return (
    <>
      <BackgroundVideo />
      <Bienvenue />
      <Actualite />
      <Nous/>
      <Contacter/>
      <Newsletter/>
    </>
  );
}

export default HomePage;
