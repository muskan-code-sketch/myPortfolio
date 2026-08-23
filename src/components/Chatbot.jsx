import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Sparkles, X, Send, Loader2 } from 'lucide-react';
import { askMuskan } from '../services/chatService.js';
import { suggestedQuestions } from '../data/portfolioData.js';
import ChatMessage from './ChatMessage.jsx';
import { useReducedMotion } from '../hooks/useReducedMotion.js';

const GREETING = {
  role: 'assistant',
  content:
    "Hi! I'm Muskan's AI assistant. Ask me anything about her education, projects, skills, internships, or career journey.",
};

/**
 * Floating chatbot. Controlled from the outside via `pendingQuery` so any
 * component (nav, hero, question chips) can open the chat and ask a
 * question on the visitor's behalf.
 */
export default function Chatbot({ isOpen, onOpen, onClose, pendingQuery }) {
  const [messages, setMessages] = useState([GREETING]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);
  const reduced = useReducedMotion();
  const processedTs = useRef(null);

  useEffect(() => {
    if (pendingQuery && pendingQuery.ts !== processedTs.current) {
      processedTs.current = pendingQuery.ts;
      handleSend(pendingQuery.text);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pendingQuery]);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: reduced ? 'auto' : 'smooth',
    });
  }, [messages, loading, reduced]);

  async function handleSend(text) {
    const query = (text ?? input).trim();
    if (!query) return;

    setMessages((prev) => [...prev, { role: 'user', content: query }]);
    setInput('');
    setLoading(true);

    const reply = await askMuskan(query);

    setMessages((prev) => [...prev, { role: 'assistant', content: reply }]);
    setLoading(false);
  }

  return (
    <>
      {!isOpen && (
        <button
          onClick={onOpen}
          aria-label="Open Ask Muskan chatbot"
          className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 flex items-center gap-2 pl-4 pr-5 py-3.5 rounded-full bg-electric text-base font-medium text-sm shadow-glow hover:brightness-110 transition focus-ring"
        >
          <Sparkles size={17} />
          Ask Muskan
        </button>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            role="dialog"
            aria-label="Ask Muskan chatbot"
            initial={reduced ? false : { opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="fixed bottom-4 right-4 left-4 sm:left-auto sm:bottom-7 sm:right-7 z-50 w-auto sm:w-[380px] h-[560px] max-h-[75vh] rounded-2xl border border-base-border bg-base-surface/95 backdrop-blur-xl shadow-2xl flex flex-col overflow-hidden"
          >
            <div className="flex items-center justify-between px-4 py-3.5 border-b border-base-border">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-full bg-violet/15 text-violet flex items-center justify-center">
                  <Sparkles size={15} />
                </span>
                <div>
                  <p className="text-sm font-medium text-ink leading-none">
                    Ask Muskan
                  </p>
                  <p className="text-[11px] text-ink-faint mt-1">
                    AI portfolio assistant
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                aria-label="Close chat"
                className="text-ink-faint hover:text-ink transition-colors p-1.5 focus-ring rounded-md"
              >
                <X size={18} />
              </button>
            </div>

            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto scrollbar-thin px-4 py-4 space-y-4"
            >
              {messages.map((m, i) => (
                <ChatMessage key={i} role={m.role} content={m.content} />
              ))}

              {loading && (
                <div className="flex gap-2.5">
                  <span className="w-7 h-7 rounded-full bg-violet/15 text-violet flex items-center justify-center">
                    <Loader2 size={14} className="animate-spin" />
                  </span>
                  <div className="rounded-2xl rounded-tl-sm px-4 py-2.5 bg-base-raised border border-base-border text-ink-faint text-[13px]">
                    Thinking…
                  </div>
                </div>
              )}

              {messages.length === 1 && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {suggestedQuestions.slice(0, 4).map((q) => (
                    <button
                      key={q}
                      onClick={() => handleSend(q)}
                      className="text-[12px] px-3 py-1.5 rounded-full border border-base-border text-ink-dim hover:text-electric hover:border-electric/40 transition-colors focus-ring"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="border-t border-base-border p-3 flex items-center gap-2"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Muskan's work…"
                aria-label="Type your question"
                className="flex-1 bg-base-raised border border-base-border rounded-full px-4 py-2.5 text-[13px] text-ink placeholder:text-ink-faint focus-ring outline-none"
              />
              <button
                type="submit"
                disabled={!input.trim() || loading}
                aria-label="Send message"
                className="w-9 h-9 flex-shrink-0 rounded-full bg-electric text-base flex items-center justify-center disabled:opacity-40 hover:brightness-110 transition focus-ring"
              >
                <Send size={15} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
