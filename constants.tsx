
import { 
  Award, 
  Layers, 
  Search, 
  Layout, 
  Cpu, 
  BookOpen 
} from 'lucide-react';
import { TabConfig, SkillGroup } from './types';

export const EXPERIENCE_DESIGN_DATA: SkillGroup[] = [
  {
    group: "Problem Framing & Systems Thinking",
    skills: [
      {
        id: "ed_1",
        name: "Problem framing",
        subskills: [
          "Define clear design challenges that articulate who, what, and why.",
          "Reframe briefs or problem statements based on new evidence or insight.",
          "Identify and question assumptions shaping the brief.",
          "Align stakeholders around a shared definition of the problem.",
          "Distinguish between symptoms and root causes using structured analysis tools.",
          "Document framing decisions and rationale to maintain traceability."
        ]
      },
      {
        id: "ed_2",
        name: "Hypothesis and assumption testing",
        subskills: [
          "Articulate hypotheses that link assumptions to measurable outcomes.",
          "Design low-risk experiments to validate or invalidate key assumptions.",
          "Collect and interpret qualitative or quantitative evidence to refine direction.",
          "Manage documentation of learnings and pivot decisions transparently.",
          "Collaborate with research and delivery teams to embed hypothesis-driven design.",
          "Coach peers in evidence-led iteration cycles."
        ]
      },
      {
        id: "ed_pf_3",
        name: "Stakeholder and ecosystem mapping",
        subskills: [
          "Identify all actors, systems, and relationships influencing the experience.",
          "Visualise flows of value, information, and decision-making across the ecosystem.",
          "Distinguish between direct, indirect, and external stakeholders.",
          "Map dependencies, incentives, and conflicts to reveal leverage points.",
          "Use ecosystem maps to anticipate ripple effects of design changes.",
          "Update maps throughout projects to reflect shifting relationships."
        ]
      },
      {
        id: "ed_pf_4",
        name: "Opportunity identification",
        subskills: [
          "Translate insights into clearly defined opportunity areas or “How Might We” statements.",
          "Cluster and prioritise opportunities based on value, feasibility, and impact (or DVF)",
          "Use frameworks (jobs-to-be-done, service gaps, value exchange) to structure thinking.",
          "Align opportunities with UoM strategic goals and benefits.",
          "Facilitate ideation or prioritisation sessions to turn opportunities into concepts / potential solutions.",
          "Track opportunity decisions and link them to measurable results using TheyDo."
        ]
      },
      {
        id: "ed_pf_5",
        name: "Understanding system context",
        subskills: [
          "Recognise how policies, processes, technology, and culture shape experiences.",
          "Map system touchpoints and feedback loops influencing user journeys.",
          "Identify external drivers (legislation, funding, policy) that constrain or enable design.",
          "Analyse systemic barriers to adoption or sustainability of new solutions.",
          "Collaborate across domains (policy, academia, IT, HR) to align interventions.",
          "Articulate how proposed changes alter system behaviour or relationships."
        ]
      }
    ]
  },
  {
    group: "Research & Insight",
    skills: [
      {
        id: "ed_ri_new_1",
        name: "Method selection and planning",
        subskills: [
          "Define clear research questions that connect to design or business decisions.",
          "Select methods appropriate to the problem.",
          "Plan research logistics, timelines, and resources collaboratively.",
          "Assess trade-offs between rigour, ethics, speed, and value.",
          "Write research plans documenting scope, participants, and outputs.",
          "Communicate rationale for chosen methods and expected outcomes."
        ]
      },
      {
        id: "ed_ri_new_2",
        name: "Recruitment and ethical practice",
        subskills: [
          "Identify participant groups aligned with research objectives.",
          "Recruit participants inclusively and manage incentives transparently.",
          "Obtain informed consent and maintain confidentiality.",
          "Apply trauma-informed and culturally safe approaches when relevant.",
          "Store and handle data securely per organisational policy.",
          "Identify, flag, and mitigate ethical or power-related risks."
        ]
      },
      {
        id: "ed_ri_new_3",
        name: "Data collection and facilitation",
        subskills: [
          "Conduct interviews, usability tests, observations, or co-creation sessions.",
          "Create discussion guides or test scripts to elicit meaningful data.",
          "Adapt facilitation to participant needs and context.",
          "Capture accurate and complete notes, recordings, or artefacts.",
          "Use digital tools and physical materials to support engagement.",
          "Mentor others in good research etiquette and moderation."
        ]
      },
      {
        id: "ed_ri_synthesis_and_insight_ge",
        name: "Synthesis and insight generation",
        subskills: [
          "Code and cluster data to identify recurring patterns and contradictions.",
          "Use frameworks (affinity mapping, JTBD, journey synthesis) to make sense of findings.",
          "Distil data into concise insights explaining why issues occur.",
          "Triangulate across multiple sources to strengthen confidence.",
          "Facilitate synthesis sessions for shared understanding.",
          "Document insights with evidence quotes, visuals, and implications."
        ]
      },
      {
        id: "ed_ri_new_4",
        name: "Insight communication",
        subskills: [
          "Translate insights into visual formats (slides, maps, reports).",
          "Tailor messaging to different audiences.",
          "Use data visualisation effectively.",
          "Link insights to design principles and opportunities.",
          "Review reports for clarity and neutrality.",
          "Maintain central repository of research deliverables (insights hub?)."
        ]
      },
      {
        id: "ed_ri_new_5",
        name: "Insight storytelling",
        subskills: [
          "Craft narratives connecting data to human experience.",
          "Integrate user stories into presentations to drive empathy.",
          "Balance emotional resonance and analytical credibility.",
          "Use structure and pacing to build momentum for change.",
          "Employ narrative artefacts (videos, personas, storyboards, etc).",
          "Mentor others in turning evidence into story."
        ]
      },
      {
        id: "ed_ri_new_6",
        name: "Insight activation",
        subskills: [
          "Identify where insights can influence decisions.",
          "Facilitate workshops to translate insights into action.",
          "Track how insights are used and their effects.",
          "Build feedback loops to update repositories (insights hub and TheyDo)",
          "Embed findings into backlogs, maps, or metrics (TheyDo, Jira, etc.)",
          "Advocate for research visibility in decisions."
        ]
      }
    ]
  },
  {
    group: "Co-Design, Facilitation & Communication",
    skills: [
      {
        id: "ed_cf_new_1",
        name: "Workshop design and planning",
        subskills: [
          "Define clear objectives aligned to outcomes.",
          "Select facilitation methods and tools suited to goals.",
          "Design session flow balancing divergence and convergence.",
          "Prepare templates, materials, and prompts.",
          "Anticipate group dynamics and inclusion needs.",
          "Align logistics and environment to participant experience."
        ]
      },
      {
        id: "ed_cf_new_2",
        name: "Facilitation and participatory methods",
        subskills: [
          "Manage tone, energy, and safety of sessions.",
          "Use clear instructions and transitions to sustain engagement.",
          "Adjust style to group context and power dynamics.",
          "Handle conflict and difference constructively.",
          "Capture decisions and insights for follow-up.",
          "Mentor others in participatory facilitation."
        ]
      },
      {
        id: "ed_cf_new_3",
        name: "Co-design with users and groups",
        subskills: [
          "Recruit and prepare participants inclusively.",
          "Design activities accessible to all skill levels.",
          "Balance lived experience and design expertise.",
          "Integrate outputs into design direction.",
          "Maintain long-term community relationships."
        ]
      },
      {
        id: "ed_cf_new_4",
        name: "Narrative and storytelling for decisions",
        subskills: [
          "Structure messages linking problem, insight, and opportunity.",
          "Use storytelling to make complexity accessible.",
          "Adapt framing for audience context.",
          "Integrate evidence and emotion to motivate action.",
          "Coach others in narrative communication."
        ]
      },
      {
        id: "ed_cf_new_5",
        name: "Visual communication",
        subskills: [
          "Translate ideas and systems into visuals.",
          "Choose appropriate format for purpose.",
          "Apply visual hierarchy and clarity.",
          "Ensure accessibility and inclusivity.",
          "Contribute to shared visual templates and standards."
        ]
      },
      {
        id: "ed_cf_new_6",
        name: "Artefact creation",
        subskills: [
          "Select formats suited to purpose (deck, poster, prototype).",
          "Synthesise complexity into coherent outputs.",
          "Manage version control and documentation.",
          "Curate artefacts into shared repositories.",
          "Communicate outcomes clearly across contexts."
        ]
      }
    ]
  },
  {
    group: "Implementation, Change & Measurement",
    skills: [
      {
        id: "ed_icm_new_1",
        name: "Prototyping and experimentation",
        subskills: [
          "Select appropriate fidelity of prototype.",
          "Define hypotheses and metrics for each test.",
          "Run tests or pilots to gather evidence.",
          "Capture learnings systematically.",
          "Facilitate collaborative prototyping sessions."
        ]
      },
      {
        id: "ed_icm_new_2",
        name: "Handover and operationalisation",
        subskills: [
          "Document design intent and dependencies.",
          "Translate artefacts into actionable requirements.",
          "Collaborate with delivery and ops teams.",
          "Manage transitions between design and delivery.",
          "Support training for adopting teams."
        ]
      },
      {
        id: "ed_icm_new_3",
        name: "Continuous improvement and iteration",
        subskills: [
          "Establish mechanisms for post-launch feedback.",
          "Analyse feedback to identify improvement areas.",
          "Prioritise based on impact and feasibility.",
          "Run small-scale tests before scaling.",
          "Embed improvement rituals and governance."
        ]
      },
      {
        id: "ed_icm_new_4",
        name: "Change enablement",
        subskills: [
          "Assess readiness and resistance to change.",
          "Develop engagement and comms plans.",
          "Facilitate adoption workshops or training.",
          "Visualise impacts through change artefacts.",
          "Monitor adoption and adjust strategies."
        ]
      },
      {
        id: "ed_icm_new_5",
        name: "Impact measurement and evaluation",
        subskills: [
          "Define objectives and success criteria.",
          "Select and collect relevant data.",
          "Interpret results for user and organisational value.",
          "Communicate impact in accessible formats.",
          "Embed measurement into continuous improvement.",
          "Ensure alignment to benefits realisation framework."
        ]
      }
    ]
  },
  {
    group: "Professional Practice",
    skills: [
      {
        id: "ed_5",
        name: "Self-awareness and reflective practice",
        subskills: [
          "Identify personal strengths, biases, and blind spots.",
          "Seek and apply feedback constructively.",
          "Reflect on successes and challenges to refine practice.",
          "Document learnings and development goals.",
          "Model openness and vulnerability."
        ]
      },
      {
        id: "ed_6",
        name: "Collaboration and relational intelligence",
        subskills: [
          "Build trust and rapport across disciplines.",
          "Actively listen and reflect others’ perspectives.",
          "Navigate tension with curiosity and care.",
          "Adapt collaboration style to context.",
          "Facilitate equitable participation."
        ]
      },
      {
        id: "ed_7",
        name: "Design culture, ethics, and community building",
        subskills: [
          "Contribute to design community rituals and knowledge-sharing.",
          "Apply ethical frameworks in design decisions.",
          "Identify and address ethical implications of design.",
          "Champion inclusion and sustainability.",
          "Support design community-building initiatives."
        ]
      }
    ]
  }
];

