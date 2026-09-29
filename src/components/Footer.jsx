import { FiArrowUp } from "react-icons/fi";
import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 py-8 dark:border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-neutral-500 sm:flex-row sm:px-6">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with React & Tailwind CSS.
        </p>
        <a
          href="#home"
          className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 transition hover:text-accent-500"
        >
          Back to top <FiArrowUp />
        </a>
      </div>
    </footer>
  );
}
