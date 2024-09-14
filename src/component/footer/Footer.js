"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./footer.module.css";
import Twitter from "../../app/assets/images/twitterlogo.png";
import Facebook from "../../app/assets/images/facebooklogo.png";
import Insta from "../../app/assets/images/instalogo.png";

const Footer = () => {
  const termdata = [
    "Privacy Notice",
    "Term of Service",
    "Cookie policy",
    "Company Information",
    "Cookie Prefrence",
  ];

  const sociallogo = [
    { src: Twitter, url: "https://www.twitter.com" },
    {
      src: Facebook,
      url: "https://www.facebook.com/gamemano/?paipv=0&eav=AfZRZ2g-XEQTgE9QjtuV2LaeSH6pzAl5Ba2eOIqyD2fAfS3MtnLXPXo2qzOfgWuNEhk&_rdr",
    },
    {
      src: Insta,
      url: "https://www.instagram.com/gamemano_official?igsh=czRibHBuMDVjNXBx",
    },
  ];

  const [clickedLogoIndex, setClickedLogoIndex] = useState(null);

  const handleClick = (index) => {
    setClickedLogoIndex(index);
    setTimeout(() => {
      setClickedLogoIndex(null);
      window.open(sociallogo[index].url, "_blank");
    }, 400);
  };

  return (
    <div className={styles.footercontainer}>
      <div className={styles.term}>
        {termdata?.map((item, index) => (
          <span key={index} className={styles.termname}>
            {item}
          </span>
        ))}
      </div>
      <div className={styles.bottomcontain}>
        <span className={styles.copyrighttext}>
          Copyright @ Gamequest, Inc. All rights reserved
        </span>
        <div className={styles.sociallogo}>
          {sociallogo?.map((item, index) => (
            <div
              key={index}
              className={`${styles.logobg} ${
                clickedLogoIndex === index ? styles.animate : ""
              }`}
              onClick={() => handleClick(index)}
            >
              <Image src={item.src} className={styles.logo} alt="social logo" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
