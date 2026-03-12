export interface DescPart {
  text: string;
  highlight?: boolean;
}

export interface Project {
  name: string;
  description: DescPart[];
  video: string;
  xLink?: string;
  githubLink?: string;
}

export interface FrontendProject {
  video: string;
  xLink?: string;
}

export const projects: Project[] = [
  {
    name: "Decentralized Uptime Monitor",
    description: [
      { text: "A " },
      { text: "decentralized uptime monitoring system", highlight: true },
      { text: " that leverages " },
      { text: "blockchain technology", highlight: true },
      { text: " to provide trustless, transparent website monitoring. " },
      { text: "Validators stake tokens", highlight: true },
      { text: " and independently verify website availability, with " },
      { text: "consensus mechanisms", highlight: true },
      { text: " ensuring accurate reporting and automatic reward distribution." },
    ],
    video: "/videos/decentralized-uptime-monitor.mp4",
    xLink: "https://x.com/furiyash/status/1981064456244453870?s=20",
    githubLink: "https://github.com/meanmachine889/Decentralized-uptime-monitor",
  },
  {
    name: "Go Distributed Task Engine",
    description: [
      { text: "Built a " },
      { text: "pull-based distributed job scheduler", highlight: true },
      { text: " with " },
      { text: "worker heartbeats", highlight: true },
      { text: ", " },
      { text: "atomic DB-backed scheduling", highlight: true },
      { text: " (FOR UPDATE SKIP LOCKED), " },
      { text: "Redis-accelerated wakeups", highlight: true },
      { text: ", " },
      { text: "fault-tolerant retries", highlight: true },
      { text: " with exponential backoff, " },
      { text: "dead-letter handling", highlight: true },
      { text: ", and a dashboard." },
    ],
    video: "/videos/go-project.mp4",
    xLink: "https://x.com/furiyash/status/2018635466489422285?s=20",
    githubLink: "https://github.com/meanmachine889/Job-Orchestrator",
  },
];

export const frontendProjects: FrontendProject[] = [
  {
    video: "/videos/Fi1IVQeZVu861ElZ.mp4",
    xLink: "https://x.com/furiyash/status/2028893342311108694?s=20",
  },
  {
    video: "/videos/Fx3K996Tqs3a9uqf.mp4",
    xLink: "https://x.com/furiyash/status/2028041558684246251?s=20",
  },
  {
    video: "/videos/redo-media.mp4",
    xLink: "https://x.com/furiyash/status/2028273104993264019?s=20",
  },
];
