import React from 'react';
import { LayoutGrid, CheckSquare, Users, Calendar, Gift, Target, BarChart2 } from 'lucide-react';

const WhatsInside: React.FC = () => {
  const items = [
    {
      icon: BarChart2,
      title: "The 6 Systems Breakdown",
      desc: "A complete detailed breakdown of the six core systems every service business needs to scale: Brand, Content, Sales, Operations, Communications, and Tech Stack."
    },
    {
      icon: Target,
      title: "Priority Assessment",
      desc: "A diagnostic tool to identify your single biggest business bottleneck right now and determine exactly which system you should build first."
    },
    {
      icon: LayoutGrid,
      title: "The 5-I Model",
      desc: "The proprietary framework that structures how AI should be implemented in your business—from Input to Ideal Output."
    },
    {
      icon: Calendar,
      title: "90-Day Implementation Roadmap",
      desc: "A step-by-step, week-by-week plan to build your infrastructure without overwhelming yourself or your team."
    },
    {
      icon: Users,
      title: "Team Training Plan",
      desc: "A guide to getting your team onboard, aligned, and using the new systems effectively."
    },
    {
      icon: CheckSquare,
      title: "Infrastructure Checklist",
      desc: "A comprehensive tracker to ensure you don't miss any critical steps while building your new AI systems."
    },
    {
      icon: Gift,
      title: "Bonuses & Resources",
      desc: "Includes an ROI Calculator, Tech Stack Guide, Quick Wins Checklist, and a Prompt Library Starter Pack."
    }
  ];

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h2 className="text-4xl font-black text-brand-ink mb-2">📦 What's Inside This Kit</h2>
        <p className="text-lg font-medium text-brand-ink/60">
          A complete overview of the tools, frameworks, and resources included in your BrandAI Growth System.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item, idx) => (
          <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6 flex gap-4 hover:border-brand-pink transition-colors group">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-brand-pinkLight text-brand-pink flex items-center justify-center group-hover:bg-brand-pink group-hover:text-white transition-colors">
              <item.icon size={24} strokeWidth={2.5} />
            </div>
            <div>
              <h3 className="text-lg font-extrabold text-brand-ink mb-2">{item.title}</h3>
              <p className="text-base font-medium text-brand-ink/70 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatsInside;