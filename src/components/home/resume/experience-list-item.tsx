import { type Experience, type Role } from "@/data/experience";
import Image from "next/image";

export default function ExperienceListItem({
  experience,
}: {
  experience: Experience;
}) {
  const yearMonthFormatter = Intl.DateTimeFormat("en-DE", {
    month: "short",
    year: "numeric",
  });

  const singleRole =
    Object.prototype.toString.call(experience.role) !== "[object Array]";

  if (singleRole) {
    const exp = experience as {
      company: string;
      location: string;
      image: string;
      role: Role;
    };

    const dateString =
      yearMonthFormatter.format(exp.role.start) +
      " - " +
      (exp.role.end ? yearMonthFormatter.format(exp.role.end) : "now");

    return (
      <li className="rounded-lg border px-4 pt-2 pb-4">
        <p className="text-muted-foreground font-mono text-xs">{dateString}</p>

        <div className="mt-2 flex items-start gap-4">
          <Image
            src={exp.image}
            width={40}
            height={40}
            alt={exp.company}
            className="h-10 w-10 rounded-full border"
          />

          <div className="flex-1">
            <h3 className="font-semibold">{exp.company}</h3>
            <p className="text-muted-foreground text-sm">{exp.role.name}</p>

            <p className="mt-2 text-sm">{exp.role.summary}</p>
          </div>
        </div>
      </li>
    );
  } else {
    const exp = experience as {
      company: string;
      location: string;
      image: string;
      role: Role[];
    };

    return (
      <li className="relative rounded-lg border px-4 pt-2 pb-4">
        <div className="bg-secondary absolute top-16 left-9 h-[calc(100%-88px)] w-px" />

        <div className="mt-2 flex items-start gap-4">
          <Image
            src={exp.image}
            width={40}
            height={40}
            alt={exp.company}
            className="h-10 w-10 rounded-full border"
          />

          <div className="flex-1">
            <h3 className="mb-2 font-semibold">{exp.company}</h3>

            {exp.role.map((role) => {
              const dateString =
                yearMonthFormatter.format(role.start) +
                " - " +
                (role.end ? yearMonthFormatter.format(role.end) : "now");

              return (
                <div className="mb-4" key={role.name + role.start.getTime()}>
                  <p className="text-muted-foreground font-mono text-xs">
                    {dateString}
                  </p>
                  <p className="font-semibold">{role.name}</p>
                  <p className="text-sm">{role.summary}</p>
                </div>
              );
            })}
          </div>
        </div>
      </li>
    );
  }
}
