import { Timeline, TimelineItemProps } from '@/components/TimelineItem';

export default function AboutSection() {
  const professionalExperience: TimelineItemProps[] = [
    {
      title: "Software Developer",
      subtitle: "Metasage.ai",
      link: "https://www.metasage.ai",
      period: "Apr, 2025 - Present",
      description: "Led development of responsive web applications using React and TypeScript. Architected scalable frontend solutions, implemented modern UI/UX designs, and collaborated with cross-functional teams to deliver high-quality software products. Utilized advanced React patterns, state management solutions, and performance optimization techniques to create seamless user experiences.",
      projects: [
        {
          name: "AI-Powered Analytics Dashboard",
          description: "Built a comprehensive analytics dashboard with real-time data visualization and AI-powered insights for business intelligence.",
          tech_stack: ["React", "TypeScript", "D3.js", "Node.js", "PostgreSQL"],
          tags: ["Dashboard", "Analytics", "AI", "Real-time"]
        },
        {
          name: "Customer Portal Redesign",
          description: "Complete redesign and development of customer-facing portal with improved UX and performance.",
          tech_stack: ["Next.js", "React", "Tailwind CSS", "GraphQL"],
          tags: ["Portal", "UX", "Performance", "Frontend"]
        }
      ],
      topics_focused: ["Frontend Architecture", "React Ecosystem", "Performance Optimization", "UI/UX Design", "Team Leadership"],
      tech_stack: ["React", "TypeScript", "Next.js", "Node.js", "GraphQL", "PostgreSQL", "Docker", "AWS"],
      achievements: [
        "Improved application performance by 40%",
        "Led a team of 4 developers",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Mentored 2 junior developers"
      ],
      skills_gained: ["Advanced React Patterns", "Team Leadership", "System Architecture", "Performance Optimization", "Mentoring"]
    },
    {
      title: "Executive Software Developer",
      subtitle: "Feedsense AI Private Limited",
      link: "https://feedsense.ai/",
      period: "Jan, 2023 - Apr, 2025",
      description: "Built modern web interfaces and collaborated with design teams to create intuitive user experiences. Spearheaded the development of complex web applications using cutting-edge technologies, mentored junior developers, and established best practices for code quality and maintainability.",
      projects: [
        {
          name: "AI Content Management System",
          description: "Developed a sophisticated CMS with AI-powered content generation and optimization features.",
          tech_stack: ["React", "Python", "FastAPI", "MongoDB", "Redis"],
          tags: ["CMS", "AI", "Content", "Backend"]
        },
        {
          name: "Real-time Collaboration Platform",
          description: "Built a real-time collaboration platform for content creators with live editing capabilities.",
          tech_stack: ["React", "Socket.io", "Node.js", "Redis", "MySQL"],
          tags: ["Real-time", "Collaboration", "WebSockets", "Platform"]
        }
      ],
      topics_focused: ["Full-stack Development", "AI Integration", "Real-time Systems", "Code Quality", "Mentoring"],
      tech_stack: ["React", "TypeScript", "Python", "FastAPI", "Node.js", "MongoDB", "Redis", "Docker"],
      achievements: [
        "Delivered 3 major product releases",
        "Reduced bug reports by 50% through code quality initiatives",
        "Mentored 3 junior developers",
        "Implemented automated testing increasing coverage to 85%"
      ],
      skills_gained: ["Full-stack Development", "AI/ML Integration", "Code Review", "Technical Leadership", "Product Development"]
    },
    {
      title: "Android Developer Intern",
      subtitle: "Twain Lab LLP",
      link: "https://twainlabs.com/",
      period: "Jul, 2020 - Oct, 2020",
      description: "Developed features for web applications and learned industry best practices during this foundational internship experience. Gained hands-on experience with mobile development lifecycle, collaborated on feature implementation, and contributed to improving application performance.",
      projects: [
        {
          name: "Mobile E-commerce App",
          description: "Contributed to the development of a mobile e-commerce application with payment integration.",
          tech_stack: ["Android", "Java", "SQLite", "REST APIs"],
          tags: ["Mobile", "E-commerce", "Payments", "Android"]
        },
        {
          name: "User Analytics Module",
          description: "Developed user analytics and tracking module for mobile applications.",
          tech_stack: ["Android", "Java", "Firebase", "Analytics"],
          tags: ["Analytics", "Firebase", "Tracking", "Mobile"]
        }
      ],
      topics_focused: ["Android Development", "Mobile UI/UX", "API Integration", "Database Design", "Version Control"],
      tech_stack: ["Android", "Java", "SQLite", "Firebase", "REST APIs", "Git"],
      achievements: [
        "Successfully delivered 2 major features",
        "Fixed 15+ critical bugs",
        "Improved app performance by 25%",
        "Received positive feedback from senior developers"
      ],
      skills_gained: ["Android Development", "Java Programming", "Mobile UI Design", "API Integration", "Debugging"]
    },
    {
      title: "Android Developer Intern",
      subtitle: "Inventive Cafe",
      link: "https://inventivecafe.com/",
      period: "Jun, 2020 - Sep, 2020",
      description: "Developed features for web applications and learned industry best practices in a dynamic startup environment. Worked closely with senior developers to implement mobile solutions, participated in daily standups and sprint planning, and contributed to both frontend and backend development tasks.",
      projects: [
        {
          name: "Social Media Integration",
          description: "Implemented social media login and sharing features for mobile applications.",
          tech_stack: ["Android", "Java", "OAuth", "Social APIs"],
          tags: ["Social Media", "Authentication", "Integration", "Mobile"]
        },
        {
          name: "Push Notification System",
          description: "Developed comprehensive push notification system with personalization features.",
          tech_stack: ["Android", "Firebase", "Java", "JSON"],
          tags: ["Notifications", "Firebase", "Personalization", "Mobile"]
        }
      ],
      topics_focused: ["Mobile Development", "Social Integration", "Startup Environment", "Agile Methodology", "User Experience"],
      tech_stack: ["Android", "Java", "Firebase", "OAuth", "Social APIs", "Git"],
      achievements: [
        "Implemented 3 key features",
        "Reduced crash rate by 30%",
        "Contributed to 2 successful app releases",
        "Learned agile development practices"
      ],
      skills_gained: ["Mobile Development", "Social API Integration", "Agile Methodologies", "Startup Experience", "Team Collaboration"]
    }
  ];

  const academicExperience: TimelineItemProps[] = [
    {
      title: "Master of Computer Science",
      subtitle: "Ramakrishna Mission Vivekananda Educational and Research Institute",
      link: "https://rkmvu.ac.in/",
      period: "Aug, 2021 - Jun, 2023",
      description: "Specialized in software engineering and web development technologies with a comprehensive curriculum covering advanced algorithms, software architecture, database systems, and modern web frameworks. Completed coursework in machine learning, artificial intelligence, and distributed systems while maintaining excellent academic performance.",
      projects: [
        {
          name: "E-Learning Platform",
          description: "Developed a comprehensive e-learning platform with video streaming, quiz system, and progress tracking for final year project.",
          tech_stack: ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
          tags: ["Web Development", "Education", "Full-stack", "Real-time"]
        },
        {
          name: "Machine Learning Research",
          description: "Conducted research on predictive analytics for student performance using machine learning algorithms.",
          tech_stack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Jupyter"],
          tags: ["Machine Learning", "Research", "Analytics", "Python"]
        },
        {
          name: "Distributed System Simulation",
          description: "Built a simulation of distributed consensus algorithms for understanding system reliability and fault tolerance.",
          tech_stack: ["Java", "Multi-threading", "Networking", "Algorithms"],
          tags: ["Distributed Systems", "Java", "Algorithms", "Simulation"]
        }
      ],
      topics_focused: ["Advanced Algorithms", "Software Architecture", "Machine Learning", "Database Systems", "Distributed Systems", "Web Technologies"],
      tech_stack: ["Java", "Python", "React", "Node.js", "MongoDB", "MySQL", "Machine Learning", "Data Structures"],
      achievements: [
        "CGPA: 9.2/10",
        "Published research paper on ML applications",
        "Won inter-college coding competition",
        "Led academic project team of 5 members",
        "Received merit scholarship for academic excellence"
      ],
      skills_gained: ["Advanced Programming", "Research Methodology", "System Design", "Machine Learning", "Academic Writing", "Leadership"]
    },
    {
      title: "Bachelor of Computer Applications",
      subtitle: "University of Calcutta",
      link: "https://www.caluniv.ac.in/",
      period: "Jun, 2018 - Jul, 2021",
      description: "Foundation in computer science, programming, and software development with extensive coursework in data structures, algorithms, database management, and software engineering principles. Developed proficiency in multiple programming languages and completed various projects involving web development and mobile applications.",
      projects: [
        {
          name: "Library Management System",
          description: "Developed a complete library management system with book tracking, member management, and automated fine calculation.",
          tech_stack: ["Java", "MySQL", "Swing", "JDBC"],
          tags: ["Database", "Java", "Desktop App", "Management System"]
        },
        {
          name: "Personal Finance Tracker",
          description: "Created a web-based personal finance tracking application with expense categorization and reporting.",
          tech_stack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
          tags: ["Web Development", "PHP", "Finance", "Database"]
        },
        {
          name: "Student Information Portal",
          description: "Built a student information portal for course registration, grade viewing, and academic calendar.",
          tech_stack: ["ASP.NET", "C#", "SQL Server", "HTML", "CSS"],
          tags: ["Web Development", "ASP.NET", "Portal", "Database"]
        }
      ],
      topics_focused: ["Programming Fundamentals", "Data Structures", "Database Management", "Web Development", "Software Engineering", "Computer Networks"],
      tech_stack: ["Java", "C++", "PHP", "ASP.NET", "MySQL", "SQL Server", "HTML", "CSS", "JavaScript"],
      achievements: [
        "CGPA: 8.8/10",
        "First class with distinction",
        "Best project award for Library Management System",
        "Active member of coding club",
        "Participated in multiple hackathons"
      ],
      skills_gained: ["Programming Languages", "Database Design", "Web Development", "Software Development", "Problem Solving", "Team Collaboration"]
    },
    {
      title: "Class XII",
      subtitle: "Central Board of Secondary Education",
      link: "https://www.cbse.gov.in/",
      period: "May, 2018",
      description: "Science stream with focus on mathematics and computer science, achieving exceptional results in core subjects. Developed strong analytical and problem-solving skills through intensive study of mathematics, physics, and computer science fundamentals while participating in various academic competitions.",
      projects: [
        {
          name: "Calculator Application",
          description: "Developed a scientific calculator application using C++ as part of computer science coursework.",
          tech_stack: ["C++", "Object-Oriented Programming"],
          tags: ["C++", "OOP", "Desktop App", "Mathematics"]
        },
        {
          name: "Science Fair Project",
          description: "Created a working model demonstrating principles of physics and mathematics integration in computer algorithms.",
          tech_stack: ["Mathematical Modeling", "Scientific Method"],
          tags: ["Science", "Mathematics", "Research", "Physics"]
        }
      ],
      topics_focused: ["Advanced Mathematics", "Computer Science Fundamentals", "Physics", "Problem Solving", "Analytical Thinking"],
      tech_stack: ["C++", "Mathematical Software", "Scientific Computing"],
      achievements: [
        "95.2% aggregate marks",
        "100/100 in Mathematics",
        "98/100 in Computer Science",
        "School topper in Science stream",
        "Participated in National Science Olympiad"
      ],
      skills_gained: ["Mathematical Reasoning", "Analytical Thinking", "Basic Programming", "Scientific Method", "Academic Excellence"]
    },
    {
      title: "Class X",
      subtitle: "Council for the Indian School Certificate Examinations",
      link: "https://cisceboard.org/",
      period: "Apr, 2016",
      description: "Science stream with focus on mathematics and computer science, establishing a solid foundation in analytical thinking and logical reasoning. Excelled in mathematics and science subjects while developing initial programming skills and participating in various academic and extracurricular activities.",
      projects: [
        {
          name: "Basic Programming Projects",
          description: "Completed various basic programming exercises and small projects using QBASIC and Logo programming languages.",
          tech_stack: ["QBASIC", "Logo Programming"],
          tags: ["Programming", "QBASIC", "Logic", "Fundamentals"]
        },
        {
          name: "Mathematics Research",
          description: "Conducted a research project on mathematical patterns and their applications in computer algorithms.",
          tech_stack: ["Mathematical Analysis", "Pattern Recognition"],
          tags: ["Mathematics", "Research", "Patterns", "Analysis"]
        }
      ],
      topics_focused: ["Mathematics Fundamentals", "Basic Computer Science", "Scientific Reasoning", "Logic Building"],
      tech_stack: ["QBASIC", "Logo Programming", "Mathematical Tools"],
      achievements: [
        "94.8% aggregate marks",
        "99/100 in Mathematics",
        "96/100 in Computer Applications",
        "School's academic excellence award",
        "Active participant in math and science clubs"
      ],
      skills_gained: ["Basic Programming", "Mathematical Foundation", "Logical Reasoning", "Academic Discipline", "Scientific Thinking"]
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
          <Timeline 
            title="Professional Experience" 
            items={professionalExperience} 
          />
          
          <Timeline 
            title="Academic Experience" 
            items={academicExperience} 
          />
        </div>
      </div>
    </section>
  );
}