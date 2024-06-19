import React from 'react';
import { motion } from 'framer-motion';
import './button.css';

const Button = (props) => {
    const getClassForColor = () => {
        switch (props.color) {
            case 'yellow':
                return 'btn-yellow';
            case 'pink':
                return 'btn-pink';
            case 'green':
                return 'btn-green';
            default:
                return '';
        }
    };

    const buttonVariants = {
        initial: { opacity: 0, y: -10 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        hover: {
            translateY: 5,
            boxShadow: "0px 0px 0px 0px rgba(0, 0, 0, 0)",
            transition: { duration: 0.3 },
        }
    };

    return (
        <motion.button
            className={`button ${getClassForColor()} ${props.large ? 'btn-large' : ''}`}
            variants={buttonVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
        >
            {props.value}
        </motion.button>
    );
};

export default Button;
