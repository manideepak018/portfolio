import type { ReactNode } from "react";

interface Props {
  id: string;
  index: string;
  title: string;
  alt?: boolean;
  children: ReactNode;
}

/** Shared section shell so every block has the same rhythm and heading style. */
export default function Section({ id, index, title, alt, children }: Props) {
  return (
    <section
      id={id}
      className={`border-t border-line py-20 sm:py-24 ${alt ? "bg-panel" : "bg-ink"}`}
    >
      <div className="mx-auto max-w-content px-6">
        <h2 className="mb-12 flex items-baseline gap-3 font-mono text-2xl font-semibold text-paper">
          <span className="text-accent">{index}</span>
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
