export type Experience = {
  company: string;
  location: string;
  image: string;
  role: Role | Role[];
};

export type Role = {
  name: string;
  start: Date;
  end?: Date;
  summary?: string;
};

export const experienceList: Experience[] = [
  {
    company: "Mercedes-Benz Tech Innovation",
    location: "Ulm",
    image: "/img/logo/mercedes_benz_tech_innovation_logo.jpeg",
    role: {
      name: "Internship - Software developer",
      start: new Date("2022-08-01"),
      end: new Date("2022-10-01"),
      summary:
        "Development of an internal financial management tool. Full stack web development with Angular and Kotlin. Improvement of the deploy and CI/CD pipeline using GithubActions",
    },
  },
  {
    company: "Green-Engage",
    location: "Ulm",
    image: "/img/logo/green_entange_logo.jpeg",
    role: {
      name: "Co-Founder and Lead Developer",
      start: new Date("2023-08-01"),
      end: new Date("2024-12-31"),
      summary:
        "Digital marketplace for sustainable projects according to the new CSR-guidelines in the EU",
    },
  },
  {
    company: "Ulm University",
    location: "Ulm",
    image: "/img/logo/university_of_ulm_logo.jpeg",
    role: [
      {
        name: "Tutoring Comp. Sci.",
        start: new Date("2023-04-01"),
        end: new Date("2023-09-01"),
      },
      {
        name: "Scientific Assistant",
        start: new Date("2023-10-01"),
        end: new Date("2024-03-01"),
        summary:
          "at the Institute of Quantum Matter under Prof. J. Denschlag at Ulm University",
      },
      {
        name: "Tutoring Comp. Sci.",
        start: new Date("2024-04-01"),
        end: new Date("2024-09-01"),
      },
    ],
  },
  {
    company: "Institute for Theoretical Physics",
    location: "Ulm",
    image: "/img/logo/university_of_ulm_logo.jpeg",
    role: {
      name: "Scientific Assistent",
      start: new Date("2025-07-01"),
      summary: "Work on levitated particles and quantum gravity",
    },
  },
];
