import { useState, useEffect } from 'react';

const useIsMobile = (threshold = 1050) => {
    // Initialize state based on window width if window is defined
    const [isMobile, setIsMobile] = useState(() => {
        if (typeof window !== 'undefined') {
            return window.innerWidth < threshold;
        }
        return false; // Default value for server-side rendering
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleResize = () => {
                setIsMobile(window.innerWidth < threshold);
            };

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, [threshold]);

    return isMobile;
};

export default useIsMobile;
