import React from 'react';
import {FaTwitter ,FaInstagram ,FaFacebookF , FaLinkedinIn} from "react-icons/fa";

const SocialMediaLinks = [
    {Social: <FaFacebookF /> , link: 'https://www.facebook.com/issac.moreno.583'},
    {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/in/issac-moreno-7a9116121/'},
    {Social: <FaInstagram /> , link: 'https://www.instagram.com/_i_s_s_a_c_x/'},
    {Social: <FaTwitter /> , link: 'https://twitter.com/ExSaviour909'},
]

const F = () => {
    return (
        <div className="footer-style-2 ptb--30" data-black-overlay="6">
            <div className="wrapper plr--50 plr_sm--20">
                <div className="row align-items-center justify-content-between">
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="inner">
                            <div className="logo text-center text-sm-left mb_sm--20">
                                <a href="#">
                                    <img src="/assets/images/logo/ResumeLogo.png" alt="Logo images"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="inner text-center">
                            <ul className="social-share rn-lg-size d-flex justify-content-center liststyle">
                                {SocialMediaLinks.map((val , i) => (
                                    <li key={i}><a href={`${val.link}`}>{val.Social}</a></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                        <div className="inner text-lg-right text-center mt_md--20 mt_sm--20">
                            <div className="text">
                                <p><b>Last Update:</b> 4-05-2020</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default F;