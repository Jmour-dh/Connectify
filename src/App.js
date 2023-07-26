import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import styles from "./App.module.scss";
import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <Header />
      <HomePage/>
      <Footer />
    </div>
  );
}

export default App;
