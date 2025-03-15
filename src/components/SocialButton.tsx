import { RiLinkedinFill } from 'react-icons/ri';
import { FaGithub } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { FaXTwitter } from 'react-icons/fa6';
import { SiLeetcode } from 'react-icons/si';
import { FaDiscord } from 'react-icons/fa';
import { FaHackerrank } from 'react-icons/fa6';

import { GoSun } from 'react-icons/go';
import { GoMoon } from 'react-icons/go';

interface SocialButtonProps {
    social_media: keyof typeof social_media_icons;
    icon_size?: 'large' | 'medium' | 'small';
}

const social_media_icons = {
    linkedin: RiLinkedinFill,
    github: FaGithub,
    twitter: FaXTwitter,
    email: IoMdMail,
    leetcode: SiLeetcode,
    discord: FaDiscord,
    hackerrank: FaHackerrank,

    light_mode: GoSun,
    dark_mode: GoMoon,
};

const SocialButton: React.FC<SocialButtonProps> = ({ social_media, icon_size = 'large' }) => {
    const IconComponent = social_media_icons[social_media];

    // Convert string sizes to numbers
    const iconSize = icon_size === 'large' ? 20 : icon_size === 'medium' ? 15 : 10;

    return (
        <div className='bg-[var(--color-divider-light)] dark:bg-[var(--color-divider-dark)]  p-3 rounded-full shadow-md hover:shadow-lg duration-300 cursor-pointer flex items-center justify-center '>
            <IconComponent size={iconSize} />
        </div>
    );
};

export default SocialButton;
