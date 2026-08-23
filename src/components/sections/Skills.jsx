import { motion } from 'framer-motion';
import { skills } from '../../data/portfolioData.js';
import { useScrollReveal } from '../../hooks/useScrollReveal.js';
import { SectionHeading } from './ExperienceTimeline.jsx';

const ACCENTS = ['#3E7BFA', '#22D3EE', '#8B5CF6', '#3E7BFA', '#22D3EE'];

export default function Skills() {
  const [ref, visible] = useScrollReveal({ threshold: 0.1 });
  const categories = Object.entries(skills);

  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto px-5 sm:px-8 py-24 sm:py-32"
    >
      <SectionHeading eyebrow="Skills" title="What I work with." />

      <div ref={ref} className="grid sm:grid-cols-2 gap-5 mt-12">
        {categories.map(([category, items], i) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 16 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="rounded-2xl border border-base-border bg-base-surface/60 p-6 hover:border-electric/30 transition-colors"
          >
            <div className="flex items-center gap-2.5 mb-4">
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: ACCENTS[i % ACCENTS.length] }}
              />
              <h3 className="font-display font-medium text-ink text-[15px]">
                {category}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span
                  key={skill}
                  tabIndex={0}
                  className="text-[13px] font-mono px-3 py-1.5 rounded-lg bg-base-raised border border-base-border text-ink-dim hover:text-ink hover:border-electric/40 transition-colors focus-ring cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
