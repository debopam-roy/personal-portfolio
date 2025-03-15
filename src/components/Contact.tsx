import React from 'react';
import SocialButton from './SocialButton';

const Contact = () => {
    return (
        <div
            id='contact'
            className='w-full px-6 md:px-16 lg:px-24 py-22 bg-gray-200 dark:bg-gray-600 min-h-screen flex flex-col'>
            {/* Section Header */}
            <div className='flex flex-row gap-x-4 items-center my-8'>
                <div className='w-12 h-[4px] bg-blue-600 dark:bg-blue-500 rounded'></div>
                <p className='text-lg md:text-xl font-extrabold uppercase font-[delius]'>Get In Touch</p>
            </div>

            {/* Contact Content */}
            <div className='max-w-3xl text-gray-800 dark:text-gray-300'>
                <p className='text-lg md:text-xl font-semibold'>
                    Let’s build something incredible together! Whether you have an exciting project, an idea that needs
                    shaping, or just want to connect—I'm always open to meaningful conversations.
                </p>
                <p className='mt-4 text-md'>
                    With expertise in full-stack development, software architecture, and problem-solving, I strive to
                    craft digital experiences that are **innovative, scalable, and efficient**. If you're looking for a
                    passionate developer to bring your vision to life, let's collaborate.
                </p>
                <p className='mt-4 text-md'>
                    Feel free to reach out via email, connect with me on social platforms, or drop a message below. I’ll
                    do my best to get back to you as soon as possible!
                </p>
            </div>

            {/* Contact Details */}
            <div className='mt-8 flex md:flex-row gap-6'>
                <SocialButton social_media='linkedin' icon_size='large' />
                <SocialButton social_media='twitter' icon_size='large' />
                <SocialButton social_media='discord' icon_size='large' />
                <SocialButton social_media='email' icon_size='large' />
            </div>

            {/* Contact Form (Optional) */}
            <form className='mt-10 bg-white dark:bg-gray-700 shadow-md rounded-lg p-6 max-w-xl'>
                <div className='flex flex-col gap-4'>
                    <input
                        type='text'
                        placeholder='Your Name'
                        className='p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />
                    <input
                        type='email'
                        placeholder='Your Email'
                        className='p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />
                    <textarea
                        placeholder='Your Message'
                        rows={4}
                        className='p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'></textarea>
                    <button
                        type='submit'
                        className='bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition'>
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Contact;
