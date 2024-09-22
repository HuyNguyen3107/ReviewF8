import React from "react";
import "./SocialContact.scss";
import { Divider, Link } from "@nextui-org/react";
import { useTranslation } from "react-i18next";
function SocialContact() {
  const { t } = useTranslation();
  return (
    <div className="social-contact">
      <h3>{t("Index.social_contact")}</h3>
      <div>
        <div>
          <b>Phone: </b>
          <Link href="tel:08 1919 8989" color="warning" target="_blank">
            08 1919 8989
          </Link>
        </div>
        <div>
          <b>Zalo: </b>
          <Link href=" https://zalo.me" color="warning" target="_blank">
            https://zalo.me
          </Link>
        </div>
        <div>
          <b>Email: </b>
          <Link
            href="mailto:contact@fullstack.edu.vn"
            color="warning"
            target="_blank"
          >
            contact@fullstack.edu.vn
          </Link>
        </div>
        <div>
          <b>Facebook: </b>
          <Link
            href="https://www.facebook.com/f8vnofficial"
            color="warning"
            target="_blank"
          >
            https://www.facebook.com/f8vnofficial
          </Link>
        </div>
        <div>
          <b>Youtube: </b>
          <Link
            href="https://www.youtube.com/@F8VNOfficial"
            color="warning"
            target="_blank"
          >
            https://www.youtube.com/@F8VNOfficial
          </Link>
        </div>
      </div>
      <Divider />
    </div>
  );
}

export default SocialContact;
