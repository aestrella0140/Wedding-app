import React, { useState, useEffect } from "react";

const countDown = ({ targetDate }) => {

    const [timeLeft, setTimeLeft] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getItem();
            const distance = new Date(targetDate).getTime - now;

            if (distance < 0) {
                clearInterval(interval);
                setTimeLeft("The big day is here!");
            } else {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 *60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    return (
        <div>
            <p>{timeLeft}</p>
        </div>
    )
};

export default countDown;