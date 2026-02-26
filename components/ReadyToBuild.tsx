import React from 'react';
import { ArrowRight, Wallet } from 'lucide-react';

const ReadyToBuild: React.FC = () => {
  return (
    <div className="max-w-4xl space-y-8">
      <div className="mb-8">
        <h2 className="text-4xl font-black text-brand-ink mb-2">🚀 Ready to Build?</h2>
        <p className="text-lg font-medium text-brand-ink/60">
          You have the framework. Here's how to go from planning to actually building your AI infrastructure.
        </p>
      </div>

      {/* CTA Block */}
      <div className="relative overflow-hidden bg-brand-purple rounded-2xl p-8 md:p-10 text-white shadow-xl">
         <div className="absolute -top-14 -right-14 w-60 h-60 bg-brand-pink opacity-20 rounded-full blur-3xl pointer-events-none"></div>
         <div className="relative z-10">
           <h2 className="text-3xl md:text-4xl font-black mb-3">Stop Planning. Start Building.</h2>
           <p className="text-white/70 max-w-md text-lg leading-relaxed mb-6">
             You now know what's possible. You know your priority system. The only thing left is to build it—with support, accountability, and a clear plan for your specific business.
           </p>
           <div className="flex flex-wrap gap-3">
             <button className="bg-brand-pink hover:bg-brand-pink/90 text-white text-sm font-extrabold px-6 py-3 rounded-lg flex items-center gap-2 transition-transform hover:-translate-y-0.5">
               Book a Clarity Call <ArrowRight size={16} />
             </button>
             <button className="bg-white/10 hover:bg-white/20 text-white text-sm font-bold px-6 py-3 rounded-lg border border-white/20 transition-colors">
               See Full Program Details
             </button>
           </div>
         </div>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-4">
          <Wallet className="text-brand-ink" size={24} />
          <h3 className="text-xl font-extrabold text-brand-ink">Ways to Work Together</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="text-3xl font-black font-display text-brand-pink mb-2">$297</div>
            <div className="text-base font-extrabold font-display text-brand-ink mb-2">Brand Systems Optimization Hour</div>
            <p className="text-base font-medium text-brand-ink/60 leading-relaxed">
              60-minute 1:1 session to isolate your single biggest systems challenge and leave with a clear action plan.
            </p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-xl p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-brand-green/10 rounded-bl-full"></div>
            <div className="text-3xl font-black font-display text-brand-pink mb-2">$997</div>
            <div className="text-base font-extrabold font-display text-brand-ink mb-2">BrandAI Content Bootcamp</div>
            <p className="text-base font-medium text-brand-ink/60 leading-relaxed">
              6-week cohort to build your complete AI content system with live guidance, feedback, and accountability.
            </p>
          </div>

          <div className="bg-white border border-brand-purple rounded-xl p-6 relative shadow-lg">
             <div className="absolute top-3 right-3 text-xs font-bold uppercase tracking-wide bg-brand-purple text-white px-2 py-1 rounded">Best Value</div>
            <div className="text-3xl font-black font-display text-brand-pink mb-2">€2,500+</div>
            <div className="text-base font-extrabold font-display text-brand-ink mb-2">BrandAI Growth Accelerator</div>
            <p className="text-base font-medium text-brand-ink/60 leading-relaxed">
              Done-with-you program where we build your positioning, content, and automation systems together in 4–12 weeks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadyToBuild;