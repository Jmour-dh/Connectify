import React from "react";
import BackgroundVideo from "./components/BackgroundVideo/BackgroundVideo";
import Bienvenue from "./components/Bienvenue/Bienvenue";
import Actualite from "./components/Actualite/Actualite";

function HomePage() {
  return (
    <>
      <BackgroundVideo />
      <Bienvenue />
      <Actualite />
    </>
  );
}

export default HomePage;
