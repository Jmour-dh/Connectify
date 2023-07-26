import React from "react";
import BackgroundVideo from "./components/BackgroundVideo/BackgroundVideo";
import Bienvenue from "./components/Bienvenue/Bienvenue";
import Actualite from "./components/Actualite/Actualite";
import Nous from "./components/Nous/Nous";

function HomePage() {
  return (
    <>
      <BackgroundVideo />
      <Bienvenue />
      <Actualite />
      <Nous/>
    </>
  );
}

export default HomePage;
