import React, { useState, useEffect } from 'react';
import { CHECKLIST } from '../constants';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const Checklist: React.FC = () => {
  // Load initial state from local storage or default to empty
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('brandai-checklist');
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  });

  // Save to local storage whenever state changes
  useEffect(() => {
    localStorage.setItem('brandai-checklist', JSON.stringify(checkedItems));
  }, [checkedItems]);

  const toggleItem = (id: string) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const calculateProgress = () => {
    let total = 0;
    let done = 0;
    CHECKLIST.forEach(section => {
      section.items.forEach(item => {
        total++;
        if (checkedItems[item.id]) done++;
      });
    });
    return Math.round((done / total) * 100);
  };

  const progress = calculateProgress();

  return (
    <div className="max-w-3xl">
      <div className="mb-6">
        <h2 className="text-4xl font-black text-brand-ink mb-2">✅ AI Infrastructure Checklist</h2>
        <p className="text-lg font-medium text-brand-ink/60 mb-6">
          Work through this as you build. Check off each item—your progress is saved automatically.
        </p>
        
        {/* Progress Bar */}
        <div className="bg-white p-4 border border-gray-200 rounded-xl flex items-center gap-4 mb-8">
            <div className="text-sm font-bold text-brand-ink/50 uppercase tracking-wider flex-1">Overall Progress</div>
            <div className="flex-[2] bg-gray-100 rounded-full h-2 overflow-hidden">
                <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    className="h-full bg-brand-pink"
                />
            </div>
            <div className="text-base font-black text-brand-pink w-8 text-right">{progress}%</div>
        </div>
      </div>

      <div className="space-y-6">
        {CHECKLIST.map((section) => (
          <div key={section.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <div className="bg-brand-bg px-4 py-3 border-b border-gray-100">
               <h3 className="text-base font-extrabold text-brand-ink uppercase tracking-wide">{section.title}</h3>
            </div>
            <div className="p-2">
              {section.items.map((item) => (
                <div 
                  key={item.id}
                  onClick={() => toggleItem(item.id)}
                  className={`
                    flex items-start gap-3 p-3 rounded-lg cursor-pointer transition-colors duration-200
                    ${checkedItems[item.id] ? 'opacity-50' : 'hover:bg-gray-50'}
                  `}
                >
                   <div className={`
                      w-5 h-5 mt-0.5 rounded border flex items-center justify-center flex-shrink-0 transition-colors
                      ${checkedItems[item.id] 
                        ? 'bg-brand-green border-brand-green text-white' 
                        : 'bg-white border-gray-300'}
                    `}>
                      {checkedItems[item.id] && <Check size={12} strokeWidth={4} />}
                    </div>
                    <span className={`text-lg font-medium transition-all ${checkedItems[item.id] ? 'line-through text-brand-ink/40' : 'text-brand-ink/80'}`}>
                        {item.text}
                    </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Checklist;