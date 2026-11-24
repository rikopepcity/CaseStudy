import { ArrowRight, ArrowUpRight, Mail } from 'lucide-react';
import { DESIGNER_PROFILE } from '../data/caseStudies';
import { MediaFrame } from './MediaFrame';

interface AboutSectionProps {
  section: 'about' | 'expertise' | 'process';
  onSelectCase: (slug: string) => void;
  onBackToCases: () => void;
  onOpenContact: () => void;
}

export function AboutSection({
  section,
  onSelectCase,
  onBackToCases,
  onOpenContact,
}: AboutSectionProps) {
  return (
    <div className="bg-white text-zinc-950">
      {/* Dark Intro Band */}
      <section className="bg-[#0D0D0F] text-white">
        <div className="mx-auto max-w-[1280px] px-6 pb-14 pt-12 lg:px-10 lg:pb-16 lg:pt-16">
          <div className="flex items-center gap-2 text-xs font-medium text-zinc-400">
            <button
              type="button"
              onClick={onBackToCases}
              className="transition-colors hover:text-white"
            >
              Home
            </button>
            <span aria-hidden="true">/</span>
            <span className="capitalize text-zinc-200">{section}</span>
          </div>

          <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-white [text-wrap:balance] sm:text-5xl">
            {section === 'about' &&
              'Designing enterprise clarity and high-trust digital products'}
            {section === 'expertise' &&
              'Specialized UX/UI capabilities backed by shipped case studies'}
            {section === 'process' &&
              'From stakeholder discovery to pixel-accurate engineering handoff'}
          </h1>
        </div>
      </section>

      {/* About Designer Bio & Portrait */}
      {section === 'about' && (
        <section className="mx-auto max-w-[1280px] px-6 py-16 lg:px-10 lg:py-24">
          <div className="grid items-stretch gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="h-full min-h-[360px] overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100">
                <MediaFrame
                  src={DESIGNER_PROFILE.portraitImage}
                  alt="Ruturaj Rane reviewing UX wireframes at design studio desk"
                  fallbackTitle="Ruturaj Rane"
                />
              </div>
            </div>

            <div className="flex flex-col justify-between lg:col-span-7">
              <div>
                <p className="text-xs font-semibold tracking-wider text-emerald-700">
                  {DESIGNER_PROFILE.title} · {DESIGNER_PROFILE.location}
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
                  {DESIGNER_PROFILE.name}
                </h2>
                <p className="mt-5 text-base leading-[1.7] text-zinc-700">
                  {DESIGNER_PROFILE.summary}
                </p>
                <p className="mt-4 text-base leading-[1.7] text-zinc-700">
                  Having led product design engagements across enterprise design practices and global product teams, I focus on turning complex operational constraints—regulatory compliance, multi-market localization, high-volume financial data—into intuitive digital experiences users trust on day one.
                </p>
              </div>

              <div className="mt-10 border-t border-zinc-200 pt-8">
                <p className="text-xs font-medium text-zinc-500">
                  Core Design Practice &amp; Toolset
                </p>
                <p className="mt-2 text-sm font-medium leading-relaxed text-zinc-900">
                  {DESIGNER_PROFILE.tools.join(' · ')}
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={onOpenContact}
                    className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-500"
                  >
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    <span>Let&apos;s Talk</span>
                  </button>
                  <button
                    type="button"
                    onClick={onBackToCases}
                    className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:border-zinc-950"
                  >
                    <span>Browse all 7 case studies</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Expertise Section */}
      {section === 'expertise' && (
        <section className="mx-auto max-w-[1280px] px-6 py-16 lg:px-10 lg:py-24">
          <div className="grid gap-8 md:grid-cols-2">
            {DESIGNER_PROFILE.expertise.map((item) => (
              <div
                key={item.index}
                className="flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-8"
              >
                <div>
                  <span className="font-mono text-sm font-medium text-emerald-700 tabular-nums">
                    {item.index}.
                  </span>
                  <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-zinc-950">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-zinc-600">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 border-t border-zinc-100 pt-5">
                  <button
                    type="button"
                    onClick={() => onSelectCase(item.proofSlug)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-950 transition-colors hover:text-emerald-700"
                  >
                    <span>{item.proofLabel}</span>
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Process Section */}
      {section === 'process' && (
        <section className="mx-auto max-w-[1280px] px-6 py-16 lg:px-10 lg:py-24">
          <div className="divide-y divide-zinc-200 border-y border-zinc-200">
            {DESIGNER_PROFILE.process.map((step) => (
              <div
                key={step.index}
                className="grid gap-6 py-10 lg:grid-cols-12 lg:items-baseline"
              >
                <div className="flex items-baseline gap-4 lg:col-span-4">
                  <span className="font-mono text-sm font-medium text-emerald-700 tabular-nums">
                    {step.index}.
                  </span>
                  <div>
                    <h2 className="font-display text-xl font-bold tracking-tight text-zinc-950">
                      {step.phase}
                    </h2>
                    <p className="mt-1 text-xs font-medium text-zinc-500">
                      {step.duration}
                    </p>
                  </div>
                </div>
                <p className="text-base leading-relaxed text-zinc-600 lg:col-span-8">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-zinc-200 bg-[#F7F7F8] p-8">
            <div>
              <h3 className="font-display text-xl font-bold text-zinc-950">
                Ready to start a product discovery sprint?
              </h3>
              <p className="mt-1 text-sm text-zinc-600">
                Share your product goals and timeline for an actionable UX assessment.
              </p>
            </div>
            <button
              type="button"
              onClick={onOpenContact}
              className="whitespace-nowrap rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-500"
            >
              Let&apos;s Talk
            </button>
          </div>
        </section>
      )}
    </div>
  );
}
