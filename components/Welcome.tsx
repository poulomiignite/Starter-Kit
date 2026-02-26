import React from 'react';
import { Rocket, CheckCircle, ChevronRight, Leaf, Zap, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface Props {
  onNavigate: (id: string) => void;
}

const Welcome: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="space-y-8">
      {/* Hero Card */}
      <div className="relative overflow-hidden bg-brand-purple rounded-2xl p-8 md:p-10 text-white shadow-xl">
        <div className="absolute -top-10 -right-10 w-48 h-48 bg-brand-pink opacity-25 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-brand-lavender text-sm font-bold font-display uppercase tracking-wider mb-4">
            <Rocket size={14} />
            BrandAI Growth System
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 tracking-tight">
            Build AI Infrastructure That Scales Your Business—Without Hiring More People
          </h1>
          <p className="text-white/70 max-w-lg leading-relaxed text-lg md:text-xl">
            Most businesses are experimenting with AI. Very few are structuring it. This kit gives you everything you need to think strategically about AI infrastructure—before you build anything.
          </p>
        </div>
      </div>

      {/* Introduction */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className="flex items-center gap-2 mb-4">
          <span className="text-4xl">👋</span>
          <h2 className="text-3xl font-bold text-brand-ink">Welcome to Your AI Infrastructure Starter Kit</h2>
        </div>
        <div className="text-lg text-brand-ink/80 space-y-3 font-medium leading-relaxed max-w-2xl">
          <p>Most businesses are experimenting with AI. Very few are structuring it.</p>
          <p>This starter kit gives you everything you need to think strategically about AI infrastructure—before you build anything.</p>
          <p>Inside, you'll find:</p>
        </div>

        <div className="mt-6 grid gap-2">
          {[
            "Complete breakdown of the 6 systems every business needs",
            "Priority assessment to identify which system to build first",
            "90-day implementation roadmap",
            "Team training plan",
            "AI infrastructure checklist",
            "Bonuses: ROI calculator, tech stack guide, quick wins"
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 text-lg font-medium text-brand-ink/80">
              <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Paths */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="pt-6 border-t border-gray-200"
      >
        <div className="flex items-center gap-2 mb-6">
          <span className="text-4xl">👉</span>
          <h2 className="text-3xl font-bold text-brand-ink">Where to Start</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white border border-gray-200 p-5 rounded-xl hover:border-brand-pink transition-colors">
            <div className="flex items-center gap-2 text-brand-ink font-extrabold font-display text-lg mb-4">
              <Leaf className="w-5 h-5 text-brand-green" /> Brand New?
            </div>
            <ol className="list-decimal pl-4 space-y-3 text-base font-medium text-brand-ink/70">
              <li>Read the <button onClick={() => onNavigate('model')} className="text-brand-pink underline hover:text-brand-purple font-bold">5-I Model</button> to understand how AI infrastructure works</li>
              <li>Review the <button onClick={() => onNavigate('systems')} className="text-brand-pink underline hover:text-brand-purple font-bold">6 Systems</button> to see what's possible</li>
              <li>Take the <button onClick={() => onNavigate('assessment')} className="text-brand-pink underline hover:text-brand-purple font-bold">Priority Assessment</button> to find your #1 priority</li>
            </ol>
          </div>

          <div className="bg-white border border-gray-200 p-5 rounded-xl hover:border-brand-pink transition-colors">
            <div className="flex items-center gap-2 text-brand-ink font-extrabold font-display text-lg mb-4">
              <Zap className="w-5 h-5 text-brand-amber" /> Know Your Priority?
            </div>
            <ol className="list-decimal pl-4 space-y-3 text-base font-medium text-brand-ink/70">
              <li>Jump to the <button onClick={() => onNavigate('roadmap')} className="text-brand-pink underline hover:text-brand-purple font-bold">90-Day Roadmap</button> and start planning</li>
              <li>Use the <button onClick={() => onNavigate('checklist')} className="text-brand-pink underline hover:text-brand-purple font-bold">Checklist</button> to track your progress</li>
              <li>Grab the <button onClick={() => onNavigate('bonuses')} className="text-brand-pink underline hover:text-brand-purple font-bold">Quick Wins</button> for immediate results</li>
            </ol>
          </div>

          <div className="bg-white border border-gray-200 p-5 rounded-xl hover:border-brand-pink transition-colors">
            <div className="flex items-center gap-2 text-brand-ink font-extrabold font-display text-lg mb-4">
              <HelpCircle className="w-5 h-5 text-brand-purple" /> Want Help?
            </div>
            <ol className="list-decimal pl-4 space-y-3 text-base font-medium text-brand-ink/70">
              <li>Check out <button onClick={() => onNavigate('ready')} className="text-brand-pink underline hover:text-brand-purple font-bold">Ready to Build?</button> for your options</li>
              <li>Book a clarity call or grab the full program</li>
            </ol>
          </div>
        </div>
      </motion.div>

      <div className="text-brand-ink font-bold text-lg mt-4">
        Let's build your AI infrastructure. 💪
      </div>
    </div>
  );
};

export default Welcome;