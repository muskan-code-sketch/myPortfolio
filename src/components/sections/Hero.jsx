import { motion } from 'framer-motion';
import { ArrowDown, Download, MessageSquareText } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData.js';
import { useReducedMotion } from '../../hooks/useReducedMotion.js';

const READOUTS = [
  { label: 'CGPA', value: '8.5 / 10', color: '#3E7BFA' },
  { label: 'IRIS MODEL ACCURACY', value: '100%', color: '#22D3EE' },
  { label: 'AI/ML PREP COURSES', value: '19', color: '#8B5CF6' },
];

export default function Hero({ onOpenChat }) {
  const reduced = useReducedMotion();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden grid-overlay"
    >
      <div className="absolute inset-0 bg-grid-fade pointer-events-none" />
      <DataNodesBackground reduced={reduced} />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 pt-28 pb-20 w-full">
        <motion.p
          initial={reduced ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-label mb-5"
        >
          AI/ML DEVELOPER · DATA SCIENCE ENTHUSIAST
        </motion.p>

        <motion.h1
          initial={reduced ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-display font-semibold text-[2.6rem] leading-[1.08] sm:text-6xl sm:leading-[1.05] max-w-3xl text-ink"
        >
          Hi, I&rsquo;m {personalInfo.name}.
          <br />
          <span className="text-ink-dim">
            {personalInfo.tagline}
          </span>
        </motion.h1>

        <motion.p
          initial={reduced ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mt-6 max-w-xl text-ink-dim text-base sm:text-lg leading-relaxed"
        >
          I build data-driven applications, explore machine learning, and turn
          ideas into interactive digital experiences.
        </motion.p>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-electric text-base font-medium text-sm hover:brightness-110 transition focus-ring shadow-glow"
          >
            View My Work
          </a>
          <button
            onClick={onOpenChat}
            className="px-6 py-3 rounded-full border border-base-border text-ink font-medium text-sm hover:border-electric/50 hover:text-electric transition focus-ring flex items-center gap-2"
          >
            <MessageSquareText size={15} />
            Let&rsquo;s Connect
          </button>
          <a
            href={personalInfo.links.resumeFile}
            download
            className="px-5 py-3 text-ink-dim hover:text-ink font-medium text-sm transition focus-ring flex items-center gap-2"
          >
            <Download size={15} />
            Download Resume
          </a>
        </motion.div>

        <motion.div
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex flex-wrap gap-3"
        >
          {READOUTS.map((r) => (
            <span key={r.label} className="readout">
              <span className="dot" style={{ background: r.color }} />
              {r.label}
              <span className="text-ink font-medium">{r.value}</span>
            </span>
          ))}
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 text-ink-faint hover:text-ink-dim transition-colors focus-ring animate-drift"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
}

/** Subtle, elegant animated node/data-connection background. */
function DataNodesBackground({ reduced }) {
  const nodes = [
    { x: 78, y: 18, r: 3, color: '#3E7BFA' },
    { x: 88, y: 40, r: 2, color: '#22D3EE' },
    { x: 70, y: 55, r: 2.5, color: '#8B5CF6' },
    { x: 92, y: 68, r: 2, color: '#3E7BFA' },
    { x: 65, y: 30, r: 1.8, color: '#22D3EE' },
    { x: 82, y: 82, r: 2.2, color: '#8B5CF6' },
  ];
  const edges = [
    [0, 1],
    [1, 2],
    [2, 3],
    [0, 4],
    [2, 4],
    [3, 5],
  ];

  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-70 pointer-events-none"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="#23262F"
          strokeWidth="0.15"
          strokeDasharray="1 1.4"
          className={reduced ? '' : 'animate-pulseLine'}
        />
      ))}
      {nodes.map((n, i) => (
        <circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={n.r * 0.35}
          fill={n.color}
          opacity="0.85"
        />
      ))}
    </svg>
  );
}
