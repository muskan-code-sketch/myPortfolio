import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

export default function ProjectCard({ project, index, visible }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group rounded-2xl border border-base-border bg-base-surface/60 p-6 sm:p-7 flex flex-col h-full transition-all hover:border-electric/30 hover:-translate-y-1 hover:shadow-glow"
    >
      {project.image && project.demoUrl && (
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open live demo of ${project.title}`}
          className="block mb-5 overflow-hidden rounded-xl border border-base-border focus-ring"
        >
          <img
            src={project.image}
            alt={`${project.title} live demo interface`}
            loading="lazy"
            className="w-full aspect-[16/9] object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </a>
      )}
      <h3 className="font-display font-semibold text-xl text-ink">
        {project.title}
      </h3>
      <p className="mt-2 text-sm text-ink-dim leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mt-4">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-[11px] font-mono px-2 py-1 rounded-md bg-base-raised border border-base-border text-ink-dim"
          >
            {t}
          </span>
        ))}
      </div>

      {project.metrics.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-5">
          {project.metrics.map((m) => (
            <span key={m.label} className="readout">
              <span className="dot bg-cyan" />
              {m.label}
              <span className="text-ink font-medium">{m.value}</span>
            </span>
          ))}
        </div>
      )}

      <ul className="mt-5 space-y-2 flex-1">
        {project.highlights.slice(0, 3).map((h, i) => (
          <li
            key={i}
            className="text-[13px] text-ink-dim leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.5em] before:w-1.5 before:h-1.5 before:rounded-full before:bg-violet/70"
          >
            {h}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-center gap-3">
        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-ink-dim hover:text-ink transition-colors focus-ring"
          >
            <Github size={15} /> GitHub
          </a>
        ) : (
          <span className="flex items-center gap-1.5 text-sm text-ink-faint cursor-not-allowed">
            <Github size={15} /> GitHub link coming soon
          </span>
        )}

        {project.demoUrl ? (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-electric hover:brightness-125 transition focus-ring"
          >
            <ExternalLink size={15} /> Live Demo
          </a>
        ) : (
          <span className="flex items-center gap-1.5 text-sm text-ink-faint cursor-not-allowed">
            <ExternalLink size={15} /> Demo link coming soon
          </span>
        )}
      </div>
    </motion.article>
  );
}
