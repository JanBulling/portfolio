export type Education = {
  institution: string;
  degree: string;
  location: string;
  start: Date;
  end?: Date;
  grade?: {
    text: string;
    gpa?: string;
    ects?: string;
  };
  thesis?: string;
};

export const educationList: Education[] = [
  {
    institution: "Ulm University",
    degree: "Bachelor of Science - Physics",
    location: "Ulm",
    start: new Date("2021-09-01"),
    end: new Date("2025-01-01"),
    grade: {
      text: "1.0",
      gpa: "4.0",
      ects: "A - with distinction",
    },
    thesis:
      "The effects of Casimir interactions in experiments on gravitationally induced entanglement",
  },
  {
    institution: "Uppsala University",
    degree: "Exchange Semester",
    location: "Uppsala, Sweden",
    start: new Date("2025-01-15"),
    end: new Date("2025-06-15"),
  },
  {
    institution: "Ulm University",
    degree: "Master of Science - Physics",
    location: "Ulm",
    start: new Date("2025-04-01"),
  },
];
