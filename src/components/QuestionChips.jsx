export default function QuestionChips({ chips, onSelect, className = '' }) {
  return (
    <div className={`flex flex-wrap gap-2.5 ${className}`}>
      {chips.map((chip) => (
        <button
          key={chip.label}
          onClick={() => onSelect(chip.query)}
          className="text-sm px-4 py-2 rounded-full border border-base-border text-ink-dim hover:text-electric hover:border-electric/50 transition-colors focus-ring"
        >
          {chip.label}
        </button>
      ))}
    </div>
  );
}
