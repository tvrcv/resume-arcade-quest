import React, { useEffect, useState } from 'react';
import { SidebarProvider, Sidebar, SidebarContent, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import PlayerProfile from '../components/PlayerProfile';
import SkillTree from '../components/SkillTree';
import QuestLog from '../components/QuestLog';
import Achievements from '../components/Achievements';
import MusicPlayer from '../components/MusicPlayer';
import { Menu } from 'lucide-react';

const Index = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // ==== EDIT YOUR INFORMATION HERE ====
  const playerData = {
    name: "Alex Chen",
    title: "Full Stack Developer",
    level: 28,
    experience: 75,
    location: "Tokyo, Japan",
    email: "alex.chen@cyber.dev",
    avatar: "/placeholder.svg"
  };

  const skills = [
    {
      name: "React/TypeScript",
      level: 9,
      maxLevel: 10,
      experience: "5+ years building scalable web applications with React, TypeScript, and modern tooling. Led multiple enterprise projects with complex state management.",
      color: "cyan"
    },
    {
      name: "Node.js/Express",
      level: 8,
      maxLevel: 10,
      experience: "4+ years developing RESTful APIs and microservices. Experience with database optimization and cloud deployment.",
      color: "green"
    },
    {
      name: "Python/Django",
      level: 7,
      maxLevel: 10,
      experience: "3+ years in data analysis and web development. Built ML pipelines and automated data processing systems.",
      color: "purple"
    },
    {
      name: "Cloud Architecture",
      level: 6,
      maxLevel: 10,
      experience: "2+ years with AWS and Azure. Designed scalable infrastructure for high-traffic applications.",
      color: "orange"
    }
  ];

  const workExperience = [
    {
      company: "TechCorp Inc.",
      position: "Senior Full Stack Developer",
      duration: "2022 - Present",
      status: "active",
      description: "Leading development of micro-frontend architecture serving 100K+ users. Mentoring junior developers and implementing DevOps practices.",
      achievements: ["Reduced load time by 40%", "Led team of 5 developers", "Implemented CI/CD pipeline"]
    },
    {
      company: "StartupXYZ",
      position: "Frontend Developer",
      duration: "2020 - 2022",
      status: "completed",
      description: "Built responsive web applications using React and Redux. Collaborated with UX team to improve user engagement by 60%.",
      achievements: ["Improved user engagement by 60%", "Built responsive design system", "Optimized performance"]
    },
    {
      company: "Digital Agency",
      position: "Junior Developer",
      duration: "2019 - 2020",
      status: "completed",
      description: "Developed custom WordPress themes and e-commerce solutions. Gained experience in client communication and project management.",
      achievements: ["Delivered 15+ client projects", "Learned project management", "Built e-commerce solutions"]
    }
  ];

  const achievements = [
    {
      title: "Computer Science Degree",
      institution: "Tokyo University",
      date: "2015 - 2019",
      description: "Bachelor of Science in Computer Science with focus on software engineering and data structures. Graduated Magna Cum Laude.",
      type: "education" as const
    },
    {
      title: "AWS Solutions Architect",
      institution: "Amazon Web Services",
      date: "2022",
      description: "Professional certification in designing distributed systems on AWS platform. Covers security, scalability, and cost optimization.",
      type: "certification" as const
    },
    {
      title: "Best Innovation Award",
      institution: "TechCorp Inc.",
      date: "2023",
      description: "Recognized for developing an AI-powered code review system that improved development velocity by 35% across all teams.",
      type: "award" as const
    },
    {
      title: "React Developer Certification",
      institution: "Meta",
      date: "2021",
      description: "Advanced certification covering React ecosystem, performance optimization, and modern development practices.",
      type: "certification" as const
    }
  ];
  // ==== END EDIT SECTION ====

  if (!mounted) {
    return null;
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-cyber-dark">
        <Sidebar className="border-r border-cyber-border bg-cyber-panel">
          <SidebarContent className="p-4">
            <div className="mb-6">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-neon-pink rounded-full animate-pulse"></div>
                <h1 className="text-lg font-bold text-neon-cyan neon-text font-cyber">
                  CYBER MENU
                </h1>
              </div>
              <div className="text-xs text-gray-400 font-japanese mb-4">
                サイバー履歴書システム
              </div>
            </div>
            
            <MusicPlayer />
            
            <div className="mt-6 pt-4 border-t border-cyber-border">
              <div className="text-xs text-gray-500 text-center font-japanese">
                © 2024 Cyber Resume v2.1
              </div>
            </div>
          </SidebarContent>
        </Sidebar>

        <SidebarInset className="flex-1">
          <div className="p-4">
            <div className="flex items-center space-x-3 mb-6">
              <SidebarTrigger className="text-neon-cyan hover:text-neon-pink transition-colors" />
              <div className="flex items-center space-x-2">
                <div className="text-2xl font-bold font-cyber neon-text text-neon-pink">
                  サイバー履歴書
                </div>
                <div className="text-sm text-neon-cyan font-japanese">
                  Cyber Resume System
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <PlayerProfile {...playerData} />
              <SkillTree skills={skills} />
              <QuestLog workExperience={workExperience} />
              <Achievements achievements={achievements} />
            </div>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Index;
