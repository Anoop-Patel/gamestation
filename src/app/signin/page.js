"use client";

import React, { useState } from "react";
import styles from "./signin.module.css";
import { useRouter } from "next/navigation";

const Signin = () => {
  const [formData, setFormData] = useState({ name: "", password: "" });
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

    const { name, password } = formData;

    if (!name || !password) {
      setErrors("All fields are required");
      return;
    }

    try {
      localStorage.setItem("user", JSON.stringify({ name, password }));
      setErrors("");
      setFormData({ name: "", password: "" });
      router.push("/");
    } catch (error) {
      setErrors("An error occurred. Please try again.");
    }
  };

  return (
    <div className={styles.signinContainer}>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        {errors && <p className={styles.error}>{errors}</p>}
        <div className={styles.formGroup}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            aria-required="true"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            aria-required="true"
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default Signin;
