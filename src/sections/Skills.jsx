import {
  SiReact, SiJavascript, SiTypescript, SiTailwindcss, SiHtml5, SiCss,
  SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiGit, SiFigma, SiDocker,
  SiNextdotjs, SiSpringboot, SiSpringsecurity, SiJsonwebtokens, SiHibernate, SiGithub,
} from "react-icons/si";
import { FaAws, FaJava } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import SectionHeading from "../components/SectionHeading";
import { skills } from "../data/portfolio";

const icons = {
  react: [SiReact, "#61DAFB"],
  js: [SiJavascript, "#F7DF1E"],
  ts: [SiTypescript, "#3178C6"],
  tailwind: [SiTailwindcss, "#38BDF8"],
  html: [SiHtml5, "#E34F26"],
  css: [SiCss, "#1572B6"],
  node: [SiNodedotjs, "#5FA04E"],
  express: [SiExpress, "currentColor"],
  mongo: [SiMongodb, "#47A248"],
  postgres: [SiPostgresql, "#4169E1"],
  git: [SiGit, "#F05032"],
  figma: [SiFigma, "#F24E1E"],
  docker: [SiDocker, "#2496ED"],
  vscode: [VscVscode, "#007ACC"],
  next: [SiNextdotjs, "currentColor"],
  java: [FaJava, "#F89820"],
  spring: [SiSpringboot, "#6DB33F"],
  springsecurity: [SiSpringsecurity, "#6DB33F"],
  api: [TbApi, "#38BDF8"],
  jwt: [SiJsonwebtokens, "#FB015B"],
  hibernate: [SiHibernate, "#BCAE79"],
  github: [SiGithub, "currentColor"],
  aws: [FaAws, "#FF9900"],
};

export default function Skills() {
  return (
    <section id="skills" className="bg-neutral-100/60 py-24 dark:bg-white/[0.02]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Skills"
          title="My tech stack"
          subtitle="Technologies and tools I use to bring ideas to life."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {skills.map((group) => (
            <div key={group.category} className="card reveal p-6">
              <h3 className="mb-6 text-lg font-bold text-neutral-900 dark:text-white">{group.category}</h3>
              <ul className="space-y-5">
                {group.items.map((s) => {
                  const [Icon, color] = icons[s.icon] ?? [null, null];
                  return (
                    <li key={s.name}>
                      <div className="mb-2 flex items-center justify-between text-sm">
                        <span className="flex items-center gap-2 font-medium text-neutral-700 dark:text-neutral-200">
                          {Icon && <Icon size={18} style={{ color }} />}
                          {s.name}
                        </span>
                        <span className="font-mono text-xs text-neutral-500">{s.level}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-neutral-200 dark:bg-white/10">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-accent-500 to-accent-400"
                          style={{ width: `${s.level}%` }}
                        />
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
