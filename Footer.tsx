import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="font-mono text-xs text-mist">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex items-center gap-5 text-mist">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-accent">
            <Github size={17} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-accent">
            <Linkedin size={17} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-accent">
            <Mail size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}
