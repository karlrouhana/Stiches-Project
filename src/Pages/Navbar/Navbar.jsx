import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion'; // Importing motion from framer-motion
import Button from '../../Components/Button/Button';
import { IoIosArrowDown } from "react-icons/io";
import { LuArrowUpRight } from "react-icons/lu";
import { RiCloseFill } from "react-icons/ri";
import { IoMenu } from "react-icons/io5";
import logo from '../../Assets/LandingPageAssets/new_logo.svg';
import './navbar.css';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    const handleMenuToggle = () => {
        setToggleMenu(!toggleMenu);
        const body = document.querySelector('body');
        if (!toggleMenu) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = '';
        }
    };

    const handleLinkClick = () => {
        setToggleMenu(false);
    };

    return (
        <nav className='navbar'>
            <div className='navbar__image'>
                <img src={logo} alt="Logo" />
            </div>

            <motion.button 
                className='menu-icon' 
                onClick={handleMenuToggle}
                whileTap={{ scale: 0.9 }}
            >
                {toggleMenu ? <RiCloseFill /> : <IoMenu />}
            </motion.button>

            <div className={`navbar__links ${toggleMenu ? 'display__links' : 'hide__links'}`}>
                <a href='' onClick={handleLinkClick}>Career Test</a>
                <a href='' onClick={handleLinkClick}>Media Center <IoIosArrowDown /></a>
                <a href='' onClick={handleLinkClick}>For Educational Institutions <LuArrowUpRight /></a>

                <div className="navbar__links-buttons">
                    <Button value='Log in' onClick={handleLinkClick} />
                    <Button value='Sign Up' color='pink' onClick={handleLinkClick} />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
