"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import style from "./topbar.module.css";
import IsAuthPage from "@/service/helper/isAuthPage";
import WebsiteLogo from "@/app/assets/images/websiteLogo.png";
import searchbar from "@/app/assets/images/searchicon.png";
import CartBag from "@/app/assets/images/cartBag.png";
import DropMenu from "@/app/assets/images/dropmenu.jpg";
import Notification from "@/app/assets/images/notification.png";
import HomeIcon from "@/app/assets/images/home.png";
import ProductIcon from "@/app/assets/images/cartBag.png";
import SettingsIcon from "@/app/assets/images/settings.png";
import LogoutIcon from "@/app/assets/images/logout.png"; 
import NotificationPage from "../notification/Notification";

const mobmenu = [
  {
    name: "Home",
    link: "/",
    icon: HomeIcon,
  },
  {
    name: "Product",
    link: "/product",
    icon: ProductIcon,
  },
  {
    name: "Notification",
    icon: Notification,
  },
  {
    name: "Settings",
    link: "/product",
    icon: SettingsIcon,
  },
  {
    name: "Logout",
    icon: LogoutIcon,
  },
];

const TopBar = () => {
  const showTopbar = !IsAuthPage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNotificationOpen, setNotificationOpen] = useState(false);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuFunction = (menuItem) => {
    if (menuItem.name === "Notification") {
      setNotificationOpen(!isNotificationOpen)
      console.log("Notification clicked");
    }
    if (menuItem.name === "Logout") {
      localStorage.clear(); 
    }
  };

  return (
    showTopbar && (
      <div className={style.topbarcontainer}>
       
       { isNotificationOpen && <div className={style.notification}> 
        <NotificationPage/>
       </div>
       }

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
            <div className={style.logobg} onClick={()=>setNotificationOpen(!isNotificationOpen)}>
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

            <div className={style.dropmenu} onClick={toggleMenu}>
              <Image src={DropMenu} className={style.logo} alt="Menu" />
            </div>

            {isMenuOpen && (
              <div className={style.mobmenubox}>
                {mobmenu.map((menuItem, index) => (
                  <div
                    key={index}
                    className={style.menuItem}
                    onClick={() => handleMenuFunction(menuItem)}
                  >
                    <Image
                      src={menuItem.icon}
                      alt={menuItem.name}
                      className={style.menuIcon}
                    />
                    {menuItem.link ? (
                      <Link href={menuItem.link} className={style.menuLink}>
                        {menuItem.name}
                      </Link>
                    ) : (
                      <span>{menuItem.name}</span>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default TopBar;
