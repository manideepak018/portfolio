import { FileText } from "lucide-react";
import Section from "./Section";
import { asset } from "../data/profile";
import { experience } from "../data/experience";

export default function ExperienceSection() {
  return (
    <Section id="experience" index="04" title="Experience">
      <ol className="space-y-8 border-l border-line pl-6">
        {experience.map((e) => (
          <li key={e.org} className={`relative ${e.org === "Future Interns" ? "border border-line bg-panel p-5 sm:p-6" : ""}`}>
            <span className="absolute -left-[1.68rem] top-2 h-2 w-2 rounded-full bg-accent" />
            <p className="font-mono text-xs text-mist">{e.period}</p>
            <h3 className="mt-1 font-medium text-paper">{e.role}</h3>
            <p className="text-sm text-accent">{e.org}</p>
            <ul className="mt-2 max-w-[62ch] list-disc space-y-1 pl-4 text-sm leading-relaxed text-mist marker:text-line">
              {e.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
            {e.certificate && (
              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1">
                <a
                  href={asset(e.certificate.href)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-10 items-center gap-2 border border-accent bg-accent px-4 py-2 font-mono text-sm font-semibold text-ink transition-colors hover:bg-transparent hover:text-accent"
                >
                  <FileText size={16} />
                  {e.certificate.label}
                </a>
                {e.certificate.credentialId && (
                  <span className="font-mono text-xs text-mist">{e.certificate.credentialId}</span>
                )}
              </div>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}
