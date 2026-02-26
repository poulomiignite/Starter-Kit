import React from 'react';
import { Database, FileText, Bot, Share2, Star } from 'lucide-react';

const FiveIModel: React.FC = () => {
  const layers = [
    {
      id: '1',
      name: 'INPUT',
      subtitle: 'Everything starts here.',
      icon: Database,
      desc: "AI is only as powerful as the data it receives. Input is what flows into your systems: Lead inquiries, Content ideas, Client requests, Calendar invites, Support tickets, Market signals. If your inputs are scattered, your outputs will be too. Structured input = reliable performance."
    },
    {
      id: '2',
      name: 'INFORMATION',
      subtitle: 'Your business knowledge base.',
      icon: FileText,
      desc: "This is what makes AI understand YOUR business, not just business in general. Includes: Your brand voice, offers, SOPs, CRM data, and decision-making logic. Without this layer, AI stays generic. With it, AI becomes your custom business assistant."
    },
    {
      id: '3',
      name: 'INTELLIGENCE',
      subtitle: 'AI that processes and acts.',
      icon: Bot,
      desc: "This is where AI becomes strategic. Intelligence is your AI tools—Claude, GPT, Gemini—configured with your information to: Analyze leads, Draft content, Research prospects, Generate proposals. Intelligence trained on your information thinks the way you do."
    },
    {
      id: '4',
      name: 'INTEGRATION',
      subtitle: 'Systems connected into workflows.',
      icon: Share2,
      desc: "Intelligence alone isn't enough. It must connect to the tools your business runs on. Integration ensures CRM data flows, forms trigger workflows, documents move between systems, and information doesn't live in silos. You remove manual handoffs."
    },
    {
      id: '5',
      name: 'IDEAL OUTPUT',
      subtitle: 'Predictable, high-quality results.',
      icon: Star,
      desc: "When the first four layers are structured correctly, the result is consistent performance. Qualified leads, on-brand content, onboarded clients, strategic insights. Not more activity. Better outcomes."
    }
  ];

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h2 className="text-4xl font-black text-brand-ink mb-2">🗃 The BrandAI 5-I Infrastructure Model™</h2>
        <p className="text-lg font-medium text-brand-ink/60 max-w-2xl">
          The difference between random productivity gains and real business leverage is architecture. This is the structure that turns AI from a tool you open into a growth engine.
        </p>
      </div>

      <div className="space-y-6">
        {layers.map((layer, idx) => (
          <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 flex flex-col md:flex-row gap-6 hover:shadow-md transition-shadow">
            <div className="flex-shrink-0 flex flex-col items-center">
              <div className="w-14 h-14 rounded-xl bg-brand-purple text-white flex items-center justify-center text-2xl font-black mb-2 shadow-lg shadow-brand-purple/20">
                {layer.id}
              </div>
              <div className="h-full w-0.5 bg-gray-100 hidden md:block"></div>
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-2xl font-black text-brand-ink tracking-tight uppercase">{layer.name}</h3>
                <span className="px-2 py-0.5 rounded bg-brand-bg border border-gray-200 text-sm font-bold text-brand-ink/50 uppercase tracking-wide">
                  {layer.subtitle}
                </span>
              </div>
              <p className="text-lg font-medium text-brand-ink/70 leading-relaxed">
                {layer.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-brand-purple rounded-xl p-6 text-white text-center">
        <h4 className="text-base font-bold opacity-80 uppercase tracking-widest mb-3">How It Works</h4>
        <div className="flex flex-wrap items-center justify-center gap-2 text-sm md:text-base font-extrabold">
            <span>INPUT</span>
            <span className="opacity-50">→</span>
            <span>INFORMATION</span>
            <span className="opacity-50">→</span>
            <span>INTELLIGENCE</span>
            <span className="opacity-50">→</span>
            <span>INTEGRATION</span>
            <span className="opacity-50">→</span>
            <span className="text-brand-pink">IDEAL OUTPUT</span>
        </div>
      </div>
    </div>
  );
};

export default FiveIModel;