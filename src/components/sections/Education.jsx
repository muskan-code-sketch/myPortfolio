import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { education } from '../../data/portfolioData.js';
import { useScrollReveal } from '../../hooks/useScrollReveal.js';
import { SectionHeading } from './ExperienceTimeline.jsx';

export default function Education() {
  const [ref, visible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section
      id="education"
      className="max-w-6xl mx-auto px-5 sm:px-8 py-24 sm:py-32"
    >
      <SectionHeading eyebrow="Education" title="Academic record." />

      <div ref={ref} className="grid sm:grid-cols-3 gap-5 mt-12">
        {education.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 16 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: i * 0.1 }}
            className="rounded-2xl border border-base-border bg-base-surface/60 p-6 flex flex-col hover:border-electric/30 transition-colors"
          >
            <GraduationCap size={20} className="text-electric mb-4" />
            <h3 className="font-display font-medium text-ink text-[15px] leading-snug">
              {item.degree}
            </h3>
            <p className="text-sm text-ink-dim mt-2">{item.institution}</p>
            {item.period && (
              <p className="text-xs font-mono text-ink-faint mt-1">
                {item.period}
              </p>
            )}
            <span className="mt-auto pt-5 font-mono text-sm text-cyan">
              {item.score}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
