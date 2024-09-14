"use client";
import Sidebar from "@/component/sidebar/Sidebar";
import styles from "./page.module.css";
import Slider from "@/component/slider/Slider";

export default function Home() {
   
  return (

    <div className={styles.homepage}>
    <Sidebar/>
    <Slider/>

    </div>

  );
}
