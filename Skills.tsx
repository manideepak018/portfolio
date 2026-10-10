import Section from "./Section";
import { skillGroups } from "../data/skills";

export default function Skills() {
  return (
    <Section id="skills" index="03" title="Skills" alt>
      <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g) => (
          <div key={g.title}>
            <h3 className="mb-3 font-mono text-sm text-accent">{g.title}</h3>
            <ul className="space-y-1.5">
              {g.skills.map((s) => (
                <li key={s} className="text-sm text-mist">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
