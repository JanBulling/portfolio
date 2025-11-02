export type DevelopmentProject = {
  title: string;
  description: string;
  date: Date;
  links?: {
    web?: string;
    github?: string;
  };
  tags: string[];
};

export const developmentProjectList: DevelopmentProject[] = [
  {
    title: "Ulmiversität",
    description:
      "Inofficial management platform for Ulm University including a daily Cafeteria Menu, real-time public transport information and much more",
    date: new Date("2025-01-01"),
    links: {
      web: "https://www.ulmiversitaet.de",
      github: "https://github.com/JanBulling/Ulmiversitaet-Web",
    },
    tags: ["NEXT.JS", "TYPESCRIPT", "POSTGRESQL", "TAILWIND"],
  },
  {
    title: "Infinite Jukebox",
    description: "Play a single song seamlessly for infinite time!",
    date: new Date("2024-04-01"),
    links: {
      web: "https://jukebox.jan-bulling.com",
      github: "https://github.com/JanBulling/infinite-jukebox",
    },
    tags: ["NEXT.JS", "TYPESCRIPT", "TAILWIND", "SPOTIFY"],
  },
  {
    title: "Green Engage",
    description:
      "Front- and backend development including account management, dashboards and much more",
    date: new Date("2023-08-01"),
    links: {
      web: "https://green-engage.jan-bulling.com",
    },
    tags: ["NEXT.JS", "TYPESCRIPT", "POSTGRESQL", "TAILWIND"],
  },
  {
    title: "Outfitable",
    description:
      "An AI-assisted generator for fresh and comforting daily outfits",
    date: new Date("2022-04-01"),
    tags: ["FLUTTER", "DART", "TENSORFLOW", "MONGODB"],
  },
];
