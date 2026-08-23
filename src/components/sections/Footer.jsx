import { personalInfo } from '../../data/portfolioData.js';

export default function Footer() {
  return (
    <footer className="border-t border-base-border">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-ink-faint font-mono">
          © {new Date().getFullYear()} {personalInfo.name}. Built with React
          &amp; Tailwind.
        </p>
        <p className="text-xs text-ink-faint">{personalInfo.location}</p>
      </div>
    </footer>
  );
}
