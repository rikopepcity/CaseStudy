import { ArrowUpRight } from 'lucide-react';
import { CASE_STUDIES, DESIGNER_PROFILE } from '../data/caseStudies';
import { ActivePage } from './Header';

interface FooterProps {
  onSelectCase: (slug: string) => void;
  onNavigate: (page: ActivePage) => void;
  onOpenContact: () => void;
}

export function Footer({ onSelectCase, onNavigate, onOpenContact }: FooterProps) {
  return (
    <footer className="border-t border-zinc-800 bg-[#0D0D0F] text-zinc-300">
      <div className="mx-auto max-w-[1280px] px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-12 border-b border-zinc-800 pb-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-display text-2xl font-bold tracking-tight text-white">
              Have a complex product challenge?
            </p>
            <p className="mt-3 max-w-md text-base leading-relaxed text-zinc-400">
              Let&apos;s design digital interfaces that bring measurable clarity to enterprise workflows, fintech products, and scalable design systems.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onOpenContact}
                className="whitespace-nowrap rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-emerald-500"
              >
                Let&apos;s Talk
              </button>
              <a
                href={`mailto:${DESIGNER_PROFILE.email}`}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-300 underline decoration-zinc-700 underline-offset-4 transition-colors hover:text-white hover:decoration-emerald-500"
              >
                {DESIGNER_PROFILE.email}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            <div>
              <h3 className="font-display text-xs font-semibold tracking-wider text-zinc-500">
                Selected Cases
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                {CASE_STUDIES.slice(0, 4).map((item) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => onSelectCase(item.slug)}
                      className="text-left text-zinc-300 transition-colors hover:text-white"
                    >
                      {item.client}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display text-xs font-semibold tracking-wider text-zinc-500">
                More Work
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                {CASE_STUDIES.slice(4).map((item) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => onSelectCase(item.slug)}
                      className="text-left text-zinc-300 transition-colors hover:text-white"
                    >
                      {item.client}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display text-xs font-semibold tracking-wider text-zinc-500">
                Navigation
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('cases')}
                    className="text-zinc-300 transition-colors hover:text-white"
                  >
                    Case Studies
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('about')}
                    className="text-zinc-300 transition-colors hover:text-white"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('expertise')}
                    className="text-zinc-300 transition-colors hover:text-white"
                  >
                    Expertise
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('process')}
                    className="text-zinc-300 transition-colors hover:text-white"
                  >
                    Process
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 pt-8 text-xs text-zinc-500 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Ruturaj Rane. UX/UI &amp; Product Design Portfolio.</p>
          <p>Based in {DESIGNER_PROFILE.location} · Available for Product &amp; Design System Engagements</p>
        </div>
      </div>
    </footer>
  );
}
