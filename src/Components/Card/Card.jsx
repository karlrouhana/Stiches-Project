import React from 'react';
import './card.css';

const Card = (props) => {
    return (
        <div className='card'>
            {props.star ?
                <div class="card__content">
                    <img src="" alt="" />
                    <p>{props.value}</p>
                </div>
                :
                <p>{props.value}</p>
            }
        </div>
    )
}

export default Card
