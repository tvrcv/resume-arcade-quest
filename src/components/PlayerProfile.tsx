
import React from 'react';
import { User, Calendar, MapPin, Mail, Linkedin, Github } from 'lucide-react';

interface PlayerProfileProps {
  playerData: {
    name: string;
    title: string;
    level: number;
    location: string;
    email: string;
    linkedin: string;
    github: string;
    joinDate: string;
  };
}

const PlayerProfile: React.FC<PlayerProfileProps> = ({ playerData }) => {
  return (
    <div className="game-panel animate-slide-in-left">
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-20 h-20 bg-gradient-to-br from-neon-cyan to-neon-purple rounded-full flex items-center justify-center animate-pulse-neon">
          <User className="w-10 h-10 text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold neon-text text-neon-cyan">{playerData.name}</h1>
          <p className="text-neon-purple font-semibold">{playerData.title}</p>
          <div className="flex items-center space-x-2 mt-2">
            <span className="text-neon-green text-sm font-pixel">LVL</span>
            <span className="text-neon-green text-lg font-bold">{playerData.level}</span>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center space-x-3 text-gray-300">
          <MapPin className="w-4 h-4 text-neon-cyan" />
          <span>{playerData.location}</span>
        </div>
        <div className="flex items-center space-x-3 text-gray-300">
          <Mail className="w-4 h-4 text-neon-cyan" />
          <a href={`mailto:${playerData.email}`} className="hover:text-neon-cyan transition-colors">
            {playerData.email}
          </a>
        </div>
        <div className="flex items-center space-x-3 text-gray-300">
          <Linkedin className="w-4 h-4 text-neon-cyan" />
          <a 
            href={playerData.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-neon-cyan transition-colors"
          >
            LinkedIn Profile
          </a>
        </div>
        <div className="flex items-center space-x-3 text-gray-300">
          <Github className="w-4 h-4 text-neon-cyan" />
          <a 
            href={playerData.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-neon-cyan transition-colors"
          >
            GitHub Profile
          </a>
        </div>
        <div className="flex items-center space-x-3 text-gray-300">
          <Calendar className="w-4 h-4 text-neon-cyan" />
          <span>Started Journey: {playerData.joinDate}</span>
        </div>
      </div>
    </div>
  );
};

export default PlayerProfile;
