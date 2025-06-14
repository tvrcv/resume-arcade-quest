
import React from 'react';
import PlayerProfile from '../components/PlayerProfile';
import SkillTree from '../components/SkillTree';
import QuestLog from '../components/QuestLog';
import Achievements from '../components/Achievements';

const Index = () => {
  // ==== EDIT YOUR INFORMATION HERE ====
  const playerData = {
    name: "Your Name Here",
    title: "Full Stack Developer • Software Engineer",
    level: 25, // Your "level" based on years of experience
    location: "Your City, Country",
    email: "your.email@example.com",
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/yourusername",
    joinDate: "2020" // Year you started your career
  };

  const skills = [
    {
      name: "JavaScript/TypeScript",
      level: 9,
      maxLevel: 10,
      experience: "5+ years of experience building web applications, Node.js backends, and React frontends. Expertise in modern ES6+ features and TypeScript for type safety.",
      color: "cyan"
    },
    {
      name: "React & Frontend",
      level: 8,
      maxLevel: 10,
      experience: "4+ years developing responsive web applications with React, Next.js, and modern CSS frameworks. Experienced with state management and performance optimization.",
      color: "purple"
    },
    {
      name: "Backend Development",
      level: 7,
      maxLevel: 10,
      experience: "3+ years building RESTful APIs, microservices, and database architectures. Proficient in Node.js, Python, and cloud deployment strategies.",
      color: "green"
    },
    {
      name: "Cloud & DevOps",
      level: 6,
      maxLevel: 10,
      experience: "2+ years with AWS, Docker, and CI/CD pipelines. Experience with infrastructure as code and automated deployment processes.",
      color: "orange"
    }
  ];

  const workExperience = [
    {
      company: "Your Current Company",
      position: "Senior Software Engineer",
      duration: "2023 - Present",
      location: "Remote",
      status: "current" as const,
      achievements: [
        "Led development of new product feature that increased user engagement by 40%",
        "Mentored 3 junior developers and established code review best practices",
        "Architected microservices infrastructure reducing response times by 60%",
        "Implemented automated testing pipeline increasing deployment confidence"
      ],
      technologies: ["React", "TypeScript", "Node.js", "AWS", "Docker", "PostgreSQL"]
    },
    {
      company: "Previous Company Name",
      position: "Software Engineer",
      duration: "2021 - 2023",
      location: "Your City",
      status: "completed" as const,
      achievements: [
        "Built and maintained 5+ production web applications",
        "Optimized database queries reducing load times by 50%",
        "Collaborated with design team on UX improvements",
        "Participated in on-call rotation maintaining 99.9% uptime"
      ],
      technologies: ["JavaScript", "React", "Python", "MongoDB", "Redis"]
    },
    {
      company: "First Company",
      position: "Junior Developer",
      duration: "2020 - 2021",
      location: "Your City",
      status: "completed" as const,
      achievements: [
        "Developed responsive web components used across multiple projects",
        "Fixed 100+ bugs and implemented feature requests",
        "Learned modern development workflows and agile methodologies",
        "Contributed to open source projects and documentation"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Git", "REST APIs"]
    }
  ];

  const achievements = [
    {
      title: "Bachelor of Computer Science",
      institution: "Your University Name",
      date: "2020",
      description: "Graduated Magna Cum Laude with focus on software engineering and algorithms. Completed senior capstone project building a full-stack web application.",
      type: "education" as const
    },
    {
      title: "AWS Certified Solutions Architect",
      institution: "Amazon Web Services",
      date: "2023",
      description: "Validated expertise in designing distributed systems on AWS platform with focus on scalability, security, and cost optimization.",
      type: "certification" as const
    },
    {
      title: "Outstanding Employee Award",
      institution: "Previous Company Name",
      date: "2022",
      description: "Recognized for exceptional performance and leadership in delivering critical project ahead of schedule.",
      type: "award" as const
    }
  ];
  // ==== END EDIT SECTION ====

  return (
    <div className="min-h-screen bg-game-dark">
      {/* Gaming-style header */}
      <div className="bg-game-darker border-b border-game-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold font-pixel text-neon-cyan neon-text">
              INTERACTIVE_RESUME.EXE
            </h1>
            <div className="text-neon-green font-pixel text-sm">
              STATUS: ONLINE
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Player Profile */}
          <div className="lg:col-span-1">
            <PlayerProfile playerData={playerData} />
          </div>

          {/* Right Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <SkillTree skills={skills} />
            <QuestLog quests={workExperience} />
            <Achievements achievements={achievements} />
          </div>
        </div>
      </div>

      {/* Gaming-style footer */}
      <div className="bg-game-darker border-t border-game-border mt-16">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center">
            <p className="text-gray-400 font-pixel text-xs">
              Press [CTRL+R] to refresh • Built with React & TypeScript
            </p>
            <p className="text-neon-cyan text-xs mt-2">
              Ready to team up? Send me a message!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
