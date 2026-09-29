import { FiAward, FiBookOpen, FiCalendar, FiCheck } from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";
import { certifications, education } from "../data/portfolio";

export default function Education() {
  return (
    <section id="education" className="bg-neutral-100/60 py-24 dark:bg-white/[0.02]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Education" title="My learning journey" />

        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          {/* Timeline */}
          <ol className="relative ml-3 border-l-2 border-accent-500/30">
            {education.map((e) => (
              <li key={e.degree} className="reveal mb-10 ml-8 last:mb-0">
                <span className="absolute -left-[17px] grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-accent-500 to-accent-600 text-neutral-950 ring-4 ring-neutral-50 dark:ring-ink-950">
                  <FiBookOpen size={14} />
                </span>
                <div className="card p-6">
                  <p className="inline-flex items-center gap-1.5 font-mono text-xs text-accent-500 dark:text-accent-400">
                    <FiCalendar /> {e.period}
                  </p>
                  <h3 className="mt-2 text-lg font-bold text-neutral-900 dark:text-white">{e.degree}</h3>
                  <p className="text-sm font-medium text-neutral-500">{e.school}</p>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {e.description}
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {e.highlights.map((h) => (
                      <li
                        key={h}
                        className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-400"
                      >
                        <FiCheck /> {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>

         
          <div className="reveal">
            <h3 className="mb-6 flex items-center gap-2 text-xl font-bold text-neutral-900 dark:text-white">
              <FiAward className="text-accent-500" /> Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((c) => (
                <div key={c.name} className="card flex items-center gap-4 p-5 transition hover:border-accent-500/40">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent-500/10 text-accent-500">
                    <FiAward size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900 dark:text-white">{c.name}</p>
                    <p className="text-sm text-neutral-500">
                      {c.issuer} · {c.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
