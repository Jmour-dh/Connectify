import React from "react";
import styles from "./Contact.module.scss";
import imgContact from "../../assets/images/contact.jpg";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { createContact} from "../../apis/contacts.js";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  const validationSchema = yup.object({
    sujet: yup
      .string()
      .required("Il faut préciser votre nom")
      .min(2, "Un vrai nom"),
    email: yup
      .string()
      .required("Il faut préciser votre email")
      .email("L'email n'est pas valide"),
    msg: yup
      .string()
      .required("Il faut préciser votre message")
      .min(6, "Il faut un message explicatif")
      .max(100, "Il faut un message de 100 caractères"),
  });
  const initialValues = {
    email: "",
    sujet: "",
    msg: "",
  };

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    setError,
    clearErrors,
  } = useForm({
    initialValues,
    resolver: yupResolver(validationSchema),
  });

  const submit = handleSubmit(async (contact) => {
    try {
      clearErrors();
      await createContact(contact);
      navigate("/profile");
    } catch (message) {
      setError("generic", { type: "generic", message });
    }
  });
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
          <form
            onSubmit={submit}
            className={`${styles.form} d-flex flex-column  p-20`}
          >
            <div className="mb-10 d-flex flex-column">
              <label htmlFor="email" className="mb-10">
                Email :
              </label>
              <input
                id="email"
                type="text"
                name="email"
                placeholder="Entrez votre mail..."
                {...register("email")}
              />
              {errors.email && (
                <p className="form-error">{errors.email.message}</p>
              )}
            </div>
            <div className="mb-10 d-flex flex-column">
              <label htmlFor="sujet" className="mb-10">
                Sujet :
              </label>
              <input
                id="sujet"
                type="text"
                name="sujet"
                placeholder="Sujet de votre message..."
                {...register("sujet")}
              />
              {errors.sujet && (
                <p className="form-error">{errors.sujet.message}</p>
              )}
            </div>
            <div className="mb-10 d-flex flex-column">
              <label htmlFor="message" className="mb-10">
                Message :
              </label>
              <textarea
                id="msg"
                type="text"
                name="msg"
                placeholder="Ecrivez votre message..."
                {...register("msg")}
              />
              {errors.msg && (
                <p className="form-error">{errors.msg.message}</p>
              )}
            </div>
            {errors.generic && (
              <div className="mb-10">
                <p className="form-error">{errors.generic.message}</p>
              </div>
            )}
            <div className="d-flex justify-content-center ">
              <button
                disabled={isSubmitting}
                className="btn btn-secondary m-20"
              >
                Valider
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
