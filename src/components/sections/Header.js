import React, { Component } from "react";
import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import Scrollspy from "react-scrollspy";

const SocialMediaLinks = [
  {
    Social: <FaFacebookF />,
    link: "https://www.facebook.com/issac.moreno.583",
  },
  {
    Social: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/issac-moreno-7a9116121/",
  },
  { Social: <FaInstagram />, link: "https://www.instagram.com/_i_s_s_a_c_x/" },
  { Social: <FaTwitter />, link: "https://twitter.com/ExSaviour909" },
];

class Header extends Component {
  render() {
    window.addEventListener("scroll", function () {
      var value = window.scrollY;
      if (value > 100) {
        document.querySelector(".header--fixed").classList.add("sticky");
      } else {
        document.querySelector(".header--fixed").classList.remove("sticky");
      }
    });

    let logoUrl = (
      <img
        src="/assets/images/logo/ResumeLogo.png"
        alt="Digital Agency"
      />
    );

    return (
      <header className={`header-area header-style-two header--fixed`}>
        <div className="header-wrapper">
          <div className="header-left d-flex align-items-center">
            <div className="logo">
              <a href={'#'}>{logoUrl}</a>
            </div>
            <nav className="mainmenunav d-lg-block ml--50">
              <Scrollspy
                className="mainmenu"
                items={["about", "portfolio", "contact"]}
                currentClassName="is-current"
                offset={-200}
              >
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#portfolio">Projects</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </Scrollspy>
            </nav>
          </div>
          <div className="header-right">
            <div className="social-share-inner">
              <ul className="social-share social-style--2 color-black d-flex justify-content-start liststyle">
                {SocialMediaLinks.map((val, i) => (
                  <li key={i}>
                    <a href={`${val.link}`}>{val.Social}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
