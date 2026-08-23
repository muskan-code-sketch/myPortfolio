import { Bot, User } from 'lucide-react';

export default function ChatMessage({ role, content }) {
  const isUser = role === 'user';

  return (
    <div className={`flex gap-2.5 ${isUser ? 'flex-row-reverse' : ''}`}>
      <span
        className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center ${
          isUser
            ? 'bg-electric/15 text-electric'
            : 'bg-violet/15 text-violet'
        }`}
        aria-hidden="true"
      >
        {isUser ? <User size={14} /> : <Bot size={14} />}
      </span>
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-[13px] leading-relaxed whitespace-pre-line ${
          isUser
            ? 'bg-electric text-base rounded-tr-sm'
            : 'bg-base-raised border border-base-border text-ink-dim rounded-tl-sm'
        }`}
      >
        {content}
      </div>
    </div>
  );
}
