"use client";
import { getCookie, setCookie } from "cookies-next";
import React, { useEffect } from "react";

function Note() {
  return (
    <div className="note">
      <span>© 2023 Huy portfolio</span>
      <p>Xin chào, mình là Huy, đây là trang cá nhân của mình.</p>
    </div>
  );
}

export default Note;
