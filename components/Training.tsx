import React from 'react';

const Training: React.FC = () => {
  const phases = [
    {
      num: 1,
      title: 'Week 1–2: Awareness & Buy-In',
      sub: 'Before you build anything, get alignment',
      tasks: [
        'Share the 5-I Model with your team—explain what AI infrastructure means for your business specifically',
        'Run a 45-minute team session: "Where do we lose the most time each week?"',
        'Identify 2–3 team members who will be the AI champions for implementation',
        'Set the expectation: AI won\'t replace roles—it will free people from repetitive work'
      ]
    },
    {
      num: 2,
      title: 'Week 3–4: First System Together',
      sub: 'Build the first system as a team, not alone',
      tasks: [
        'Pick one system based on the Priority Assessment—start here together',
        'Document the current manual process before automating it',
        'Assign clear ownership: who runs this system going forward?',
        'Create a simple SOP so anyone on the team can execute it'
      ]
    },
    {
      num: 3,
      title: 'Week 5–8: Expand & Systematise',
      sub: 'Roll out to the rest of the team',
      tasks: [
        'Run weekly 30-minute "AI wins" check-ins—celebrate what\'s working',
        'Collect friction points: what\'s clunky, slow, or confusing in the system?',
        'Iterate and improve based on real team usage, not assumptions',
        'Begin building the second priority system using the same process'
      ]
    },
    {
      num: 4,
      title: 'Month 3: Independent Execution',
      sub: 'Team runs systems without you in every loop',
      tasks: [
        'Each system has an owner, an SOP, and a review cadence',
        'Monthly AI review: what saved time, what needs improvement, what to build next',
        'You step out of day-to-day execution and focus on strategy',
        'Team can onboard new members directly into the AI systems independently'
      ]
    }
  ];

  return (
    <div className="max-w-3xl">
      <div className="mb-8">
        <h2 className="text-4xl font-black text-brand-ink mb-2">👥 Team Training Roadmap</h2>
        <p className="text-lg font-medium text-brand-ink/60">
          How to get your team onboard with AI infrastructure—without resistance or confusion.
        </p>
      </div>

      <div className="space-y-6">
        {phases.map((phase) => (
          <div key={phase.num} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <div className="bg-brand-bg px-5 py-4 border-b border-gray-200 flex items-center gap-4">
              <div className="w-8 h-8 rounded-lg bg-brand-purple text-white flex items-center justify-center text-sm font-black shadow-sm">
                {phase.num}
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-brand-ink">{phase.title}</h3>
                <div className="text-sm font-semibold text-brand-ink/40 uppercase tracking-wide">{phase.sub}</div>
              </div>
            </div>
            <div className="p-5 space-y-3">
              {phase.tasks.map((task, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="text-brand-pink text-xl leading-none">•</div>
                  <p className="text-base font-medium text-brand-ink/70 leading-relaxed">{task}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Training;