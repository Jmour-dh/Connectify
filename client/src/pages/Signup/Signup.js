import React from "react";
import styles from "./Signup.module.scss";
import imgIns from "../../assets/images/inscription.jpg";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { createUser } from "../../apis/users";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const validationSchema = yup.object({
    name: yup
      .string()
      .required("Il faut préciser votre nom")
      .min(2, "Un vrai nom"),
    lName: yup
      .string()
      .required("Il faut préciser votre nom")
      .min(2, "Un vrai nom"),
    email: yup
      .string()
      .required("Il faut préciser votre email")
      .email("L'email n'est pas valide"),
    imgProfile: yup
      .string()
      .required("Il faut renseigner une image")
      .url("L'image doit être un lien valide"),
    gender: yup.string().required("Il faut préciser votre genre"),
    password: yup
      .string()
      .required("Il faut préciser votre mot de passe")
      .min(6, "Mot de passe trop court"),
    confirmPassword: yup
      .string()
      .required("Vous devez confirmer votre mot de passe")
      .oneOf(
        [yup.ref("password"), ""],
        "Les mots de passe ne correspondent pas"
      ),
  });

  const initialValues = {
    name: "",
    lName: "",
    email: "",
    imgProfile: "",
    gender: "man",
    password: "",
    confirmPassword: "",
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
  const submit = handleSubmit(async (user) => {
    try {
      clearErrors();
      await createUser(user);
      navigate("/signin");
    } catch (message) {
      setError("generic", { type: "generic", message });
    }
  });

  return (
    <div className={`${styles.signup} d-flex justify-content-center`}>
      <div className={styles.image}>
        <img src={imgIns} alt="inscription" />
      </div>
      <div className={styles.act}>
        <div className={styles.title}>
          <h2>Inscription</h2>
        </div>
        <div className={`${styles.content} d-flex `}>
          <form onSubmit={submit} className={`${styles.form} p-20`}>
            <div className="mb-10 d-flex flex-row justify-content-between">
              <div className="mb-10 d-flex flex-column ">
                <label htmlFor="name" className={`${styles.input_1} mb-10`}>
                  Nom :
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Entrez votre nom..."
                  {...register("name")}
                />
                {errors.name && (
                  <p className="form-error">{errors.name.message}</p>
                )}
              </div>
              <div className="mb-10 d-flex flex-column">
                <label htmlFor="lName" className={`${styles.input_1} mb-10`}>
                  Prénom :
                </label>
                <input
                  id="lName"
                  type="text"
                  name="lName"
                  placeholder="Entrez votre prénom..."
                  {...register("lName")}
                />
                {errors.lName && (
                  <p className="form-error">{errors.lName.message}</p>
                )}
              </div>
            </div>
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
              <label htmlFor="imgProfile" className="mb-10">
                Image du profil :
              </label>
              <input
                id="imgProfile"
                type="text"
                name="imgProfile"
                placeholder="Entrez l'url pour votre image..."
                {...register("imgProfile")}
              />
              {errors.imgProfile && (
                <p className="form-error">{errors.imgProfile.message}</p>
              )}
            </div>
            <div className={`${styles.gender} d-flex py-20 `}>
              <label htmlFor="gender">Genre :</label>
              <div className="d-flex mr-20">
                <div>
                  <input
                    className={`${styles.input_3} mr-15 ml-20`}
                    type="radio"
                    value="man"
                    id="man"
                    {...register("gender")}
                  />
                </div>
                <div>
                  <label htmlFor="man" className="mr-20 ">
                    Homme
                  </label>
                </div>
              </div>
              <div className="d-flex ">
                <div>
                  <input
                    className={`${styles.input_3} mr-15`}
                    type="radio"
                    value="woman"
                    id="woman"
                    {...register("gender")}
                  />
                </div>
                <div>
                  <label htmlFor="female" className="mr-20">
                    Femme
                  </label>
                </div>
              </div>
            </div>
            <div className="mb-10">
              {errors.gender && (
                <p className="form-error">{errors.gender.message}</p>
              )}
            </div>
            <div className="mb-10 d-flex flex-column">
              <label htmlFor="password">Mot de passe :</label>
              <input
                className={styles.input_2}
                id="password"
                type="password"
                name="password"
                placeholder="Entrez votre mot de passe..."
                {...register("password")}
              />
              {errors.password && (
                <p className="form-error">{errors.password.message}</p>
              )}
            </div>
            <div className="mb-10 d-flex flex-column">
              <label htmlFor="confirmPassword" className="mb-10">
                Vérification de mot de passe :
              </label>
              <input
                className={styles.input_2}
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                placeholder="Entrez votre mot de passe..."
                {...register("confirmPassword")}
              />
              {errors.confirmPassword && (
                <p className="form-error">{errors.confirmPassword.message}</p>
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
        <div className="p-30">
          <p>
            Déja Inscrit ?{" "}
            <NavLink className={styles.linkIns} to="/signin">
              Connectez-vous
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
