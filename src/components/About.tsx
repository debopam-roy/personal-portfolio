import feedsense_logo from '../assets/icons/feedsense_logo.png';
import mirazh_logo from '../assets/icons/mirazh_logo.png';
import twain_logo from '../assets/icons/twain_lab_logo.png';
import inventive_logo from '../assets/icons/inventive_cafe_logo.png';
import rkmvu_logo from '../assets/icons/rkmvu_logo.png';
import cu_logo from '../assets/icons/cu_logo.png';
import vista_logo from '../assets/icons/vista_logo.png';
import { FaMapLocationDot } from 'react-icons/fa6';
import { IoCalendar } from 'react-icons/io5';
import { MdInsertLink } from 'react-icons/md';
import {
    FaPython,
    FaReact,
    FaNodeJs,
    FaAws,
    FaDocker,
    FaJava,
    FaGitAlt,
    FaHtml5,
    FaCss3Alt,
    FaBootstrap,
} from 'react-icons/fa';
import {
    SiCplusplus,
    SiPostgresql,
    SiMongodb,
    SiNestjs,
    SiGraphql,
    SiTailwindcss,
    SiLinux,
    SiPostman,
    SiNextdotjs,
    SiKubernetes,
} from 'react-icons/si';
import { DiRedis } from 'react-icons/di';
import { BiLogoTypescript } from 'react-icons/bi';
import { RiJavascriptFill } from 'react-icons/ri';

