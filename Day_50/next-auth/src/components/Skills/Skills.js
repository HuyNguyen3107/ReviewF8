"use client";
import React, { useEffect, useRef } from "react";
import "./Skills.scss";
import Image from "next/image";
import f8Avt from "../../../public/assets/images/f8.jpg";
import { Divider } from "@nextui-org/react";

import { useTranslation } from "react-i18next";

function Skills() {
  const { t } = useTranslation();
  return (
    <div className="skills">
      <div className="avatar-container">
        <div className="img">
          <Image src={f8Avt} width={300} alt="avatar" />
        </div>
      </div>
      <span className="fe-dev">FullStack Developer</span>
      <div className="skills-detail">
        <div className="my-skills">
          <h3>{t("Index.skills")}</h3>
          <p>
            <b>{t("Index.webDev_title")}: </b>
            {t("Index.webDev_skills")}
          </p>
          <Divider />
          <p>
            <b>{t("Index.webDev_others")}: </b>
            {t("Index.other_skills")}
          </p>
        </div>
        <div className="histories">
          <h3>{t("Index.histories")}</h3>
          <p>
            <b>2009-2014: </b> {t("Index.primary_school")}
          </p>
          <Divider />
          <p>
            <b>2014-2018: </b> {t("Index.secondary_school")}
          </p>
          <Divider />
          <p>
            <b>2018-2021: </b> {t("Index.high_school")}
          </p>
          <Divider />
          <p>
            <b>2021-2026: </b> {t("Index.ptit")}
          </p>
          <Divider />
        </div>
      </div>
    </div>
  );
}

export default Skills;
