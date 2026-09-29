export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="reveal mx-auto mb-14 max-w-2xl text-center">
      <p className="font-mono text-sm tracking-widest text-accent-500 uppercase dark:text-accent-400">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl dark:text-white">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-neutral-600 dark:text-neutral-400">{subtitle}</p>}
    </div>
  );
}
