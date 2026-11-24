import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export type ActivePage = 'cases' | 'about' | 'expertise' | 'process';

interface HeaderProps {
  activePage: ActivePage;
  onNavigate: (page: ActivePage) => void;
  onOpenContact: () => void;
}

const NAV_ITEMS: { id: ActivePage; label: string }[] = [
  { id: 'cases', label: 'Case Studies' },
  { id: 'about', label: 'About' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'process', label: 'Process' },
];

export function Header({ activePage, onNavigate, onOpenContact }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (page: ActivePage) => {
    onNavigate(page);
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0D0D0F]/95 text-white backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between gap-8 px-6 lg:px-10">
        {/* Zone 1: Brand Wordmark on Left */}
        <button
          type="button"
          onClick={() => handleNavClick('cases')}
          className="flex shrink-0 items-center gap-2.5 whitespace-nowrap text-left font-display text-lg font-bold tracking-tight text-white transition-opacity duration-150 hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-500"
        >
          <span
            className="flex h-7 w-7 items-center justify-center rounded-md bg-emerald-600 text-xs font-extrabold tracking-tight text-white"
            aria-hidden="true"
          >
            RR
          </span>
          <span>Ruturaj Rane</span>
        </button>

        {/* Zone 2: Center Menu */}
        <nav
          aria-label="Primary Navigation"
          className="hidden items-center gap-8 md:flex"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`relative shrink-0 whitespace-nowrap py-1 text-sm font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-500 ${
                  isActive ? 'text-white' : 'text-zinc-400 hover:text-white'
                }`}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 -bottom-0.5 h-[1.5px] bg-emerald-500 transition-transform duration-200 origin-left ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Right Corner Primary CTA */}
        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={onOpenContact}
            className="hidden shrink-0 whitespace-nowrap rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-emerald-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 md:inline-flex"
          >
            Let&apos;s Talk
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-zinc-200 transition-colors hover:bg-white/10 md:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-[#0D0D0F] px-6 py-5 md:hidden">
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`flex min-h-[44px] items-center justify-between border-b border-white/10 text-left text-base font-medium transition-colors ${
                    isActive ? 'text-emerald-400' : 'text-zinc-300 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                </button>
              );
            })}
            <div className="pt-4">
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  onOpenContact();
                }}
                className="flex min-h-[44px] w-full items-center justify-center rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-500"
              >
                Let&apos;s Talk
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
