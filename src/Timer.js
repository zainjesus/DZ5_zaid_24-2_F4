import { useState, useEffect } from 'react';

const Timer = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds(seconds + 1);
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, [seconds]); 

    return (
        <div>
            <p>Timer: {seconds} seconds</p>
        </div>
    );
};

export default Timer;
