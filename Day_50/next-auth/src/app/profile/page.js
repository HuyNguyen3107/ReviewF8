import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import {
  GithubLoginButton,
  GoogleLoginButton,
  SignOutButton,
} from "@/components/AuthButton/AuthButton";
import "./profile.scss";
import { Divider } from "@nextui-org/react";
import Note from "./components/Note";
import UserInfo from "./components/UserInfo";

import { cookies } from "next/headers";

async function ProfilePage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/auth");

  const cookieList = cookies();

  const currentLogin = cookieList.get("currentLogin");
  const googleImage = cookieList.get("googleImage");
  const googleName = cookieList.get("googleName");
  const githubImage = cookieList.get("githubImage");
  const githubName = cookieList.get("githubName");

  return (
    <div className="profile">
      <div>
        <div>
          <UserInfo session={session} />
          <div className="auth-btn">
            <div className="login-group">
              {/* {githubImage && githubName ? (
                <div className="google-user">
                  <img src={`${githubImage}`} alt="" />
                  <span>{githubName}</span>
                </div>
              ) : (
                <GithubLoginButton
                  currentLogin={currentLogin}
                  session={currentLogin.value === "github" ? session : ""}
                  githubImage={githubImage ? githubImage : ""}
                  githubName={githubName ? githubName : ""}
                  googleImage={googleImage ? googleImage : ""}
                  googleName={googleName ? googleName : ""}
                />
              )} */}
              <GithubLoginButton
                currentLogin={currentLogin}
                session={session}
                githubImage={githubImage ? githubImage : ""}
                githubName={githubName ? githubName : ""}
                googleImage={googleImage ? googleImage : ""}
                googleName={googleName ? googleName : ""}
              />
              {/* {googleImage && googleName ? (
                <div className="google-user">
                  <img src={`${googleImage}`} alt="" />
                  <span>{googleName}</span>
                </div>
              ) : (
                <GoogleLoginButton
                  currentLogin={currentLogin}
                  session={currentLogin.value === "google" ? session : ""}
                  googleImage={googleImage ? googleImage : ""}
                  googleName={googleName ? googleName : ""}
                  githubImage={githubImage ? githubImage : ""}
                  githubName={githubName ? githubName : ""}
                />
              )} */}
              <GoogleLoginButton
                currentLogin={currentLogin}
                session={session}
                googleImage={googleImage ? googleImage : ""}
                googleName={googleName ? googleName : ""}
                githubImage={githubImage ? githubImage : ""}
                githubName={githubName ? githubName : ""}
              />
            </div>
            <div className="rest">
              <SignOutButton
                githubImage={githubImage}
                githubName={githubName}
                googleImage={googleImage}
                googleName={googleName}
              />
            </div>
          </div>
        </div>
        <Divider />
      </div>
      <div className="posts">
        <span>Bạn chưa xem bài viết nào</span>
        <Divider />
      </div>
      <Note />
    </div>
  );
}

export default ProfilePage;
