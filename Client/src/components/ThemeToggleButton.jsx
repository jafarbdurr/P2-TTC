// ThemeToggleButton.js
import React from 'react';
import { useTheme } from './ThemeContext';

const ThemeToggleButton = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme}>
            Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
    );
};

export default ThemeToggleButton;
