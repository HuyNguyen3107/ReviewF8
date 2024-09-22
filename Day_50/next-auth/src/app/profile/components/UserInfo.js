"use client";

import React from "react";

function UserInfo({ session }) {
  return (
    <div className="user-info">
      <div className="user-img">
        <img src={session.user.image} alt="" />
      </div>
      <div className="user-detail">
        <span className="user-name">{session.user.name}</span>
        <span className="user-email">{session.user.email}</span>
      </div>
    </div>
  );
}

export default UserInfo;
