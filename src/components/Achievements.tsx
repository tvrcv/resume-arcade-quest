
import React from 'react';
import { School, Calendar, Award, Trophy } from 'lucide-react';

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
      education: 'border-neon-cyan bg-neon-cyan/10',
      certification: 'border-neon-purple bg-neon-purple/10',
      award: 'border-neon-green bg-neon-green/10'
    };
    return colors[type as keyof typeof colors] || colors.education;
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'education':
        return <School className="w-5 h-5 text-neon-cyan" />;
      case 'certification':
        return <Award className="w-5 h-5 text-neon-purple" />;
      case 'award':
        return <Trophy className="w-5 h-5 text-neon-green" />;
      default:
        return <School className="w-5 h-5 text-neon-cyan" />;
    }
  };

  const getTypeLabel = (type: string) => {
    const labels = {
      education: '学歴',
      certification: '資格',
      award: '受賞'
    };
    return labels[type as keyof typeof labels] || '学歴';
  };

  return (
    <div className="cyber-panel">
      <div className="flex items-center space-x-3 mb-6">
        <Trophy className="w-6 h-6 text-neon-cyan" />
        <h2 className="text-xl font-bold neon-text text-neon-pink heading-readable">
          実績と教育
        </h2>
        <span className="text-sm text-neon-cyan font-japanese">Achievements & Education</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className={`cyber-card transition-all duration-300 hover:scale-[1.02] ${getTypeColor(achievement.type)}`}
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-1">
                {getTypeIcon(achievement.type)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-white text-lg heading-readable truncate">
                    {achievement.title}
                  </h3>
                  <span className="text-xs text-neon-orange font-pixel bg-neon-orange/20 px-2 py-1 rounded">
                    {getTypeLabel(achievement.type)}
                  </span>
                </div>
                
                <p className="text-neon-purple font-semibold text-sm mb-3 text-readable">
                  {achievement.institution}
                </p>
                
                <div className="flex items-center space-x-2 mb-3 text-gray-300 text-xs">
                  <Calendar className="w-3 h-3 text-neon-cyan" />
                  <span className="font-japanese">{achievement.date}</span>
                </div>
                
                <p className="text-gray-300 text-sm text-readable leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