export const STRATEGIC_DESIGN_DATA: SkillGroup[] = [
  {
    group: "Strategic Design Competencies",
    skills: [] 
  }
];

export const DESIGN_RESEARCH_DATA: SkillGroup[] = [
  {
    group: "Design Research Competencies",
    skills: []
  }
];

export const UX_UI_DATA: SkillGroup[] = [
  {
    group: "UX / UI Competencies",
    skills: []
  }
];

export const SERVICE_DESIGN_DATA: SkillGroup[] = [
  {
    group: "Service Design Competencies",
    skills: []
  }
];

export const GENERAL_SKILLS_DATA: SkillGroup[] = [
  {
    group: "Core Competencies",
    skills: [
      {
        id: "gen_1",
        name: "Professional behaviours",
        levels: {
          Basic: "Supports team with professionalism and respect.",
          Intermediate: "Leads conversations with professionalism, drives accountability within teams, inspires positivity, and fosters a culture of feedback.",
          Advanced: "Champions organisational communication, accountability, positivity, and feedback as a tool for continuous improvement and organisational leadership."
        }
      },
      {
        id: "gen_2",
        name: "Leadership",
        levels: {
          Basic: "Requires frequent guidance and direction to effectively guide and influence teams towards achieving goals.",
          Intermediate: "Requires occasional guidance to guide teams. Proactively identifies challenges and motivates others to succeed.",
          Advanced: "Leads multi-disciplinary teams. Provides thought leadership, strategic direction, and mentors others for long-term success."
        }
      },
      {
        id: "gen_3",
        name: "Mentoring",
        levels: {
          Basic: "No evidence of mentoring activities.",
          Intermediate: "Seeks mentoring opportunities from senior leaders for growth.",
          Advanced: "Takes on the responsibility of mentoring leads and other senior staff."
        }
      },
      {
        id: "gen_coach_1",
        name: "Coaching",
        levels: {
            Basic: "Has coached peers or juniors informally on specific tasks or skills.",
            Intermediate: "Formal coaching of junior to mid-level staff. Helps others find their own solutions through questioning and guidance.",
            Advanced: "Executive coaching and leadership development. Builds a culture of coaching within the organisation."
        }
      },
      {
        id: "gen_4",
        name: "Data analysis",
        levels: {
          Basic: "Understands basic data analysis concepts and supports data gathering and reporting with guidance.",
          Intermediate: "Conducts in-depth data analysis, interprets findings, and provides actionable insights to support business decisions.",
          Advanced: "Leads data-driven decision-making, defines analytical approaches, and ensures data insights are integrated into strategic planning."
        }
      },
      {
        id: "gen_5",
        name: "Feasibility assessment",
        levels: {
          Basic: "Observes and assists in early-stage feasibility assessments, gathering data and understanding key considerations.",
          Intermediate: "Conducts feasibility assessments for projects, analysing technical, financial, and resource considerations.",
          Advanced: "Leads comprehensive feasibility assessments, considering multiple factors, and providing actionable recommendations."
        }
      },
      {
        id: "gen_6",
        name: "Benefits realisation",
        levels: {
          Basic: "Observes and assists in the early stages of benefit measurement, understanding the key performance indicators (KPIs).",
          Intermediate: "Leads measurement efforts for significant projects, ensuring benefit tracking is done accurately.",
          Advanced: "Guides the measurement and tracking of benefits across relevant projects, ensuring alignment with strategic business objectives."
        }
      },
      {
        id: "gen_ai_1",
        name: "AI Integration & Innovation",
        levels: {
          Basic: "Developing basic AI Fluency. Uses standard Generative AI tools for drafting content, mapping simple information architectures, or basic research synthesis under guidance.",
          Intermediate: "Demonstrates strong AI Fluency by leveraging tools for complex research synthesis, generating taxonomy structures, and automating content audits. Uses 'Vibe Coding' and AI prototyping (e.g., Cursor, v0) to rapidly build functional testable prototypes.",
          Advanced: "Champions AI Integration & Innovation across workflows. Embeds agentic workflows and advanced AI strategies into operations to accelerate delivery speed and quality. Ensures the team remains at the forefront of digital efficiency."
        }
      }
    ]
  }
];

