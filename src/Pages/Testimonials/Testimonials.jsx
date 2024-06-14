import React from 'react';
import favPic from '../../Assets/LandingPageAssets/favourite.svg';
import './testimonials.css';
import Heading from '../../Components/Heading/Heading';

const Testimonials = () => {
    return (
        <div className='testimonials'>
            <div className='testimonials__image'>
                <img src={favPic} alt="pic" />
            </div>
            <div className='testimonials__content'>
                <Heading title='Testimonials' subtitle='Hear From Students' />
                <p>Before taking the career test, I felt lost, with a myriad of interests but no clear direction. The test was a revelation, pinpointing my aptitude for design—a field I'd always been passionate about but never considered seriously. With my newfound clarity, I turned to EB, which simplified the daunting task of applying to universities. Their streamlined process and support gave me the confidence to aim high.</p>
                <div className="testimonials__content-credits">
                    <span>Posted by <p>Antonio, Aspiring Designer</p></span>
                    <span>on July 6, 2024</span>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
