import { motion } from 'framer-motion';
import { personalInfo } from '../../data/portfolioData.js';
import { useScrollReveal } from '../../hooks/useScrollReveal.js';

export default function About() {
  const [ref, visible] = useScrollReveal();

  return (
    <section id="about" className="max-w-6xl mx-auto px-5 sm:px-8 py-24 sm:py-32">
      <div
        ref={ref}
        className="grid lg:grid-cols-[0.9fr,1.5fr] gap-10 lg:gap-16 items-start"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label mb-3">About</p>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-ink">
            Learning by building.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-5 text-ink-dim text-base sm:text-lg leading-relaxed"
        >
          <p>{personalInfo.summary}</p>
          <p>
            My focus right now sits across{' '}
            {personalInfo.interests.slice(0, 3).join(', ')}, and{' '}
            {personalInfo.interests.slice(3).join(' and ')} — I&rsquo;m most
            comfortable when I&rsquo;m turning a raw, messy dataset into
            something a model (and a person) can actually make sense of.
          </p>
          <p>
            Based in {personalInfo.location}, currently working toward a
            B.Tech in Computer Science Engineering with a specialization in
            AI &amp; ML.
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {personalInfo.interests.map((interest) => (
              <span
                key={interest}
                className="text-xs font-mono px-3 py-1.5 rounded-full border border-base-border text-ink-dim"
              >
                {interest}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
