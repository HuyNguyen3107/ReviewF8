"use client";

import { deleteCookie, getCookie, setCookie } from "cookies-next";
import { signIn, signOut } from "next-auth/react";

export function GoogleSignInButton() {
  const handleClick = () => {
    setCookie("currentLogin", "google");
    setCookie("isLogin", "login");
    signIn("google");
  };
  return (
    <button onClick={handleClick}>
      <i className="pi pi-google"></i>
      Đăng nhập với Google
    </button>
  );
}

export function GithubSignInButton() {
  const handleClick = () => {
    setCookie("currentLogin", "github");
    setCookie("isLogin", "login");
    signIn("github");
  };
  return (
    <button onClick={handleClick}>
      <i className="pi pi-github"></i>
      Đăng nhập với Github
    </button>
  );
}

export function GoogleLoginButton({
  currentLogin,
  session,
  googleImage,
  googleName,
  githubImage,
  githubName,
}) {
  const handleClick = () => {
    setCookie("githubImage", session?.user?.image);
    setCookie("githubName", session?.user?.name);
    if (githubImage && githubName) {
      deleteCookie("googleImage");
      deleteCookie("googleName");
    }
    setCookie("currentLogin", "google");
    setCookie("isLogin", "login");
    signIn("google");
  };

  if (googleImage && googleName) {
    return (
      <div className="google-user">
        <img src={googleImage.value} alt="" />
        <span>{googleName.value}</span>
      </div>
    );
  }

  return (
    <>
      {currentLogin?.value !== "google" ? (
        <button onClick={handleClick} className="google-login">
          <i className="pi pi-google"></i>
          Chưa đăng ký
        </button>
      ) : (
        <div className="google-user">
          <img src={session?.user?.image} alt="" />
          <span>{session?.user?.name}</span>
        </div>
      )}
    </>
  );
}

export function GithubLoginButton({
  currentLogin,
  session,
  githubImage,
  githubName,
  googleImage,
  googleName,
}) {
  const handleClick = () => {
    setCookie("googleImage", session?.user?.image);
    setCookie("googleName", session?.user?.name);
    if (googleImage && googleName) {
      deleteCookie("githubImage");
      deleteCookie("githubName");
    }
    setCookie("currentLogin", "github");
    setCookie("isLogin", "login");
    signIn("github");
  };

  if (githubImage && githubName) {
    return (
      <div className="google-user">
        <img src={githubImage.value} alt="" />
        <span>{githubName.value}</span>
      </div>
    );
  }

  return (
    <>
      {currentLogin?.value !== "github" ? (
        <button onClick={handleClick} className="github-login">
          <i className="pi pi-github"></i>
          Chưa đăng ký
        </button>
      ) : (
        <div className="github-user">
          <img src={session?.user?.image} alt="" />
          <span>{session?.user?.name}</span>
        </div>
      )}
    </>
  );
}

export function SignOutButton({
  githubImage,
  githubName,
  googleImage,
  googleName,
}) {
  const handleClick = () => {
    if (githubImage && githubName) {
      deleteCookie("githubImage");
      deleteCookie("githubName");
    }
    if (googleImage && googleName) {
      deleteCookie("googleImage");
      deleteCookie("googleName");
    }
    deleteCookie("currentLogin");
    deleteCookie("isLogin");
    signOut();
  };

  return (
    <button className="logout" onClick={handleClick}>
      Đăng xuất
    </button>
  );
}
