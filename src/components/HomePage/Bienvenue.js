import React, { useState, useEffect } from 'react';
import videoBienv from "../../assets/videos/video1.mp4";
import styles from "./Bienvenue.module.scss"; // Assurez-vous d'avoir le bon chemin d'importation

const translations = {
  fr: "Bienvenue",
  en: "Welcome",
  es: "Bienvenido",
  de: "Willkommen",
  // Add as many languages as needed
};

const WelcomeComponent = () => {
  const [currentLanguage, setCurrentLanguage] = useState('fr');

  useEffect(() => {
    const intervalId = setInterval(changeLanguage, 1000);
    return () => clearInterval(intervalId);
  });

  const changeLanguage = () => {
    const languages = Object.keys(translations);
    const nextIndex = (languages.indexOf(currentLanguage) + 1) % languages.length;
    const nextLanguage = languages[nextIndex];
    setCurrentLanguage(nextLanguage);
  };

  return (
    <div id="welcome">
      <span id="welcome-text" >
        {translations[currentLanguage]}
      </span>
    </div>
  );
};

function Bienvenue() {
  return (
    <>
      <div className={styles.bienvenue}>
        <div className={styles.backVideo}>
          <div className={styles.content}>
            <WelcomeComponent />
            <p className={styles.comment}>"Harmonisez vos passions, partagez vos émotions avec Connectify !"</p>
          </div>
          <video
            playsInline
            autoPlay
            muted
            loop
            
          >
            <source src={videoBienv} type="video/mp4" />
            {/* Ajoutez des sources supplémentaires pour d'autres formats vidéo, si nécessaire */}
          </video>
        </div>
      </div>
    </>
  );
}

export default Bienvenue;

