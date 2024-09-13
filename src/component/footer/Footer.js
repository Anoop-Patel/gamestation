import React from "react";
import Image from "next/image";
import styles from "./footer.module.css";
import Twitter from "../../app/assets/images/twitter.png";

const Footer = () => {
  const termdata = [
    "Privacy Notice",
    "Term of Service",
    "Cookie policy",
    "Company Information",
    "Cookie Prefrence",
  ];
  return (
    <div className={styles.footercontainer}>
      <div className={styles.term}>
        {termdata?.map((item) => {
         return <span className={styles.termname}>{item} </span>;
        })}
      </div>
      <div className={styles.bottomcontain}> 
      <span className={styles.copyrighttext}>
        Copyright @ Gamequest, Inc. All rights reserved
      </span>
      <div className={styles.sociallogo}>

        <div className={styles.logobg}> 
         <Image
          src={Twitter}
          alt="Twitter logo"
          width={40}
          height={40}
          
        /> 
      </div>
      
      </div>
    </div>
    </div>
  );
};

export default Footer;
