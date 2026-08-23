import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { questionChips } from '../../data/portfolioData.js';
import { useScrollReveal } from '../../hooks/useScrollReveal.js';
import QuestionChips from '../QuestionChips.jsx';

export default function AskSection({ onAsk }) {
  const [ref, visible] = useScrollReveal({ threshold: 0.2 });

  return (
    <section className="max-w-6xl mx-auto px-5 sm:px-8 py-24 sm:py-28">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 16 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="rounded-3xl border border-base-border bg-base-surface/60 px-6 py-10 sm:px-12 sm:py-14 text-center"
      >
        <span className="inline-flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded-full border border-electric/30 text-electric mb-5">
          <Sparkles size={13} /> AI-POWERED
        </span>
        <h2 className="font-display font-semibold text-2xl sm:text-3xl text-ink">
          What do you want to know about me?
        </h2>
        <p className="text-ink-dim mt-3 max-w-md mx-auto text-sm sm:text-base">
          Ask directly, or pick a starting point below — Ask Muskan will pull
          the answer straight from my profile.
        </p>

        <div className="mt-8 flex justify-center">
          <QuestionChips chips={questionChips} onSelect={onAsk} />
        </div>
      </motion.div>
    </section>
  );
}
