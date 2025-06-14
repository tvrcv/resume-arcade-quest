
import React, { useState } from 'react';
import { Code, Computer } from 'lucide-react';

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
      cyan: 'from-neon-cyan to-blue-400',
      purple: 'from-neon-purple to-purple-400',
      green: 'from-neon-green to-green-400',
      orange: 'from-neon-orange to-orange-400',
      pink: 'from-neon-pink to-pink-400'
    };
    return colors[color as keyof typeof colors] || colors.cyan;
  };

  return (
    <div className="game-panel">
      <div className="flex items-center space-x-2 mb-6">
        <Code className="w-6 h-6 text-neon-cyan" />
        <h2 className="text-xl font-bold neon-text text-neon-cyan">Skill Tree</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
              selectedSkill?.name === skill.name
                ? 'border-neon-cyan bg-game-darker'
                : 'border-game-border hover:border-neon-purple'
            }`}
            onClick={() => setSelectedSkill(selectedSkill?.name === skill.name ? null : skill)}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="font-semibold text-white">{skill.name}</span>
              <div className="flex items-center space-x-1">
                <Computer className={`w-4 h-4 text-${skill.color === 'cyan' ? 'neon-cyan' : 'neon-purple'}`} />
                <span className="text-neon-green font-pixel text-xs">
                  {skill.level}/{skill.maxLevel}
                </span>
              </div>
            </div>

            <div className="stat-bar mb-2">
              <div
                className={`stat-fill bg-gradient-to-r ${getSkillColor(skill.color)}`}
                style={{ width: `${(skill.level / skill.maxLevel) * 100}%` }}
              />
            </div>

            {selectedSkill?.name === skill.name && (
              <div className="mt-3 p-3 bg-game-dark rounded border border-game-border animate-fade-in">
                <p className="text-gray-300 text-sm">{skill.experience}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillTree;
