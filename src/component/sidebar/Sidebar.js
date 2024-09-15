"use client";

import React  from 'react';
import { useRouter } from "next/navigation";
import styles from "./sidebar.module.css";
import Image from "next/image";
import { sidebardata, sidebarBottomData } from "./config/data";

const Sidebar = ({setIsExpanded,isExpanded}) => {
  const router = useRouter();
  const handleMouseEnter = () => {
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
  };
  const handleLogout = () => {
    localStorage.clear(); 
    router.push("/signin"); 
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
          <div className={`${styles.menuItem} ${isExpanded ? styles.expanded : ''}`} key={index}  onClick={item.title === "Logout" ? handleLogout : null}>
            <Image src={item.image} alt={item.title} />
            {isExpanded && <span className={styles.menuitemtext}>{item.title}</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
