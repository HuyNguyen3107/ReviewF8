"use client";
import React from "react";
import "./Hobbies.scss";
import { useTranslation } from "react-i18next";
function Hobbies() {
  const { t } = useTranslation();
  return (
    <div className="hobbies">
      <h3>{t("Index.hobbies")}</h3>
      <div className="hobbies-detail">
        <ul>
          <li>{t("Index.hobbies1")}</li>
          <li>{t("Index.hobbies2")}</li>
          <li>{t("Index.hobbies3")}</li>
        </ul>
      </div>
    </div>
  );
}

export default Hobbies;
