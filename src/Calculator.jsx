import React, { useState } from 'react';
import Button from './Button';
import './App.css';

export default function Calculator() {
    const [display, setDisplay] = useState('');
    const buttons = [
        "7", "8", "9", "/",
        "4", "5", "6", "*",
        "1", "2", "3", "-",
        "0", ".", "=", "+",
        "Clear"
    ];

    const handleClick = (label) => {
        if (label === "Clear") {
            setDisplay('');
        } else if (label === "=") {
            try {
                setDisplay(eval(display).toString());
            } catch {
                setDisplay('Error');
            }
        } else {
            setDisplay(display + label);
        }
    };

    return (
        <div className="calculator">
            <div className="display">{display}</div>
            <div className="buttons">
                {buttons.map((button, i) => <Button key={i} label={button} handleClick={handleClick} />)}
                </div>    
        </div>
    );
}
