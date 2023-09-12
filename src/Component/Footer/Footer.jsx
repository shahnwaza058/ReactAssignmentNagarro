import React from "react";
import logo from "../../Assets/logo-white.png";
import "../Style/footer.css";
import { IoCreateOutline } from "react-icons/io5";
import { FaBlog } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";
import {
  MdOutlineUpdate,
  MdOutlineDelete,
  MdOutlineHome,
} from "react-icons/md";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer text-white d-flex flex-column align-items-center">
      <div className="footer-box w-100 d-flex flex-wrap justify-content-between m-5 align-items-center">
        <div className="brand-logo">
          <img src={logo} width={180} alt="BYI" />
        </div>
        <div className="Features m-2">
          <h5 className="text-decoration-underline fs-4">Features</h5>
          <ul className="list">
            <li className="list-item">
              <Link to="/add-blog">
                Create Your Blog &nbsp;
                <IoCreateOutline />
              </Link>
            </li>
            <li className="list-item">
              <Link to="/blogs">
                Update Existing blog &nbsp;
                <MdOutlineUpdate />
              </Link>
            </li>
            <li className="list-item">
              <Link to="/blogs">
                Delete Blog &nbsp;
                <MdOutlineDelete />
              </Link>
            </li>
          </ul>
        </div>
        <div className="Explore m-2">
          <h5 className="text-decoration-underline fs-4">Explore</h5>
          <ul className="list">
            <li className="list-item">
              <Link to="/">
                Home &nbsp;
                <MdOutlineHome />
              </Link>
            </li>
            <li className="list-item">
              <Link to="/blogs">
                Blogs &nbsp;
                <FaBlog />
              </Link>
            </li>
            <li className="list-item">
              <Link to="/add-blog">
                Add new&nbsp;
                <TfiWrite />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="reserve-rights d-flex align-items-center justify-content-center">
        <div className="">
          Copyright © 2023 Shahnwaz Ansari All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
