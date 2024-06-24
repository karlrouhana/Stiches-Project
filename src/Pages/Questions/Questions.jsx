import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';
import questionPic from '../../Assets/LandingPageAssets/exclamations.svg';
import Card from '../../Components/Card/Card';
import useIsMobile from '../../Hooks/useIsMobile';
import './questions.css';

const Questions = () => {
    const isMobile = useIsMobile(1050);

    const cards = [
        'Q1: How do I get started with the application process?',
        'Q2: What types of programs are available at partner universities?',
        'Q3: Can I receive financial aid or scholarships for studying abroad?',
        'Q4: What support is provided to students during the application process?',
        'Q5: Are there language requirements for applying to universities?',
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.25,
                delayChildren: 0.5,
            },
        },
    };

    const item = {
        hidden: { x: 2000 },
        show: { x: 0 },
    };

    return (
        <motion.div className='questions'>
            <div className="questions__heading">
                <div className="questions__heading-content">
                    <p>Answers to Your Questions</p>
                    <h1>Frequently Asked Questions</h1>
                </div>
                {!isMobile && <img src={questionPic} alt="Questions Illustration" />}
            </div>
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                className="questions__cards"
                viewport={{ once: true }}
            >
                {cards.map((card, index) => (
                    <motion.div
                        key={index}
                        variants={item}
                    >
                        <Card value={card} />
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
}

export default Questions;
