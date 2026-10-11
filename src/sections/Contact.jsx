import { useState } from "react";
import { FiMail, FiMapPin, FiPhone, FiSend, FiCheckCircle } from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";
import { profile } from "../data/portfolio";

const info = [
  { icon: FiMail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: FiPhone, label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
  { icon: FiMapPin, label: "Location", value: profile.location },
];

const inputClass =
  "w-full rounded-xl border border-neutral-300 bg-white/80 px-4 py-3 text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-accent-500 focus:ring-4 focus:ring-accent-500/15 dark:border-white/10 dark:bg-white/5 dark:text-white";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // Demo only: no backend yet. Hook this up to EmailJS / Formspree / your API later.
  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="bg-neutral-100/60 py-24 dark:bg-white/[0.02]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's work together"
          subtitle="Have a project in mind or just want to say hi? My inbox is always open."
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_1.5fr]">
          <div className="reveal space-y-4">
            {info.map(({ icon: Icon, label, value, href }) => {
              const Tag = href ? "a" : "div";
              return (
                <Tag
                  key={label}
                  href={href}
                  className="card flex items-center gap-4 p-5 transition hover:border-accent-500/40"
                >
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-accent-500 to-accent-600 text-neutral-950">
                    <Icon size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-neutral-500">{label}</p>
                    <p className="truncate font-semibold text-neutral-900 dark:text-white">{value}</p>
                  </div>
                </Tag>
              );
            })}
          </div>

          <form onSubmit={onSubmit} className="card reveal space-y-5 p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium">Name</label>
                <input id="name" name="name" required value={form.name} onChange={onChange} placeholder="John Doe" className={inputClass} />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium">Email</label>
                <input id="email" name="email" type="email" required value={form.email} onChange={onChange} placeholder="john@example.com" className={inputClass} />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium">Message</label>
              <textarea id="message" name="message" rows={5} required value={form.message} onChange={onChange} placeholder="Tell me about your project..." className={`${inputClass} resize-none`} />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent-500 to-accent-600 px-6 py-3.5 font-semibold text-neutral-950 shadow-lg shadow-accent-500/30 transition hover:shadow-accent-500/50 sm:w-auto"
            >
              <FiSend /> Send mess
            </button>
            {sent && (
              <p className="inline-flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                <FiCheckCircle /> Thanks! Your message has been sent (demo).
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
