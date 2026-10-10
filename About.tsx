import Section from "./Section";
import { education } from "../data/education";
import { profile } from "../data/profile";

export default function About() {
  return (
    <Section id="about" index="01" title="About" alt>
      <div className="grid gap-12 md:grid-cols-2">
        <div className="space-y-4 leading-relaxed text-mist">
          <p>
            I started with a diploma in computer engineering and joined B.Tech through lateral
            entry. Along the way I picked up web development first, then data science, and I
            like that the two keep overlapping — most of my projects end up being a model with
            an interface in front of it.
          </p>
          <p>
            Right now I'm working on data structures and algorithms, and on making the projects
            below sturdier rather than starting new ones. I'm looking for an internship where I
            can work on real codebases with people who review my work.
          </p>
          <p>
            Outside of coursework you'll usually find me on {" "}
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="text-accent underline underline-offset-4"
            >
              GitHub
            </a>
            , breaking and fixing something.
          </p>
        </div>

        <div>
          <h3 className="mb-5 font-mono text-sm text-paper">Education</h3>
          <ul className="space-y-5">
            {education.map((e) => (
              <li key={e.degree} className="border-l-2 border-line pl-4">
                <p className="font-medium text-paper">{e.degree}</p>
                <p className="mt-1 text-sm text-mist">{e.institution}</p>
                <p className="mt-1 font-mono text-xs text-mist">
                  {e.period} · {e.score}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
