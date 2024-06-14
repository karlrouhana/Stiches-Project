import React from 'react';
import { useState } from 'react';
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
    };

    const handleLinkClick = () => {
        setToggleMenu(false);
    };

    return (
        <nav className='navbar'>
            <div className='navbar__image'>
                <img src={logo} alt="Logo" />
            </div>

            <div className={`menu-icon ${toggleMenu ? 'close' : 'open'}`} onClick={handleMenuToggle}>
                {toggleMenu ? <RiCloseFill /> : <IoMenu />}
            </div>

            <div className={`navbar__links ${toggleMenu ? 'display__links' : 'hide__links'}`}>
                <a href=''>Career Test</a>
                <a href=''>Media Center <IoIosArrowDown /></a>
                <a href=''>For Educational Institutions <LuArrowUpRight /></a>

                <div className="navbar__links-buttons">
                    <Button value='Log in' />
                    <Button value='Sign Up' color='pink' />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
