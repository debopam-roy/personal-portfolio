import { motion } from 'framer-motion';
import SocialButton from './SocialButton';
import { FiDownload } from 'react-icons/fi';
import Typewriter from 'typewriter-effect';

const Dashboard = () => {
    return (
        <div
            id='home'
            className='relative w-full h-screen p-6 md:p-10 lg:p-16 flex flex-col pt-22 bg-gray-200 dark:bg-gray-600'>
            {/* Main Content */}
            <div className='flex flex-1 flex-col-reverse md:flex-row items-center'>
                {/* Left Empty Div (Moves to Bottom in Mobile) */}
                <div className='flex-1 hidden md:block'></div>

                {/* Right Content */}
                <div className='flex-1 flex flex-col justify-center items-start gap-y-6'>
                    {/* Blue Line */}
                    <div className='w-16 md:w-24 h-[4px] bg-blue-600 dark:bg-blue-500 rounded'></div>

                    {/* Tagline */}
                    <p className='text-base md:text-lg lg:text-xl'>LET'S BUILD SOMETHING TOGETHER</p>

                    {/* Name and Role */}
                    <div className='flex flex-col gap-y-3'>
                        <p className='text-4xl md:text-6xl lg:text-7xl font-[dm]'>Hi, I'm Debopam</p>
                        <div className='flex items-center gap-x-2'>
                            <p className='text-2xl md:text-4xl font-bold'>I'm a</p>
                            <span className='font-bold text-3xl md:text-5xl text-blue-600 dark:text-blue-500'>
                                <Typewriter
                                    options={{
                                        strings: ['Coder', 'Developer', 'Designer', 'Freelancer', 'Mentor'],
                                        autoStart: true,
                                        loop: true,
                                        delay: 150,
                                        deleteSpeed: 100,
                                    }}
                                />
                            </span>
                        </div>
                    </div>

                    {/* Download CV Button */}
                    <div className='py-2 space-y-2'>
                        <p className='text-base md:text-lg'>Want to know more about me?</p>
                        <div className='flex items-center gap-x-3 border border-gray-300 dark:border-gray-600 py-3 px-5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-300 shadow-md font-[delius] font-bold cursor-pointer'>
                            <FiDownload className='text-lg md:text-xl' />
                            <div className='h-5 w-px bg-gray-300 dark:bg-gray-600'></div>
                            <p className='text-sm md:text-lg'>Download CV</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Social Buttons */}
            <motion.div
                initial={{ x: -100, opacity: 0 }} // Change x from 100 to -100 for left-side animation
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 100, damping: 10, mass: 2 }}
                className='hidden md:flex absolute bottom-6 left-6 flex-col gap-y-4 p-4'>
                <a href='https://github.com/debopam-roy' target='_blank' rel='noopener noreferrer'>
                    <SocialButton social_media='github' icon_size='large' />
                </a>
                <a href='https://leetcode.com/u/debo_roy10/' target='_blank' rel='noopener noreferrer'>
                    <SocialButton social_media='leetcode' icon_size='large' />
                </a>
                <a href='https://www.hackerrank.com/profile/debo_roy79' target='_blank' rel='noopener noreferrer'>
                    <SocialButton social_media='hackerrank' icon_size='large' />
                </a>
            </motion.div>
        </div>
    );
};

export default Dashboard;
