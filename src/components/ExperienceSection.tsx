import Section from "./Section";
import { experience } from "../data/experience";

export default function ExperienceSection() {
  return (
    <Section id="experience" index="04" title="Experience">
      <ol className="space-y-8 border-l border-line pl-6">
        {experience.map((e) => (
          <li key={e.org} className="relative">
            <span className="absolute -left-[1.68rem] top-2 h-2 w-2 rounded-full bg-accent" />
            <p className="font-mono text-xs text-mist">{e.period}</p>
            <h3 className="mt-1 font-medium text-paper">{e.role}</h3>
            <p className="text-sm text-accent">{e.org}</p>
            <ul className="mt-2 max-w-[62ch] list-disc space-y-1 pl-4 text-sm leading-relaxed text-mist marker:text-line">
              {e.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
