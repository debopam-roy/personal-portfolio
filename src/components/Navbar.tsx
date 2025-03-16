import { useState } from 'react';
import { IoMenu } from 'react-icons/io5'; // Hamburger icon
import logo_dark from '../assets/images/logo_dark.png';
import logo_light from '../assets/images/logo_light.png';
import SocialButton from './SocialButton';
import { useTheme } from '../hooks/useTheme';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useTheme(); // Use theme hook
    const [activeLink, setActiveLink] = useState('Home'); // Track active link

    const navLinks = ['Home', 'About', 'Work', 'Services', 'Contact'];

    const handleNavClick = (section: string) => {
        setActiveLink(section);
        document.getElementById(section.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
    };

    return (
        <nav className='fixed top-0 left-0 w-full h-20 shadow-lg flex items-center bg-white dark:bg-neutral-950 transition-colors duration-300 z-50 overflow-auto'>
            <div className='container mx-auto flex justify-between items-center px-6 h-full'>
                {/* Left: Menu Button + Logo */}
                <div className='flex items-center gap-x-2'>
                    <button
                        className={`md:hidden transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                        onClick={() => setIsOpen(!isOpen)}>
                        <IoMenu size={30} />
                    </button>

                    {/* Logo changes based on theme */}
                    <img
                        className='w-20 cursor-pointer'
                        src={theme === 'light' ? logo_light : logo_dark}
                        alt='Logo'
                        onClick={() => handleNavClick('Home')}
                    />
                </div>

                {/* Center: Navigation Links */}
                <ul className='hidden md:flex items-center space-x-2 uppercase'>
                    {navLinks.map((item) => (
                        <li
                            key={item}
                            onClick={() => handleNavClick(item)}
                            className={`cursor-pointer font-semibold px-4 py-2 rounded-lg transition duration-300 ${
                                activeLink === item ? 'bg-gray-200 dark:bg-zinc-700' : 'bg-none'
                            }`}>
                            {item}
                        </li>
                    ))}
                </ul>

                {/* Right: Theme Toggle */}
                <div className='md:flex gap-x-4 cursor-pointer rounded-full' onClick={toggleTheme}>
                    <SocialButton social_media={theme === 'dark' ? 'dark_mode' : 'light_mode'} icon_size='medium' />
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden fixed top-20 left-0 w-3/4 h-[calc(100vh-3rem)] overflow-y-auto shadow-xl transform bg-white dark:bg-neutral-950 
        ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'} 
        transition-all duration-300 ease-in-out z-50`}>
                {/* Profile Section */}
                <div className='p-6'>
                    <p className='font-bold text-lg'>Debopam Roy</p>
                    <p className='text-sm'>
                        Executive Software Developer @ Feedsense AI | Full Stack Developer | Freelancer | Masters'23
                    </p>
                </div>

                {/* Divider */}
                <div className='flex items-center justify-center'>
                    <hr className='border-[var(--color-divider-light)] dark:border-[var(--color-divider-dark)] w-1/3' />
                </div>

                {/* Mobile Navigation Links */}
                <ul className='flex flex-col space-y-6 p-6 font-medium uppercase'>
                    {navLinks.map((item) => (
                        <li
                            key={item}
                            onClick={() => handleNavClick(item)}
                            className={`cursor-pointer font-semibold px-4 py-2 rounded-md transition duration-300 ${
                                activeLink === item ? 'bg-gray-200 dark:bg-zinc-700' : 'bg-none'
                            }`}>
                            {item}
                        </li>
                    ))}
                </ul>

                {/* Divider */}
                <div className='flex items-center justify-center'>
                    <hr className='border-[var(--color-divider-light)] dark:border-[var(--color-divider-dark)] w-1/3' />
                </div>

                {/* Social Links */}
                <div className='p-6 space-y-4 mb-10'>
                    <p className='font-semibold'>Let's Connect</p>

                    <div className='flex gap-x-4'>
                        <a href='https://github.com/debopam-roy' target='_blank' rel='noopener noreferrer'>
                            <SocialButton social_media='github' icon_size='large' />
                        </a>
                        <a href='https://leetcode.com/u/debo_roy10/' target='_blank' rel='noopener noreferrer'>
                            <SocialButton social_media='leetcode' icon_size='large' />
                        </a>
                        <a
                            href='https://www.hackerrank.com/profile/debo_roy79'
                            target='_blank'
                            rel='noopener noreferrer'>
                            <SocialButton social_media='hackerrank' icon_size='large' />
                        </a>
                        <a
                            href='https://www.hackerrank.com/profile/debo_roy79'
                            target='_blank'
                            rel='noopener noreferrer'>
                            <SocialButton social_media='codeforces' icon_size='large' />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
