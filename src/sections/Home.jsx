import { useEffect, useState } from "react";
import { FiArrowRight, FiDownload, FiMapPin } from "react-icons/fi";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { profile } from "../data/portfolio";

// Simple typewriter that cycles through profile.roles
function useTypewriter(words, speed = 80, pause = 1600) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    let timeout;
    if (!deleting && text === word) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => i + 1);
    } else {
      timeout = setTimeout(
        () => setText(word.slice(0, text.length + (deleting ? -1 : 1))),
        deleting ? speed / 2 : speed
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, speed, pause]);

  return text;
}

const socialIcons = { github: FaGithub, linkedin: FaLinkedinIn, twitter: FaXTwitter };

export default function Home() {
  const typed = useTypewriter(profile.roles);
  const initials = profile.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-16">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-indigo-500/25 blur-3xl" />
        <div className="absolute top-1/3 -right-24 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(148_163_184/0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgb(148_163_184/0.08)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.3fr_1fr]">
        <div className="reveal text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-600 dark:text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for work
          </span>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl dark:text-white">
            Hi, I'm <span className="text-gradient">{profile.name}</span>
          </h1>

          <p className="mt-4 h-9 font-mono text-xl text-slate-700 sm:text-2xl dark:text-slate-300">
            {typed}
            <span className="ml-0.5 inline-block w-0.5 animate-pulse bg-indigo-500">&nbsp;</span>
          </p>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-600 lg:mx-0 dark:text-slate-400">
            {profile.tagline}
          </p>

          <p className="mt-4 inline-flex items-center gap-2 text-sm text-slate-500">
            <FiMapPin /> {profile.location}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:shadow-indigo-500/50"
            >
              View my work
              <FiArrowRight className="transition group-hover:translate-x-1" />
            </a>
            <a
              href={profile.resumeUrl}
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:border-indigo-500 hover:text-indigo-600 dark:border-white/15 dark:text-slate-200 dark:hover:border-indigo-400 dark:hover:text-indigo-300"
            >
              <FiDownload /> Download CV
            </a>
          </div>

          <div className="mt-8 flex justify-center gap-3 lg:justify-start">
            {Object.entries(profile.socials).map(([key, url]) => {
              const Icon = socialIcons[key];
              return (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={key}
                  className="grid h-11 w-11 place-items-center rounded-full border border-slate-300 text-slate-600 transition hover:-translate-y-1 hover:border-indigo-500 hover:text-indigo-500 dark:border-white/15 dark:text-slate-300"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Avatar */}
        <div className="reveal flex justify-center">
          <div className="relative">
            <div className="absolute -inset-4 animate-[spin_12s_linear_infinite] rounded-full bg-gradient-to-tr from-indigo-500 via-violet-500 to-cyan-400 opacity-70 blur-xl" />
            <div className="relative grid h-64 w-64 place-items-center overflow-hidden rounded-full border-4 border-white bg-gradient-to-br from-slate-800 to-slate-900 sm:h-80 sm:w-80 dark:border-slate-900">
              {profile.avatar ? (
                <img src={profile.avatar} alt={profile.name} className="h-full w-full object-cover" />
              ) : (
                <span className="text-gradient text-7xl font-extrabold sm:text-8xl">{initials}</span>
              )}
            </div>
            <div className="card absolute -bottom-2 -left-6 px-4 py-3 text-sm font-semibold text-slate-800 dark:text-white">
              ⚛️ React Developer
            </div>
            <div className="card absolute -top-2 -right-4 px-4 py-3 text-sm font-semibold text-slate-800 dark:text-white">
              🚀 3+ yrs exp
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
