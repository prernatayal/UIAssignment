
import { useState, useEffect } from 'react';

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = typeof window !== undefined && window;
    return {
        width,
        height
    };
}

export default function useWindowDimensions() {

    const [windowDimensions, setWindowDimensions] = useState({
        width: 0,
        height: 0
    });


    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    useEffect(() => {
        if (typeof window !== undefined) {
            setWindowDimensions(getWindowDimensions())
        }
    }, [])

    return windowDimensions;
}
