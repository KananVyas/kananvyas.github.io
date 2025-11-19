export type Profile = {
  name: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  about: string;
  social: {
    github: string;
    linkedin: string;
    twitter: string;
  };
};

export type Experience = {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
};

export type Blog = {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  link: string;
};

export type PortfolioData = {
  profile: Profile;
  experience: Experience[];
  blogs: Blog[];
};

export const DATA: PortfolioData = {
  profile: {
    name: "Kanan Vyas",
    title: "AI Engineer",
    tagline: "Specializing in Agent Building, Agent Optimization & Agent Evals.",
    location: "Bengaluru, India",
    email: "vyaskanan98@gmail.com",
    about: "I am an AI Engineer with 6+ years of experience. Currently, I am a Machine Learning Engineer at GoDaddy. My core interests lie in Agent Building, Agent Optimization, and Agent Evals. I specialize in using LangGraph for orchestration and LangFuse for evaluation.",
    social: {
      github: "https://github.com/kananvyas",
      linkedin: "https://www.linkedin.com/in/kanan-vyas27/",
      twitter: "https://x.com/KananVyas2"
    }
  },
  experience: [
    {
      id: 0,
      role: "Machine Learning Engineer",
      company: "GoDaddy",
      period: "Sept 2025 - Present",
      description: "Enhancing the Domain Search and Recommendation systems using LLMs to improve user experience and conversion rates."
    },
    {
      id: 1,
      role: "Machine Learning Engineer",
      company: "Reliance Jio",
      period: "Aug 2022 - Sept 2025",
      description: "Developed smart AI agents for cab and grocery automation using LangGraph and FastAPI. Designed an Agent Evaluation Framework using LangFuse to cater to 15k requests/day. Conducted research on entropy-based selection algorithms for small-scale LLMs."
    },
    {
      id: 2,
      role: "Machine Learning Engineer",
      company: "Zoop. One",
      period: "Jun 2021 - Jul 2022",
      description: "Developed Active Facial Liveness frameworks using HRNet and improved facial spoofing recognition accuracy from 64% to 89%. Engineered synthetic data pipelines for Indian ID cards."
    },
    {
      id: 3,
      role: "Deep Learning Engineer",
      company: "Eagle Eye Networks",
      period: "Jun 2019 - Jun 2021",
      description: "Researched and optimized Object Classification and Segmentation models (HRNet, U-Net). Performed model optimization using Intel OpenVINO and NVIDIA TensorRT for edge hardware."
    },
    {
      id: 4,
      role: "ML Intern",
      company: "Eagle Eye Networks",
      period: "Jan 2019 - Apr 2019",
      description: "Built end-to-end text and license plate recognition pipelines and developed facial expression analysis systems for retail environments."
    }
  ],
  blogs: [
    {
      id: 1,
      title: "EfficientDet — A Comprehensive Review",
      date: "Oct 12, 2023",
      excerpt: "A deep dive into one of Google's most efficient object detection architectures, exploring the BiFPN layer and compound scaling.",
      link: "https://medium.com/@kananvyas"
    },
    {
      id: 2,
      title: "Object Segmentation Demystified",
      date: "Sep 28, 2023",
      excerpt: "Understanding the crucial differences between Instance Segmentation and Semantic Segmentation with practical examples.",
      link: "https://medium.com/@kananvyas"
    }
  ]
};
