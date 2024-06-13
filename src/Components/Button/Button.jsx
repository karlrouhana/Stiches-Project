import React from 'react';
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

    return (
        <button className={`button ${getClassForColor()} ${props.large ? 'btn-large' : ''}`}>
            {props.value}
        </button>
    );
};

export default Button;
