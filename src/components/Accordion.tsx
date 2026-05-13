import { useState, useRef } from 'react';

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: "What's included in the box?",
    a: "You'll receive: 1x USB projector lamp with flexible gooseneck arm, 16x interchangeable projection slides (moon, planets, galaxies, aurora, and more), and a quick-start guide. Everything you need to start projecting in seconds.",
  },
  {
    q: 'Does it rotate or is the projection static?',
    a: "The projection itself is fixed — you aim the flexible arm to position it exactly where you want. The gooseneck arm bends 360° so you can point it at any wall or your ceiling. Some customers slowly adjust it for a drift effect.",
  },
  {
    q: 'Is it rechargeable or does it use batteries?',
    a: "Neither — it's USB-A powered. Just plug it into any USB port: your phone charger, laptop, power bank, smart TV, or a USB wall adapter. No batteries to replace, no charging to worry about. Always-on as long as it's plugged in.",
  },
  {
    q: 'How many slides are included?',
    a: "16 projection slides in total: Moon, Mars, Earth, Jupiter, Saturn, Neptune, 2 Galaxy scenes, Solar Eclipse, Aurora Borealis, Deep Space, Nebula, and more. Each slide snaps into the projector head in about 2 seconds.",
  },
  {
    q: 'Does it work on ceilings?',
    a: "Absolutely. The gooseneck arm bends to point straight up. Most customers clip or rest the base on a bedside table and aim the projector upward. It covers up to 12m² of ceiling area at max projection distance of 280cm (110 inches).",
  },
  {
    q: 'Is it good as a night light for kids?',
    a: "Yes — it's one of our most popular uses. The soft, low-intensity light is easy on young eyes and the rotating planet selection makes bedtime exciting for kids. Parents report it significantly reduces bedtime resistance.",
  },
  {
    q: 'Does it make any noise?',
    a: "Completely silent. There's no motor, no fan, and no moving parts. The only thing it does is project light. Perfect for sleeping environments.",
  },
  {
    q: 'How long does shipping take?',
    a: "Standard shipping takes 7–15 business days to most locations. Express shipping (3–7 days) is available at checkout. All orders are processed and dispatched within 24 hours of purchase.",
  },
];

export default function Accordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  const toggle = (i: number) => {
    setOpenIdx(openIdx === i ? null : i);
  };

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => {
        const isOpen = openIdx === i;
        const contentHeight = refs.current[i]?.scrollHeight ?? 0;
        return (
          <div
            key={i}
            className="glass-card overflow-hidden transition-all duration-300"
            style={{
              borderColor: isOpen ? 'rgba(168,85,247,0.4)' : undefined,
            }}
          >
            <button
              onClick={() => toggle(i)}
              className="w-full flex items-center justify-between gap-4 p-6 text-left group"
              aria-expanded={isOpen}
            >
              <span className="text-white font-semibold text-base leading-snug group-hover:text-galaxy-stardust transition-colors">
                {faq.q}
              </span>
              <span
                className="flex-shrink-0 w-7 h-7 rounded-full border border-white/20 flex items-center justify-center text-galaxy-glow transition-all duration-300"
                style={{
                  transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                  background: isOpen ? 'rgba(124,58,237,0.2)' : 'transparent',
                  borderColor: isOpen ? 'rgba(168,85,247,0.5)' : undefined,
                }}
              >
                <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M8 2v12M2 8h12" />
                </svg>
              </span>
            </button>
            <div
              style={{
                maxHeight: isOpen ? `${contentHeight}px` : '0px',
                overflow: 'hidden',
                transition: 'max-height 0.35s ease',
              }}
            >
              <div
                ref={(el) => { refs.current[i] = el; }}
                className="px-6 pb-6 text-galaxy-muted text-sm leading-relaxed"
              >
                {faq.a}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
