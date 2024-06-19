import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import favPic from '../../Assets/LandingPageAssets/favourite.svg';
import miniTest from '../../Assets/LandingPageAssets/minitest.svg';
import './testimonials.css';
import useIsMobile from '../../Hooks/useIsMobile';
import Heading from '../../Components/Heading/Heading';

const Testimonials = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const isMobile = useIsMobile(768);

    return (
        <div className='testimonials' ref={ref} >
            {isMobile ?
                <div className='testimonials__heading'>
                    <Heading title='Testimonials' subtitle='Hear From Students' />
                    <img src={miniTest} alt="pic" />
                </div> :
                <div className='testimonials__image'
                    style={{
                        transform: isInView ? "none" : "translateX(-1000px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                    }}
                >
                    <img src={favPic} alt="pic" />
                </div>
            }
            <div 
                className='testimonials__content'
                style={{
                    transform: isInView ? "none" : "translateX(1000px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}
            >
                {!isMobile && <Heading title='Testimonials' subtitle='Hear From Students' />}
                <p>Before taking the career test, I felt lost, with a myriad of interests but no clear direction. The test was a revelation, pinpointing my aptitude for design—a field I'd always been passionate about but never considered seriously. With my newfound clarity, I turned to EB, which simplified the daunting task of applying to universities. Their streamlined process and support gave me the confidence to aim high.</p>
                <div className="testimonials__content-credits">
                    <span>Posted by <p>Antonio, Aspiring Designer</p></span>
                    <span>on July 6, 2024</span>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;

