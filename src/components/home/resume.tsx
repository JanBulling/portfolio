import { educationList } from "@/data/education";
import EducationListItem from "./education-list-item";
import { experienceList, Role } from "@/data/experience";
import ExperienceListItem from "./experience-list-item";

export default function ResumeSection() {
  return (
    <section id="resume" className="mx-auto max-w-7xl px-4 py-12">
      <div className="theme-container grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div>
          <h3 className="ml-10 text-3xl font-bold">Education</h3>
          <ol className="mt-6">
            {educationList
              .sort((a, b) => b.start.getTime() - a.start.getTime())
              .map((education) => (
                <EducationListItem education={education} />
              ))}
          </ol>
        </div>
        <div>
          <h3 className="ml-10 text-3xl font-bold">Experience</h3>
          <ol className="mt-6 space-y-4">
            {experienceList
              .map((e) => {
                const isSingle =
                  Object.prototype.toString.call(e.role) !== "[object Array]";

                const date = isSingle
                  ? (e.role as Role).start
                  : (e.role as Role[])[(e.role as Role[]).length - 1].start;

                return { ...e, endDate: date.getTime() };
              })
              .sort((a, b) => b.endDate - a.endDate)
              .map((experience) => (
                <ExperienceListItem experience={experience} />
              ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
