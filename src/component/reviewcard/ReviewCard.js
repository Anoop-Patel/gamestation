"use client";
import React from "react";
import Image from "next/image";
import styles from "./reviewcard.module.css";
import ActiveStar from "@/app/assets/images/activestar.png";
import InActiveStar from "@/app/assets/images/blankstar.png";
import DefaultAvatar from "@/app/assets/images/blankstar.png"; 

const ReviewCard = ({cardData,  avatar = DefaultAvatar }) => {
  const renderStars = (rating ) => {
    const totalStars = 5;
    const activeStars = Math.floor(rating);
    const inactiveStars = totalStars - activeStars;
console.log(cardData,"cardData");

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

  return (
    <div className={styles.cardcontainer}>
      <div className={styles.reviewHeader}>
        <div className={styles.userAvtar}>
          <Image
            src={avatar}
            alt="user avatar"
            width={40}
            height={40}
            className={styles.avatar}
          />
        </div>
         <div className={styles.userInfo}> 
        <span className={styles.username}>{cardData.reviewerEmail}</span>
        <div className={styles.stars}>{renderStars(cardData.rating)}</div>
        </div>
      </div>
      <div className={styles.comment}>
        
      <span className={styles.reviewText}>{cardData.comment}</span>
      </div>
    </div>
  );
};

export default ReviewCard;
