import React from 'react';
import dots from '../../Assets/LandingPageAssets/dots.svg';
import './stage.css';


const Stage = (props) => {
    const getClassForColor = () => {
        switch (props.color) {
            case 'yellow':
                return 'stage-yellow';
            case 'pink':
                return 'stage-pink';
            case 'green':
                return 'stage-green';
            default:
                return '';
        }
    };

    return (
        <div className={`stage ${props.faded ? 'faded' : ''}`}>
            <div className={`stage__header ${getClassForColor()}`}>
                <p>{props.title}</p>
                <img src={dots} alt="dots" />
            </div>

            <div className='stage__content'>
                <p>{props.content}</p>
            </div>
        </div>
    )
}

export default Stage
