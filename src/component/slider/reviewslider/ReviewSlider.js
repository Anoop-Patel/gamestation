"use client";
import React from 'react'
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./reviewslider.module.css";
import Arrow from "@/app/assets/images/arrow.png";
import ReviewCard from '@/component/reviewcard/ReviewCard';

const ReviewSlider = ({ name = "", actionname = "", productList = [] }) => {
  const router = useRouter();

  const handleBack=()=>{
    router.push("/product");
  
  }
  return (
    <div className={styles.cardcontainer}>
          <div className={styles.contentinfo}>
        <span className={styles.contentname}> {name}</span>
        <div className={styles.action}  onClick={handleBack} >
          <span className={styles.actionname}> {actionname}</span>
          <Image src={Arrow} className={styles.logo} alt="arrow" />
        </div>
      </div>


      <div className={styles.slider}>
        {productList.map((product) => (
          <ReviewCard  cardData={product} />
        ))}
      </div>

    </div>
  )
}

export default ReviewSlider