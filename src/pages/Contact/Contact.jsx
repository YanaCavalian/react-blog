import React from "react";
import "./Contact.css";
import githubIcon from "../../assets/icon/github.svg";
import skypeIcon from "../../assets/icon/skype.svg";
import telegramIcon from "../../assets/icon/telegram.svg";
import instagramIcon from "../../assets/icon/instagram.svg";

export const Contact = () => (
  <div className="contact-container">
    <div className="contact-item">
      <img src={githubIcon} alt="GitHub Icon" height="50" width="50" />
      <p>
        <a target="_blank" href="https://github.com">
          GitHub
        </a>
      </p>
    </div>

    <div className="contact-item">
      <img src={skypeIcon} alt="Skype Icon" height="50" width="50" />
      <p>
        <a target="_blank" href="https://www.skype.com">
          Skype
        </a>
      </p>
    </div>

    <div className="contact-item">
      <img src={telegramIcon} alt="Telegram Icon" height="50" width="50" />
      <p>
        <a target="_blank" href="https://telegram.org">
          Telegram
        </a>
      </p>
    </div>

    <div className="contact-item">
      <img src={instagramIcon} alt="Instagram Icon" height="50" width="50" />
      <p>
        <a target="_blank" href="https://www.instagram.com">
          Instagram
        </a>
      </p>
    </div>
  </div>
);
