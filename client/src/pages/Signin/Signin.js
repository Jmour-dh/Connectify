import React from "react";
import styles from "./Signin.module.scss";
import imgCnx from "../../assets/images/connexion.jpg";
import { NavLink, Navigate } from "react-router-dom";
import { AuthContext } from "../../context";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function Signin() {
  const { signin, user } = useContext(AuthContext);

  const validationSchema = yup.object({
    email: yup
      .string()
      .required("Il faut préciser votre email")
      .email("l'email n'est pas valide"),
    password: yup
      .string()
      .required("Il faut préciser votre mot de passe")
      .min(6, "Mot de passe trop court"),
  });

  const initialValues = {
    email: "",
    password: "",
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

  const submit = handleSubmit(async (credentials) => {
    try {
      clearErrors();
      await signin(credentials);
    } catch (message) {
      setError("generic", { type: "generic", message });
    }
  });
  return (
    <>
      {user ? (
        <Navigate to="/profile" />
      ) : (
        <div className={`${styles.signin} d-flex justify-content-center`}>
          <div className={styles.image}>
            <img src={imgCnx} alt="connexion" />
          </div>
          <div className={styles.act}>
            <div className={styles.title}>
              <h2>Connexion</h2>
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
                  <label htmlFor="password" className="mb-10">
                    Mot de passe :
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Entrez votre mot de passe..."
                    {...register("password")}
                  />
                  {errors.password && (
                    <p className="form-error">{errors.password.message}</p>
                  )}
                </div>
                {errors.generic && (
                  <div className="mb-10">
                    <p className="form-error">{errors.generic.message}</p>
                  </div>
                )}
                <div className="d-flex justify-content-center ">
                  <button disabled={isSubmitting} className="btn btn-secondary m-20">
                    Se Connecter
                  </button>
                </div>
              </form>
            </div>
            <div className="p-30">
              <p>
                Pas de compte ?{" "}
                <NavLink className={styles.linkIns} to="/signup">
                  Inscrivez-vous
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Signin;
