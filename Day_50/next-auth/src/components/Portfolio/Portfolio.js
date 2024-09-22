"use client";
import React, { useEffect, useRef } from "react";
import Skills from "../Skills/Skills";
import SocialContact from "../SocialContact/SocialContact";
import SelfProject from "../SelfProject/SelfProject";
import Hobbies from "../Hobbies/Hobbies";
import "./Portfolio.scss";
import { Tooltip } from "@nextui-org/react";

import { useTranslation } from "react-i18next";
function Portfolio() {
  const { t } = useTranslation();
  return (
    <div className="portfolio">
      <Tooltip
        showArrow={true}
        content={
          "Started exposure to the first programming language at the age of 18, constantly trying and learning to improve myself."
        }
        color="success"
      >
        <h1>{t("Index.name")}</h1>
      </Tooltip>
      <div className="portfolio-detail">
        <Skills />
        <div className="main-detail">
          <SocialContact />
          <SelfProject />
          <Hobbies />
        </div>
      </div>
      <span>© 2023 Nguyen Manh Huy. All rights reserved.</span>
    </div>
  );
}

export default Portfolio;
