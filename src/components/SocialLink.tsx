import Image from "next/image";
import Link from "next/link";

interface SocialLinkProps {
  href: string;
  alt: string;
  iconSrc: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function SocialLink({ 
  href, 
  alt, 
  iconSrc, 
  width = 24, 
  height = 24, 
  className = "hover:opacity-70 transition-opacity" 
}: SocialLinkProps) {
  return (
    <Link 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={className}
    >
      <Image 
        src={iconSrc} 
        alt={alt}
        width={width}
        height={height}
      />
    </Link>
  );
}