import React from 'react';
import Button from '../../Components/Button/Button';
import Pic1 from '../../Assets/LandingPageAssets/confused.svg';
import Pic2 from '../../Assets/LandingPageAssets/browsingUnis.svg';
import Pic3 from '../../Assets/LandingPageAssets/education.svg';
import './home.css';

const Home = () => {
    return (
        <div className='home'>
            <div className='home__content'>
                <h1>Elevate Your Learning Experience Aboard</h1>
                <p>Education Basket is a platform empowering students to seamlessly apply to multiple universities worldwide through a single application, backed by expert counselors every step of the way.</p>
                <div className='home__content-buttons'>
                    <Button value='Get Started' color='yellow' large={true} />
                    <Button value='How it Works?' color='green' large={true} />
                </div>
            </div>
            <div className="home__lines">
                <div className="line-1">
                    <img src={Pic1} alt="Image for Line 1" className="line-image" />
                </div>
                <div className="line-2"></div>
                <div className="line-3">
                    <img src={Pic2} alt="Image for Line 3" className="line-image" />
                </div>
                <div class="line-4">
                    <div class="line-4__content">

                    </div>
                    <img src={Pic3} alt="pic3" />
                </div>
            </div>
        </div>
    );
};

export default Home;
