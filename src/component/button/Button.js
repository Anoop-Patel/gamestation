"use client";
import React from 'react'
import styles from"./button.module.css";
const Button = ({text="Buy Now",onClick=()=>{}}) => {
  return (
    <button className={styles.button} onClick={onClick}><span className={styles.text}>{text} </span> </button>
  )
}

export default Button