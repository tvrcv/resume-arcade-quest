
import React, { useState } from 'react';
import { Code, Zap } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  maxLevel: number;
  experience: string;
  color: string;
}

interface SkillTreeProps {
  skills: Skill[];
}

const SkillTree: React.FC<SkillTreeProps> = ({ skills }) => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const getSkillColor = (color: string) => {
    const colors = {
      pink: 'from-neon-pink to-neon-purple',
      cyan: 'from-neon-cyan to-neon-blue',
      green: 'from-neon-green to-neon-cyan',
      orange: 'from-neon-orange to-neon-pink',
      purple: 'from-neon-purple to-neon-pink'
    };
    return colors[color as keyof typeof colors] || colors.pink;
  };

  return (
    <div className="cyber-panel">
      <div className="flex items-center space-x-3 mb-6">
        <Code className="w-6 h-6 text-neon-cyan" />
        <h2 className="text-xl font-bold neon-text text-neon-pink heading-readable">
          スキルツリー
        </h2>
        <span className="text-sm text-neon-cyan font-japanese">Skill Tree</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className={`cyber-card cursor-pointer transition-all duration-300 ${
              selectedSkill?.name === skill.name
                ? 'border-neon-cyan bg-neon-cyan/5 shadow-lg cyber-glow'
                : 'hover:border-neon-pink/50'
            }`}
            onClick={() => setSelectedSkill(selectedSkill?.name === skill.name ? null : skill)}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="font-semibold text-white text-lg heading-readable">{skill.name}</span>
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-neon-orange animate-neon-flicker" />
                <span className="text-neon-green font-pixel text-sm">
                  Lv.{skill.level}/{skill.maxLevel}
                </span>
              </div>
            </div>

            <div className="stat-bar mb-3">
              <div
                className={`stat-fill bg-gradient-to-r ${getSkillColor(skill.color)}`}
                style={{ width: `${(skill.level / skill.maxLevel) * 100}%` }}
              />
            </div>

            <div className="flex justify-between text-xs text-gray-400 mb-3">
              <span>Progress</span>
              <span>{Math.round((skill.level / skill.maxLevel) * 100)}%</span>
            </div>

            {selectedSkill?.name === skill.name && (
              <div className="mt-4 p-4 bg-cyber-darker rounded-lg border border-neon-pink/30 animate-fade-in">
                <div className="text-xs text-neon-cyan font-semibold mb-2">詳細 Details</div>
                <p className="text-gray-300 text-sm text-readable leading-relaxed">{skill.experience}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillTree;
