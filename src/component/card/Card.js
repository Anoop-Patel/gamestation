"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./card.module.css";
import ActiveStar from "@/app/assets/images/activestar.png";
import InActiveStar from "@/app/assets/images/blankstar.png";
import Button from "../button/Button";

const Card = ({ cardData }) => {
  const { images, title, rating, category, brand, availabilityStatus, returnPolicy, price, discountPercentage } = cardData;

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
    <Link href={`/product/${cardData.id}`}>

    <div className={styles.cardcontainer}>
      <div className={styles.livecontainer}>
        <div className={styles.live}></div>
        <div className={styles.discount}>{discountPercentage}%</div>
      </div>
      <div
        className={styles.imagecontainer}
        style={{ position: "relative", width: "100%", height: "100%" }}
      >
        <Image
          src={images[0]}
          alt="product image"
          fill
          className={styles.productimage}
        />
      </div>

      <div className={styles.infocontainer}>
        <div className={styles.namecontainer}>
          <span className={styles.title}>{truncateTitle(title)}</span>
        </div>
        <div className={styles.productinfo}>
          <div className={styles.rating}>{renderStars(rating)}</div>
          <div className={styles.info}>
            {`${category} • ${brand} • ${availabilityStatus}`}
          </div>
          <span className={styles.return}>{returnPolicy}</span>
        </div>
        <div className={styles.buyproduct}>
          <div className={styles.price}>₹{price}</div>
          <Button />
        </div>
      </div>
    </div>
    </Link>
  );
};

export default Card;
