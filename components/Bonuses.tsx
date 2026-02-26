import React from 'react';
import { Paperclip } from 'lucide-react';

const Bonuses: React.FC = () => {
  const bonuses = [
    {
      emoji: '💰',
      name: 'ROI Calculator',
      desc: "Calculate the exact hours and revenue you'll recover by building each AI system. Put real numbers to the opportunity so you can prioritise with confidence.",
      tag: 'Spreadsheet included'
    },
    {
      emoji: '🔧',
      name: 'Tech Stack Guide',
      desc: "The exact tools recommended for each of the 6 systems—what to use, what to avoid, and how to connect them without a developer.",
      tag: 'Guide included'
    },
    {
      emoji: '⚡',
      name: 'Quick Wins (10 Actions)',
      desc: "10 AI actions you can implement this week—each taking under 60 minutes—that will immediately save time and improve output quality.",
      tag: 'Checklist included'
    },
    {
      emoji: '💬',
      name: 'Prompt Library Starter Pack',
      desc: "30 ready-to-use AI prompts for content, sales, operations, and client communication—all written to be customised for your specific business voice.",
      tag: '30 prompts included'
    }
  ];

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h2 className="text-4xl font-black text-brand-ink mb-2">🎁 Bonuses & Resources</h2>
        <p className="text-lg font-medium text-brand-ink/60">
          Extra tools and resources included with your Starter Kit.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {bonuses.map((bonus, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 hover:border-brand-pink hover:-translate-y-1 transition-all duration-200 cursor-pointer">
            <div className="text-4xl mb-4">{bonus.emoji}</div>
            <h3 className="text-lg font-extrabold text-brand-ink mb-2">{bonus.name}</h3>
            <p className="text-base font-medium text-brand-ink/60 leading-relaxed mb-4 min-h-[3rem]">
              {bonus.desc}
            </p>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-brand-bg rounded-lg text-sm font-bold text-brand-pink uppercase tracking-wide">
              <Paperclip size={12} /> {bonus.tag}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bonuses;