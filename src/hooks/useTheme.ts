import { useEffect, useState } from 'react';

export const useTheme = () => {
    const [theme, setTheme] = useState<string>(() => {
        // Check localStorage for a saved theme
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) return savedTheme;

        // Default to system preference
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    });

    // Function to toggle theme
    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    return { theme, toggleTheme };
};
