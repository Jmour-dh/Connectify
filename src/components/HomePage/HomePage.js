import React from "react";
import BackgroundVideo from "./components/BackgroundVideo/BackgroundVideo";
import Bienvenue from "./components/Bienvenue/Bienvenue";
import Actualite from "./components/Actualite/Actualite";
import Nous from "./components/Nous/Nous";
import Contacter from "./components/Contacter/Contacter";

function HomePage() {
  return (
    <>
      <BackgroundVideo />
      <Bienvenue />
      <Actualite />
      <Nous/>
      <Contacter/>
    </>
  );
}

export default HomePage;
