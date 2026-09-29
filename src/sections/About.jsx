import { FiCode, FiLayout, FiZap } from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";
import { about, profile } from "../data/portfolio";

const focus = [
  { icon: FiCode, title: "Clean Code", text: "Readable, maintainable and well-tested code." },
  { icon: FiLayout, title: "Modern UI", text: "Responsive, accessible interfaces people enjoy." },
  { icon: FiZap, title: "Performance", text: "Fast load times and smooth interactions." },
];

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="About me" title="Get to know me" />

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="reveal space-y-5">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              A passionate <span className="text-gradient">{profile.role}</span>
            </h3>
            {about.paragraphs.map((p, i) => (
              <p key={i} className="leading-relaxed text-slate-600 dark:text-slate-400">
                {p}
              </p>
            ))}

            <div className="grid grid-cols-2 gap-4 pt-4 sm:grid-cols-4">
              {about.stats.map((s) => (
                <div key={s.label} className="card p-4 text-center">
                  <p className="text-gradient text-3xl font-extrabold">{s.value}</p>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal grid gap-4">
            {focus.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="card group flex items-start gap-4 p-6 transition hover:-translate-y-1 hover:border-indigo-500/40"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-lg shadow-indigo-500/30">
                  <Icon size={22} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">{title}</h4>
                  <p className="mt-1 text-slate-600 dark:text-slate-400">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
