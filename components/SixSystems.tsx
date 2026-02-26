import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SYSTEMS } from '../constants';
import { Clock, CheckCircle, ArrowRight, X, ExternalLink, ChevronDown, ChevronRight, BookOpen } from 'lucide-react';

const SixSystems: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [showGuide, setShowGuide] = useState(false);

  const activeSystem = SYSTEMS.find(s => s.id === activeId);

  const handleClose = () => {
    setActiveId(null);
    setShowGuide(false);
  };

  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h2 className="text-4xl font-black text-brand-ink mb-2">📊 The 6 Systems Breakdown</h2>
        <p className="text-lg font-medium text-brand-ink/60">
          Every service business needs these 6 systems to scale beyond referrals. Click any system to explore what it includes, time saved, and revenue impact.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {SYSTEMS.map((system) => (
          <motion.div
            key={system.id}
            onClick={() => setActiveId(activeId === system.id ? null : system.id)}
            className={`cursor-pointer rounded-xl border-2 p-5 transition-all duration-200 hover:-translate-y-1 ${
              activeId === system.id 
                ? 'bg-brand-pinkLight border-brand-pink' 
                : 'bg-white border-gray-200 hover:border-brand-pink'
            }`}
            layoutId={`card-${system.id}`}
          >
            <div className="text-5xl mb-3">{system.emoji}</div>
            <h3 className="text-lg font-extrabold text-brand-ink mb-2">{system.name}</h3>
            <p className="text-base font-medium text-brand-ink/60 leading-relaxed mb-4 min-h-[3rem] line-clamp-3">
              {system.whatItDoes}
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-brand-amberLight border border-brand-amber/30 text-xs font-bold text-brand-amber uppercase tracking-wide">
                <Clock size={12} /> {system.timeSaved}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {activeSystem && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: 20 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: 20 }}
            className="overflow-hidden"
          >
            <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 mt-4 shadow-sm relative">
                <button 
                  onClick={handleClose}
                  className="absolute top-4 right-4 p-1 hover:bg-gray-100 rounded-full text-brand-ink/50"
                >
                  <X size={24} />
                </button>

                <div className="flex items-center gap-4 mb-6">
                  <span className="text-6xl">{activeSystem.emoji}</span>
                  <div>
                    <h3 className="text-3xl font-black text-brand-ink">{activeSystem.name}</h3>
                    <p className="text-lg font-medium text-brand-ink/60 mt-1 max-w-2xl">{activeSystem.whatItDoes}</p>
                  </div>
                </div>

                {!showGuide ? (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-sm font-bold text-brand-ink/40 uppercase tracking-widest mb-3">What's included</h4>
                          <div className="space-y-2">
                            {activeSystem.included.map((item, i) => (
                              <div key={i} className="flex items-start gap-2 text-base font-semibold text-brand-ink/80">
                                <CheckCircle size={16} className="text-brand-pink mt-1 flex-shrink-0" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-sm font-bold text-brand-ink/40 uppercase tracking-widest mb-3">Why it matters</h4>
                          <p className="text-base font-medium text-brand-ink/80 leading-relaxed">
                            {activeSystem.whyMatters}
                          </p>
                        </div>
                      </div>

                      <div className="bg-brand-bg rounded-xl p-5 space-y-5">
                        <div>
                           <h4 className="text-sm font-bold text-brand-ink/40 uppercase tracking-widest mb-1">Time Saved</h4>
                           <div className="text-3xl font-black text-brand-pink">{activeSystem.timeSaved}</div>
                        </div>
                        {activeSystem.impact && (
                          <div>
                             <h4 className="text-sm font-bold text-brand-ink/40 uppercase tracking-widest mb-1">Impact</h4>
                             <div className="text-lg font-bold text-brand-green flex items-center gap-1">
                               {activeSystem.impact}
                             </div>
                          </div>
                        )}
                        <div>
                           <h4 className="text-sm font-bold text-brand-ink/40 uppercase tracking-widest mb-3">What success looks like</h4>
                           <div className="space-y-2">
                            {activeSystem.successLooksLike.map((item, i) => (
                                <div key={i} className="flex items-start gap-2 text-sm font-medium text-brand-ink/70">
                                    <ArrowRight size={14} className="text-brand-green mt-1 flex-shrink-0" />
                                    <span>{item}</span>
                                </div>
                            ))}
                           </div>
                        </div>
                        
                        <div className="pt-4 border-t border-gray-200">
                            {activeSystem.steps && activeSystem.steps.length > 0 ? (
                                <button 
                                    onClick={() => setShowGuide(true)}
                                    className="flex items-center justify-center gap-2 w-full py-3 bg-brand-pink hover:bg-brand-pink/90 text-white rounded-lg text-base font-extrabold transition-all hover:-translate-y-0.5"
                                >
                                    <BookOpen size={16} /> Read Implementation Guide
                                </button>
                            ) : (
                                <a 
                                    href={activeSystem.guideLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 w-full py-3 bg-brand-pink hover:bg-brand-pink/90 text-white rounded-lg text-base font-extrabold transition-all hover:-translate-y-0.5"
                                >
                                    How to Build This System <ExternalLink size={16} />
                                </a>
                            )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                    <div className="mb-6 flex items-center gap-4">
                        <button onClick={() => setShowGuide(false)} className="text-brand-ink/50 hover:text-brand-pink font-bold text-sm flex items-center gap-1">
                            <ArrowRight className="rotate-180" size={14} /> Back to Overview
                        </button>
                    </div>

                    <div className="bg-brand-pinkLight border border-brand-pink/20 rounded-xl p-6 mb-8">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div>
                                <h4 className="text-xl font-black text-brand-ink mb-1">How to Build: {activeSystem.name}</h4>
                                <p className="text-sm font-medium text-brand-ink/60">Follow these steps to implement this system in your business.</p>
                            </div>
                            {activeSystem.totalBuildTime && (
                                <div className="bg-white/50 px-4 py-2 rounded-lg border border-brand-pink/10">
                                    <div className="text-xs font-bold text-brand-ink/40 uppercase tracking-widest">Total Build Time</div>
                                    <div className="text-lg font-black text-brand-pink">{activeSystem.totalBuildTime}</div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="space-y-12">
                        {activeSystem.steps?.map((step, idx) => (
                            <div key={idx} className="relative">
                                {/* Connector Line */}
                                {idx !== (activeSystem.steps?.length || 0) - 1 && (
                                    <div className="absolute left-[19px] top-12 bottom-[-48px] w-0.5 bg-gray-100"></div>
                                )}
                                
                                <div className="flex gap-6">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-purple text-white flex items-center justify-center font-bold text-lg shadow-sm z-10">
                                        {idx + 1}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-black text-brand-ink mb-2">{step.title}</h3>
                                        
                                        <div className="bg-gray-50 rounded-lg p-4 mb-6 border border-gray-100">
                                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                                                <div>
                                                    <span className="text-xs font-bold text-brand-ink/40 uppercase tracking-widest block mb-1">Problem</span>
                                                    <p className="text-sm font-medium text-brand-ink/80">{step.problem}</p>
                                                </div>
                                                <div>
                                                    <span className="text-xs font-bold text-brand-ink/40 uppercase tracking-widest block mb-1">Stack</span>
                                                    <div className="flex flex-wrap gap-1">
                                                        {step.stack.map((tool, i) => (
                                                            <span key={i} className="px-2 py-0.5 bg-white border border-gray-200 rounded text-xs font-bold text-brand-ink/70">
                                                                {tool}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div>
                                                    <span className="text-xs font-bold text-brand-ink/40 uppercase tracking-widest block mb-1">Time</span>
                                                    <p className="text-sm font-bold text-brand-ink/80">{step.time}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-6">
                                            {step.subSteps.map((sub, sIdx) => (
                                                <div key={sIdx}>
                                                    <h5 className="text-lg font-extrabold text-brand-ink mb-2">{sub.title}</h5>
                                                    <ul className="space-y-2">
                                                        {sub.description.map((desc, dIdx) => (
                                                            <li key={dIdx} className="flex items-start gap-2 text-base font-medium text-brand-ink/70 leading-relaxed">
                                                                <span className="mt-2 w-1.5 h-1.5 bg-brand-pink rounded-full flex-shrink-0" />
                                                                <span>{desc}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-6 flex items-center gap-3 bg-brand-greenLight border border-brand-green/20 rounded-lg p-4">
                                            <CheckCircle className="text-brand-green flex-shrink-0" size={20} />
                                            <div>
                                                <span className="text-xs font-bold text-brand-green uppercase tracking-widest block">Outcome</span>
                                                <p className="text-sm font-bold text-brand-ink/80">{step.outcome}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 pt-8 border-t border-gray-200 flex justify-center">
                        <button 
                            onClick={handleClose}
                            className="bg-brand-ink text-white px-8 py-3 rounded-lg font-bold hover:bg-brand-ink/90 transition-colors"
                        >
                            Close Guide
                        </button>
                    </div>
                  </motion.div>
                )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SixSystems;