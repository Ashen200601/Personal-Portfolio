import { useEffect, useState } from "react";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { about, profile } from "../data/portfolio";

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
  const firstName = profile.name.split(" ")[0];

  return (
    <section id="home" className="relative overflow-hidden pt-24 pb-16">
     
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-10 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-accent-400/20 blur-[120px] lg:left-[28%]" />
        <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-accent-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-end gap-10 lg:grid-cols-2">
        
          <div className="reveal relative order-2 mx-auto w-full max-w-md lg:order-1">
          
            <div className="absolute inset-x-6 bottom-0 top-16 rounded-t-[10rem] bg-gradient-to-b from-accent-400/30 via-accent-500/10 to-transparent" />
            <div className="absolute inset-x-6 bottom-0 top-16 rounded-t-[10rem] border border-accent-400/30 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
            <img
              src={profile.photo}
              alt={profile.name}
              className="relative mx-auto w-[88%] [filter:drop-shadow(0_0_1.5px_rgba(125,211,252,0.35))_drop-shadow(-6px_-4px_18px_rgba(56,189,248,0.18))_drop-shadow(0_20px_40px_rgba(0,0,0,0.6))] [mask-image:linear-gradient(to_bottom,black_82%,transparent)]"
            />
          </div>

          {/* Intro */}
          <div className="reveal order-1 pb-6 text-center lg:order-2 lg:pb-24 lg:text-left">
            <p className="font-semibold text-accent-600 dark:text-accent-400">Hello, I'm {firstName}</p>

            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-6xl dark:text-white">
              {profile.role}
            </h1>

            <p className="mt-4 h-8 font-mono text-lg text-neutral-600 dark:text-neutral-400">
              <span className="text-accent-600 dark:text-accent-400">&gt;</span> {typed}
              <span className="ml-0.5 inline-block w-0.5 animate-pulse bg-accent-400">&nbsp;</span>
            </p>

            <p className="mx-auto mt-5 max-w-lg leading-relaxed text-neutral-600 lg:mx-0 dark:text-neutral-400">
              {profile.tagline}
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
              <a
                href="#about"
                className="group inline-flex items-center gap-2 rounded-lg bg-accent-400 px-6 py-3 font-semibold text-neutral-950 shadow-lg shadow-accent-400/25 transition hover:bg-accent-300 hover:shadow-accent-400/40"
              >
                About me
                <FiArrowRight className="transition group-hover:translate-x-1" />
              </a>
              <a
                href={profile.resumeUrl}
                className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 px-6 py-3 font-semibold text-neutral-700 transition hover:border-accent-500 hover:text-accent-700 dark:border-white/15 dark:text-neutral-200 dark:hover:border-accent-400 dark:hover:text-accent-300"
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
                    className="grid h-10 w-10 place-items-center rounded-lg border border-neutral-300 text-neutral-600 transition hover:-translate-y-1 hover:border-accent-400 hover:text-accent-600 dark:border-white/15 dark:text-neutral-300 dark:hover:text-accent-400"
                  >
                    <Icon size={17} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

  
        <div className="card reveal relative -mt-6 grid grid-cols-2 gap-6 p-6 sm:grid-cols-4 sm:p-8 dark:bg-ink-900/70">
          {about.stats.map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-bold text-neutral-900 dark:text-white">{s.value}</p>
              <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
