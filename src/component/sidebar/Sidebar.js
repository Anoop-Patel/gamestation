"use client";

import React, { useState } from 'react';
import styles from "./sidebar.module.css";
import Image from "next/image";
import { sidebardata, sidebarBottomData } from "./config/data";

const Sidebar = ({setIsExpanded,isExpanded}) => {

  const handleMouseEnter = () => {
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
  };

  return (
    <div 
      className={`${styles.sidebarcontainer} ${isExpanded ? styles.expanded : ''}`} 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.topSection}>
        {sidebardata.map((item, index) => (
          <div className={`${styles.menuItem} ${isExpanded ? styles.expanded : ''}`} key={index}>
            <Image src={item.image} alt={item.title} />
            {isExpanded && <span className={styles.menuitemtext}>{item.title}</span>}
          </div>
        ))}
      </div>

      <div className={styles.bottomSection}>
        {sidebarBottomData.map((item, index) => (
          <div className={`${styles.menuItem} ${isExpanded ? styles.expanded : ''}`} key={index}>
            <Image src={item.image} alt={item.title} />
            {isExpanded && <span className={styles.menuitemtext}>{item.title}</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