const About = () => {
    const skills = [
        { name: 'C++', icon: <SiCplusplus /> },
        { name: 'Python', icon: <FaPython /> },
        { name: 'Java', icon: <FaJava /> },
        { name: 'JavaScript', icon: <RiJavascriptFill /> },
        { name: 'TypeScript', icon: <BiLogoTypescript /> },
        { name: 'HTML', icon: <FaHtml5 /> },
        { name: 'CSS', icon: <FaCss3Alt /> },
        { name: 'Tailwind', icon: <SiTailwindcss /> },
        { name: 'Bootstrap', icon: <FaBootstrap /> },
        { name: 'React', icon: <FaReact /> },
        { name: 'Next.js', icon: <SiNextdotjs /> },
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'NestJS', icon: <SiNestjs /> },
        { name: 'GraphQL', icon: <SiGraphql /> },
        { name: 'PostgreSQL', icon: <SiPostgresql /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'Redis', icon: <DiRedis /> },
        { name: 'Linux', icon: <SiLinux /> },
        { name: 'Postman', icon: <SiPostman /> },
        { name: 'Docker', icon: <FaDocker /> },
        { name: 'Kubernetes', icon: <SiKubernetes /> },
        { name: 'AWS', icon: <FaAws /> },
        { name: 'Git', icon: <FaGitAlt /> },
    ];

    const experiences = [
        {
            role: 'Executive Software Developer',
            company: 'Feedsense AI Private Limited',
            logo: feedsense_logo,
            link: 'https://feedsense.ai/',
            location: 'Kolkata, India',
            duration: "April'24 - Present",
            achievements: [
                'Developed a real-time portfolio hedging recommendation system using Python, reducing risk exposure by 80%.',
                'Optimized a video streaming and blogging application with Redis caching, improving load times significantly.',
                'Installed and configured GitLab for on-premises deployment and CI/CD automation for TypeScript and Python projects.',
                'Designed a master-slave database architecture, improving data retrieval time by 40%.',
                'Implemented statistical trading models with automated triggers for live trade execution.',
            ],
        },
        {
            role: 'Executive Software Developer',
            company: 'Vista Intelligence Private Limited',
            logo: vista_logo,
            link: 'https://feedsense.ai/',
            location: 'Kolkata, India',
            duration: "July'23 - March'24",
            achievements: [
                'Developed a real-time portfolio hedging recommendation system using Python, reducing risk exposure by 80%.',
                'Optimized a video streaming and blogging application with Redis caching, improving load times significantly.',
                'Installed and configured GitLab for on-premises deployment and CI/CD automation for TypeScript and Python projects.',
                'Designed a master-slave database architecture, improving data retrieval time by 40%.',
                'Implemented statistical trading models with automated triggers for live trade execution.',
            ],
        },
        {
            role: 'Software Developer Intern',
            company: 'Vista Intelligence Private Limited',
            logo: vista_logo,
            link: 'https://feedsense.ai/',
            location: 'Kolkata, India',
            duration: "January'23 - June'23",
            achievements: [
                'Developed a real-time portfolio hedging recommendation system using Python, reducing risk exposure by 80%.',
                'Optimized a video streaming and blogging application with Redis caching, improving load times significantly.',
                'Installed and configured GitLab for on-premises deployment and CI/CD automation for TypeScript and Python projects.',
                'Designed a master-slave database architecture, improving data retrieval time by 40%.',
                'Implemented statistical trading models with automated triggers for live trade execution.',
            ],
        },
        {
            role: 'Android Application Developer Intern',
            company: 'Twain Lab LLP',
            logo: twain_logo,
            link: 'https://twainlabs.com/',
            location: 'Gurgaon, India',
            duration: "July'20 - October'20",
            achievements: [
                'Developed a real-time portfolio hedging recommendation system using Python, reducing risk exposure by 80%.',
                'Optimized a video streaming and blogging application with Redis caching, improving load times significantly.',
                'Installed and configured GitLab for on-premises deployment and CI/CD automation for TypeScript and Python projects.',
                'Designed a master-slave database architecture, improving data retrieval time by 40%.',
                'Implemented statistical trading models with automated triggers for live trade execution.',
            ],
        },
        {
            role: 'Android Application Developer Intern',
            company: 'Inventive Cafe',
            logo: inventive_logo,
            link: 'https://inventivecafe.com/',
            location: 'Mumbai, India',
            duration: "June'20 - September'20",
            achievements: [
                'Developed a real-time portfolio hedging recommendation system using Python, reducing risk exposure by 80%.',
                'Optimized a video streaming and blogging application with Redis caching, improving load times significantly.',
                'Installed and configured GitLab for on-premises deployment and CI/CD automation for TypeScript and Python projects.',
                'Designed a master-slave database architecture, improving data retrieval time by 40%.',
                'Implemented statistical trading models with automated triggers for live trade execution.',
            ],
        },
        {
            role: 'Android Application Developer Intern',
            company: 'Mirazh Media & Entertainment Private Limited',
            logo: mirazh_logo,
            link: "'https://www.linkedin.com/company/mirazh-media-entertainment-pvt-ltd/",
            location: 'Gurgaon, India',
            duration: "May'20 - July'20",
            achievements: [
                'Developed a real-time portfolio hedging recommendation system using Python, reducing risk exposure by 80%.',
                'Optimized a video streaming and blogging application with Redis caching, improving load times significantly.',
                'Installed and configured GitLab for on-premises deployment and CI/CD automation for TypeScript and Python projects.',
                'Designed a master-slave database architecture, improving data retrieval time by 40%.',
                'Implemented statistical trading models with automated triggers for live trade execution.',
            ],
        },
    ];

    const education = [
        {
            degree: 'M.Sc. in Computer Science',
            college: 'Ramakrishna Mission Vivekananda University',
            logo: rkmvu_logo,
            link: 'https://rkmvu.ac.in/',
            location: 'Howrah, India',
            duration: "August'21 - June'23",
            domain: [
                'Developed a real-time portfolio hedging recommendation system using Python, reducing risk exposure by 80%.',
                'Optimized a video streaming and blogging application with Redis caching, improving load times significantly.',
                'Installed and configured GitLab for on-premises deployment and CI/CD automation for TypeScript and Python projects.',
                'Designed a master-slave database architecture, improving data retrieval time by 40%.',
                'Implemented statistical trading models with automated triggers for live trade execution.',
            ],
        },
        {
            degree: 'B.Sc. in Computer Science',
            college: 'University of Calcutta',
            logo: cu_logo,
            link: 'https://www.caluniv.ac.in/',
            location: 'Kolkata, India',
            duration: "June'18 - June'21",
            domain: [
                'Developed a real-time portfolio hedging recommendation system using Python, reducing risk exposure by 80%.',
                'Optimized a video streaming and blogging application with Redis caching, improving load times significantly.',
                'Installed and configured GitLab for on-premises deployment and CI/CD automation for TypeScript and Python projects.',
                'Designed a master-slave database architecture, improving data retrieval time by 40%.',
                'Implemented statistical trading models with automated triggers for live trade execution.',
            ],
        },
    ];

    return (
        <div id='about' className='w-full px-6 md:px-16 lg:px-24 py-22 bg-gray-100 dark:bg-neutral-900 flex flex-col'>
            {/* Section Header */}
            <div className='flex flex-row gap-x-4 items-center my-8'>
                <div className='w-12 h-[4px] bg-blue-600 dark:bg-blue-500 rounded'></div>
                <p className='text-lg md:text-xl font-extrabold uppercase font-[delius]'>About Me</p>
            </div>

            <div className='px-2 md:px-20 space-y-5 md:space-y-10'>
                {/* Introduction */}
                <div className='text-base md:text-lg leading-relaxed text-justify space-y-2'>
                    <p>
                        I'm <span className='font-semibold'>Debopam Roy</span>, a passionate{' '}
                        <span className='font-semibold'>Software Developer</span> and{' '}
                        <span className='font-semibold'>Freelancer</span> based in Kolkata, India. Currently, I work as
                        an <span className='font-semibold'>Executive Software Developer</span> at{' '}
                        <span className='font-semibold'>Feedsense AI Private Limited</span>, specializing in{' '}
                        <span className='font-semibold'>
                            Full-Stack Development, Scalable System Design, and DevOps
                        </span>
                        . I earned my Master’s in Computer Science from{' '}
                        <span className='font-semibold'>
                            Ramakrishna Mission Vivekananda University (RKMVU), Belur Math
                        </span>
                        .
                    </p>
                    <p>
                        With <span className='font-semibold'>two years of professional experience</span>, I have built
                        robust, high-performance applications, optimized system architectures, and enhanced DevOps
                        pipelines. Additionally, I have completed multiple internships, including{' '}
                        <span className='font-semibold'>three Android development roles</span> and{' '}
                        <span className='font-semibold'>one Full-Stack Software Developer</span> internship.
                    </p>
                    <p>
                        As a freelancer and mentor, I have guided students and professionals in building real-world
                        projects, refining their technical skills, and improving their academic and career prospects. I
                        have also provided end-to-end solutions for businesses, handling everything from system design
                        and database architecture to deployment, ensuring seamless product delivery within deadlines.
                    </p>
                </div>

                {/* Work Experience */}
                <div>
                    <p className='text-lg md:text-xl font-semibold'>Work Experience</p>
                    <div className='mx-2 md:mx-10 my-6 space-y-10'>
                        {experiences.map((exp, index) => (
                            <div key={index} className='p-6 bg-gray-200 dark:bg-zinc-700 shadow rounded-lg'>
                                <div className='flex flex-row lg:items-center space-x-2 md:space-x-4'>
                                    <img
                                        src={exp.logo}
                                        alt={`${exp.company} Logo`}
                                        className='w-10 h-10 rounded-full'
                                    />
                                    <div className='flex flex-1 flex-col lg:flex-row justify-around space-y-4 truncate'>
                                        <div className='flex-1'>
                                            <p className='text-lg md:text-xl font-bold truncate'>{exp.role}</p>
                                            <div className='flex items-center space-x-2'>
                                                <p className='text-base font-semibold truncate'>{exp.company}</p>
                                                <a href={exp.link} target='_blank' rel='noopener noreferrer'>
                                                    <MdInsertLink size={20} />
                                                </a>
                                            </div>
                                        </div>

                                        <div>
                                            <div className='flex items-center gap-x-2 font-semibold text-sm'>
                                                <FaMapLocationDot size={15} />
                                                {exp.location}
                                            </div>
                                            <div className='flex items-center gap-x-2 font-semibold text-sm'>
                                                <IoCalendar size={15} />
                                                <p>{exp.duration}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <ul className='list-disc space-y-2 text-sm ps-8 pe-2 md:px-15 pt-5 text-left md:text-justify'>
                                    {exp.achievements.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Technologies */}
                <div>
                    <div>
                        <p className='text-lg md:text-xl font-semibold '>Technologies & Skills</p>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-4 md:mx-6 lg:mx-10 my-6 gap-4 lg:gap-6'>
                            {skills.map((skill, index) => (
                                <div
                                    key={index}
                                    className='flex items-center justify-center gap-2 px-4 py-2 bg-gray-200 dark:bg-zinc-700 rounded-lg text-center shadow'>
                                    <div className='flex gap-x-2 lg:md:gap-x-4 w-full px-2 lg:px-4 py-1 items-center'>
                                        <span className='text-2xl px-2'>{skill.icon}</span>
                                        <div className='h-5 w-px bg-gray-300 dark:bg-gray-500'></div>
                                        <div className='flex flex-1 px-4'>
                                            <span className='font-medium'>{skill.name}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Education */}

                <div>
                    <p className='text-lg md:text-xl font-semibold'>Education</p>
                    <div className='mx-2 md:mx-10 my-6 space-y-10'>
                        {education.map((edu, index) => (
                            <div key={index} className='p-6 bg-gray-200 dark:bg-zinc-700 shadow rounded-lg'>
                                <div className='flex flex-row lg:items-center space-x-2 md:space-x-4'>
                                    <img
                                        src={edu.logo}
                                        alt={`${edu.college} Logo`}
                                        className='w-10 h-10 rounded-full'
                                    />
                                    <div className='flex flex-1 flex-col lg:flex-row justify-around space-y-4 truncate'>
                                        <div className='flex-1'>
                                            <p className='text-lg md:text-xl font-bold truncate'>{edu.degree}</p>
                                            <div className='flex items-center space-x-2'>
                                                <p className='text-base font-semibold truncate'>{edu.college}</p>
                                                <a href={edu.link} target='_blank' rel='noopener noreferrer'>
                                                    <MdInsertLink size={20} />
                                                </a>
                                            </div>
                                        </div>

                                        <div>
                                            <div className='flex items-center gap-x-2 font-semibold text-sm'>
                                                <FaMapLocationDot size={15} />
                                                {edu.location}
                                            </div>
                                            <div className='flex items-center gap-x-2 font-semibold text-sm'>
                                                <IoCalendar size={15} />
                                                <p>{edu.duration}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <ul className='list-disc space-y-2 text-sm ps-8 pe-2 md:px-15 pt-5 text-left md:text-justify'>
                                    {edu.domain.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Achievements */}
                <div>
                    <p className='text-lg md:text-xl font-semibold'>Achievements</p>
                    <div className='mx-2 md:mx-10 my-6 space-y-10'>
                        <ul className='list-disc space-y-2'>
                            <li>
                                Ranked in the <span className='font-semibold'>top 10%</span> in Job-A-Thon 12 and{' '}
                                <span className='font-semibold'>4096th</span> in CodeVita10.
                            </li>
                            <li>
                                Solved <span className='font-semibold'>750+</span> problems on LeetCode, CodeChef, and
                                GeeksForGeeks.
                            </li>
                            <li>Developed and published an Android application during an internship.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