export const RATINGS = [
  { label: 'N/A', value: 'na', color: 'bg-gray-100 text-gray-500 border-gray-200' },
  { label: 'Basic', value: 'basic', color: 'bg-blue-50 text-blue-700 border-blue-200' },
  { label: 'Intermediate', value: 'intermediate', color: 'bg-indigo-50 text-indigo-700 border-indigo-200' },
  { label: 'Advanced', value: 'advanced', color: 'bg-purple-50 text-purple-700 border-purple-200' }
] as const;

export const TABS: TabConfig[] = [
  { id: 'experience', label: 'Experience Design', icon: Award, data: EXPERIENCE_DESIGN_DATA, type: 'exp' },
  { id: 'strategic', label: 'Strategic Design', icon: Layers, data: STRATEGIC_DESIGN_DATA, type: 'exp' },
  { id: 'research', label: 'Design Research', icon: Search, data: DESIGN_RESEARCH_DATA, type: 'exp' },
  { id: 'uxui', label: 'UX / UI', icon: Layout, data: UX_UI_DATA, type: 'exp' },
  { id: 'service', label: 'Service Design', icon: Cpu, data: SERVICE_DESIGN_DATA, type: 'exp' },
  { id: 'general', label: 'General Skills', icon: BookOpen, data: GENERAL_SKILLS_DATA, type: 'gen' },
];
