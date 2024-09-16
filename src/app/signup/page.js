"use client";

import React, { useState } from "react";
import styles from "../signin/signin.module.css";
import { useRouter } from "next/navigation";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, password, confirmPassword } = formData;

    if (!name || !password || !confirmPassword) {
      setErrors("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      setErrors("Passwords do not match");
      return;
    }

    try {
      localStorage.setItem("user", JSON.stringify({ name, password }));
      setErrors("");
      setFormData({ name: "", password: "", confirmPassword: "" });
      router.push("/");
    } catch (error) {
      setErrors("An error occurred. Please try again.");
    }
  };

  return (
    <div className={styles.signinContainer}>
      <h1 className={styles.formHeading}>Sign Up</h1>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        {errors && <p className={styles.error}>{errors}</p>}
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.formLabel}>
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className={styles.formInput}
            value={formData.name}
            onChange={handleChange}
            required
            aria-required="true"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password" className={styles.formLabel}>
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className={styles.formInput}
            value={formData.password}
            onChange={handleChange}
            required
            aria-required="true"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="confirmPassword" className={styles.formLabel}>
            Confirm Password:
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className={styles.formInput}
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            aria-required="true"
          />
        </div>
        <button type="submit" className={styles.formButton}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
