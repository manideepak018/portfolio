import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { asset, profile } from "../data/profile";

export default function Hero() {
  return (
    <section id="home" className="flex min-h-screen items-center bg-ink px-6 pt-24">
      <div className="mx-auto grid w-full max-w-content gap-12 md:grid-cols-[1.4fr_1fr] md:items-center">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 border border-line px-3 py-1.5 font-mono text-xs text-mist">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {profile.available}
          </p>

          <h1 className="font-mono text-4xl font-semibold leading-tight text-paper sm:text-5xl">
            {profile.name}
          </h1>

          <p className="mt-4 font-mono text-lg text-accent">
            {profile.role} · Visakhapatnam
          </p>

          <p className="mt-6 max-w-[60ch] leading-relaxed text-mist">{profile.intro}</p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-accent px-5 py-2.5 font-mono text-sm font-medium text-ink transition-opacity hover:opacity-90"
            >
              See my projects
              <ArrowRight size={16} />
            </a>
            <a
              href={asset(profile.resume)}
              download
              className="inline-flex items-center gap-2 border border-line px-5 py-2.5 font-mono text-sm text-paper transition-colors hover:border-accent hover:text-accent"
            >
              <Download size={16} />
              Download résumé
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5 text-mist">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-accent">
              <Github size={19} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-accent">
              <Linkedin size={19} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-accent">
              <Mail size={19} />
            </a>
          </div>
        </div>

        <div className="order-first md:order-none">
          <img
            src={asset(profile.photo)}
            alt={profile.name}
            width={420}
            height={420}
            className="w-44 border border-line object-cover sm:w-56 md:w-full"
          />
        </div>
      </div>
    </section>
  );
}
