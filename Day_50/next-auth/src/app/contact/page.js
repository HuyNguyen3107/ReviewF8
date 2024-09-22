import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import "./contact.scss";

async function ContactPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/auth");
  return (
    <div>
      <form action="" className="form-contact">
        <input type="text" placeholder="Your Name" name="user_name" />
        <input type="email" placeholder="Email" name="user_email" />
        <input type="tel" placeholder="Phone" name="user_phone" />
        <textarea
          placeholder="Write your message..."
          rows={10}
          name="message"
        ></textarea>
        <input type="submit" value="Send" className="send-email" />
      </form>
    </div>
  );
}

export default ContactPage;
