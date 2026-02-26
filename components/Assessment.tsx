import React, { useState } from 'react';
import { ASSESSMENT_QUESTIONS, ASSESSMENT_RESULTS } from '../constants';
import { ArrowRight, Check } from 'lucide-react';
import { motion } from 'framer-motion';

interface Props {
  onGoToRoadmap: () => void;
}

const Assessment: React.FC<Props> = ({ onGoToRoadmap }) => {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [result, setResult] = useState<string | null>(null);

  const handleSelect = (questionId: number, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const calculateResult = () => {
    const scores: Record<string, number> = {};
    
    (Object.values(answers) as string[]).forEach(val => {
      scores[val] = (scores[val] || 0) + 1;
    });

    let topKey = '';
    let maxScore = -1;

    Object.entries(scores).forEach(([key, score]) => {
      if (score > maxScore) {
        maxScore = score;
        topKey = key;
      }
    });

    setResult(topKey);
  };

  const renderResult = () => {
    if (!result || !ASSESSMENT_RESULTS[result]) return null;
    const data = ASSESSMENT_RESULTS[result];

    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-8 bg-brand-pinkLight border border-brand-pink/30 rounded-xl p-8"
      >
        <div className="text-sm font-bold font-display uppercase tracking-widest text-brand-pink mb-4">Your #1 Priority</div>
        <h3 className="text-3xl font-black text-brand-ink mb-3">{data.title}</h3>
        <p className="text-lg font-medium text-brand-ink/70 leading-relaxed mb-6">
          {data.body}
        </p>
        <div className="pt-6 border-t border-brand-pink/20 flex flex-col sm:flex-row items-center gap-2">
           <span className="text-base font-semibold text-brand-ink/50">Next step:</span>
           <button 
             onClick={onGoToRoadmap}
             className="text-base font-bold text-brand-pink hover:text-brand-purple transition-colors flex items-center gap-1"
           >
             Go to your 90-Day Roadmap <ArrowRight size={16} />
           </button>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="max-w-2xl">
      <div className="mb-8">
        <h2 className="text-4xl font-black text-brand-ink mb-2">🎯 Priority Assessment</h2>
        <p className="text-lg font-medium text-brand-ink/60">
          Answer 5 questions to identify your single biggest bottleneck and which system to build first.
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
         <p className="text-base font-semibold text-brand-ink/70 m-0">
           This isn't a quiz with a trick answer. Every result points to a real system you can start building immediately. Be honest—pick the answer that describes your week <strong>right now</strong>, not the ideal version.
         </p>
      </div>

      <div className="space-y-8">
        {ASSESSMENT_QUESTIONS.map((q) => (
          <div key={q.id} className="space-y-3">
            <h4 className="text-lg font-bold text-brand-ink">{q.id}. {q.label}</h4>
            <div className="space-y-2">
              {q.options.map((opt) => {
                const isSelected = answers[q.id] === opt.value;
                return (
                  <div
                    key={opt.value}
                    onClick={() => handleSelect(q.id, opt.value)}
                    className={`
                      relative flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all duration-200
                      ${isSelected 
                        ? 'bg-brand-pinkLight border-brand-pink text-brand-pink font-bold' 
                        : 'bg-white border-gray-200 text-brand-ink/70 hover:bg-brand-bg hover:text-brand-ink hover:border-brand-pink/50'
                      }
                    `}
                  >
                    <div className={`
                      w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors
                      ${isSelected ? 'border-brand-pink bg-brand-pink' : 'border-gray-200'}
                    `}>
                      {isSelected && <div className="w-2 h-2 bg-white rounded-full" />}
                    </div>
                    <span className="text-base">{opt.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        {!result ? (
            <button
                onClick={calculateResult}
                disabled={Object.keys(answers).length < 5}
                className={`
                px-8 py-3 rounded-lg text-lg font-extrabold text-white transition-all
                ${Object.keys(answers).length < 5 
                    ? 'bg-gray-300 cursor-not-allowed' 
                    : 'bg-brand-pink hover:bg-brand-pink/90 hover:-translate-y-0.5 shadow-lg shadow-brand-pink/30'}
                `}
            >
                Find My #1 Priority →
            </button>
        ) : (
             <button
                onClick={() => { setResult(null); setAnswers({}); }}
                className="px-6 py-2 rounded-lg text-base font-bold border border-gray-200 text-brand-ink/50 hover:bg-gray-50"
             >
                Retake Assessment
             </button>
        )}
      </div>

      {renderResult()}
    </div>
  );
};

export default Assessment;