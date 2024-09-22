"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import myAvatar from "../../../public/assets/images/myAvatar.jpg";
import f8 from "../../../public/assets/images/f8.jpg";
import { Button } from "@nextui-org/react";
import "./Header.scss";
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";
import { Navbar } from "@nextui-org/react";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

import viMsg from "../../../public/messages/vi.json";
import enMsg from "../../../public/messages/en.json";

import { setCookie } from "cookies-next";

i18n.use(initReactI18next).init({
  resources: {
    vi: {
      translation: viMsg,
    },
    en: {
      translation: enMsg,
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

function Header() {
  const { t } = useTranslation();
  const [language, setLanguage] = useState("vi");

  const handleLang = (value) => {
    if (value === "vi") {
      i18n.changeLanguage("vi");
      setLanguage("en");
    }
    if (value === "en") {
      i18n.changeLanguage("en");
      setLanguage("vi");
    }
  };
  return (
    <header className="header">
      <div className="header-content">
        <nav className="navigation">
          <Link href={"/"}>
            <Image src={f8} width={50} alt="avatar" />
            <span className="name">{t("Index.name")}</span>
          </Link>
          <Link href={`/blogs`} className="nav-blogs">
            Blogs
          </Link>
          <Link href={`/contact`} className="nav-contact">
            Contact
          </Link>
          <Link
            href={`/profile`}
            className="nav-profile"
            onClick={() => {
              setCookie("page", "profile");
            }}
          >
            Profile
          </Link>
        </nav>
        <div className="contact">
          <div className="f8-avatar">
            <Link
              href={"https://fullstack-nodejs.fullstack.edu.vn/"}
              target="_blank"
            >
              <Image src={f8} width={30} alt="logo" />
            </Link>
          </div>
          <div className="facebook-icon">
            <Link href={"https://www.facebook.com/anunicode"} target="_blank">
              <i className="pi pi-facebook"></i>
            </Link>
          </div>
          <div className="youtube-icon">
            <Link
              href={"https://www.youtube.com/@F8VNOfficial"}
              target="_blank"
            >
              <i className="pi pi-youtube"></i>
            </Link>
          </div>
          <div className="theme-icon">
            <ThemeSwitcher />
          </div>
          <Button
            size="md"
            color="primary"
            onClick={(e) => {
              e.preventDefault();
              handleLang(e.target.innerText);
            }}
          >
            {language}
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
