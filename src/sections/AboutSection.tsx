export default function AboutSection() {
  const professionalExperience = [
    {
      title: "Software Developer",
      company: "Metasage.ai",
      period: "Apr, 2025 - Present",
      description: "Led development of responsive web applications using React and TypeScript."
    },
    {
      title: "Executive Software Developer",
      company: "Feedsense AI Private Limited",
      period: "Jan, 2023 - Apr, 2025",
      description: "Built modern web interfaces and collaborated with design teams."
    },
    {
      title: "Android Developer Intern",
      company: "Twain Lab LLP",
      period: "2019 - 2020",
      description: "Developed features for web applications and learned industry best practices."
    },
    {
      title: "Android Developer Intern",
      company: "Inventive Cafe",
      period: "2019 - 2020",
      description: "Developed features for web applications and learned industry best practices."
    }
  ];

  const academicExperience = [
    {
      title: "Master of Computer Science",
      institution: "Ramakrishna Mission Vivekananda Educational and Research Institute",
      period: "2021 - 2023",
      description: "Specialized in software engineering and web development technologies."
    },
    {
      title: "Bachelor of Computer Applications",
      institution: "University of Calcutta",
      period: "2018 - 2021",
      description: "Foundation in computer science, programming, and software development."
    },
    {
      title: "Class XII",
      institution: "Central Board of Secondary Education",
      period: "May, 2018",
      description: "Science stream with focus on mathematics and computer science."
    },
    {
      title: "Class X",
      institution: "Council for the Indian School Certificate Examinations",
      period: "Apr, 2016",
      description: "Science stream with focus on mathematics and computer science."
    }
  ];

  return (
    <section id="about" className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="text-left mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">— Introduction</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            I have acquired extensive experience in web development, working with modern technologies 
            and frameworks to create exceptional digital experiences. My journey spans both academic 
            learning and professional growth, building a solid foundation in software engineering principles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Professional Experience Timeline */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-8">Professional Experience</h3>
            <div className="space-y-8">
              {professionalExperience.map((exp, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-blue-500">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold text-gray-800">{exp.title}</h4>
                    <p className="text-blue-600 font-medium">{exp.company}</p>
                    <p className="text-gray-500 text-sm mb-3">{exp.period}</p>
                    <p className="text-gray-600">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Experience Timeline */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-8">Academic Experience</h3>
            <div className="space-y-8">
              {academicExperience.map((edu, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-green-500">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-green-500 rounded-full"></div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold text-gray-800">{edu.title}</h4>
                    <p className="text-green-600 font-medium">{edu.institution}</p>
                    <p className="text-gray-500 text-sm mb-3">{edu.period}</p>
                    <p className="text-gray-600">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}