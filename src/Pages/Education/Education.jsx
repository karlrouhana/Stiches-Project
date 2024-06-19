import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Stage from '../../Components/Stage/Stage';
import Heading from '../../Components/Heading/Heading';
import Pic from '../../Assets/LandingPageAssets/stars.svg';
import './education.css';

const Education = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { triggerOnce: true });
    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1 });
        }
    }, [controls, inView]);

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.25
            },
        },
    }

    const item = {
        hidden: { x: 2000 },
        show: { x: 0 },
    }

    const stages = [
        {
            heading: 'Streamlined Application Submission',
            content: 'Apply to multiple institutions seamlessly through one platform, simplifying the process.',
            color: 'yellow',
        },
        {
            heading: 'Tailored Career Guidance',
            content: 'Identify ideal programs with an industry-approved career test, tailored to match your interests and goals.',
            color: 'green',
            faded: true,
        },
        {
            heading: 'Extensive University Directory',
            content: 'Explore over 300 universities conveniently in one place, broadening your options.',
            color: 'pink',
            faded: true,
        },
        {
            heading: 'Integrated Application Management',
            content: 'Efficiently track and manage applications from start to finish within the platform, ensuring nothing falls through the cracks.',
            color: 'blue',
            faded: true,
        },
    ];

    return (
        <motion.div
            className='education'
            initial={{ opacity: 0 }}
            animate={controls}
            ref={ref}
        >
            <div className="education__image">
                <img src={Pic} alt="Pic" />
            </div>
            <div className="education__content">
                <Heading title='Why Education Basket?' subtitle='Smoother Educational Journeys' />
                <motion.div
                    className="education__content-stages"
                    variants={container}
                    initial="hidden"
                    animate="show"
                >
                    {stages.map((stage, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                        >
                            <Stage
                                heading={stage.heading}
                                content={stage.content}
                                color={stage.color}
                                faded={stage.faded}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Education;
