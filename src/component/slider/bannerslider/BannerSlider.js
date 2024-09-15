"use client";
import React, { useEffect, useState } from "react";
import Banner from "@/component/banner/Banner";  // Import the Banner component
import styles from "./bannerslider.module.css";  // Import CSS module

const BannerSlider = ({ isExpanded }) => {
  const [activeIndex, setActiveIndex] = useState(0);  
  const banners = [<Banner />, <Banner />, <Banner />];  

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 3000);
    return () => clearInterval(interval); 
  }, [banners.length]);
  
  return (
    <div className={styles.bannerslidercontainer}>
      <div className={styles.bannerWrapper}>
        {banners.map((banner, index) => (
          <div
            key={index}
            className={`${styles.banner} ${index === activeIndex ? styles.active : ""}`}
          >
            {banner}
          </div>
        ))}
      </div>

      <div className={styles.dotsContainer}>
        {banners.map((_, index) => (
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


