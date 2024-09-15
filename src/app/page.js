"use client";
import { useState } from "react";
import Sidebar from "@/component/sidebar/Sidebar";
import styles from "./page.module.css";
import Sliders from "@/component/slider/Slider";
import BannerSlider from "@/component/slider/bannerslider/BannerSlider";
import Banner from "@/component/banner/Banner";

export default function Home() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={styles.homepagemaincontainer}>
      <div className={styles.homepagecontainer}>
        <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
        <BannerSlider isExpanded={isExpanded} />
      </div>
      <div>
      <Sliders name={"MOST TRENDING"} actionname={"GO TO GAME STORE"} />
        <Banner/>
        <Sliders name={"MOST TRENDING"} actionname={"GO TO GAME STORE"} />
        <Banner/>

      </div>
    </div>
  );
}
