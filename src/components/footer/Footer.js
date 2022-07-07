import React from "react";
import "./FooterStyles.css";
import { SiDatabricks } from "react-icons/si";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import {
  FiInstagram,
  FiFacebook,
  FiLinkedin,
  FiGithub,
  FiDribbble,
  FiMail,
} from "react-icons/fi";
import { Link } from "react-scroll";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="Container">
        <div className="content">
          <div className="top">
            <div className="logo-footer">
              <SiDatabricks className="icon" />
              <h2>Secured.</h2>
            </div>
            <Link
              activeClass="active"
              to="top"
              spy={true}
              smooth={true}
              duration={500}
            >
              <BsFillArrowUpCircleFill className="icon" />
            </Link>
          </div>
          <div className="col-container">
            <div className="col">
              <h3>Navigation</h3>
              <p>Home</p>
              <p>Data</p>
              <p>Cloud</p>
              <p>Contact</p>
            </div>
            <div className="col">
              <h3>My Account</h3>
              <p>Home</p>
              <p>Data</p>
              <p>Cloud</p>
              <p>Contact</p>
            </div>
            <div className="col">
              <h3>Information</h3>
              <p>Home</p>
              <p>Data</p>
              <p>Cloud</p>
              <p>Contact</p>
            </div>
            <div className="col">
              <h3>Legal</h3>
              <p>Home</p>
              <p>Data</p>
              <p>Cloud</p>
              <p>Contact</p>
            </div>
            {/* contact form and social */}
            <form>
              <h3>Join Our Team</h3>
              <input type="email" placeholder="Enter your email" />
              <FiMail className="mail-icon" />
              <div className="social-group">
                <FiInstagram className="social-icon" />
                <FiFacebook className="social-icon" />
                <FiLinkedin className="social-icon" />
                <FiDribbble className="social-icon" />
                <FiGithub className="social-icon" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
