
import Topbar from "@/components/Topbar";

const HomeSection = () => {
  return (
    <section id="home" className="min-h-screen relative bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Topbar />
      
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-2xl lg:text-3xl text-gray-700 font-light">
            Hi, I am a coder. Nothing else.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;