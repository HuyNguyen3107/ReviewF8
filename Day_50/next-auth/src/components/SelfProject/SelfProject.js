"use client";
import React, { useEffect, useRef } from "react";
import "./SelfProject.scss";
import { Link, Tooltip, Divider } from "@nextui-org/react";

import { useTranslation } from "react-i18next";

function SelfProject() {
  const { t } = useTranslation();
  return (
    <div className="self-project">
      <h3>{t("Index.self_project")}</h3>
      <div className="project">
        <h4>{t("Index.playlist")}</h4>
        <p>{t("Index.playlist_times")}</p>
        <p>{t("Index.playlist_code")}</p>
        <div className="project-detail">
          <Tooltip
            color="warning"
            content="https://huynguyen3107.github.io/F8_Fullstack_Offline_K4/Day_26/player.html"
          >
            <Link
              color="warning"
              href="https://huynguyen3107.github.io/F8_Fullstack_Offline_K4/Day_26/player.html"
              target="_blank"
            >
              Demo
            </Link>
          </Tooltip>
          <Tooltip
            color="warning"
            content="https://github.com/HuyNguyen3107/F8_Fullstack_Offline_K4/tree/main/Day_26"
          >
            <Link
              color="warning"
              href="https://github.com/HuyNguyen3107/F8_Fullstack_Offline_K4/tree/main/Day_26"
              target="_blank"
            >
              Code
            </Link>
          </Tooltip>
        </div>
        <Divider />
      </div>
      <div className="project">
        <h4>{t("Index.blog")}</h4>
        <p>{t("Index.blog_times")}</p>
        <p>{t("Index.blog_code")}</p>
        <div className="project-detail">
          <Tooltip
            color="warning"
            content="https://huynguyen3107.github.io/F8_Fullstack_Offline_K4/Day_37/blog.html"
          >
            <Link
              color="warning"
              target="_blank"
              href="https://huynguyen3107.github.io/F8_Fullstack_Offline_K4/Day_37/blog.html"
            >
              Demo
            </Link>
          </Tooltip>
          <Tooltip
            color="warning"
            content="https://github.com/HuyNguyen3107/F8_Fullstack_Offline_K4/tree/main/Day_37"
          >
            <Link
              color="warning"
              target="_blank"
              href="https://github.com/HuyNguyen3107/F8_Fullstack_Offline_K4/tree/main/Day_37"
            >
              Code
            </Link>
          </Tooltip>
        </div>
      </div>
      <Divider />
      <div className="project">
        <h4>{t("Index.trello")}</h4>
        <p>{t("Index.trello_times")}</p>
        <p>{t("Index.trello_code")}</p>
        <div className="project-detail">
          <Tooltip
            color="warning"
            content="https://trello-eight-blond.vercel.app/"
          >
            <Link
              color="warning"
              target="_blank"
              href="https://trello-eight-blond.vercel.app/"
            >
              Demo
            </Link>
          </Tooltip>
          <Tooltip
            color="warning"
            content="https://github.com/HuyNguyen3107/F8_Fullstack_Offline_K4/tree/main/Day_47"
          >
            <Link
              color="warning"
              target="_blank"
              href="https://github.com/HuyNguyen3107/F8_Fullstack_Offline_K4/tree/main/Day_47"
            >
              Code
            </Link>
          </Tooltip>
        </div>
      </div>
      <Divider />
      <div className="git-link">
        <Link color="warning" href="https://github.com/HuyNguyen3107">
          https://github.com/HuyNguyen3107
        </Link>
      </div>
    </div>
  );
}

export default SelfProject;
