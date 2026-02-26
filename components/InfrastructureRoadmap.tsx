import React from 'react';

const InfrastructureRoadmap: React.FC = () => {
  const steps = [
    {
      name: 'Identify',
      desc: "Map your business operations and pinpoint where time is lost, revenue leaks, and manual work is slowing growth. You can't build AI infrastructure without knowing exactly what you're automating."
    },
    {
      name: 'Instruct',
      desc: "Train your AI tools on your brand voice, business context, offers, and processes. Generic AI gives generic output. Instructed AI gives output that sounds and thinks like you."
    },
    {
      name: 'Integrate',
      desc: "Connect your AI assistants into your existing tools and workflows—CRM, email, content platforms, scheduling—so they work together as one system rather than isolated tools."
    },
    {
      name: 'Iterate',
      desc: "Test, refine, and improve. AI infrastructure is not set-and-forget. Each iteration makes the system smarter, faster, and more aligned with how your business actually works."
    },
    {
      name: 'Independently Scale',
      desc: "Once your systems are trained and integrated, they begin running without your constant input—multiplying your team's capacity and creating leverage that doesn't depend on your daily involvement."
    }
  ];

  return (
    <div className="max-w-3xl">
      <div className="mb-8">
        <h2 className="text-4xl font-black text-brand-ink mb-2">🛣️ AI Infrastructure Roadmap</h2>
        <p className="text-lg font-medium text-brand-ink/60">
          The five stages that turn AI from a tool you use occasionally into infrastructure that runs your business.
        </p>
      </div>

      <div className="space-y-0 border border-gray-200 rounded-xl bg-white overflow-hidden">
        {steps.map((step, idx) => (
          <div key={idx} className="flex gap-6 p-6 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors">
            <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-brand-pink text-white flex items-center justify-center text-2xl font-black italic shadow-sm">
              I
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-brand-ink mb-2">{step.name}</h3>
              <p className="text-base font-medium text-brand-ink/70 leading-relaxed">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfrastructureRoadmap;