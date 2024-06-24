import { motion, useInView } from 'framer-motion';
import favPic from '../../Assets/LandingPageAssets/favourite.svg';
import miniTest from '../../Assets/LandingPageAssets/minitest.svg';
import './testimonials.css';
import useIsMobile from '../../Hooks/useIsMobile';
import Heading from '../../Components/Heading/Heading';

const Testimonials = () => {
    const isMobile = useIsMobile(768);

    const container = {
        hiddenL: { x: -100 },
        hiddenR : {x: 100},
        show: {
            x: 0,
            transition: {
                duration: 1
            }
        }
    };

    return (
        <div className='testimonials' >
            {isMobile ?
                <motion.div
                    className='testimonials__heading'
                    initial='hiddenL'
                    whileInView='show'
                    variants={container}
                    viewport={{ once: true }}
                >
                    <Heading title='Testimonials' subtitle='Hear From Students' />
                    <img src={miniTest} alt="pic" />
                </motion.div> :
                <motion.div
                    className='testimonials__image'
                    initial='hiddenL'
                    whileInView='show'
                    variants={container}
                    viewport={{ once: true }}
                >
                    <img src={favPic} alt="pic" />
                </motion.div>
            }
            <motion.div
                className='testimonials__content'
                initial='hiddenR'
                whileInView='show'
                variants={container}
                viewport={{ once: true }}
            >
                {!isMobile && <Heading title='Testimonials' subtitle='Hear From Students' />}
                <p>Before taking the career test, I felt lost, with a myriad of interests but no clear direction. The test was a revelation, pinpointing my aptitude for design—a field I'd always been passionate about but never considered seriously. With my newfound clarity, I turned to EB, which simplified the daunting task of applying to universities. Their streamlined process and support gave me the confidence to aim high.</p>
                <div className="testimonials__content-credits">
                    <span>Posted by <p>Antonio, Aspiring Designer</p></span>
                    <span>on July 6, 2024</span>
                </div>
            </motion.div>
        </div>
    )
}

export default Testimonials;
