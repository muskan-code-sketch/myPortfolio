import { projects } from '../../data/portfolioData.js';
import { useScrollReveal } from '../../hooks/useScrollReveal.js';
import ProjectCard from '../ProjectCard.jsx';
import { SectionHeading } from './ExperienceTimeline.jsx';

export default function Projects() {
  const [ref, visible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-5 sm:px-8 py-24 sm:py-32"
    >
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeading eyebrow="Projects" title="Things I've built." />
        <p className="text-sm text-ink-faint max-w-xs">
          Real code, real datasets, real results — no placeholder metrics.
        </p>
      </div>

      <div
        ref={ref}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
      >
        {projects.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={i}
            visible={visible}
          />
        ))}
      </div>
    </section>
  );
}
