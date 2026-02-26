import React from 'react';
import { NavItem } from '../types';
import {
  Hand,
  Target,
  LayoutGrid,
  BarChart2,
  Calendar,
  Users,
  CheckSquare,
  Gift,
  Rocket,
  Box,
  Map
} from 'lucide-react';

interface Props {
  activeTab: string;
  onNavigate: (id: string) => void;
}

const Sidebar: React.FC<Props> = ({ activeTab, onNavigate }) => {
  const navItems: NavItem[] = [
    { id: 'welcome', label: 'Welcome', icon: Hand, category: 'start' },
    { id: 'whats-inside', label: "What's Inside This Kit", icon: Box, category: 'start' },
    { id: 'howto', label: 'How to Use This Kit', icon: Target, category: 'start' },
    { id: 'model', label: 'The 5-I Model', icon: LayoutGrid, category: 'start' },
    { id: 'infra-roadmap', label: 'AI Infra Roadmap', icon: Map, category: 'start' },
    
    { id: 'systems', label: '6 Systems Breakdown', icon: BarChart2, category: 'build' },
    { id: 'assessment', label: 'Priority Assessment', icon: Target, category: 'build' },
    { id: 'roadmap', label: '90-Day Roadmap', icon: Calendar, category: 'build' },
    { id: 'training', label: 'Team Training', icon: Users, category: 'build' },
    { id: 'checklist', label: 'Infrastructure Checklist', icon: CheckSquare, category: 'build' },
    
    { id: 'bonuses', label: 'Bonuses & Resources', icon: Gift, category: 'resources' },
    { id: 'ready', label: 'Ready to Build?', icon: Rocket, category: 'resources' },
  ];

  const renderSection = (title: string, category: string) => (
    <div className="mb-4">
      <div className="px-4 py-2 text-sm font-bold font-display uppercase tracking-widest text-brand-ink/40">
        {title}
      </div>
      <div className="space-y-0.5">
        {navItems.filter(item => item.category === category).map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`
                w-full flex items-center gap-3 px-4 py-2.5 text-base font-bold transition-all duration-200
                ${isActive 
                  ? 'bg-brand-pinkLight text-brand-pink border-r-2 border-brand-pink' 
                  : 'text-brand-ink/70 hover:bg-brand-bg hover:text-brand-ink'}
              `}
            >
              <item.icon size={18} strokeWidth={isActive ? 2.5 : 2} />
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );

  return (
    <nav className="w-64 bg-white border-r border-gray-200 h-[calc(100vh-64px)] overflow-y-auto sticky top-[64px] hidden md:block">
      <div className="py-4">
        {renderSection('Get Started', 'start')}
        <div className="mx-4 my-2 h-px bg-gray-100" />
        {renderSection('Build Your System', 'build')}
        <div className="mx-4 my-2 h-px bg-gray-100" />
        {renderSection('Resources', 'resources')}
      </div>
    </nav>
  );
};

export default Sidebar;