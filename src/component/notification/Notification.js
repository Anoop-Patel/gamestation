"use client";
import React from "react";
import styles from "./notification.module.css";

const NotificationPage = () => {
  const notifications = [
    "You bought a Beauty Product - 10% discount applied!",
    "Fashion Sale! 20% off on Men's Jackets!",
    "Skin Care Bundle bought - 15% discount on total!",
    "New Arrival in Women's Shoes - You got 5% off!",
    "Haircare essentials bought with 10% discount!",
    "You just saved 10% on Men's Grooming Kit!",
    "Fragrance Collection bought with 15% off!",
    "10% off applied on Men's T-Shirts!",
    "New Skincare Product bought with 10% discount!",
    "You just saved 20% on a Women's Handbag!",
  ];

  return (
    <div className={styles.notificationContainer}>
      {notifications.map((notification, index) => (
        <div key={index} className={styles.notificationItem}>
          {notification}
        </div>
      ))}
    </div>
  );
};

export default NotificationPage;
