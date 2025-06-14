
import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

interface Quest {
  company: string;
  position: string;
  duration: string;
  location: string;
  achievements: string[];
  technologies: string[];
  status: 'completed' | 'current';
}

interface QuestLogProps {
  quests: Quest[];
}

const QuestLog: React.FC<QuestLogProps> = ({ quests }) => {
  const [expandedQuest, setExpandedQuest] = useState<number | null>(null);

  return (
    <div className="game-panel">
      <div className="flex items-center space-x-2 mb-6">
        <Briefcase className="w-6 h-6 text-neon-cyan" />
        <h2 className="text-xl font-bold neon-text text-neon-cyan">Quest Log - Work Experience</h2>
      </div>

      <div className="space-y-4">
        {quests.map((quest, index) => (
          <div
            key={index}
            className={`border-2 rounded-lg overflow-hidden transition-all duration-300 ${
              quest.status === 'current'
                ? 'border-neon-green bg-gradient-to-r from-green-900/20 to-transparent'
                : 'border-game-border hover:border-neon-purple'
            }`}
          >
            <div
              className="p-4 cursor-pointer"
              onClick={() => setExpandedQuest(expandedQuest === index ? null : index)}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-white">{quest.position}</h3>
                  <p className="text-neon-purple font-semibold">{quest.company}</p>
                </div>
                <div className="text-right">
                  {quest.status === 'current' && (
                    <span className="px-2 py-1 bg-neon-green text-black text-xs font-pixel rounded">
                      ACTIVE
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center space-x-4 mt-2 text-gray-300 text-sm">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{quest.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span>{quest.location}</span>
                </div>
              </div>
            </div>

            {expandedQuest === index && (
              <div className="p-4 bg-game-darker border-t border-game-border animate-fade-in">
                <div className="mb-4">
                  <h4 className="text-neon-cyan font-semibold mb-2">Achievements Unlocked:</h4>
                  <ul className="space-y-1">
                    {quest.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-300 text-sm flex items-start space-x-2">
                        <span className="text-neon-green">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-neon-cyan font-semibold mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {quest.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-neon-purple/20 border border-neon-purple text-neon-purple text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestLog;
