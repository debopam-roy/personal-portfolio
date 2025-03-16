import React, { useState } from 'react';
import SocialButton from './SocialButton';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: '',
    });

    // Handle input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' });
    };

    // Validate email format
    const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        let newErrors = { name: '', email: '', message: '' };
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!validateEmail(formData.email)) newErrors.email = 'Invalid email format';
        if (!formData.message.trim()) newErrors.message = 'Message is required';

        if (Object.values(newErrors).some((error) => error !== '')) {
            setErrors(newErrors);
            return;
        }

        console.log('Form submitted:', formData);
        setFormData({ name: '', email: '', message: '' });
    };

    const currentYear = new Date().getFullYear(); // Auto-updating year
    const viewCount = 1234; // Replace with dynamic data from backend

    return (
        <div className='flex flex-col min-h-screen'>
            <div id='contact' className='w-full px-6 md:px-16 lg:px-24 py-22 bg-gray-200 dark:bg-stone-900 flex-grow'>
                {/* Section Header */}
                <div className='flex flex-row gap-x-4 items-center my-8'>
                    <div className='w-12 h-[4px] bg-blue-600 dark:bg-blue-500 rounded'></div>
                    <p className='text-lg md:text-xl font-extrabold uppercase font-[delius]'>Get In Touch</p>
                </div>

                <div className='px-2 md:px-20 space-y-5 md:space-x-10 flex flex-col md:flex-row justify-center'>
                    {/* Contact Info Section */}
                    <div className='flex flex-col flex-1 space-y-4 text-justify'>
                        <p className='text-lg md:text-xl font-semibold'>
                            Let’s build something incredible together! Whether you have an exciting project, an idea
                            that needs shaping, or just want to connect—I'm always open to meaningful conversations.
                        </p>
                        <p className='text-base md:text-lg'>
                            With expertise in full-stack development, software architecture, and problem-solving, I
                            strive to craft digital experiences that are{' '}
                            <strong>innovative, scalable, and efficient</strong>. If you're looking for a passionate
                            developer to bring your vision to life, let's collaborate.
                        </p>
                        <p className='text-base md:text-lg'>
                            Feel free to reach out via email, connect with me on social platforms, or drop a message
                            below. I’ll do my best to get back to you as soon as possible!
                        </p>

                        {/* Social Links */}
                        <div className='mt-8 flex flex-wrap gap-6'>
                            <SocialButton social_media='linkedin' icon_size='large' />
                            <SocialButton social_media='twitter' icon_size='large' />
                            <SocialButton social_media='discord' icon_size='large' />
                            <SocialButton social_media='email' icon_size='large' />
                        </div>
                    </div>

                    {/* Contact Form Section */}
                    <div className='flex-1 w-full max-w-lg bg-gray-100 dark:bg-zinc-800 px-6 py-10 rounded-xl shadow-lg space-y-8'>
                        <div className='space-y-4'>
                            <div className='w-16 md:w-24 h-[4px] bg-blue-600 dark:bg-blue-500 rounded'></div>
                            <p className='font-bold text-3xl md:text-4xl lg:text-5xl'>Let’s Connect</p>
                        </div>

                        <form onSubmit={handleSubmit} className='space-y-5'>
                            {/* Name Input */}
                            <div>
                                <p className='font-medium'>Full Name:</p>
                                <input
                                    type='text'
                                    name='name'
                                    placeholder='John Doe'
                                    value={formData.name}
                                    onChange={handleChange}
                                    className='w-full p-3  border-gray-200 dark:border-gray-600 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                                />
                                {errors.name && <p className='text-red-500 text-sm mt-1'>{errors.name}</p>}
                            </div>

                            {/* Email Input */}
                            <div>
                                <p className='font-medium'>Email Address:</p>
                                <input
                                    type='email'
                                    name='email'
                                    placeholder='john.doe@coolmail.com'
                                    value={formData.email}
                                    onChange={handleChange}
                                    className='w-full p-3 border-gray-200 dark:border-gray-600 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                                />
                                {errors.email && <p className='text-red-500 text-sm mt-1'>{errors.email}</p>}
                            </div>

                            {/* Message Input */}
                            <div>
                                <p className='font-medium'>Your Message:</p>
                                <textarea
                                    name='message'
                                    placeholder='Hello Debopam, I really liked your website. Great Job!'
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className='w-full p-3 border-gray-200 dark:border-gray-600 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                                />
                                {errors.message && <p className='text-red-500 text-sm mt-1'>{errors.message}</p>}
                            </div>

                            {/* Submit Button */}
                            <button
                                type='submit'
                                className='w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition'>
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <footer className='w-full h-18 flex items-center justify-center bg-white dark:bg-neutral-950 px-6 z-50 shadow-lg'>
                <p className='text-sm font-extralight'>&copy; {currentYear} Debopam Roy. All Rights Reserved.</p>
            
            </footer>
        </div>
    );
};

export default Contact;
