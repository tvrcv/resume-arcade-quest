
import React from 'react';
import { School, Calendar } from 'lucide-react';

interface Achievement {
  title: string;
  institution: string;
  date: string;
  description: string;
  type: 'education' | 'certification' | 'award';
}

interface AchievementsProps {
  achievements: Achievement[];
}

const Achievements: React.FC<AchievementsProps> = ({ achievements }) => {
  const getTypeColor = (type: string) => {
    const colors = {
      education: 'border-neon-cyan bg-cyan-900/20',
      certification: 'border-neon-purple bg-purple-900/20',
      award: 'border-neon-green bg-green-900/20'
    };
    return colors[type as keyof typeof colors] || colors.education;
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'education':
        return <School className="w-5 h-5" />;
      default:
        return <School className="w-5 h-5" />;
    }
  };

  return (
    <div className="game-panel">
      <div className="flex items-center space-x-2 mb-6">
        <School className="w-6 h-6 text-neon-cyan" />
        <h2 className="text-xl font-bold neon-text text-neon-cyan">Achievements & Education</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg border-2 transition-all duration-300 hover:scale-105 ${getTypeColor(achievement.type)}`}
          >
            <div className="flex items-start space-x-3">
              <div className="text-neon-cyan mt-1">
                {getTypeIcon(achievement.type)}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-white mb-1">{achievement.title}</h3>
                <p className="text-neon-purple font-semibold text-sm">{achievement.institution}</p>
                <div className="flex items-center space-x-1 mt-2 text-gray-300 text-xs">
                  <Calendar className="w-3 h-3" />
                  <span>{achievement.date}</span>
                </div>
                <p className="text-gray-300 text-sm mt-2">{achievement.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
