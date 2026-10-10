import { Github, ExternalLink } from "lucide-react";
import Section from "./Section";
import { projects } from "../data/projects";
import { asset } from "../data/profile";

export default function Projects() {
  return (
    <Section id="projects" index="02" title="Projects">
      <div className="space-y-6">
        {projects.map((p) => (
          <article
            key={p.title}
            className="grid gap-6 border border-line bg-panel p-5 sm:grid-cols-[280px_1fr] sm:p-6"
          >
            <img
              src={asset(p.image)}
              alt={`Screenshot of ${p.title}`}
              loading="lazy"
              className="h-44 w-full border border-line object-cover object-top sm:h-full"
            />

            <div className="flex flex-col">
              <h3 className="font-mono text-lg font-semibold text-paper">{p.title}</h3>
              <p className="mt-1 text-sm text-accent">{p.summary}</p>
              <p className="mt-3 max-w-[62ch] text-sm leading-relaxed text-mist">{p.detail}</p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li
                    key={t}
                    className="border border-line px-2.5 py-1 font-mono text-xs text-mist"
                  >
                    {t}
                  </li>
                ))}
              </ul>

              {(p.github || p.demo) && (
                <div className="mt-5 flex flex-wrap gap-4">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 font-mono text-sm text-paper hover:text-accent"
                    >
                      <Github size={16} />
                      View code
                    </a>
                  )}
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 font-mono text-sm text-paper hover:text-accent"
                    >
                      <ExternalLink size={16} />
                      Live demo
                    </a>
                  )}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
