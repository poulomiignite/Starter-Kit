import React, { useState } from 'react';
import { ROADMAP } from '../constants';
import { Check } from 'lucide-react';

const Roadmap: React.FC = () => {
  const [completed, setCompleted] = useState<Record<string, boolean>>({});

  const toggleMilestone = (phaseNum: number, idx: number) => {
    const key = `${phaseNum}-${idx}`;
    setCompleted(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="max-w-3xl">
      <div className="mb-8">
        <h2 className="text-4xl font-black text-brand-ink mb-2">📅 90-Day Implementation Roadmap</h2>
        <p className="text-lg font-medium text-brand-ink/60">
          A week-by-week plan to build your AI infrastructure in phases. Check off milestones as you complete them.
        </p>
      </div>

      <div className="space-y-8 relative">
        {/* Vertical Line */}
        <div className="absolute left-[17px] top-4 bottom-4 w-0.5 bg-gray-200 -z-10"></div>

        {ROADMAP.map((phase) => (
          <div key={phase.num} className="relative bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-9 h-9 rounded-lg bg-brand-pink text-white flex items-center justify-center font-black text-base shadow-md shadow-brand-pink/30">
                {phase.num}
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-brand-ink">{phase.title}</h3>
                <div className="text-sm font-semibold text-brand-ink/40 uppercase tracking-wider">{phase.sub}</div>
              </div>
            </div>

            <div className="space-y-2 pl-2">
              {phase.milestones.map((ms, idx) => {
                const key = `${phase.num}-${idx}`;
                const isDone = completed[key];
                return (
                  <div 
                    key={idx}
                    onClick={() => toggleMilestone(phase.num, idx)}
                    className={`
                      group flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-all duration-200
                      ${isDone ? 'bg-brand-greenLight border-brand-green/30' : 'bg-transparent border-transparent hover:border-brand-pink/30 hover:bg-brand-bg'}
                    `}
                  >
                    <div className={`
                      w-6 h-6 mt-0.5 rounded flex items-center justify-center border transition-colors
                      ${isDone 
                        ? 'bg-brand-green border-brand-green text-white' 
                        : 'bg-white border-gray-300 group-hover:border-brand-pink'}
                    `}>
                      {isDone && <Check size={14} strokeWidth={4} />}
                    </div>
                    <div>
                      <div className={`text-lg font-semibold transition-colors ${isDone ? 'text-brand-ink line-through opacity-60' : 'text-brand-ink'}`}>
                        {ms.text}
                      </div>
                      <div className="text-sm font-medium text-brand-ink/40 mt-1">{ms.meta}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;