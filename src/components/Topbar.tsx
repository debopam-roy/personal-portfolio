import Image from "next/image";
import SocialLink from "./SocialLink";

export default function Topbar() {
  const socialLinks = [
    {
      href: "https://github.com/debopam-roy",
      alt: "GitHub",
      iconSrc: "/github.svg"
    },
    {
      href: "https://www.linkedin.com/in/yor-mapobed",
      alt: "LinkedIn", 
      iconSrc: "/linkedin.svg"
    },
    {
      href: "https://x.com/DebopamRoy8",
      alt: "Twitter",
      iconSrc: "/twitter.svg"
    },
    {
      href: "https://www.reddit.com/user/Enough_Ad_3916/",
      alt: "Reddit",
      iconSrc: "/reddit.svg"
    }
  ];

  return (
    <div className="absolute top-6 left-0 right-0 py-4 px-6 sm:px-8 lg:px-12 xl:px-16">
      <div className="flex justify-between items-center">
        <Image 
          src="/logo.png" 
          alt="Debopam Roy Logo"
          width={100}
          height={100}
          priority
        />
        
        <div className="flex gap-4 sm:gap-6">
          {socialLinks.map((social) => (
            <SocialLink
              key={social.alt}
              href={social.href}
              alt={social.alt}
              iconSrc={social.iconSrc}
              width={22}
              height={22}
            />
          ))}
        </div>
      </div>
    </div>
  );
}