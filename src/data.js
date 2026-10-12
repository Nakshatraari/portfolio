// Edit the portfolio text and links here.
export const portfolio = {
  name: "Nakshatra Aripineni",
  navigation: [
    { label: "About", path: "/" },
    { label: "Projects", path: "/projects" },
    { label: "Experience", path: "/experience" },
    { label: "Resume", href: "/Nakshatra_Aripineni_Resume.pdf", external: true },
    { label: "Awards", path: "/awards" },
    { label: "Contact", path: "/contact" },
  ],
  about: {
    title: "About",
    paragraph:
      "I'm a Computer Science student at The University of Texas at Dallas, graduating in May 2029. I work on software at the intersection of AI and developer tools, from multi-agent systems and machine learning models to platforms that help students find their community. Right now I'm researching how language models can repair and understand code, building the UTD Clubs platform with Nebula Labs, and working on projects with IBM SkillsBuild, Google Developer Group, and IEEE. Outside of engineering, I mentor and organize events for women in engineering through WMWE and SWE, and I founded a coding club for middle and high school students.",
    links: [
      { label: "GitHub", href: "https://github.com/Nakshatraari" },
      { label: "LinkedIn", href: "https://linkedin.com/in/nakshatraaripineni" },
      { label: "Email", href: "mailto:nakshatraaripineni@gmail.com" },
    ],
    location: "Frisco, TX",
    highlights: [
      { label: "Education", value: "B.S. Computer Science, UT Dallas · May 2029" },
      { label: "Research", value: "LLM program repair and code understanding" },
      { label: "Involved in", value: "WMWE and SWE" },
      { label: "Based in", value: "Frisco, TX" },
    ],
  },
  projects: {
    title: "Projects",
    items: [
      {
        name: "Synapse",
        number: "01",
        description:
          "Synapse parses C++, TypeScript, JavaScript, Python, and Go code into architecture diagrams. It shows function and component relationships as interactive graphs with different layouts and automated tests.",
        tags: ["C++", "TypeScript", "JavaScript", "Python", "Go"],
        github: "https://github.com/Nakshatraari/Synapse",
      },
      {
        name: "CodeGuard AI",
        number: "02",
        description:
          "CodeGuard AI uses the Gemini API to review code in three languages for syntax, security, and quality issues. It provides code context to an LLM to produce actionable refactoring recommendations.",
        tags: ["Gemini API", "LLM", "Code analysis"],
        github: "https://github.com/Nakshatraari/codeguard-ai",
      },
      {
        name: "Finality",
        number: "03",
        description:
          "Finality is a multi-agent trust layer for AI-initiated payments. Its agents assess invoice, liquidity, and policy risk, then approve, escalate, or block a payment.",
        tags: ["Multi-agent AI", "Fraud detection", "Cash forecasting"],
      },
      {
        name: "Green Light",
        number: "04",
        description:
          "Green Light is an adaptive traffic-signal system that forecasts turning movements, queues, and pedestrian flow. A C++ runtime and React dashboard check predictions against traffic rules before signals change.",
        tags: ["PyTorch", "C++", "React"],
      },
    ],
  },
  experience: {
    technicalTitle: "Technical",
    technical: [
      {
        role: "Software Engineer",
        organization: "IBM SkillsBuild AI Experiential Learning Lab",
        dates: "Oct 2026 – Present",
        paragraphs: [
          "Finality is a multi-agent trust layer for AI-initiated payments. It helps assess payment risk and decide whether a transaction should proceed, be escalated, or be blocked.",
          "I am architecting the system and training fraud-detection and cash-forecasting models for four agents that evaluate invoice, liquidity, and policy risk. The workflow includes manager approvals and an explainable audit timeline.",
        ],
      },
      {
        role: "Full Stack Developer",
        organization: "Nebula Labs",
        dates: "Sep 2026 – Present",
        paragraphs: [
          "UTD Clubs is an open-source platform that brings more than 400 student organizations into one searchable directory, helping students explore campus groups.",
          "I am developing responsive interfaces with dynamic filtering, an events calendar, and an AI-powered club-matching questionnaire. I am also implementing Google and Discord OAuth and a Nebula API caching layer for secure, low-latency access.",
        ],
      },
      {
        role: "Machine Learning Engineer",
        organization: "Google Developer Group",
        dates: "Sep 2026 – Present",
        paragraphs: [
          "Green Light is a real-time adaptive traffic-signal system designed to reduce congestion by forecasting traffic conditions.",
          "I direct Python and machine learning development, using PyTorch to forecast turning movements, queues, and pedestrian flow 15–60 seconds ahead. A C++ runtime works with a React dashboard that checks predictions against traffic rules before signals change.",
        ],
      },
      {
        role: "AI/ML Project Developer",
        organization: "IEEE",
        dates: "Oct 2026 – Present",
        paragraphs: [
          "The AI-Powered Skill Gap Analyzer compares a job description with a student's current skills to identify and prioritize gaps for internship and full-time preparation.",
          "I am developing the web application with API integration and natural language processing, while designing the platform around students' preparation needs.",
        ],
      },
      {
        role: "Undergraduate Student Researcher",
        organization: "RIDE Program, UT Dallas",
        dates: "Aug 2026 – Present",
        paragraphs: [
          "My research investigates how language models can help with program repair, code generation, and software testing for developer tools.",
          "I prototype AI-assisted refactoring workflows and evaluate how language models understand large codebases for context-aware debugging and repository understanding.",
        ],
      },
    ],
  },
  leadership: [
    {
      role: "Mentoring Team Manager",
      organization: "Women Mentoring Women in Engineering (WMWE)",
      dates: "Sep 2026 – Present",
      paragraphs: [
        "I lead a mentoring team of 5+ through meetings, discussions, and events that support women in engineering at UT Dallas.",
        "I work with Mentoring Team Coordinators to foster an inclusive environment and meaningful mentor–mentee connections.",
      ],
    },
    {
      role: "Industry Committee Officer",
      organization: "Society of Women Engineers (SWE)",
      dates: "Aug 2026 – Present",
      paragraphs: [
        "I coordinate technical workshops and information sessions with corporate technology representatives for 50+ engineering students.",
        "I also support sponsorship outreach and event logistics that connect students with software engineering career pathways.",
      ],
    },
    {
      role: "Founder & President",
      organization: "Women in STEM Club",
      dates: "Jun 2025 – May 2026",
      paragraphs: [
        "I founded the club and taught foundational coding in hands-on workshops for 40+ middle and high school students.",
        "I hosted virtual STEM sessions and student-focused initiatives to sustain interest in technology and computer science.",
      ],
    },
  ],
  awards: {
    title: "Awards",
    items: [
      { award: "Winner, Best Business Innovation", event: "EmpowerHer Roseville Hackathon", project: "BuildHer Finance", date: "Jul 2025" },
      { award: "Winner, Best of Honors", event: "CVHS Hackathon", project: "Voice2Learn", date: "Jul 2025" },
      { award: "Finalist", event: "Unity Hackathon", project: "LegalSHEield", date: "Jul 2025" },
      { award: "Finalist", event: "CADpossible Hackathon", project: "SenseConnect", date: "Jul 2025" },
    ],
  },
  contact: {
    title: "Contact",
    location: "Frisco, TX",
    links: [
      { label: "Email", text: "nakshatraaripineni@gmail.com", href: "mailto:nakshatraaripineni@gmail.com" },
      { label: "LinkedIn", text: "linkedin.com/in/nakshatraaripineni", href: "https://linkedin.com/in/nakshatraaripineni" },
      { label: "GitHub", text: "github.com/Nakshatraari", href: "https://github.com/Nakshatraari" },
    ],
  },
};
