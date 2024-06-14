import React from 'react';
import logo from '../../Assets/Images/logo.webp';
import { FaInstagram, FaFacebookSquare, FaLinkedin} from "react-icons/fa";
import './footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer__left">
                <div className="footer__left-content">
                    <img src={logo} alt="logo" />
                </div>
                <div className='footer__left__bottom'>
                    <div className='footer__left__bottom-social-links'>
                        <FaInstagram />
                        <FaFacebookSquare />
                        <FaLinkedin />
                    </div>
                    <p>Copyright 2024 Education Basket Kuwait Company For Conferences And Exhibitions, Developed By Stitches Studios.</p>
                </div>
            </div>
            <div className="footer__right">
                <div className='footer__right-col1'>
                    <p>Career Test</p>
                    <ul>
                    <p>Media Center</p>
                        <li><a href="">News</a></li>
                        <li><a href="">Webinars</a></li>
                        <li><a href="">Alumni Closeups</a></li>
                    </ul>
                    <p>For Education Institutions</p>
                </div>

                <div className='footer__right-col2'>
                    <ul>
                    <p>Helpful Links</p>

                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">Terms & Conditions</a></li>
                    </ul>

                    <ul>
                    <p>Reach Out To Us At</p>
                    <li><a href=''>info@educationbasket.com</a></li>
                    </ul>
                    
                    
                </div>
            </div>
            <div className="footer__bottom">
                <p>Disclaimer : The test is designed to be both thorough and time-efficient, taking less than 15 minutes to complete. The test is designed to be both thorough and time-efficient, taking less than 15 minutes to complete.The test is designed to be both thorough and time-efficient, taking less than 15 minutes to complete.Disclaimer : The test is designed to be both thorough and time-efficient, taking less than 15 minutes to complete. The test is designed to be both thorough and time-efficient, taking less than 15 minutes to complete.The test is designed to be both thorough and time-efficient, taking less than 15 minutes to complete.Disclaimer : The test is designed to be both thorough and time-efficient, taking less than 15 minutes to complete. The test is designed to be both thorough and time-efficient, taking less than 15 minutes to complete.The test is designed to be both thorough and time-efficient, taking less than 15 minutes to complete.Disclaimer : The test is designed to be both thorough and time-efficient, taking less than 15 minutes to complete. The test is designed to be both thorough and time-efficient, taking less than 15 minutes to complete.The test is designed to be both thorough and time-efficient, taking less than 15 minutes to complete.</p>
            </div>
        </div>
    )
}

export default Footer;
