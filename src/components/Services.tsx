import React from 'react';

const Services = () => {
    return (
        <div
            id='services'
            className='w-full px-6 md:px-16 lg:px-24 py-22 bg-gray-100 dark:bg-neutral-800 flex flex-col min-h-screen'>
            {/* Section Header */}
            <div className='flex flex-row gap-x-4 items-center my-8'>
                <div className='w-12 h-[4px] bg-blue-600 dark:bg-blue-500 rounded'></div>
                <h2 className='text-lg md:text-xl font-extrabold uppercase font-[delius]'>Hire Me</h2>
            </div>

            <div className='px-2 md:px-20 space-y-5 md:space-y-10'>
                {/* Description */}
                <div className='text-base md:text-lg leading-relaxed text-justify space-y-2'>
                    <p>
                        I have successfully built and delivered multiple projects tailored to different needs. My
                        experience ranges from academic projects to real-world business solutions, ensuring that each
                        project meets the highest standards of quality and efficiency.
                    </p>
                    <p>
                        Whether you're looking for a developer to bring your vision to life or need a reliable
                        professional to handle your technical requirements, I'm here to help. I take pride in delivering
                        projects on time with complete client satisfaction.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Services;
