import Image from "next/image";

export default function HomeSection() {
  return (
    <section id="home" className="min-h-screen relative">
      <div className="absolute top-20 left-20 right-20 lg:top-20 lg:left-32">
        <Image 
          src="/logo_black.png" 
          alt="Debopam Roy Logo"
          width={120}
          height={120}
        />
      </div>
      
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-2xl lg:text-3xl text-gray-700 font-light">Hi, I am a coder. Nothing else.</p>
        </div>
      </div>
    </section>
  );
}