import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import Section from "./Section";
import { profile } from "../data/profile";

const field =
  "w-full border border-line bg-ink px-3 py-2.5 text-sm text-paper placeholder:text-mist/60 focus:border-accent focus:outline-none";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const update =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm({ ...form, [key]: e.target.value });
      setSent(false);
    };

  // No backend here on purpose: this opens the visitor's own mail app
  // with the message filled in, so it works the moment the site is deployed.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <Section id="contact" index="05" title="Contact" alt>
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <p className="max-w-[55ch] leading-relaxed text-mist">
            If you have an internship, a project, or a question about anything above, send me a
            message. I usually reply within a day.
          </p>

          <ul className="mt-8 space-y-4 text-sm">
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-3 text-paper hover:text-accent"
              >
                <Mail size={17} className="text-accent" />
                {profile.email}
              </a>
            </li>
            <li>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 text-paper hover:text-accent"
              >
                <Github size={17} className="text-accent" />
                github.com/manideepak018
              </a>
            </li>
            <li>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 text-paper hover:text-accent"
              >
                <Linkedin size={17} className="text-accent" />
                LinkedIn
              </a>
            </li>
            <li className="inline-flex items-center gap-3 text-mist">
              <MapPin size={17} className="text-accent" />
              {profile.location}
            </li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="mb-1.5 block font-mono text-xs text-mist">
              Your name
            </label>
            <input id="name" required value={form.name} onChange={update("name")} className={field} />
          </div>

          <div>
            <label htmlFor="email" className="mb-1.5 block font-mono text-xs text-mist">
              Your email
            </label>
            <input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={update("email")}
              className={field}
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-1.5 block font-mono text-xs text-mist">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={form.message}
              onChange={update("message")}
              className={`${field} resize-y`}
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center gap-2 bg-accent px-5 py-2.5 font-mono text-sm font-medium text-ink transition-opacity hover:opacity-90"
          >
            <Send size={15} />
            Open in my mail app
          </button>

          {sent && (
            <p className="font-mono text-xs text-mist" role="status">
              Your mail app should have opened with the message ready. If nothing happened, write
              to {profile.email} directly.
            </p>
          )}
        </form>
      </div>
    </Section>
  );
}
