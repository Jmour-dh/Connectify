import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import BackgroundVideo from "./components/HomePage/BackgroundVideo";
import Bienvenue from "./components/HomePage/Bienvenue";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <Header />
      <BackgroundVideo />
      <Bienvenue />
      <Footer />
    </div>
  );
}

export default App;
