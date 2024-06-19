import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

const useScrollAnimation = (selector) => {
    const controls = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            const elements = document.querySelectorAll(selector);
            if (elements) {
                elements.forEach(element => {
                    const elementTop = element.getBoundingClientRect().top;
                    const screenHeight = window.innerHeight;
                    if (elementTop < screenHeight * 0.8) {
                        controls.start({
                            opacity: 1,
                            transition: { duration: 0.5 },
                        });
                    }
                });
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [controls, selector]);

    return controls;
};

export default useScrollAnimation;
