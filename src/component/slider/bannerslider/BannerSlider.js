"use client";
import React, { useEffect, useState } from "react";
import Banner from "@/component/banner/Banner"; 
import styles from "./bannerslider.module.css";

const BannerSlider = ({ bannerProducts }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % bannerProducts.length);
    }, 3000);
    return () => clearInterval(interval); 
  }, [bannerProducts.length]);

  return (
    <div className={styles.bannerslidercontainer}>
      <div className={styles.bannerWrapper}>
        {bannerProducts.map((product, index) => (
          <div
            key={index}
            className={`${styles.banner} ${index === activeIndex ? styles.active : ""}`}
          >
            <Banner product={product} isSlider={true} />
          </div>
        ))}
      </div>

      <div className={styles.dotsContainer}>
        {bannerProducts.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${index === activeIndex ? styles.activeDot : ""}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;
