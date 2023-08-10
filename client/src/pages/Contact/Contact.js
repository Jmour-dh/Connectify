import React from 'react'
import styles from './Contact.module.scss'
import imgContact from "../../assets/images/contact.jpg";

function Contact() {
  return (
    <div className={`${styles.contact}`}>
      <div className={styles.image}>
        <img src={imgContact} alt="actualite" />
      </div>
      <div className={styles.act}>
        <div className={styles.title}>
          <h2>Nous Contacter</h2>
        </div>
        <div className={`${styles.content} d-flex flex-column`}>
          <form action="" className={`${styles.form} d-flex flex-column  p-20`}>
            <div className="mb-10 d-flex flex-column">
              <label htmlFor="email" className="mb-10">
                Email :
              </label>
              <input
                type="text"
                name="email"
                placeholder="Entrez votre mail..."
              />
            </div>
            <div className="mb-10 d-flex flex-column">
              <label htmlFor="sujet" className="mb-10">
                Sujet :
              </label>
              <input
                type="text"
                name="sujet"
                placeholder="Sujet de votre message..."
              />
            </div>
            <div className="mb-10 d-flex flex-column">
              <label htmlFor="message" className="mb-10">
                Message :
              </label>
              <textarea
                type="text"
                name="sujet"
                placeholder="Ecrivez votre message..."
              />
            </div>
            <div className="d-flex justify-content-center ">
              <button className="btn btn-secondary m-20">Valider</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
