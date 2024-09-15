"use client";
import React from "react";
import Image from "next/image";
import styles from "./card.module.css";
import ActiveStar from "@/app/assets/images/activestar.png"; 
import InActiveStar from "@/app/assets/images/blankstar.png"; 
import { fetchProductById } from "@/service/api/Function";
import Button from "../button/Button";
import { products } from "../../app/dummy";
const Card = () => {
  const [product, setProduct] = React.useState(products);

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
    <div className={styles.cardcontainer}>
      <div className={styles.livecontainer}>
        <div className={styles.live}></div>

        <div className={styles.discount}>{product.discountPercentage}%</div>
      </div>
      <div className={styles.infocontainer}>
        <div className={styles.namecontainer}>
          <span className={styles.title}>{truncateTitle(product.title)}</span>
        </div>
        <div className={styles.productinfo}>
          <div className={styles.rating}>{renderStars(product.rating)}</div>
          <div className={styles.info}>
            {`${product.category} • ${product.brand} • ${product.availabilityStatus}`}
          </div>
          <span className={styles.return}>{product.returnPolicy}</span>
        </div>
        <div className={styles.buyproduct}>
          <div className={styles.price}>₹{product.price}</div>

          <Button />
        </div>
      </div>
    </div>
  );
};

export default Card;
