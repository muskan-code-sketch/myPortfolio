import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Download } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData.js';
import { useScrollReveal } from '../../hooks/useScrollReveal.js';

export default function Contact() {
  const [ref, visible] = useScrollReveal({ threshold: 0.2 });
  const { email, links } = personalInfo;

  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-5 sm:px-8 py-24 sm:py-32"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 16 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl mx-auto"
      >
        <p className="section-label mb-3">Contact</p>
        <h2 className="font-display font-semibold text-3xl sm:text-4xl text-ink">
          Let&rsquo;s build something meaningful.
        </h2>
        <p className="text-ink-dim mt-4 text-base sm:text-lg">
          Open to internships and opportunities in AI, ML, and software
          development. Reach out — I&rsquo;d love to talk.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-electric text-base font-medium text-sm hover:brightness-110 transition focus-ring shadow-glow"
          >
            <Mail size={16} /> {email}
          </a>

          {links.linkedin ? (
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-full border border-base-border text-ink-dim hover:text-ink hover:border-electric/40 transition-colors focus-ring"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
          ) : (
            <span className="flex items-center gap-2 px-5 py-3 rounded-full border border-base-border text-ink-faint text-sm cursor-not-allowed">
              <Linkedin size={16} /> LinkedIn — add URL
            </span>
          )}

          {links.github ? (
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-full border border-base-border text-ink-dim hover:text-ink hover:border-electric/40 transition-colors focus-ring"
            >
              <Github size={16} /> GitHub
            </a>
          ) : (
            <span className="flex items-center gap-2 px-5 py-3 rounded-full border border-base-border text-ink-faint text-sm cursor-not-allowed">
              <Github size={16} /> GitHub — add URL
            </span>
          )}

          <a
            href={links.resumeFile}
            download
            className="flex items-center gap-2 px-5 py-3 rounded-full border border-base-border text-ink-dim hover:text-ink hover:border-electric/40 transition-colors focus-ring"
          >
            <Download size={16} /> Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
}
