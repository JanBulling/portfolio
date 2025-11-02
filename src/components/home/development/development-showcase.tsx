import { developmentProjectList } from "@/data/development";
import DevelopmentListItem from "./development-list-item";
import { Icon } from "@/ui/icons/icon";

const developmentTools = [
  {
    name: "Next.js",
    logo: Icon.nextjs,
  },
  {
    name: "React",
    logo: Icon.react,
  },
  {
    name: "Astro",
    logo: Icon.astro,
  },
  {
    name: "TypeScript",
    logo: Icon.typescript,
  },
  {
    name: "Tailwind CSS",
    logo: Icon.tailwind,
  },
  {
    name: "PostgreSQL",
    logo: Icon.postgres,
  },
  {
    name: "JavaScript",
    logo: Icon.javascript,
  },
];

export default function DevelopmentShowcaseSection() {
  return (
    <section
      id="showcase-development"
      className="theme-container mx-auto mt-8 max-w-4xl px-4 py-12"
    >
      <h2 className="text-xl font-bold">Development projects</h2>

      <ul className="mt-2 space-y-4">
        {developmentProjectList.map((project) => (
          <DevelopmentListItem key={project.title} project={project} />
        ))}
      </ul>

      <h2 className="mt-8 text-base font-bold">I work with</h2>

      <ul className="mt-2 flex flex-wrap items-center justify-center gap-2 md:justify-start">
        {developmentTools.map((tool) => (
          <li
            key={tool.name}
            className="hover:bg-muted hover:text-muted-foreground flex w-fit cursor-pointer items-center gap-2 rounded border px-3 py-2 text-sm"
          >
            <tool.logo className="size-6" />
            {tool.name}
          </li>
        ))}
      </ul>
    </section>
  );
}
