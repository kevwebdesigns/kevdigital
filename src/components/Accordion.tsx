import { useState, useRef } from 'react';

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: 'How much does a website cost?',
    a: 'Our standard package is a one-time $399 setup fee, then $39/month for hosting, maintenance, and ongoing support. No hidden fees, no surprises. You can cancel your monthly plan at any time — you always own your website files.',
  },
  {
    q: 'How long does it take to build my website?',
    a: "Most websites are live within 7 business days of receiving your content (logo, photos, and a short description of your business). We don't drag it out — you'll have a preview to review by Day 3.",
  },
  {
    q: 'Do I own my website?',
    a: "Yes, 100%. If you ever decide to leave KevDigital (we hope you won't!), we hand over all your website files at no charge. You're never held hostage.",
  },
  {
    q: 'What do I need to provide?',
    a: "Just your logo (if you have one), any photos of your business, your business name, address, phone number, and a few sentences about what you do. That's it. We write the copy, set up the design, and handle all the tech.",
  },
  {
    q: 'What if I need changes after the site is live?',
    a: "Your $39/month includes up to 2 content updates per month (text changes, photo swaps, adding info). Need more? We'll quote it at a fair hourly rate. Major redesigns are quoted separately.",
  },
  {
    q: 'Will my website show up on Google?',
    a: 'We set up all the technical SEO foundations — Google Search Console, sitemap, meta tags, Google Business Profile guidance, and fast hosting. This gets you indexed and gives you the best chance of ranking. Full SEO campaigns (monthly content, backlinks, ranking management) are available as an add-on.',
  },
  {
    q: 'Does the website work on phones?',
    a: 'Every website we build is 100% mobile-first. Over 70% of searches for local services happen on phones — if your site isn\'t mobile-friendly, you\'re losing those customers. All our sites are tested on iPhone, Android, and tablets before launch.',
  },
  {
    q: "What if I'm not happy with the design?",
    a: "We offer unlimited revisions during the build process — we don't stop until you love it. On top of that, there's a 30-day money-back guarantee after launch. If you're not satisfied for any reason, we refund you completely. No questions asked.",
  },
  {
    q: 'Do you only work with Miami businesses?',
    a: 'We specialize in Miami and South Florida local businesses, but we can work with any small business in the US. Being locally based means we understand the Miami market, the customers, and what works here.',
  },
  {
    q: "What's included in the $39/month?",
    a: 'Your monthly plan covers: website hosting on fast servers, SSL certificate (HTTPS), daily backups, software updates, security monitoring, and up to 2 content updates per month. Basically, we keep the lights on and make sure everything runs smoothly so you can focus on your business.',
  },
];

export default function Accordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  const toggle = (i: number) => setOpenIdx(openIdx === i ? null : i);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => {
        const isOpen = openIdx === i;
        const contentHeight = refs.current[i]?.scrollHeight ?? 0;
        return (
          <div
            key={i}
            className="rounded-2xl overflow-hidden transition-all duration-300"
            style={{
              background: 'rgba(13,30,53,0.75)',
              border: isOpen ? '1px solid rgba(0,194,203,0.35)' : '1px solid #162840',
              backdropFilter: 'blur(8px)',
              boxShadow: isOpen ? '0 0 20px rgba(0,194,203,0.08)' : undefined,
            }}
          >
            <button
              onClick={() => toggle(i)}
              className="w-full flex items-center justify-between gap-4 p-6 text-left group"
              aria-expanded={isOpen}
            >
              <span
                className="font-semibold text-base leading-snug transition-colors"
                style={{ color: isOpen ? '#F0F4F8' : '#CBD5E1' }}
              >
                {faq.q}
              </span>
              <span
                className="flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300"
                style={{
                  transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                  background: isOpen ? 'rgba(0,194,203,0.15)' : 'transparent',
                  borderColor: isOpen ? 'rgba(0,194,203,0.4)' : '#162840',
                  color: isOpen ? '#00C2CB' : '#64748B',
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
                className="px-6 pb-6 text-sm leading-relaxed"
                style={{ color: '#64748B' }}
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
