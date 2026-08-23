import { motion } from 'framer-motion';
import { Briefcase, Factory } from 'lucide-react';
import { experience } from '../../data/portfolioData.js';
import { useScrollReveal } from '../../hooks/useScrollReveal.js';

const ICONS = { infosys: Briefcase, msil: Factory };

export default function ExperienceTimeline() {
  const [ref, visible] = useScrollReveal();

  return (
    <section
      id="experience"
      className="max-w-6xl mx-auto px-5 sm:px-8 py-24 sm:py-32"
    >
      <SectionHeading eyebrow="Experience" title="Where I've worked." />

      <div ref={ref} className="relative mt-14 max-w-3xl">
        <div
          className="absolute left-[15px] sm:left-[19px] top-2 bottom-2 w-px bg-base-border"
          aria-hidden="true"
        />

        <ol className="space-y-12">
          {experience.map((item, i) => {
            const Icon = ICONS[item.id] ?? Briefcase;
            return (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, x: -12 }}
                animate={visible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.45, delay: i * 0.12 }}
                className="relative pl-11 sm:pl-14 group"
              >
                <span className="absolute left-0 top-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-base-surface border border-base-border flex items-center justify-center text-electric group-hover:border-electric/50 group-hover:shadow-glow transition-all">
                  <Icon size={16} />
                </span>

                <div className="rounded-xl border border-base-border bg-base-surface/60 p-5 sm:p-6 transition-colors group-hover:border-electric/30">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="font-display font-semibold text-lg text-ink">
                      {item.role}
                    </h3>
                    <span className="font-mono text-xs text-ink-faint">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-sm text-electric mt-1">{item.org}</p>

                  <ul className="mt-4 space-y-2">
                    {item.points.map((point, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-ink-dim leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.55em] before:w-1.5 before:h-1.5 before:rounded-full before:bg-base-border"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title }) {
  return (
    <div>
      <p className="section-label mb-3">{eyebrow}</p>
      <h2 className="font-display font-semibold text-3xl sm:text-4xl text-ink">
        {title}
      </h2>
    </div>
  );
}
