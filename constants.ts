import { SystemData, AssessmentQuestion, AssessmentResult, Phase, ChecklistSection } from './types';

export const SYSTEMS: SystemData[] = [
  {
    id: 'clarity',
    emoji: '🎯',
    name: 'Clarity & Strategy System',
    whatItDoes: 'Extract market intelligence, define crystal-clear positioning, and create your Master Brand Document that powers all other AI systems.',
    included: [
      'Market research and audience intelligence',
      'Competitive analysis and gap identification',
      'Ideal Client Profile (ICP) development',
      'Brand positioning and messaging',
      'Master Brand Document creation',
      'Communication style and voice guidelines'
    ],
    whyMatters: "You can't create effective content or sell confidently without clarity. This system gives you the strategic foundation that makes everything else work.",
    successLooksLike: [
      'Crystal-clear positioning that differentiates you',
      "Deep understanding of your audience's language and pain points",
      'Master Brand Document that ensures consistency',
      'Marketing that feels like mind-reading'
    ],
    timeSaved: '8-12 hours/week',
    guideLink: 'https://www.notion.so/System-1-Clarity-Strategy-System-3091b5bed3b081948cb5d54a1c4a3fd8?pvs=21',
    totalBuildTime: '13-18 hours',
    steps: [
      {
        title: 'Step 1: External Intelligence (Market & Audience)',
        problem: "You're guessing at what your audience wants and how to position against competitors.",
        stack: ['Perplexity', 'Reddit', 'NotebookLM'],
        outcome: 'A data-backed understanding of where the market is hurting and the exact words they use to describe that pain.',
        time: '4-6 hours',
        subSteps: [
          {
            title: 'Perplexity Deep Dive',
            description: [
              'Research your market with queries like "What are current trends in [industry]?", "What are [audience] struggling with?", "Who are top competitors?".',
              'Save all findings in a Google Doc.'
            ]
          },
          {
            title: 'Reddit "Vibe" Mining',
            description: [
              'Search relevant subreddits for complaints, desperate questions, and success stories.',
              'Copy exact language, emotions, and values into your doc.'
            ]
          },
          {
            title: 'Synthesize in NotebookLM',
            description: [
              'Upload research doc to NotebookLM.',
              'Ask for top 5 pain points, language patterns, and gaps competitors aren\'t solving.'
            ]
          }
        ]
      },
      {
        title: 'Step 2: The Authority Audit (Your Unfair Advantage)',
        problem: "You don't know what makes YOU specifically qualified to solve these problems.",
        stack: ['NotebookLM', 'Resume/LinkedIn', 'Case studies'],
        outcome: 'A Product-Market Fit Report that highlights exactly how your past wins make you the only logical choice.',
        time: '3-4 hours',
        subSteps: [
          {
            title: 'Gather your credibility',
            description: [
              'Create a doc with resume, past successes, case studies, testimonials, and skills.'
            ]
          },
          {
            title: 'Add your "DNA"',
            description: [
              'Write down your personal mission, passions, core offers, and methodology.'
            ]
          },
          {
            title: 'Find your Product-Market Fit',
            description: [
              'Upload both docs + Market Realities to NotebookLM.',
              'Ask: "Given my credibility and market gaps, where is my strongest PMF? How can I position myself as the only logical choice?"'
            ]
          }
        ]
      },
      {
        title: 'Step 3: The High-Definition Audience Profile',
        problem: 'Your Ideal Client Profile is too generic ("small business owners" isn\'t specific enough).',
        stack: ['Gemini or Claude', 'Research from Steps 1 & 2'],
        outcome: 'A clear, 1-page profile that makes your marketing feel like you\'re reading your client\'s mind.',
        time: '2-3 hours',
        subSteps: [
          {
            title: 'Create deep ICP document',
            description: [
              'Include demographics (revenue, size, industry).',
              'Include psychographics: Pain points (specific), Dream outcomes (specific), Failed attempts, Objections, Trigger events.'
            ]
          },
          {
            title: 'Create 1-page profile',
            description: [
              'Use Gemini/Claude: "Create a detailed 1-page ICP based on this research. Make it so specific I feel like I\'m reading their mind."'
            ]
          },
          {
            title: 'Upload to AI tools',
            description: [
              'Save this profile and upload it to your content AI, sales AI, and custom Gems.'
            ]
          }
        ]
      },
      {
        title: 'Step 4: The Master Brand Document (The Bible)',
        problem: 'Your brand is inconsistent across platforms because there\'s no "source of truth."',
        stack: ['Gemini (Custom Gem) or Claude (Custom Project)', 'All work from Steps 1-3'],
        outcome: 'Your Master Brand Document. The single source of truth for your entire business.',
        time: '4-5 hours',
        subSteps: [
          {
            title: 'Gather everything',
            description: [
              'Market Realities, PMF Report, ICP Profile, offers/pricing, best content examples.'
            ]
          },
          {
            title: 'Create Master Brand Document Gem',
            description: [
              'Synthesize into one doc including: Audience Details, Brand Positioning, Communication Style, Mission, Core Offer Stack, Brand Story.',
              'Make it a complete reference document.'
            ]
          },
          {
            title: 'Use it everywhere',
            description: [
              'This doc becomes the "Global Instruction" for every AI tool you build to ensure consistency.'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'visibility',
    emoji: '📣',
    name: 'Visibility & Content System',
    whatItDoes: 'Create master content and automatically repurpose it across multiple platforms while maintaining your brand voice.',
    included: [
      'Master content creation (long-form articles, case studies)',
      'Multi-format repurposing (1 piece → 10+ formats)',
      'Platform-specific adaptation (LinkedIn, email, video, etc.)',
      'Content calendar management',
      'Distribution automation'
    ],
    whyMatters: 'Consistent visibility builds authority. This system lets you show up everywhere without spending all day creating content.',
    successLooksLike: [
      '1 piece of content becomes 15 pieces automatically',
      'Posting 5-10x per week across platforms',
      'Maintaining consistent brand voice',
      'Never running out of content ideas'
    ],
    timeSaved: '15-20 hours/week',
    guideLink: 'https://www.notion.so/System-2-Visibility-Content-System-3091b5bed3b0818dbb32fbae62cff9e2?pvs=21',
    totalBuildTime: '13-18 hours',
    steps: [
      {
        title: 'Step 1: The Idea Vault & Strategic Concept',
        problem: 'Content ideas are scattered, unorganized, and you don\'t know if they\'re strategically sound.',
        stack: ['Notion/Docs/Notes', 'Gemini (Custom Gem) or Claude'],
        outcome: 'A structured "Idea Bank" where every concept is strategically sound before you even start writing.',
        time: '2-3 hours',
        subSteps: [
          {
            title: 'Set up your Idea Vault',
            description: [
              'Choose ONE tool (Notion, Docs, Notes).',
              'Build a habit: jot down raw thoughts, sales insights, market observations.'
            ]
          },
          {
            title: 'Create your Strategic Content Gem',
            description: [
              'Upload brand voice, offers, audience details, buyer journey.',
              'Instructions: "Translate messy notes into Strategic Concepts mapping to offers and buyer stages."'
            ]
          },
          {
            title: 'Use it',
            description: [
              'Paste raw notes -> Get polished Strategic Concept (Topic, Offer, Stage, Angle).'
            ]
          }
        ]
      },
      {
        title: 'Step 2: Hero Content Creation',
        problem: 'Creating high-quality, voice-consistent long-form content takes too long.',
        stack: ['Claude (Custom Skill or Project)'],
        outcome: 'One deep, high-value Hero piece that carries your true voice and authority.',
        time: '3-4 hours',
        subSteps: [
          {
            title: 'Build your Hero Content Skill',
            description: [
              'Train Claude on your voice with 3-5 best posts.',
              'Show structure: opening style, arguments, examples, closing.'
            ]
          },
          {
            title: 'Set clear instructions',
            description: [
              'Command: Create long-form content matching exact voice/style.'
            ]
          },
          {
            title: 'Use it',
            description: [
              'Feed Strategic Concept -> Get deep Hero piece.',
              'Review and edit (80-90% done).'
            ]
          }
        ]
      },
      {
        title: 'Step 3: The Multiplier (Repurposing Skills)',
        problem: 'You have one great piece but need it in 10+ formats.',
        stack: ['Claude (Multiple Skills/Projects)'],
        outcome: 'A full distribution pack for every 1 Hero piece.',
        time: '4-6 hours',
        subSteps: [
          {
            title: 'Create Sub-Skills for each format',
            description: [
              'The Threader (LinkedIn threads)',
              'The Scripter (Short video scripts)',
              'The Noter (Substack notes)',
              'The Emailer (Newsletter format)'
            ]
          },
          {
            title: 'Use the multiplier',
            description: [
              'Run Hero content through each Sub-Skill.',
              'Get 6+ pieces from 1 Hero piece.'
            ]
          }
        ]
      },
      {
        title: 'Step 4: Visuals & Production',
        problem: 'Great writing needs great visuals to perform well.',
        stack: ['Gemini (Imagen)', 'Canva', 'Descript', 'InVideo'],
        outcome: 'A professional, omnichannel brand presence.',
        time: '4-5 hours',
        subSteps: [
          {
            title: 'Set up image generation',
            description: [
              'Use Gemini/Imagen to create on-brand images.',
              'Polish in Canva with brand colors/overlays.'
            ]
          },
          {
            title: 'Set up video workflow',
            description: [
              'Talking head: Record in Descript.',
              'Faceless: Use InVideo with scripts.'
            ]
          },
          {
            title: 'Distribution',
            description: [
              'Manual posting (recommended start) or Automation (Zapier -> Buffer).'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'sales',
    emoji: '💰',
    name: 'Sales & Pipeline System',
    whatItDoes: 'Eliminate lead leakage, establish 24/7 responsiveness, and automate the identification of sales-qualified leads.',
    included: [
      'Lead capture automation',
      'Qualification and scoring logic',
      'CRM integration and data sync',
      'Personalized outreach sequences',
      'Follow-up automation',
      'Pipeline tracking and reporting'
    ],
    whyMatters: 'No more leads falling through cracks. Every inquiry gets qualified, followed up, and moved through your pipeline automatically.',
    successLooksLike: [
      'Lead response time under 5 minutes',
      'Automatic lead scoring and routing',
      'Personalized outreach at scale',
      'Clear visibility on pipeline health'
    ],
    timeSaved: '10-15 hours/week',
    impact: 'Revenue impact: 20-30% increase',
    guideLink: 'https://www.notion.so/Sales-Pipeline-System-3091b5bed3b08115b00df4923d92707a?pvs=21',
    steps: [] // No implementation steps provided in source
  },
  {
    id: 'client',
    emoji: '✨',
    name: 'Client Experience System',
    whatItDoes: 'Transition from "Lead" to "Customer" with automated onboarding, project management, and white-glove support.',
    included: [
      'Welcome sequences and onboarding automation',
      'Document collection and organization',
      'Project kickoff preparation',
      'Deliverable creation and tracking',
      'Status updates and communication',
      'Feedback collection'
    ],
    whyMatters: 'Clients judge you by how smooth the experience is. This system ensures every client gets white-glove treatment without manual effort.',
    successLooksLike: [
      'Onboarding time cut in half',
      'Zero "what\'s the status?" emails',
      'Consistent delivery quality',
      'Higher client satisfaction scores'
    ],
    timeSaved: '8-12 hours/week',
    guideLink: 'https://www.notion.so/Client-Experience-System-3091b5bed3b0810f8d11e1b82a39411a?pvs=21',
    totalBuildTime: '8-12 hours',
    steps: [
      {
        title: 'Step 1: The Automated Welcome',
        problem: 'New clients fall through the cracks between payment and project kickoff.',
        stack: ['Stripe', 'CRM (HubSpot/Pipedrive/Airtable)', 'Zapier/Make'],
        outcome: 'Client is officially "in the system" and receives instructions immediately.',
        time: '2-3 hours',
        subSteps: [
          {
            title: 'Connect payment to CRM',
            description: [
              'Trigger: New payment in Stripe.',
              'Action: Update lead status to "Customer" and add "Needs Onboarding" tag.'
            ]
          },
          {
            title: 'Set up welcome email',
            description: [
              'Draft "Welcome & Kickoff" email (Thank you, Next steps, Timeline).',
              'Include calendar link and portal link.'
            ]
          },
          {
            title: 'Automate the send',
            description: [
              'Send email immediately via CRM/Zapier.'
            ]
          }
        ]
      },
      {
        title: 'Step 2: The Command Center (Notion + Slack)',
        problem: 'Client communication is scattered. No central "home base."',
        stack: ['Notion', 'Slack', 'Zapier/Make'],
        outcome: 'Client has a home base and direct line. Everything organized.',
        time: '4-5 hours',
        subSteps: [
          {
            title: 'Create Notion Client Portal template',
            description: [
              'Sections: Welcome, Onboarding Checklist, Timeline, FAQ, Meeting Notes, Resources.'
            ]
          },
          {
            title: 'Set up automation',
            description: [
              'Trigger: Customer status updated.',
              'Action: Duplicate Notion template, rename, share with client.',
              'Action: Create/invite to Slack channel.'
            ]
          },
          {
            title: 'Customize per client',
            description: [
              'Fill in specific dates and deliverables.'
            ]
          }
        ]
      },
      {
        title: 'Step 3: The 24/7 Client Support Assistant',
        problem: 'Clients ask repeatable questions about SOPs, contracts, and process.',
        stack: ['Gemini (Custom Gem) or Claude'],
        outcome: 'Instant answers to common questions based on specific project docs.',
        time: '1-2 hours per client',
        subSteps: [
          {
            title: 'Create assistant',
            description: [
              'Upload contract, SOPs, brand guidelines, transcripts, scope.',
              'Instructions: "Answer based ONLY on docs. Be professional."'
            ]
          },
          {
            title: 'Use it',
            description: [
              'Use internally to draft answers or give client direct access.'
            ]
          }
        ]
      },
      {
        title: 'Step 4: The Progress Report Generator',
        problem: 'Creating professional reports is time-consuming.',
        stack: ['Gemini/Claude'],
        outcome: 'Send "CEO-level" progress reports in 10 minutes.',
        time: '1-2 hours',
        subSteps: [
          {
            title: 'Create Progress Report Gem',
            description: [
              'Structure: Status, Completed, Key Wins, In Progress, Upcoming, Blockers, Action Items.'
            ]
          },
          {
            title: 'Use it monthly',
            description: [
              'Paste notes, slack highlights, deliverables.',
              'Generate report, review, and send.'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'ops',
    emoji: '⚙️',
    name: 'Ops & Admin System',
    whatItDoes: 'Handles invoicing, proposals, scheduling, contracts, and all back-office operations.',
    included: [
      'Automated invoice generation and payment tracking',
      'Proposal creation from templates',
      'Calendar intelligence and scheduling',
      'Contract and agreement automation',
      'File organization and document management',
      'Reporting and analytics dashboards'
    ],
    whyMatters: "Admin work doesn't grow your business, but it has to get done. This system handles it so you don't have to.",
    successLooksLike: [
      'Invoices sent automatically at milestones',
      'Proposals generated in 15 minutes (vs. 4 hours)',
      'Zero double-bookings or scheduling conflicts',
      'Getting paid faster',
      'Always knowing where things stand'
    ],
    timeSaved: '10-15 hours/week',
    guideLink: 'https://www.notion.so/How-to-Build-Ops-Admin-System-3091b5bed3b081c89a5fff85c4128d92?pvs=21',
    totalBuildTime: '13-17 hours',
    steps: [
      {
        title: 'Step 1: Meeting Intelligence & Task Capture',
        problem: 'Time lost manually writing notes and tracking tasks.',
        stack: ['Descript', 'LLM', 'Notion', 'Zapier'],
        outcome: 'Automated conversion of spoken words into actionable task list.',
        time: '3-4 hours',
        subSteps: [
          {
            title: 'Record & Transcribe',
            description: [
              'Record client/team meetings in Descript for auto-transcription.'
            ]
          },
          {
            title: 'Extract actions',
            description: [
              'Prompt LLM: "Identify action items, owners, deadlines, priority."'
            ]
          },
          {
            title: 'Automate creation',
            description: [
              'Zapier: New transcript -> LLM Parse -> Create Notion tasks.'
            ]
          }
        ]
      },
      {
        title: 'Step 2: SOP Factory',
        problem: 'Lack of documentation makes delegation impossible.',
        stack: ['Descript', 'LLM', 'Notion'],
        outcome: 'Searchable library of business processes.',
        time: '1-2 hours per SOP',
        subSteps: [
          {
            title: 'Record execution',
            description: [
              'Record yourself doing the task, narrating steps.'
            ]
          },
          {
            title: 'Turn to SOP',
            description: [
              'LLM Prompt: "Generate step-by-step SOP with Purpose, Requirements, Steps, Outcome."'
            ]
          },
          {
            title: 'Store',
            description: [
              'Save in Notion Company Wiki.'
            ]
          }
        ]
      },
      {
        title: 'Step 3: Document Intelligence & Triage',
        problem: 'Manual extraction of data from documents.',
        stack: ['Gemini/Claude', 'Zapier', 'Airtable/Sheets'],
        outcome: 'Structured data storage and automated drafting.',
        time: '4-5 hours',
        subSteps: [
          {
            title: 'Extract data',
            description: [
              'Upload doc to AI.',
              'Prompt: "Extract dates, financial obligations, action items."'
            ]
          },
          {
            title: 'Log & Follow-up',
            description: [
              'Zapier: Upload -> Parse -> Add to Airtable.',
              'Trigger automated email drafts for deadlines/payments.'
            ]
          }
        ]
      },
      {
        title: 'Step 4: Automated Onboarding & Work Prioritization',
        problem: 'Training new hires and identifying priorities is slow.',
        stack: ['LLM', 'Gamma', 'Notion', 'Zapier', 'Google Calendar'],
        outcome: 'Automated orientation and strategic calendar.',
        time: '5-6 hours',
        subSteps: [
          {
            title: 'Employee Onboarding',
            description: [
              'Create 30-day plan with LLM.',
              'Turn SOPs into visual slides with Gamma.',
              'Automate delivery via Zapier.'
            ]
          },
          {
            title: 'Daily Prioritization',
            description: [
              'Evening habit: Paste task list to LLM -> Rank 1-10.',
              'Auto-block calendar based on priorities.'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'ip',
    emoji: '🛠️',
    name: 'Custom IP Tools System',
    whatItDoes: 'Build proprietary frameworks, branded assessments, and custom AI tools that differentiate your business and justify premium pricing.',
    included: [
      'Custom frameworks and methodologies',
      'Branded assessment tools',
      'Proprietary calculators and analyzers',
      'Custom GPTs trained on your IP',
      'Deliverable templates and generators'
    ],
    whyMatters: 'This is your competitive advantage. Generic AI tools give generic results. Your custom IP tools deliver results only YOU can provide.',
    successLooksLike: [
      "Branded tools clients can't get anywhere else",
      'Frameworks that position you as the authority',
      'Deliverables that look and feel premium',
      'Higher perceived value = premium pricing'
    ],
    timeSaved: 'High Leverage',
    impact: 'Justifies 2-3x higher pricing',
    guideLink: 'https://www.notion.so/Custom-IP-Tools-System-3091b5bed3b0811181c3f47b22bd6624?pvs=21',
    totalBuildTime: '22-29 hours',
    steps: [
      {
        title: 'Step 1: Identify Your Proprietary Framework',
        problem: 'You solve problems uniquely but it\'s not documented or branded.',
        stack: ['Process', 'Gemini/Claude', 'Canva'],
        outcome: 'A branded, proprietary framework diagram.',
        time: '4-5 hours',
        subSteps: [
          {
            title: 'Document process',
            description: [
              'List actual steps you take clients through.'
            ]
          },
          {
            title: 'Name & Brand',
            description: [
              'AI Prompt: "Create proprietary names for this process."',
              'Create visual diagram in Canva.'
            ]
          },
          {
            title: 'Use it',
            description: [
              'Reference it in proposals, content, sales calls.'
            ]
          }
        ]
      },
      {
        title: 'Step 2: Build a Branded Assessment Tool',
        problem: 'Prospects don\'t know if they need you or where to start.',
        stack: ['Google Forms/Typeform', 'Gemini/Claude', 'Zapier'],
        outcome: 'Lead qualification tool providing value.',
        time: '6-8 hours',
        subSteps: [
          {
            title: 'Design assessment',
            description: [
              '10-15 diagnostic questions.'
            ]
          },
          {
            title: 'Scoring logic',
            description: [
              'AI Prompt: "Create scoring system and result categories with recommendations."'
            ]
          },
          {
            title: 'Automate',
            description: [
              'Zapier: Form submit -> Calculate -> Send custom email.'
            ]
          }
        ]
      },
      {
        title: 'Step 3: Create Custom GPTs/Gems for Your Method',
        problem: 'Methodology hard to replicate without you.',
        stack: ['ChatGPT/Gemini', 'Framework', 'Brand Doc'],
        outcome: 'Proprietary AI tool delivering your method.',
        time: '4-6 hours',
        subSteps: [
          {
            title: 'Build Custom GPT',
            description: [
              'Train with framework doc, examples, brand voice.',
              'Instructions: "Walk users through phases in order. Never skip steps."'
            ]
          },
          {
            title: 'Use cases',
            description: [
              'Client deliverable, Sales tool, or Internal training.'
            ]
          }
        ]
      },
      {
        title: 'Step 4: Branded Deliverable Templates',
        problem: 'Deliverables look generic.',
        stack: ['Canva', 'Gemini/Claude'],
        outcome: 'Premium, branded deliverables in 1/5th time.',
        time: '8-10 hours',
        subSteps: [
          {
            title: 'Templates',
            description: [
              'Create Canva templates for strategy docs, audits, reports.'
            ]
          },
          {
            title: 'Generators',
            description: [
              'Create AI Gems to generate content for each section.',
              'Workflow: Generate content -> Paste to template.'
            ]
          }
        ]
      }
    ]
  }
];

export const ASSESSMENT_QUESTIONS: AssessmentQuestion[] = [
  {
    id: 1,
    label: "Where are you spending the most time each week?",
    options: [
      { label: "Creating content—writing posts, emails, scripts", value: "visibility" },
      { label: "Chasing leads, sending follow-ups, closing deals", value: "sales" },
      { label: "Onboarding clients, managing projects, status updates", value: "client" },
      { label: "Admin, invoicing, scheduling, contracts", value: "ops" }
    ]
  },
  {
    id: 2,
    label: "Where does your revenue most often get stuck?",
    options: [
      { label: "People don't understand my value or offer clearly", value: "clarity" },
      { label: "Not enough people know I exist—I'm invisible online", value: "visibility" },
      { label: "Leads come in but don't convert to paying clients", value: "sales" },
      { label: "Delivery is consuming all my time so I can't grow", value: "client" }
    ]
  },
  {
    id: 3,
    label: "What breaks first when you get busy?",
    options: [
      { label: "Content stops—I disappear from social and email", value: "visibility" },
      { label: "Follow-ups fall through the cracks", value: "sales" },
      { label: "Client delivery quality drops or delays happen", value: "client" },
      { label: "Back-office chaos—invoices late, scheduling mess", value: "ops" }
    ]
  },
  {
    id: 4,
    label: "How does most of your business currently come in?",
    options: [
      { label: "Referrals—mostly word of mouth (need positioning)", value: "clarity" },
      { label: "Social media or content—but inconsistently", value: "visibility" },
      { label: "Outreach and networking—it takes a lot of effort", value: "sales" },
      { label: "Repeat clients—but I struggle to scale delivery", value: "client" }
    ]
  },
  {
    id: 5,
    label: "If you could fix ONE thing in the next 30 days, it would be:",
    options: [
      { label: "Posting consistently without it taking all day", value: "visibility" },
      { label: "A funnel that converts leads automatically", value: "sales" },
      { label: "A clear message that makes people say 'I need this'", value: "clarity" },
      { label: "Admin and operations running on autopilot", value: "ops" }
    ]
  }
];

export const ASSESSMENT_RESULTS: Record<string, AssessmentResult> = {
  clarity: { 
    priority: "Clarity & Strategy System",
    title: "🎯 Start with Clarity & Strategy", 
    body: "Your biggest bottleneck is clarity. Clients don't fully understand your value, and your messaging isn't doing the heavy lifting. Build your Master Brand Document and positioning first—everything else gets easier once this is solid." 
  },
  visibility: { 
    priority: "Visibility & Content System",
    title: "📣 Start with Visibility & Content", 
    body: "You're invisible when you're busy. Visibility is your #1 growth lever right now. Build a Content System that runs whether or not you have time—so you stay present, build authority, and attract inbound leads consistently." 
  },
  sales: { 
    priority: "Sales & Pipeline System",
    title: "💰 Start with Sales & Pipeline", 
    body: "You have leads but they're not converting—or the process is too manual. A proper Sales System (lead capture, qualification, follow-up) will turn your pipeline into predictable revenue." 
  },
  client: { 
    priority: "Client Experience System",
    title: "✨ Start with Client Experience", 
    body: "Delivery is consuming all your capacity. You can't grow what you can't systemise. Build a Client Experience System to automate onboarding and project management so you can scale white-glove service." 
  },
  ops: { 
    priority: "Ops & Admin System",
    title: "⚙️ Start with Ops & Admin", 
    body: "Admin work is dragging you down. You're spending too much time on low-value tasks like invoicing and scheduling. Automate your back-office so you can focus on growth and strategy." 
  },
  ip: {
    priority: "Custom IP Tools System",
    title: "🛠️ Start with Custom IP Tools",
    body: "You're ready to differentiate. Build proprietary frameworks and tools that set you apart from the competition and justify premium pricing."
  }
};

export const ROADMAP: Phase[] = [
  {
    num: 1, title: 'Foundation & Clarity', sub: 'Weeks 1–2',
    milestones: [
      { text: 'Create Master Brand Document', meta: 'Clarity System' },
      { text: 'Define Ideal Client Profile (ICP)', meta: 'Clarity System' },
      { text: 'Map out Core Offerings', meta: 'Clarity System' },
      { text: 'Audit current tech stack', meta: 'Ops System' }
    ]
  },
  {
    num: 2, title: 'Visibility & Lead Flow', sub: 'Weeks 3–4',
    milestones: [
      { text: 'Set up Content Calendar', meta: 'Visibility System' },
      { text: 'Build Repurposing Workflow', meta: 'Visibility System' },
      { text: 'Automate Lead Capture', meta: 'Sales System' },
      { text: 'Create Welcome Email Sequence', meta: 'Sales System' }
    ]
  },
  {
    num: 3, title: 'Sales & Client Exp', sub: 'Weeks 5–6',
    milestones: [
      { text: 'Implement CRM & Pipeline Tracking', meta: 'Sales System' },
      { text: 'Automate Qualification Logic', meta: 'Sales System' },
      { text: 'Build Onboarding Automation', meta: 'Client System' },
      { text: 'Create Deliverable Templates', meta: 'Client System' }
    ]
  },
  {
    num: 4, title: 'Ops & Scale', sub: 'Weeks 7–12',
    milestones: [
      { text: 'Automate Invoicing & Contracts', meta: 'Ops System' },
      { text: 'Set up Reporting Dashboards', meta: 'Ops System' },
      { text: 'Develop Custom IP Tools', meta: 'IP Tools System' },
      { text: 'Train team on new systems', meta: 'Training' }
    ]
  }
];

export const CHECKLIST: ChecklistSection[] = [
  {
    id: 'clarity',
    title: '🎯 Clarity & Strategy System',
    items: [
      { id: 'cl1', text: 'Market research & audience intelligence' },
      { id: 'cl2', text: 'Competitive analysis' },
      { id: 'cl3', text: 'Brand positioning & messaging defined' },
      { id: 'cl4', text: 'Master Brand Document created' }
    ]
  },
  {
    id: 'visibility',
    title: '📣 Visibility & Content System',
    items: [
      { id: 'v1', text: 'Master content template created' },
      { id: 'v2', text: 'Repurposing workflow defined' },
      { id: 'v3', text: 'Content calendar set up' },
      { id: 'v4', text: 'Distribution automation active' }
    ]
  },
  {
    id: 'sales',
    title: '💰 Sales & Pipeline System',
    items: [
      { id: 's1', text: 'Lead capture automation set up' },
      { id: 's2', text: 'Qualification logic defined' },
      { id: 's3', text: 'CRM integration active' },
      { id: 's4', text: 'Follow-up sequences built' }
    ]
  },
  {
    id: 'client',
    title: '✨ Client Experience System',
    items: [
      { id: 'ce1', text: 'Welcome sequence automated' },
      { id: 'ce2', text: 'Onboarding form/flow active' },
      { id: 'ce3', text: 'Project management board set up' },
      { id: 'ce4', text: 'Feedback collection automated' }
    ]
  },
  {
    id: 'ops',
    title: '⚙️ Ops & Admin System',
    items: [
      { id: 'o1', text: 'Invoicing & payment tracking automated' },
      { id: 'o2', text: 'Proposal templates created' },
      { id: 'o3', text: 'Contract automation set up' },
      { id: 'o4', text: 'File organization structure defined' }
    ]
  },
  {
    id: 'ip',
    title: '🛠️ Custom IP Tools System',
    items: [
      { id: 'ip1', text: 'Proprietary framework documented' },
      { id: 'ip2', text: 'Branded assessment tool built' },
      { id: 'ip3', text: 'Custom GPTs trained' },
      { id: 'ip4', text: 'Deliverable generators created' }
    ]
  }
];