import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from './components/Sidebar';
import Welcome from './components/Welcome';
import WhatsInside from './components/WhatsInside';
import HowToUse from './components/HowToUse';
import FiveIModel from './components/FiveIModel';
import InfrastructureRoadmap from './components/InfrastructureRoadmap';
import SixSystems from './components/SixSystems';
import Assessment from './components/Assessment';
import Roadmap from './components/Roadmap';
import Training from './components/Training';
import Checklist from './components/Checklist';
import Bonuses from './components/Bonuses';
import ReadyToBuild from './components/ReadyToBuild';
import { Menu, X } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('welcome');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'welcome': return <Welcome onNavigate={navigate} />;
      case 'whats-inside': return <WhatsInside />;
      case 'howto': return <HowToUse />;
      case 'model': return <FiveIModel />;
      case 'infra-roadmap': return <InfrastructureRoadmap />;
      case 'systems': return <SixSystems />;
      case 'assessment': return <Assessment onGoToRoadmap={() => navigate('roadmap')} />;
      case 'roadmap': return <Roadmap />;
      case 'training': return <Training />;
      case 'checklist': return <Checklist />;
      case 'bonuses': return <Bonuses />;
      case 'ready': return <ReadyToBuild />;
      default: return <Welcome onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg font-sans text-brand-ink">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 h-16 flex items-center px-4 md:px-6 justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-brand-pink flex items-center justify-center text-white font-black text-base">
            B
          </div>
          <span className="text-base font-extrabold tracking-tight font-display">
            Brand<span className="text-brand-pink">AI</span> Growth System
          </span>
        </div>
        
        <div className="flex items-center gap-3">
            <span className="hidden md:inline-flex items-center px-3 py-1 bg-brand-pinkLight border border-brand-pink/30 text-brand-pink text-xs font-bold uppercase tracking-widest rounded-full">
            Starter Kit
            </span>
            <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-brand-ink"
            >
                {mobileMenuOpen ? <X /> : <Menu />}
            </button>
        </div>
      </header>

      <div className="flex relative">
        <Sidebar activeTab={activeTab} onNavigate={navigate} />
        
        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
            {mobileMenuOpen && (
                <motion.div 
                    initial={{ x: '-100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '-100%' }}
                    transition={{ type: 'tween' }}
                    className="fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-2xl pt-16 md:hidden"
                >
                    <div className="h-full overflow-y-auto">
                        {['welcome', 'whats-inside', 'howto', 'model', 'infra-roadmap', 'systems', 'assessment', 'roadmap', 'training', 'checklist', 'bonuses', 'ready'].map(id => (
                            <button
                                key={id}
                                onClick={() => navigate(id)}
                                className={`block w-full text-left px-6 py-4 text-base font-bold capitalize ${activeTab === id ? 'text-brand-pink bg-brand-pinkLight' : 'text-brand-ink/70'}`}
                            >
                                {id.replace(/-/g, ' ')}
                            </button>
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>

        <main className="flex-1 p-6 md:p-10 max-w-5xl mx-auto w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default App;