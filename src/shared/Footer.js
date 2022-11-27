import React from "react";
import cpulg from "../cpulg.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-neutral text-neutral-content">
        <div className="flex items-center">
          <img src={cpulg} alt=""/>
          <p>
            PC-Bikroy
            <br />
            Made by Md. Moinul Hassan
          </p>
        </div>
        <div>
          <span className="footer-title">Social</span>
          <div className="grid grid-flow-col gap-4">
            
            <button>
              
            </button>
            <button>
              
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
