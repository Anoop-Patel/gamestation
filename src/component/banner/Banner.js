"use client";
import React from "react";
import Image from "next/image";
import styles from "./banner.module.css";
import Button from "../button/Button";
import ActiveStar from "@/app/assets/images/activestar.png";
import InActiveStar from "@/app/assets/images/blankstar.png";

const Banner = ({ product }) => {
  // Null/undefined check for product
  if (!product) {
    return <div>Loading...</div>;
  }

  const renderStars = (rating) => {
    const totalStars = 5;
    const activeStars = Math.floor(rating);
    const inactiveStars = totalStars - activeStars;

    return (
      <>
        {[...Array(activeStars)].map((_, i) => (
          <Image
            key={i}
            src={ActiveStar}
            alt="active star"
            width={18}
            height={18}
          />
        ))}
        {[...Array(inactiveStars)].map((_, i) => (
          <Image
            key={i}
            src={InActiveStar}
            alt="inactive star"
            width={18}
            height={18}
          />
        ))}
      </>
    );
  };

  const truncateTitle = (title) => {
    return title.length > 23 ? `${title.substring(0, 23)}..` : title;
  };

  return (
    <div className={styles.bannercontainer}>
      <div className={styles.contentcontainer}>
        <div className={styles.contentintro}>
          <span className={styles.name}>{truncateTitle(product.title)} </span>
          <div className={styles.returnday}>
            <span className={styles.returntext}>{product.returnPolicy} </span>
          </div>
        </div>

        <div className={styles.aboutcontent}>{product.description} </div>
        <div className={styles.buyoption}>
          <Button text={"Buy Now"} />
          <span className={styles.warrenty}>
            {`${product.warrantyInformation} • ${product.shippingInformation} • Stock : ${product.stock}`}
          </span>
        </div>
        <div className={styles.livecontainer}>
          <div className={styles.liveicon}>
            <div className={styles.live}></div>
            <div className={styles.discount}>{product.availabilityStatus}</div>
          </div>
          <div className={styles.rating}>{renderStars(product.rating)}</div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
