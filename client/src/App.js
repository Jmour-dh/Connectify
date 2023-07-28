import React, { Suspense } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import styles from "./App.module.scss";
import { Outlet } from "react-router-dom";

import AuthProvider from './components/AuthProvider/AuthProvider';

function App() {
  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <AuthProvider>
      <Header />
      <Suspense>
      <Outlet/>
      </Suspense>
      <Footer />
      </AuthProvider>
      
    </div>
  );
}

export default App;
