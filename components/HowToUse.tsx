import React from 'react';

const HowToUse: React.FC = () => {
  return (
    <div className="max-w-2xl">
      <div className="mb-8">
        <h2 className="text-4xl font-black text-brand-ink mb-2">🎯 How to Use This Kit</h2>
        <p className="text-lg font-medium text-brand-ink/60">
          Follow these five steps in order for the best results.
        </p>
      </div>

      <div className="space-y-0">
        {[
          { num: 1, title: 'Read the 6 Systems Breakdown', desc: 'Understand what AI infrastructure actually looks like for a service business—before choosing what to build.' },
          { num: 2, title: 'Take the Priority Assessment', desc: 'Answer 5 quick questions to identify your single biggest bottleneck and which system to tackle first.' },
          { num: 3, title: 'Follow the 90-Day Roadmap', desc: 'Use the week-by-week plan to sequence your implementation without overwhelm.' },
          { num: 4, title: 'Use the Team Training Roadmap', desc: 'Get your team aligned and onboard without resistance. People follow systems they helped shape.' },
          { num: 5, title: 'Work Through the Infrastructure Checklist', desc: 'Track every step of implementation. Check things off as you build so nothing falls through the cracks.' },
        ].map((step, idx) => (
          <div key={idx} className="flex gap-5 py-5 border-b border-gray-100 last:border-0">
            <div className="flex-shrink-0 w-9 h-9 bg-brand-pink text-white rounded-lg flex items-center justify-center font-extrabold text-base shadow-md shadow-brand-pink/30">
              {step.num}
            </div>
            <div>
              <h3 className="text-lg font-extrabold text-brand-ink mb-1">{step.title}</h3>
              <p className="text-base font-medium text-brand-ink/60 leading-relaxed">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowToUse;