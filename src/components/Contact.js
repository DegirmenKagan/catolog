import React from "react";
import phoneIcon from "../images/phone-icon.png";
import mailIcon from "../images/mail-icon.png";

export default function Contact({ name, email, phone, picture }) {
  return (
    <div className="contact-card">
      <img src={picture} />
      <h3>{name}</h3>
      <div className="info-group">
        <img src={phoneIcon} />
        <p>{phone}</p>
      </div>
      <div className="info-group">
        <img src={mailIcon} />
        <p> {email}</p>
      </div>
    </div>
  );
}
