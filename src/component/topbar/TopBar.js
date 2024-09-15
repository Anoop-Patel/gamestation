"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import style from "./topbar.module.css";
import IsAuthPage from "@/service/helper/isAuthPage";
import WebsiteLogo from "@/app/assets/images/websiteLogo.png";
import searchbar from "@/app/assets/images/searchicon.png";
import CartBag from "@/app/assets/images/cartBag.png";
import DropMenu from "@/app/assets/images/dropmenu.jpg";

import Notification from "@/app/assets/images/notification.png";

const TopBar = () => {
  const showTopbar = !IsAuthPage();

  return (
    showTopbar&&  <div className={style.topbarcontainer}>
      <div className={style.leftcontainer}>
        <div className={style.logocontainer}>
          <Image src={WebsiteLogo} className={style.logo} alt="website logo" />

        </div>

        <div className={style.navcontainer}>
          <Link href="/" className={style.logo}>
            Home
          </Link>
          <div className={style.divider}></div>

          <Link href="/product" className={style.logo}>
            Product
          </Link>
        </div>
      </div>
      <div className={style.rightcontainer}>
        <div className={style.searchbar}>
          <Image
            src={searchbar}
            className={style.searchlogo}
            alt="search logo"
          />
          <input type="text" placeholder="What are you looking for?" />
        </div>
        
        <div className={style.divider}></div>

        <div className={style.actioncontainer}>
          <div className={style.logobg}>
            <Image
              src={Notification}
              className={style.logo}
              alt="Notification"
            />
          </div>
          <div className={style.divider}></div>

          <div className={style.logobg}>
            <Image src={CartBag} className={style.logo} alt="CartBag" />
          </div>
          <div className={style.divider}></div>

          <div className={style.logobg}></div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
