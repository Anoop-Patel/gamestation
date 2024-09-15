"use client";
import React from "react";
import Image from "next/image";
import Card from "../card/Card";
import styles from "./slider.module.css";
import Arrow from "@/app/assets/images/arrow.png";

const Sliders = ({ name = "" ,actionname=""}) => {

  return (
    <div className={styles.slidercontainer}>
      <div className={styles.contentinfo}>
        <span className={styles.contentname}> {name}</span>
        <div className={styles.action}>
          <span className={styles.actionname}> {actionname}</span>
          <Image src={Arrow} className={styles.logo} alt="arrow" />

        </div>
      </div>

      <div className={styles.slider}>

        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />

      </div>
    </div>
  );
};

export default Sliders;
