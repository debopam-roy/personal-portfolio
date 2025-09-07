import SkillTag from '@/components/SkillTag';

export default function ServicesSection() {
  const services = [
    {
      title: "Web Development",
      description: "Building modern, responsive web applications using cutting-edge technologies and frameworks. From single-page applications to complex enterprise solutions, I create scalable and performant web experiences.",
      technologies: ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "GraphQL"],
      features: [
        "Responsive Design & Mobile-First Approach",
        "Performance Optimization & SEO",
        "Modern UI/UX Implementation",
        "API Integration & Database Design",
        "Progressive Web Apps (PWA)",
        "Real-time Features & WebSockets"
      ]
    },
    {
      title: "Mobile Development",
      description: "Creating native and cross-platform mobile applications that deliver exceptional user experiences. I specialize in building robust, scalable mobile solutions for both iOS and Android platforms.",
      technologies: ["React Native", "Flutter", "Android", "iOS", "Firebase", "Redux"],
      features: [
        "Cross-Platform Development",
        "Native iOS & Android Apps",
        "Offline-First Architecture",
        "Push Notifications & Analytics",
        "Social Media Integration",
        "Payment Gateway Integration"
      ]
    },
    {
      title: "Blockchain Development",
      description: "Developing decentralized applications and smart contracts on various blockchain platforms. I create secure, transparent, and efficient blockchain solutions for modern digital ecosystems.",
      technologies: ["Solidity", "Web3.js", "Ethereum", "Smart Contracts", "DeFi", "NFT"],
      features: [
        "Smart Contract Development",
        "DeFi Protocol Integration",
        "NFT Marketplaces & Minting",
        "Wallet Integration & Authentication",
        "Decentralized Storage Solutions",
        "Blockchain Analytics & Monitoring"
      ]
    }
  ];

  return (
    <section id="services" className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        

        <div className="text-left mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">— Services</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            I provide comprehensive development solutions across web, mobile, and blockchain technologies. Each service is crafted with attention to detail, modern best practices, and a focus on 
            delivering exceptional user experiences and robust, scalable solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow border border-gray-100 hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {service.title}
                </h3>
                
                <div className="h-24 mb-6">
                  <p className="text-gray-600 leading-relaxed line-clamp-4">
                    {service.description}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <SkillTag key={techIndex} size="sm">
                        {tech}
                      </SkillTag>
                    ))}
                  </div>
                </div>

                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex}
                        className="text-gray-600 text-sm flex items-start"
                      >
                        <span className="text-green-500 mr-2 mt-1 flex-shrink-0">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="px-8 py-4 border-t border-gray-100">
                <button className="w-full py-3 px-4 bg-gray-800 hover:bg-gray-900 text-white rounded-lg font-medium transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>



      </div>
    </section>
  );
}