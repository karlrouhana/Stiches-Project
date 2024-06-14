import React from 'react';
import Button from '../../Components/Button/Button';
import { IoIosArrowDown } from "react-icons/io";
import { LuArrowUpRight } from "react-icons/lu";
import logo from '../../Assets/LandingPageAssets/new_logo.svg';
import './navbar.css';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='navbar__image'>
                <img src={logo} alt="Logo" />
            </div>

            <div className='navbar__links'>
                <a href=''>Career Test</a>
                <a href=''>Media Center <IoIosArrowDown /></a>
                <a href=''>For Educational Institutions <LuArrowUpRight /></a>

                <div class="navbar__links-buttons">
                    <Button value='Log in' />
                    <Button value='Sign Up' color='pink' />
                </div>
            </div>
        </nav>
    )
}

export default Navbar
