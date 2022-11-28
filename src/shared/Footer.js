import React from "react";
import cpulg from "../cpulg.png";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-neutral text-neutral-content">
        <div className="flex items-center">
          <img src={cpulg} alt="" />
          <p>
            <span className="text-3xl">PC-Bikroy</span>
            <br />
            Made by Md. Moinul Hassan
          </p>
        </div>
        <div>
          <span className="footer-title">Social</span>
          <div className="grid grid-flow-col gap-4 text-4xl">
            <a href="https://www.facebook.com/mssn.l" target="_blank" rel="noreferrer">
              <button>
                <FaFacebook />
              </button>
            </a>
            <a href="https://www.linkedin.com/in/mhmsn/" target="_blank" rel="noreferrer">
              <button>
                <FaLinkedin />
              </button>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
