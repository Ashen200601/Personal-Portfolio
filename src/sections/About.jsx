import { FiCode, FiLayout, FiZap } from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";
import { about, profile } from "../data/portfolio";

const focus = [
  { icon: FiCode, title: "Full-Stack Development", text: "Building practical applications with Java, Spring Boot, React and PostgreSQL." },
  { icon: FiLayout, title: "Business & Technology", text: "Connecting business needs with technology to create practical and valuable solutions." },
  { icon: FiZap, title: "Continuous Growth", text: "Continuously learning cloud, security and modern technologies to grow as a developer." },
];

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="About me" title="Get to know me" />

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="reveal space-y-5">
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
              A passionate <span className="text-gradient">{profile.role}</span>
            </h3>
            {about.paragraphs.map((p, i) => (
              <p key={i} className="leading-relaxed text-neutral-600 dark:text-neutral-400">
                {p}
              </p>
            ))}
          </div>

          <div className="reveal grid gap-4">
            {focus.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="card group flex items-start gap-4 p-6 transition hover:-translate-y-1 hover:border-accent-500/40"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-accent-500 to-accent-600 text-neutral-950 shadow-lg shadow-accent-500/30">
                  <Icon size={22} />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 dark:text-white">{title}</h4>
                  <p className="mt-1 text-neutral-600 dark:text-neutral-400">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
