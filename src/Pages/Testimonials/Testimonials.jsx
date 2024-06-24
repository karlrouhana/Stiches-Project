import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import favPic from '../../Assets/LandingPageAssets/favourite.svg';
import miniTest from '../../Assets/LandingPageAssets/minitest.svg';
import './testimonials.css';
import useIsMobile from '../../Hooks/useIsMobile';
import Heading from '../../Components/Heading/Heading';
import { useDispatch, useSelector } from 'react-redux';
import { getTestimonialsAction } from '../../Redux/testimonialsActions';
import { format } from 'date-fns';

const Testimonials = () => {
    const dispatch = useDispatch();
    const testimonials = useSelector(state => state.testimonials.getTestimonials);
    const isMobile = useIsMobile(768);
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    useEffect(() => {
        dispatch(getTestimonialsAction());
    }, [dispatch]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial((prevIndex) => 
                prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [testimonials]);

    const container = {
        hiddenL: { x: -100 },
        hiddenR : {x: 100},
        show: {
            x: 0,
            transition: {
                duration: 1
            }
        }
    };

    const fadeVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    };

    return (
        <div className='testimonials'>
            {isMobile ?
                <motion.div
                    className='testimonials__heading'
                    initial='hiddenL'
                    whileInView='show'
                    variants={container}
                    viewport={{ once: true }}
                >
                    <Heading title='Testimonials' subtitle='Hear From Students' />
                    <img src={miniTest} alt="pic" />
                </motion.div> :
                <motion.div
                    className='testimonials__image'
                    initial='hiddenL'
                    whileInView='show'
                    variants={container}
                    viewport={{ once: true }}
                >
                    <img src={favPic} alt="pic" />
                </motion.div>
            }
            <motion.div
                className='testimonials__content'
                initial='hiddenR'
                whileInView='show'
                variants={container}
                viewport={{ once: true }}
            >
                {!isMobile && <Heading title='Testimonials' subtitle='Hear From Students' />}
                {testimonials.length > 0 && (
                    <motion.div
                        className='testimonials__content'
                        key={currentTestimonial}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={fadeVariants}
                        transition={{ duration: 2 }}
                    >
                        <p>{testimonials[currentTestimonial].content}</p>
                        <div className="testimonials__content-credits">
                            <span>Posted by <p>{testimonials[currentTestimonial].createdBy}, {testimonials[currentTestimonial].position}</p></span>
                            <span>on {format(new Date(testimonials[currentTestimonial].createdAt), 'MMMM d, yyyy')}</span>
                        </div>
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
}

export default Testimonials;
