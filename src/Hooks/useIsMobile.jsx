import { useState, useEffect } from 'react';

const useIsMobile = (threshold = 1050) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < threshold);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < threshold);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [threshold]);

    return isMobile;
};

export default useIsMobile;
