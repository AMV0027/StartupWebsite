import React from 'react';
import './BlinkingStars.css'; // Import the CSS file for styling

const BlinkingStars = () => {
    const stars = Array.from({ length: 100 }).map((_, index) => (
        <div key={index} className="star" />
    ));

    return (
        <div className="starfield">
            {stars}
        </div>
    );
};

export default BlinkingStars;