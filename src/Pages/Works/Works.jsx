import React, { useEffect, useState } from 'react';
import Card from '../../Components/Card/Card';
import steps from '../../Assets/LandingPageAssets/Steps.svg';
import uploadImg from '../../Assets/LandingPageAssets/uploadA.svg';
import qr from '../../Assets/LandingPageAssets/qrCode.svg';
import mobilePic from '../../Assets/LandingPageAssets/ministeps.svg';
import Heading from '../../Components/Heading/Heading';
import Button from '../../Components/Button/Button';
import useIsMobile from '../../Hooks/useIsMobile';
import './works.css';

const Works = () => {
    const isMobile = useIsMobile(1050);

    return (
        <div className='works'>
            <div className='works__steps'>
                <div className="works__steps-heading">
                    <Heading title='How It Works' subtitle='Quick, Easy & Actionable' />
                    <Button value='Apply Now' color='yellow' large={true} />
                </div>
                <img src={isMobile ? mobilePic : steps} alt="steps" />
            </div>
            <div className='works__footer'>
                <div className="works__footer-cards">
                    <Card value={`${isMobile ? '' : 'A'} Network Of 350 Partner Universities ${isMobile ? '' : 'Spanning Across 30 Countries'}`} star={true} />
                    <Card value={`${isMobile ? '' : 'Backed By'} 10 Years Of Experience In Service`} star={true} />
                    <Card value={`${isMobile ? 'Over' : 'More Than'} 7,000 Applications Opened`} star={true} />
                    <Card value={`${isMobile ? '+' : 'Over'}2,000 Students Enrolled`} star={true} />
                </div>
                <div className='works__footer-image'>
                    <img src={uploadImg} alt="image" />
                </div>
            </div>
            <div className="works__newsletter">
                <div className="works__newsletter-content">
                    <p>Subscribe To Our Newsletter</p>
                    <form>
                        <input type='email' placeholder='ex: janegilmour@gmail.com'/>
                        <button>{`${isMobile ? 'Subscribe' : 'Subscribe Now'}`}</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Works;
