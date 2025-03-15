import React from 'react';

const Work = () => {
    return (
        <div
            id='work'
            className='w-full px-6 md:px-16 lg:px-24 py-22 bg-gray-200 dark:bg-gray-600 min-h-screen flex flex-col'>
            {/* Section Header */}
            <div className='flex flex-row gap-x-4 items-center my-8'>
                <div className='w-12 h-[4px] bg-blue-600 dark:bg-blue-500 rounded'></div>
                <p className='text-lg md:text-xl font-extrabold uppercase font-[delius]'>My Creations</p>
            </div>
        </div>
    );
};

export default Work;
