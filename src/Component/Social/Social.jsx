import React from "react";
import { FcGoogle } from "react-icons/fc";
import { TbBrandGmail } from "react-icons/tb";
import { LiaFacebook } from "react-icons/lia";
import { CiLinkedin } from "react-icons/ci";
import "../Style/social.css";
const icons = [<FcGoogle />, <TbBrandGmail />, <LiaFacebook />, <CiLinkedin />];
const Social = () => {
  return (
    <div className="social">
      <div className="social-box">
        {icons.map((icon) => (
          <div className="icon">
           {icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Social;
