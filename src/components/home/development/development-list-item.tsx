import { DevelopmentProject } from "@/data/development";
import { Icon } from "@/ui/icons/icon";
import { GlobeIcon } from "lucide-react";
import Link from "next/link";

export default function DevelopmentListItem({
  project,
}: {
  project: DevelopmentProject;
}) {
  const yearMonthFormatter = Intl.DateTimeFormat("en-DE", {
    month: "short",
    year: "numeric",
  });

  const dateString = yearMonthFormatter.format(project.date);

  return (
    <li className="rounded-lg border px-4 pt-2 pb-4">
      <p className="text-muted-foreground font-mono text-sm">{dateString}</p>

      <h3 className="mt-2 font-semibold">{project.title}</h3>
      <p className="text-sm">{project.description}</p>

      <ul className="mt-2 flex items-center gap-2 text-xs">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="bg-accent text-accent-foreground rounded px-1 py-0.5"
          >
            {tag}
          </li>
        ))}
      </ul>

      {project.links && (
        <div className="mt-4 flex items-center gap-2">
          {project.links.github && (
            <Link
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon.github className="text-primary fill-primary size-5" />
            </Link>
          )}
          {project.links.web && (
            <Link
              href={project.links.web}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GlobeIcon className="text-primary size-5" />
            </Link>
          )}
        </div>
      )}
    </li>
  );
}
