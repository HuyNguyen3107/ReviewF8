import React from "react";
import "./auth.scss";
import {
  GithubSignInButton,
  GoogleSignInButton,
} from "@/components/AuthButton/AuthButton";

function AuthPage() {
  return (
    <div className="auth">
      <span>© 2023 Huy portfolio</span>
      <p>Xin chào, mình là Huy, đây là trang cá nhân của mình.</p>
      <div>
        <span>Đăng nhập</span>
        <GoogleSignInButton />
        <GithubSignInButton />
        <p>
          "Đăng nhập để liên hệ, bình luận và khám phá nhiều tính năng thú vị
          khác."
        </p>
      </div>
    </div>
  );
}

export default AuthPage;
