import React from 'react';
import './heading.css';

const Heading = (props) => {
  return (
    <div className='heading'>
        <p>{props.subtitle}</p>
        <h1>{props.title}</h1>
    </div>
  )
}

export default Heading
