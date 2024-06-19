import React from 'react';
import {motion} from 'framer-motion';
import dots from '../../Assets/LandingPageAssets/dots.svg';
import './stage.css';

const Stage = (props) => {
    const stageVariants = {
        animate: { transition: props.transition },
        hover: {
            x: 2,
            y: 2,
            boxShadow: "0px 0px 0px 0px rgba(0, 0, 0, 0)",
            transition: { duration: 0.3, delay: 0},
        }
    };

    const getClassForColor = () => {
        switch (props.color) {
            case 'yellow':
                return 'stage-yellow';
            case 'pink':
                return 'stage-pink';
            case 'green':
                return 'stage-green';
            case 'blue':
                return 'stage-blue';
            default:
                return '';
        }
    };

    return (
        <motion.div 
            className={`stage ${props.faded ? 'faded' : ''}`}
            whileHover='hover'
            variants={stageVariants}
            {...props}
            >
            <div className={`stage__header ${getClassForColor()}`}>
                <p>{props.heading}</p>
                <img src={dots} alt="dots" />
            </div>
            <div className='stage__content'>
                <p>{props.content}</p>
            </div>
        </motion.div>
    )
}

export default Stage;
