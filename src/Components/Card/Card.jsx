import React from 'react';
import {motion} from 'framer-motion';
import star from '../../Assets/Images/star.png';
import './card.css';

const Card = (props) => {
    const cardVariants = {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0.5 } },
        hover: {
            x: 2,
            y: 2,
            boxShadow: "0px 0px 0px 0px rgba(0, 0, 0, 0)",
            transition: { duration: 0.3 },
        }
    };

    return (
        <motion.div 
            className={`card ${props.star ? 'card__star' : ''}`} 
            initial='initial'
            animate='animate'
            whileHover='hover'
            variants={cardVariants}
        >
            {props.star ?
                <div className="card__content">
                    <img src={star} alt="star" />
                    <p>{props.value}</p>
                </div>
                :
                <p>{props.value}</p>
            }
        </motion.div>
    )
}

export default Card;
