import { useEffect, useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ onOpenChat }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-colors duration-300 ${
        scrolled
          ? 'bg-base/85 backdrop-blur-md border-b border-base-border'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-5 sm:px-8 h-16">
        <a
          href="#home"
          className="font-display font-semibold text-ink text-[15px] tracking-tight focus-ring"
        >
          Muskan<span className="text-electric">.</span>Chauhan
        </a>

        <ul className="hidden lg:flex items-center gap-7">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm text-ink-dim hover:text-ink transition-colors focus-ring"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center">
          <button
            onClick={onOpenChat}
            className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full border border-electric/40 text-electric hover:bg-electric/10 transition-colors focus-ring"
          >
            <Sparkles size={14} strokeWidth={2} />
            Ask Muskan
          </button>
        </div>

        <button
          className="lg:hidden text-ink focus-ring p-2 -mr-2"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-base/97 backdrop-blur-md border-t border-base-border px-5 pb-6 pt-2">
          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-ink-dim hover:text-ink text-[15px] border-b border-base-border/60 focus-ring"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            onClick={() => {
              setOpen(false);
              onOpenChat();
            }}
            className="mt-4 w-full flex items-center justify-center gap-2 text-sm font-medium px-4 py-3 rounded-full border border-electric/40 text-electric focus-ring"
          >
            <Sparkles size={14} />
            Ask Muskan
          </button>
        </div>
      )}
    </header>
  );
}
