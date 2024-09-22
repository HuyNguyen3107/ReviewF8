import React from "react";
import "./blogs.scss";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

async function Blogs() {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/auth");
  return (
    <div className="blogs">
      <h1>There are no blogs.</h1>
      <Link href={"/"} className="home-back">
        Home Page
      </Link>
    </div>
  );
}

export default Blogs;
