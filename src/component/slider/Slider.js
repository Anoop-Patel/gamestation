"use client";
import React from "react";
import Image from "next/image";
import Card from "../card/Card";
import styles from "./slider.module.css";
import Arrow from "@/app/assets/images/arrow.png";

const Sliders = ({ name = "", actionname = "", productList = [] }) => {
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
        {productList.map((product) => (
          <Card key={product.id} cardData={product} />
        ))}
      </div>
    </div>
  );
};

export default Sliders;
