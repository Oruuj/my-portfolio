import React, { useState } from "react";
import "./Mailme.css";

const Mailme = () => {
  const [copied, setCopied] = useState(false);

  const email = "orujnovruzov@icloud.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.log("Failed to copy email", err);
    }
  };

  return (
    <section className="mailme" id="contact">
      <div className="mailme-container">
        <h2>Mail Me</h2>

        <p>
          I'm open to opportunities, freelance work, and collaborations. Feel
          free to copy my email and reach out anytime.
        </p>

        <button className="mail-btn" onClick={handleCopy}>
          {copied ? "Email Copied ✓" : "Copy Email"}
        </button>

        <p className="email-text">{email}</p>
      </div>
    </section>
  );
};

export default Mailme;
