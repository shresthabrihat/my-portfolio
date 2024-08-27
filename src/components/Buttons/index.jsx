import { useState, useEffect } from 'react';
import "./styles.css"

export default () => {
    // State to manage the color toggle
    const [isRed, setIsRed] = useState(false);

    // Function to toggle the header color
    const toggleColor = () => {
        setIsRed(!isRed);
    };

    // Function to change the header color to red
    const changeColor = () => {
        document.querySelector('h1').style.color = 'red';
    };

    // Function to change the header color back to the original
    const changeColorBack = () => {
        document.querySelector('h1').style.color = '#6a5d19';
    };

    // Apply the toggle color
    useEffect(() => {
        const header = document.querySelector('h1');
        header.style.color = isRed ? 'red' : '#6a5d19';
    }, [isRed]);

    return (
        <div className="button-container">
            <button className="btn color" onClick={changeColor}>Change Header Color</button>
            <button className="btn color" onClick={changeColorBack}>Change Header Color Back</button>
            <button className="btn color" onClick={toggleColor}>Toggle Header Color</button>
        </div>
    );
};
