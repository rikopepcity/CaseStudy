import { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  Check,
} from 'lucide-react';
import { CASE_STUDIES, CaseStudy } from '../data/caseStudies';
import { MediaFrame } from './MediaFrame';

interface CaseDetailPageProps {
  study: CaseStudy;
  onBack: () => void;
  onSelectCase: (slug: string) => void;
  onOpenLightbox: (src: string, title: string, caption: string) => void;
  onOpenContact: () => void;
}

export function CaseDetailPage({
  study,
  onBack,
  onSelectCase,
  onOpenLightbox,
  onOpenContact,
}: CaseDetailPageProps) {
  const [activeModuleId, setActiveModuleId] = useState(study.modules[0]?.id ?? '');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const currentIndex = CASE_STUDIES.findIndex((c) => c.slug === study.slug);
  const nextStudy = CASE_STUDIES[(currentIndex + 1) % CASE_STUDIES.length];

  const activeModule =
    study.modules.find((m) => m.id === activeModuleId) ?? study.modules[0];

  return (
    <article>
      {/* Dark Obsidian Case Detail Hero */}
      <section className="bg-[#0D0D0F] text-white">
        <div className="mx-auto max-w-[1280px] px-6 pb-16 pt-10 lg:px-10 lg:pb-20 lg:pt-14">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-medium text-zinc-400">
              <button
                type="button"
                onClick={onBack}
                className="transition-colors hover:text-white"
              >
                Home
              </button>
              <span aria-hidden="true">/</span>
              <button
                type="button"
                onClick={onBack}
                className="transition-colors hover:text-white"
              >
                Cases
              </button>
              <span aria-hidden="true">/</span>
              <span className="text-zinc-200">{study.client}</span>
            </div>

            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium text-zinc-300 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              <span>All Case Studies</span>
            </button>
          </div>

          {/* Client & Headline */}
          <div className="mt-10 max-w-4xl">
            <p className="text-sm font-semibold tracking-wide text-emerald-400">
              {study.order} · {study.client}
            </p>
            <h1 className="mt-3 font-display text-3xl font-bold leading-[1.1] tracking-tight text-white [text-wrap:balance] sm:text-5xl lg:text-[3.25rem]">
              {study.headline}
            </h1>
          </div>

          {/* 4-Column Lazarev Metadata Matrix (Unboxed, Hairline Separated) */}
          <div className="mt-10 grid grid-cols-2 gap-6 border-t border-white/15 pt-8 md:grid-cols-4">
            <div>
              <h2 className="text-xs font-medium text-zinc-500">Industry</h2>
              <ul className="mt-2 space-y-1 text-sm font-medium text-zinc-200">
                {study.industries.map((ind) => (
                  <li key={ind}>{ind}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xs font-medium text-zinc-500">Services</h2>
              <ul className="mt-2 space-y-1 text-sm font-medium text-zinc-200">
                {study.services.map((srv) => (
                  <li key={srv}>{srv}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xs font-medium text-zinc-500">Result</h2>
              <ul className="mt-2 space-y-1 text-sm font-medium text-zinc-200">
                {study.outcomes.map((out) => (
                  <li key={out}>{out}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xs font-medium text-zinc-500">Stage &amp; Role</h2>
              <p className="mt-2 text-sm font-medium text-zinc-200">{study.stage}</p>
              <p className="mt-1 text-xs text-zinc-400">
                {study.role} · {study.year}
              </p>
            </div>
          </div>

          {/* Full-Bleed Hero Showcase Frame */}
          <div className="group relative mt-12 overflow-hidden rounded-2xl border border-white/10 bg-zinc-900">
            <div className="aspect-[16/9] w-full">
              <MediaFrame
                src={study.coverImage}
                alt={`${study.client} product showcase`}
                fallbackTitle={study.client}
                fallbackGradient={study.fallbackGradient}
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 bg-[#141417] px-5 py-3.5">
              <p className="text-xs text-zinc-400">
                {study.client} — {study.tagline}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About the Project & Metrics Split */}
      <section className="bg-white text-zinc-950">
        <div className="mx-auto max-w-[1280px] px-6 py-16 lg:px-10 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Left Column: Quantitative Proof & Credits */}
            <aside className="lg:col-span-4">
              <div className="space-y-4 lg:sticky lg:top-24">
                <p className="text-xs font-semibold tracking-wider text-zinc-500">
                  Measured Outcomes
                </p>

                {study.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-xl border border-zinc-200 bg-[#FAFAFA] p-5"
                  >
                    <p className="font-mono text-3xl font-medium tracking-tight text-zinc-950 tabular-nums">
                      {metric.value}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-zinc-900">
                      {metric.label}
                    </p>
                    <p className="mt-1.5 text-xs leading-relaxed text-zinc-600">
                      {metric.context}
                    </p>
                  </div>
                ))}
              </div>
            </aside>

            {/* Right Column: Editorial Project Narrative & Chapters */}
            <div className="lg:col-span-8">
              <p className="text-xs font-semibold tracking-wider text-emerald-700">
                About the project
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight text-zinc-950 [text-wrap:balance] sm:text-4xl">
                {study.aboutTitle}
              </h2>

              <div className="mt-6 space-y-5 text-base leading-[1.7] text-zinc-700">
                {study.aboutParagraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              {/* Numbered Design Chapters (01, 02, 03) */}
              <div className="mt-16 divide-y divide-zinc-200 border-t border-zinc-200">
                {study.chapters.map((chapter) => (
                  <div key={chapter.index} className="py-12 first:pt-10">
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono text-sm font-medium text-emerald-700 tabular-nums">
                        {chapter.index}.
                      </span>
                      <h3 className="font-display text-2xl font-bold tracking-tight text-zinc-950">
                        {chapter.title}
                      </h3>
                    </div>

                    <p className="mt-4 text-base leading-[1.7] text-zinc-700">
                      {chapter.summary}
                    </p>

                    <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-zinc-600">
                      {chapter.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <Check
                            className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600"
                            aria-hidden="true"
                          />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 rounded-xl border border-zinc-200 bg-[#F7F7F8] p-6">
                      <p className="font-display text-base font-semibold text-zinc-950">
                        {chapter.highlightTitle}
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-zinc-600">
                        {chapter.highlightBody}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Module Architecture Inspector */}
      <section className="border-y border-zinc-200 bg-[#F7F7F8] text-zinc-950">
        <div className="mx-auto max-w-[1280px] px-6 py-16 lg:px-10 lg:py-20">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold tracking-wider text-emerald-700">
                Interface Architecture
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl">
                Key product modules &amp; workflows designed
              </h2>
            </div>

            <div className="flex flex-wrap gap-1.5 rounded-xl bg-zinc-200/80 p-1">
              {study.modules.map((mod) => {
                const isActive = activeModule?.id === mod.id;
                return (
                  <button
                    key={mod.id}
                    type="button"
                    onClick={() => setActiveModuleId(mod.id)}
                    className={`whitespace-nowrap rounded-lg px-3.5 py-2 text-xs font-semibold transition-colors ${
                      isActive
                        ? 'bg-white text-zinc-950 shadow-xs'
                        : 'text-zinc-600 hover:text-zinc-950'
                    }`}
                  >
                    {mod.name}
                  </button>
                );
              })}
            </div>
          </div>

          {activeModule && (
            <div className="mt-8 grid items-center gap-8 rounded-2xl border border-zinc-200 bg-white p-6 sm:p-10 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <p className="text-xs font-medium text-zinc-500">
                  {activeModule.role}
                </p>
                <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-zinc-950">
                  {activeModule.name}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-zinc-600">
                  {activeModule.description}
                </p>
                <ul className="mt-6 space-y-2.5 border-t border-zinc-100 pt-5">
                  {activeModule.specs.map((spec) => (
                    <li
                      key={spec}
                      className="flex items-center gap-2.5 text-sm font-medium text-zinc-800"
                    >
                      <Check
                        className="h-4 w-4 shrink-0 text-emerald-600"
                        aria-hidden="true"
                      />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-6">
                <button
                  type="button"
                  onClick={() =>
                    onOpenLightbox(
                      study.coverImage,
                      `${study.client} — ${activeModule.name}`,
                      activeModule.description
                    )
                  }
                  className="group relative block aspect-[16/10] w-full overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100 text-left"
                >
                  <MediaFrame
                    src={study.coverImage}
                    alt={`${study.client} ${activeModule.name} interface preview`}
                    fallbackTitle={activeModule.name}
                    fallbackGradient={study.fallbackGradient}
                    imgClassName="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                  />
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Frequently Asked Questions (Lazarev Detail Pattern) */}
      <section className="bg-white text-zinc-950">
        <div className="mx-auto max-w-[1280px] px-6 py-16 lg:px-10 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 className="font-display text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl">
                Frequently asked questions
              </h2>
              <p className="mt-2 text-sm text-zinc-600">
                Design rationale and architectural trade-offs behind {study.client}.
              </p>
            </div>

            <div className="divide-y divide-zinc-200 border-t border-b border-zinc-200 lg:col-span-8">
              {study.faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div key={faq.question}>
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-emerald-700"
                    >
                      <span className="font-display text-base font-semibold text-zinc-950 sm:text-lg">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-zinc-500 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-emerald-600' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                    {isOpen && (
                      <div className="pb-5 pr-8 text-sm leading-relaxed text-zinc-600 sm:text-base">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Next Case Study & Conversion Section */}
      <section className="border-t border-zinc-200 bg-[#FAFAFA] text-zinc-950">
        <div className="mx-auto max-w-[1280px] px-6 py-16 lg:px-10 lg:py-20">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-wider text-zinc-500">
                Next Case Study · {nextStudy.order}
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-zinc-950 [text-wrap:balance] sm:text-3xl">
                {nextStudy.client}: {nextStudy.headline}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                {nextStudy.industries.join(' / ')} · {nextStudy.services.slice(0, 3).join(' · ')}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onSelectCase(nextStudy.slug)}
                  className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-zinc-950 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-600"
                >
                  <span>Read next case</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={onOpenContact}
                  className="whitespace-nowrap rounded-full border border-zinc-300 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-900 transition-colors hover:border-zinc-950"
                >
                  Let&apos;s Talk
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onSelectCase(nextStudy.slug)}
              className="group aspect-[16/10] w-full overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 lg:w-[380px]"
            >
              <MediaFrame
                src={nextStudy.coverImage}
                alt={nextStudy.client}
                fallbackTitle={nextStudy.client}
                fallbackGradient={nextStudy.fallbackGradient}
                imgClassName="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
              />
            </button>
          </div>
        </div>
      </section>
    </article>
  );
}
