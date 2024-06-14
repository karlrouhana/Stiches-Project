import React from 'react';
import star from '../../Assets/Images/star.webp';
import './card.css';

const Card = (props) => {
    return (
        <div className={`card ${props.star ? 'card__star' : ''}`}>
            {props.star ?
                <div class="card__content">
                    <img src={star} alt="star" />
                    <p>{props.value}</p>
                </div>
                :
                <p>{props.value}</p>
            }
        </div >
    )
}

export default Card
