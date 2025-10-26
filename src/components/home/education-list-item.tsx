import { Education } from "@/data/education";

export default function EducationListItem({
  education,
}: {
  education: Education;
}) {
  const yearMonthFormatter = Intl.DateTimeFormat("en-DE", {
    month: "short",
    year: "numeric",
  });

  const dateString =
    yearMonthFormatter.format(education.start) +
    " - " +
    (education.end ? yearMonthFormatter.format(education.end) : "now");

  return (
    <ul className="relative table w-full table-fixed pb-6">
      <div className="table-cell w-1/3 pr-6 text-right">
        <p className="font-semibold">{dateString}</p>
        <p className="text-muted-foreground text-sm">{education.location}</p>
      </div>
      <div className="bg-secondary absolute top-0 bottom-0 left-1/3 w-px">
        <div className="bg-primary mt-2 -ml-1.5 size-3 rounded-full" />
      </div>
      <div className="table-cell w-2/3 pl-6">
        <h4 className="text-xl font-semibold">{education.degree}</h4>
        <p className="text-muted-foreground text-sm">{education.institution}</p>
        {education.grade && (
          <p className="mt-1">
            <span className="font-semibold">Grade: </span>
            {education.grade.text}
          </p>
        )}
        {education.thesis && (
          <p className="mt-1">
            <span className="font-semibold">Thesis: </span>
            {education.thesis}
          </p>
        )}
      </div>
    </ul>
  );
}
