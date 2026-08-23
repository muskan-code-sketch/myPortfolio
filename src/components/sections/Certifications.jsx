import { motion } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';
import { certifications } from '../../data/portfolioData.js';
import { useScrollReveal } from '../../hooks/useScrollReveal.js';
import { SectionHeading } from './ExperienceTimeline.jsx';

export default function Certifications() {
  const [ref, visible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section
      id="certifications"
      className="max-w-6xl mx-auto px-5 sm:px-8 py-24 sm:py-32"
    >
      <SectionHeading eyebrow="Certifications" title="Continuous learning." />

      <div ref={ref} className="grid sm:grid-cols-3 gap-5 mt-12">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 16 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: i * 0.1 }}
            className="rounded-2xl border border-base-border bg-base-surface/60 p-6 hover:border-violet/40 transition-colors"
          >
            <BadgeCheck size={20} className="text-violet mb-4" />
            <h3 className="font-display font-medium text-ink text-[15px] leading-snug">
              {cert.title}
            </h3>
            <p className="text-sm text-ink-dim mt-2">{cert.issuer}</p>
            {cert.note && (
              <p className="text-xs text-ink-faint mt-2">{cert.note}</p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
