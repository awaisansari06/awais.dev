import React, { useEffect } from 'react';
import { About } from '../components/About';

export const AboutPage: React.FC = () => {
    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-20">
            <About />
        </div>
    );
};
