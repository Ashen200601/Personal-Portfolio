import { FiAward, FiBookOpen, FiCalendar, FiCheck } from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";
import { certifications, education } from "../data/portfolio";

export default function Education() {
  return (
    <section id="education" className="bg-slate-100/60 py-24 dark:bg-white/[0.02]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Education" title="My learning journey" />

        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          {/* Timeline */}
          <ol className="relative ml-3 border-l-2 border-indigo-500/30">
            {education.map((e) => (
              <li key={e.degree} className="reveal mb-10 ml-8 last:mb-0">
                <span className="absolute -left-[17px] grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 text-white ring-4 ring-slate-50 dark:ring-slate-950">
                  <FiBookOpen size={14} />
                </span>
                <div className="card p-6">
                  <p className="inline-flex items-center gap-1.5 font-mono text-xs text-indigo-500 dark:text-indigo-400">
                    <FiCalendar /> {e.period}
                  </p>
                  <h3 className="mt-2 text-lg font-bold text-slate-900 dark:text-white">{e.degree}</h3>
                  <p className="text-sm font-medium text-slate-500">{e.school}</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
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

          {/* Certifications */}
          <div className="reveal">
            <h3 className="mb-6 flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white">
              <FiAward className="text-indigo-500" /> Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((c) => (
                <div key={c.name} className="card flex items-center gap-4 p-5 transition hover:border-indigo-500/40">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-indigo-500/10 text-indigo-500">
                    <FiAward size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">{c.name}</p>
                    <p className="text-sm text-slate-500">
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
