import React from 'react';
import Stage from '../../Components/Stage/Stage';
import Heading from '../../Components/Heading/Heading';
import Pic from '../../Assets/LandingPageAssets/stars.svg';
import './education.css';

const Education = () => {
    return (
        <div className='education'>
            <div className="education__image">
                <img src={Pic} alt="Pic" />
            </div>
            <div className="education__content">
                <Heading title='Why Education Basket?' subtitle='Smoother Educational Journeys' />
                <div className="education__content-stages">
                    <Stage
                        heading='Streamlined Application Submission'
                        content='Apply to multiple institutions seamlessly through one platform, simplifying the process.'
                        color='yellow'
                    />
                    <Stage
                        heading='Tailored Career Guidance'
                        content='Identify ideal programs with an industry-approved career test, tailored to match your interests and goals.'
                        color='green'
                        faded={true}
                    />
                    <Stage
                        heading='Extensive University Directory'
                        content='Explore over 300 universities conveniently in one place, broadening your options.'
                        color='pink'
                        faded={true}
                    />
                    <Stage
                        heading='Integrated Application Management'
                        content='Efficiently track and manage applications from start to finish within the platform, ensuring nothing falls through the cracks.'
                        color='blue'
                        faded={true}
                    />
                </div>
            </div>
        </div>
    )
}

export default Education;
