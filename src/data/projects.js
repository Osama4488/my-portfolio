const projects = [
  {
    id: 1,
    title: "Interview SaaS V2",
    description:
      "A Dockerized multi-service interview platform with a Next.js frontend, a dedicated authentication API, and a protected content API for categories and questions.",
    techStack: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Docker"],
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?crop=entropy&cs=tinysrgb&fit=crop&w=600&h=400",
    links: [
      {
        label: "Auth API",
        href: "https://github.com/Osama4488/interview-auth-api-v2",
      },
      {
        label: "Frontend",
        href: "https://github.com/Osama4488/interview-web-v2",
      },
      {
        label: "Content API",
        href: "https://github.com/Osama4488/interview-content-api-v2",
      },
    ],
    note: "Public source repositories available. Live deployment is omitted until all services are healthy.",
  },
  {
    id: 2,
    title: "BrandOverflow",
    description:
      "An SEO platform for analyzing rankings, tracking keyword performance, and improving search strategy. Contributed to production product development across frontend and supporting services.",
    techStack: ["Next.js", "Node.js", "AWS"],
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?crop=entropy&cs=tinysrgb&fit=crop&w=600&h=400",
    links: [
      { label: "Product Site", href: "https://dash.brandoverflow.com/login" },
    ],
  },
  {
    id: 3,
    title: "Thanos.ai",
    description:
      "An AI writing product that generated long-form content through GPT-powered workflows and an interactive editor experience.",
    techStack: ["Next.js", "ChatGPT API", "Tailwind CSS"],
    image:
      "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?crop=entropy&cs=tinysrgb&fit=crop&w=600&h=400",
    note: "Previous production work; a public demo is not currently available.",
  },
  {
    id: 4,
    title: "vTrader Web",
    description:
      "A fintech trading platform featuring multi-window workflows, cross-window messaging, worker synchronization, alerts, and complex options-ticket interfaces.",
    techStack: ["React", "TypeScript", "Web Workers"],
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?crop=entropy&cs=tinysrgb&fit=crop&w=600&h=400",
    note: "Employer production work. Source code and non-public environments are confidential.",
  },
  {
    id: 5,
    title: "MailWarm",
    description:
      "An email deliverability platform with warm-up statistics, domain management, and automated email workflows.",
    techStack: ["React", "Node.js", "Sass"],
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?crop=entropy&cs=tinysrgb&fit=crop&w=600&h=400",
    links: [{ label: "Product Site", href: "https://mailwarm.io/" }],
  },
  {
    id: 6,
    title: "TopicMojo",
    description:
      "A content-research product for discovering topics, popular questions, keyword opportunities, and AI-assisted content insights.",
    techStack: ["Next.js", "Tailwind CSS", "Node.js"],
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?crop=entropy&cs=tinysrgb&fit=crop&w=600&h=400",
    links: [{ label: "Product Site", href: "https://topicmojo.com/" }],
  },
  {
    id: 7,
    title: "KeywordPro",
    description:
      "A keyword-research and SEO-analysis product with ranking insights, competitor analysis, and AI-assisted recommendations.",
    techStack: ["Next.js", "Tailwind CSS", "Node.js"],
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?crop=entropy&cs=tinysrgb&fit=crop&w=600&h=400",
    note: "Previous production work; the former public URL is no longer available.",
  },
];

export default projects;
