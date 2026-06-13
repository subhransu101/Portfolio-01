import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  aarki,
  furrl,
  sharechat,
  swiggy_instamart,
  swiggy_map,
  twinmind,
  axis_my_india,
  spinny,
  swiggy,
  spark_foundation,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Project",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "🎯 Problem Solver",
    icon: web,
  },
  {
    title: "🧪 Experimenter",
    icon: mobile,
  },
  {
    title: "📊 Data Analyst",
    icon: backend,
  },
  {
    title: "🚀 Product Builder",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Product - Ads & Monetisation",
    company_name: "Swiggy",
    icon: swiggy,
    iconBg: "#E6DEDD",
    date: "Mar 2024 – Present",
    tags: ["A/B TESTING", "SNOWFLAKE", "POWER BI", "DATABRICKS", "PYTHON", "GOOGLE ANALYTICS"],
    points: [
      "Widgetized post-order trackscreen into a multi-ad platform, increasing ad revenue by 1.5×.",
      "Built a unified rewards and gamification platform, driving ₹4 Cr monthly revenue and boosting ad engagement.",
      "Launched immersive full-screen reward ads, increasing CTR by 16% and enabling scalable gamified ad formats.",
      "Built sponsored cart recommendations using affinity and inventory signals, generating ₹1 Cr+ monthly revenue.",
      "Launched sponsored menu flash-card ads, influencing purchase decisions and generating nearly ₹3 Cr monthly revenue.",
      "Built Swiggy Bites, an AI-powered video ad platform transforming storefront images into engaging promotional creatives.",
    ],
  },
  {
    title: "Business Analyst — Central Supply",
    company_name: "Spinny",
    icon: spinny,
    iconBg: "#E6DEDD",
    date: "Feb 2023 – Mar 2024",
    tags: ["SQL", "PYTHON", "TABLEAU", "AIRFLOW", "KPI TRACKING"],
    points: [
      "Analyzed 2.5M+ records to cut bad procurement from 4.2% to 2.1%, streamlining ground-team reporting.",
      "Optimized vehicle self-inspection process to 15% procurement rate, reducing rejections to 2% across 4 cities.",
      "Led A/B testing for inspection app revamp — reduced inspection time from 60 to 40 mins, boosting market penetration by 12%.",
      "Defined & executed new incentive structure for 709 inspectors nationwide as single SPOC.",
    ],
  },
  {
    title: "GET - Growth & Strategy",
    company_name: "Axis My India",
    icon: axis_my_india,
    iconBg: "#E6DEDD",
    date: "Aug 2022 – Feb 2023",
    tags: ["PYTHON", "EXCEL", "POWER BI", "SQL", "MACHINE LEARNING"],
    points: [
      "Drove 10% sales uplift (~INR 40L/year) for Kristal Salt via brand health evaluation across 5 districts (n=8,000).",
      "Led Phase-1 impact analysis for a media house, studying ward-level data (n=1,600) for campaign effectiveness.",
      "Extrapolated rural home loan market share with 87% accuracy, influencing 60% business impact for Piramal Finance.",
    ],
  },
  {
    title: "Data Science & Business Analytics Intern",
    company_name: "The Spark Foundation",
    icon: spark_foundation,
    iconBg: "#E6DEDD",
    date: "Apr 2021 – May 2021",
    tags: ["PANDAS", "NUMPY", "MATPLOTLIB", "REGRESSION"],
    points: [
      "Completed 5 end-to-end projects in data cleaning, analysis, and ML modeling using Python scientific stack.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Swiggy — Map Monetization",
    description: "Case study on monetizing Swiggy's live-tracking map with a two-phase localized ad model — Radar restaurant discount bubbles and geo-fenced brand ads to drive revenue without degrading core UX.",
    tags: [
      {
        name: "PRD",
        color: "green-text-gradient",
      }
    ],
    image: swiggy_map,
    source_code_link: "https://docs.google.com/document/d/1ikP9U2A-HAc4IIsnbWVDps_8O1lO6wyJeRT7yFdfK0c/edit?tab=t.0#heading=h.kumtoky376gv",
    number: "01"
  },
  {
    name: "Swiggy Instamart",
    description: "Deep-dive into India's leading quick-commerce platform — analyzing user personas, competitive landscape, revenue model, and growth levers behind their $1B GOV milestone.",
    tags: [
      {
        name: "PRODUCT TEARDOWN",
        color: "blue-text-gradient",
      }
    ],
    image: swiggy_instamart,
    source_code_link: "https://www.notion.so/Product-Teardown-Swiggy-Instamart-204bbb13c5bd80639cb5eeaabe5ef6ca",
    number: "02"
  },
  {
    name: "ShareChat — DAU Growth Strategy",
    description: "Designed SABHA, a live language-first discussion feature to boost DAU through habit formation and gamified participation around culturally relevant events like cricket and festivals.",
    tags: [
      {
        name: "CASE STUDY",
        color: "blue-text-gradient",
      }
    ],
    image: sharechat,
    source_code_link: "https://docs.google.com/document/d/1pwsn1GKd4xZFJxCs5vB4Al_bhvGuNwg0PDA5Y7EK72c/edit?tab=t.0#heading=h.p0z7ukqz3m1p",
    number: "03"
  },
  {
    name: "TwinMind",
    description: "Analysis of an AI-first productivity platform with the world's most accurate speech recognition (94.74%). Explored defensibility, real-time memory systems, and privacy-first design.",
    tags: [
      {
        name: "PRODUCT TEARDOWN",
        color: "green-text-gradient",
      }
    ],
    image: twinmind,
    source_code_link: "https://www.notion.so/Product-Teardown-Twin-Mind-2f2bbb13c5bd8186915ce6691c362edb",
    number: "04"
  },
  {
    name: "Aarki — Lead Quality Analysis",
    description: "Statistical analysis of lead quality trends, campaign performance, and publisher attribution using z-tests and cohort analysis to inform ad-tech optimization strategies.",
    tags: [
      {
        name: "CASE STUDY",
        color: "pink-text-gradient",
      }
    ],
    image: aarki,
    source_code_link: "https://docs.google.com/document/d/1I67VxaNJCykZJhvNO4pnOH6UJHxpc-5aTqYvW_SbqaQ/edit?tab=t.0#heading=h.4r1wykkzkt5l",
    number: "05"
  },
  {
    name: "Furrl Analytics Dashboard",
    description: "Interactive Tableau dashboard visualizing key business metrics with drill-down capabilities and real-time data exploration.",
    tags: [
      {
        name: "DASHBOARD",
        color: "pink-text-gradient",
      }
    ],
    image: furrl,
    source_code_link: "https://public.tableau.com/app/profile/sudhansu.choudhury/viz/Furrl/Dashboard1",
    number: "06"
  }
];

export { services, technologies, experiences, testimonials, projects };
