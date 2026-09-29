import { useState } from "react";
import { FiExternalLink, FiGithub, FiStar } from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";
import { projects } from "../data/portfolio";

const filters = ["All", ...new Set(projects.map((p) => p.category))];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const shown = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          subtitle="A selection of projects that show what I can do."
        />

        <div className="reveal mb-10 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                filter === f
                  ? "bg-gradient-to-r from-indigo-500 to-violet-600 text-white shadow-lg shadow-indigo-500/30"
                  : "border border-slate-300 text-slate-600 hover:border-indigo-500 hover:text-indigo-600 dark:border-white/15 dark:text-slate-300"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((p) => (
            <article
              key={p.title}
              className="card group flex flex-col overflow-hidden transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500/10"
            >
              {/* Thumbnail placeholder — replace with an <img> of your project */}
              <div className={`relative h-44 bg-gradient-to-br ${p.gradient}`}>
                <div className="absolute inset-0 grid place-items-center">
                  <span className="text-4xl font-extrabold text-white/90 transition group-hover:scale-110">
                    {p.title}
                  </span>
                </div>
                {p.featured && (
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-black/30 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                    <FiStar /> Featured
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="font-mono text-xs text-indigo-500 dark:text-indigo-400">{p.category}</p>
                <h3 className="mt-1 text-xl font-bold text-slate-900 dark:text-white">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {p.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-slate-100 px-2 py-1 font-mono text-xs text-slate-600 dark:bg-white/10 dark:text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex gap-4 border-t border-slate-200 pt-4 text-sm font-medium dark:border-white/10">
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-slate-700 hover:text-indigo-500 dark:text-slate-300"
                  >
                    <FiExternalLink /> Live demo
                  </a>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-slate-700 hover:text-indigo-500 dark:text-slate-300"
                  >
                    <FiGithub /> Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
