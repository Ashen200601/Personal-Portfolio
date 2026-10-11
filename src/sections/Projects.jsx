import { useState } from "react";
import { FiExternalLink, FiGithub, FiStar } from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";
import { projects } from "../data/portfolio";

const filters = ["All", ...new Set(projects.map((p) => p.category))];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const shown = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="bg-neutral-100/60 py-24 dark:bg-white/[0.02]">
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
                  ? "bg-gradient-to-r from-accent-500 to-accent-600 text-neutral-950 shadow-lg shadow-accent-500/30"
                  : "border border-neutral-300 text-neutral-600 hover:border-accent-500 hover:text-accent-600 dark:border-white/15 dark:text-neutral-300"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {shown.map((p) => (
            <article
              key={p.title}
              className="card group flex flex-col overflow-hidden transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-accent-500/10"
            >
              {/* Thumbnail: set `image` in the data to show a screenshot, otherwise a gradient */}
              <div className={`relative h-48 overflow-hidden bg-gradient-to-br ${p.gradient}`}>
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 grid place-items-center px-6 text-center">
                    <span className="text-3xl font-extrabold text-white/90 transition group-hover:scale-110">
                      {p.title}
                    </span>
                  </div>
                )}
                {p.featured && (
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-black/30 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                    <FiStar /> Featured
                  </span>
                )}
                {p.status && (
                  <span
                    className={`absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur ${
                      p.status === "Ongoing"
                        ? "bg-amber-400/90 text-neutral-950"
                        : "bg-black/30 text-white"
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        p.status === "Ongoing" ? "animate-pulse bg-neutral-950" : "bg-emerald-400"
                      }`}
                    />
                    {p.status}
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="font-mono text-xs text-accent-500 dark:text-accent-400">{p.category}</p>
                <h3 className="mt-1 text-xl font-bold text-neutral-900 dark:text-white">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {p.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-neutral-100 px-2 py-1 font-mono text-xs text-neutral-600 dark:bg-white/10 dark:text-neutral-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex gap-4 border-t border-neutral-200 pt-4 text-sm font-medium dark:border-white/10">
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-neutral-700 hover:text-accent-500 dark:text-neutral-300"
                  >
                    <FiExternalLink /> Live demo
                  </a>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-neutral-700 hover:text-accent-500 dark:text-neutral-300"
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
