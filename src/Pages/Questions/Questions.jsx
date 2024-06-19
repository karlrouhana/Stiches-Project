import React, { useEffect, useState } from 'react';
import Card from '../../Components/Card/Card';
import questionPic from '../../Assets/LandingPageAssets/exclamations.svg';
import useIsMobile from '../../Hooks/useIsMobile';
import './questions.css';

const Questions = () => {
    const isMobile = useIsMobile;

    return (
        <div className='questions'>
            <div className="questions__heading">
                <div className="questions__heading-content">
                    <p>Answers to Your Questions</p>
                    <h1>Frequently Asked Questions </h1>
                </div>
                {!isMobile && <img src={questionPic} alt="pic" />}
            </div>

            <div className="questions__cards">
                <Card value='Q1 : How do I get started with the application process?' />
                <Card value='Q2 : What types of programs are available at partner universities?' />
                <Card value='Q3 : Can I receive financial aid or scholarships for studying abroad?' />
                <Card value='Q4: What support is provided to students during the application process?' />
                <Card value='Q5: Are there language requirements for applying to universities?' />
            </div>
        </div>
    )
}

export default Questions;
