import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '../../Components/Button/Button';
import Pic1 from '../../Assets/LandingPageAssets/confused.svg';
import Pic2 from '../../Assets/LandingPageAssets/browsingUnis.svg';
import Pic3 from '../../Assets/LandingPageAssets/education.svg';
import Pic4 from '../../Assets/LandingPageAssets/yellowCheck.svg';
import MobilePic from '../../Assets/LandingPageAssets/minibrowse.svg';
import useIsMobile from '../../Hooks/useIsMobile';
import './home.css';

const Home = () => {
    const isMobile = useIsMobile(1050);

    const container = {
        hidden: { opacity: 0, scale: 0.4 },
        show: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1
            }
        }
    }

    const imageVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                duration: 1,
                delay: 1
            }
        }
    }

    return (
        <div className='home'>
            <motion.div
                className='home__content'
                variants={container}
                initial='hidden'
                animate='show'
            >
                <h1>Elevate Your Learning Experience Aboard</h1>
                <p>Education Basket is a platform empowering students to seamlessly apply to multiple universities worldwide through a single application, backed by expert counselors every step of the way.</p>
                <div className='home__content-buttons'>
                    <Button value='Get Started' color='yellow' large={true} />
                    <Button value='How it Works?' color='green' large={true} />
                </div>
            </motion.div>
            <div className="home__lines">
                <motion.div
                    className="line-1"
                    variants={imageVariants}
                    initial='hidden'
                    animate='show'
                >
                    <img
                        src={Pic1}
                        alt="Image for Line 1"
                        className="line-image"
                    />
                </motion.div>
                <motion.div
                    className="line-2"
                    variants={imageVariants}
                    initial='hidden'
                    animate='show'
                >
                </motion.div>
                <motion.div
                    className="line-3"
                    variants={imageVariants}
                    initial='hidden'
                    animate='show'>
                    <img
                        src={isMobile ? MobilePic : Pic2}
                        alt="Image for Line 3"
                        className="line-image"
                    />
                </motion.div>
                <motion.div
                    className="line-4"
                    variants={imageVariants}
                    initial='hidden'
                    animate='show'>
                    <div className="line-4__content">
                        <span>In Less Than 15Mins</span>
                        <div className='line-4__content-title'>
                            <h1>Take Your</h1>
                            <img src={Pic4} alt="Pic4" />
                            <h1>Career Test</h1>
                        </div>
                        <p>Unearth your optimal career path in a mere 15-minute span using our complimentary assessment, and commence sculpting your professional journey at absolutely no cost.</p>
                        <Button value='Start For Free' color='yellow' large={true} />
                    </div>
                    {isMobile && <img src={Pic3} alt="pic3" className='line-4__image' />}
                </motion.div>
            </div>
        </div>
    );
};

export default Home;
