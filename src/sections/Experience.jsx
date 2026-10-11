import { FiBriefcase, FiCalendar, FiCheck, FiClock } from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";
import { experience } from "../data/portfolio";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Parse "YYYY-MM-DD" into [year, month, day] without timezone shifts; null means today.
const parseDate = (s) => {
  if (!s) {
    const d = new Date();
    return [d.getFullYear(), d.getMonth() + 1, d.getDate()];
  }
  return s.split("-").map(Number);
};

const formatPeriod = (start, end) => {
  const label = ([y, m]) => `${MONTHS[m - 1]} ${y}`;
  return `${label(parseDate(start))} — ${end ? label(parseDate(end)) : "Present"}`;
};

// Completed years and months between two dates, e.g. "1 yr 6 mos"
const formatDuration = (start, end) => {
  const [sy, sm, sd] = parseDate(start);
  const [ey, em, ed] = parseDate(end);
  const months = (ey - sy) * 12 + (em - sm) - (ed < sd ? 1 : 0);
  const years = Math.floor(months / 12);
  const rest = months % 12;
  const parts = [];
  if (years) parts.push(`${years} yr${years > 1 ? "s" : ""}`);
  if (rest) parts.push(`${rest} mo${rest > 1 ? "s" : ""}`);
  return parts.join(" ") || "Less than a month";
};

export default function Experience() {
  return (
    <section id="experience" className="bg-neutral-100/60 py-24 dark:bg-white/[0.02]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked"
          subtitle="Real-world experience delivering software for logistics and corporate clients."
        />

        <div className="mx-auto max-w-4xl">
          <ol className="relative ml-3 border-l-2 border-accent-500/30">
            {experience.map((e) => (
              <li key={`${e.company}-${e.role}`} className="reveal mb-10 ml-8 last:mb-0">
                <span className="absolute -left-[17px] grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-accent-500 to-accent-600 text-neutral-950 ring-4 ring-neutral-50 dark:ring-ink-950">
                  <FiBriefcase size={14} />
                </span>
                <div className="card p-6 sm:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-bold text-neutral-900 dark:text-white">{e.role}</h3>
                      <p className="font-medium text-accent-600 dark:text-accent-400">{e.company}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <p className="inline-flex items-center gap-1.5 rounded-full bg-accent-500/10 px-3 py-1 font-mono text-xs text-accent-600 dark:text-accent-300">
                        <FiCalendar /> {formatPeriod(e.start, e.end)}
                      </p>
                      <p className="inline-flex items-center gap-1.5 rounded-full bg-neutral-200/70 px-3 py-1 font-mono text-xs text-neutral-700 dark:bg-white/10 dark:text-neutral-300">
                        <FiClock /> {formatDuration(e.start, e.end)}
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {e.description}
                  </p>

                  <ul className="mt-4 flex flex-wrap gap-2">
                    {e.areas.map((a) => (
                      <li
                        key={a}
                        className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-400"
                      >
                        {a}
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-5 space-y-2.5">
                    {e.highlights.map((h) => (
                      <li key={h} className="flex gap-2.5 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                        <FiCheck className="mt-1 shrink-0 text-accent-500" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2 border-t border-neutral-200 pt-5 dark:border-white/10">
                    {e.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-neutral-100 px-2 py-1 font-mono text-xs text-neutral-600 dark:bg-white/10 dark:text-neutral-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
