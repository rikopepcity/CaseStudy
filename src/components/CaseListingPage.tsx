import { useMemo, useState, useRef, useEffect } from 'react';
import { ArrowRight, ChevronDown, LayoutGrid, List, RotateCcw } from 'lucide-react';
import {
  CASE_STUDIES,
  CaseStudy,
  IndustryCategory,
  OutcomeCategory,
  ScaleCategory,
  ServiceCategory,
} from '../data/caseStudies';
import { MediaFrame } from './MediaFrame';

interface CaseListingPageProps {
  onSelectCase: (slug: string) => void;
  onOpenContact: () => void;
}

const INDUSTRIES: IndustryCategory[] = [
  'Fintech & Banking',
  'Enterprise SaaS',
  'Healthcare',
  'Travel & Luxury',
  'Automotive',
];

const SERVICES: ServiceCategory[] = [
  'UI/UX Design',
  'UX Research',
  'Design System',
  'Product Design',
  'Mobile App',
  'Web Design',
];

const OUTCOMES: OutcomeCategory[] = [
  'Usability',
  'Workflow Efficiency',
  'Conversion',
  'Scalability',
  'Market Presence',
];

const STAGES: ScaleCategory[] = ['Enterprise', 'Scaleup', 'Growth'];

type FilterKey = 'industry' | 'service' | 'outcome' | 'stage';

export function CaseListingPage({ onSelectCase, onOpenContact }: CaseListingPageProps) {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryCategory | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceCategory | null>(null);
  const [selectedOutcome, setSelectedOutcome] = useState<OutcomeCategory | null>(null);
  const [selectedStage, setSelectedStage] = useState<ScaleCategory | null>(null);
  const [openDropdown, setOpenDropdown] = useState<FilterKey | null>(null);
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');

  const filterBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (filterBarRef.current && !filterBarRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenDropdown(null);
    };
    document.addEventListener('mousedown', handleOutside);
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('mousedown', handleOutside);
      document.removeEventListener('keydown', handleEsc);
    };
  }, []);

  const activeFilterCount =
    (selectedIndustry ? 1 : 0) +
    (selectedService ? 1 : 0) +
    (selectedOutcome ? 1 : 0) +
    (selectedStage ? 1 : 0);

  const filteredCases = useMemo(() => {
    return CASE_STUDIES.filter((c) => {
      if (selectedIndustry && !c.industries.includes(selectedIndustry)) return false;
      if (selectedService && !c.services.includes(selectedService)) return false;
      if (selectedOutcome && !c.outcomes.includes(selectedOutcome)) return false;
      if (selectedStage && c.stage !== selectedStage) return false;
      return true;
    });
  }, [selectedIndustry, selectedService, selectedOutcome, selectedStage]);

  const clearAllFilters = () => {
    setSelectedIndustry(null);
    setSelectedService(null);
    setSelectedOutcome(null);
    setSelectedStage(null);
    setOpenDropdown(null);
  };

  return (
    <div>
      {/* Dark Obsidian Editorial Intro Band */}
      <section className="bg-[#0D0D0F] text-white">
        <div className="mx-auto max-w-[1280px] px-6 pb-14 pt-12 lg:px-10 lg:pb-18 lg:pt-16">
          <div className="flex items-center gap-2 text-xs font-medium text-zinc-400">
            <span>Home</span>
            <span aria-hidden="true">/</span>
            <span className="text-zinc-200">Case Studies</span>
          </div>

          <div className="mt-8 grid items-end gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h1 className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-white [text-wrap:balance] sm:text-5xl lg:text-[3.5rem]">
                Explore Ruturaj Rane&apos;s UX/UI design case studies
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-base leading-relaxed text-zinc-400">
                A curated portfolio of digital product design, enterprise dashboards, fintech experiences, and design systems shipped for global banking, healthcare, travel, and SaaS teams.
              </p>
            </div>
          </div>

          {/* 4-Column Quantitative Strip below Hero Split */}
          <div className="mt-12 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4">
            <div>
              <p className="font-mono text-2xl font-medium tracking-tight text-white tabular-nums sm:text-3xl">
                07
              </p>
              <p className="mt-1 text-xs text-zinc-400">Shipped Case Studies</p>
            </div>
            <div>
              <p className="font-mono text-2xl font-medium tracking-tight text-white tabular-nums sm:text-3xl">
                05
              </p>
              <p className="mt-1 text-xs text-zinc-400">Core Industry Verticals</p>
            </div>
            <div>
              <p className="font-mono text-2xl font-medium tracking-tight text-white tabular-nums sm:text-3xl">
                8+ Yrs
              </p>
              <p className="mt-1 text-xs text-zinc-400">Product &amp; UI/UX Craft</p>
            </div>
            <div>
              <p className="font-mono text-2xl font-medium tracking-tight text-emerald-400 tabular-nums sm:text-3xl">
                100%
              </p>
              <p className="mt-1 text-xs text-zinc-400">End-to-End Design Ownership</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Case Studies Workspace */}
      <section className="bg-white text-zinc-950">
        <div className="mx-auto max-w-[1280px] px-6 py-12 lg:px-10 lg:py-16">
          {/* Lazarev-Style Multi-Facet Interactive Filter Bar */}
          <div
            ref={filterBarRef}
            className="flex flex-col gap-4 border-b border-zinc-200 pb-6 lg:flex-row lg:items-center lg:justify-between"
          >
            <div className="flex flex-wrap items-center gap-2.5">
              {/* Industry Filter */}
              <FilterDropdown
                label="Industry"
                activeValue={selectedIndustry}
                options={INDUSTRIES}
                isOpen={openDropdown === 'industry'}
                onToggle={() =>
                  setOpenDropdown((prev) => (prev === 'industry' ? null : 'industry'))
                }
                onSelect={(val) => {
                  setSelectedIndustry(val === selectedIndustry ? null : (val as IndustryCategory));
                  setOpenDropdown(null);
                }}
              />

              {/* Services Filter */}
              <FilterDropdown
                label="Services"
                activeValue={selectedService}
                options={SERVICES}
                isOpen={openDropdown === 'service'}
                onToggle={() =>
                  setOpenDropdown((prev) => (prev === 'service' ? null : 'service'))
                }
                onSelect={(val) => {
                  setSelectedService(val === selectedService ? null : (val as ServiceCategory));
                  setOpenDropdown(null);
                }}
              />

              {/* Outcome Filter */}
              <FilterDropdown
                label="Outcome"
                activeValue={selectedOutcome}
                options={OUTCOMES}
                isOpen={openDropdown === 'outcome'}
                onToggle={() =>
                  setOpenDropdown((prev) => (prev === 'outcome' ? null : 'outcome'))
                }
                onSelect={(val) => {
                  setSelectedOutcome(val === selectedOutcome ? null : (val as OutcomeCategory));
                  setOpenDropdown(null);
                }}
              />

              {/* Stage Filter */}
              <FilterDropdown
                label="Stage"
                activeValue={selectedStage}
                options={STAGES}
                isOpen={openDropdown === 'stage'}
                onToggle={() =>
                  setOpenDropdown((prev) => (prev === 'stage' ? null : 'stage'))
                }
                onSelect={(val) => {
                  setSelectedStage(val === selectedStage ? null : (val as ScaleCategory));
                  setOpenDropdown(null);
                }}
              />

              {activeFilterCount > 0 && (
                <button
                  type="button"
                  onClick={clearAllFilters}
                  className="inline-flex h-10 shrink-0 items-center gap-1.5 whitespace-nowrap rounded-lg px-3 text-xs font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-950"
                >
                  <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                  Clear all
                </button>
              )}
            </div>

            <div className="flex items-center justify-between gap-4 lg:justify-end">
              <span className="text-xs font-medium text-zinc-500 tabular-nums">
                Showing {filteredCases.length} of {CASE_STUDIES.length} case studies
              </span>

              <div
                role="group"
                aria-label="Layout View"
                className="flex items-center gap-1 rounded-lg bg-zinc-100 p-1"
              >
                <button
                  type="button"
                  onClick={() => setViewMode('list')}
                  aria-label="Editorial List View"
                  aria-pressed={viewMode === 'list'}
                  className={`inline-flex h-8 items-center gap-1.5 whitespace-nowrap rounded-md px-2.5 text-xs font-medium transition-colors ${
                    viewMode === 'list'
                      ? 'bg-white text-zinc-950 shadow-xs'
                      : 'text-zinc-600 hover:text-zinc-950'
                  }`}
                >
                  <List className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>List</span>
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('grid')}
                  aria-label="Grid View"
                  aria-pressed={viewMode === 'grid'}
                  className={`inline-flex h-8 items-center gap-1.5 whitespace-nowrap rounded-md px-2.5 text-xs font-medium transition-colors ${
                    viewMode === 'grid'
                      ? 'bg-white text-zinc-950 shadow-xs'
                      : 'text-zinc-600 hover:text-zinc-950'
                  }`}
                >
                  <LayoutGrid className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Grid</span>
                </button>
              </div>
            </div>
          </div>

          {/* Empty Filter State */}
          {filteredCases.length === 0 ? (
            <div className="my-16 flex flex-col items-center justify-center rounded-2xl border border-zinc-200 bg-zinc-50 px-6 py-16 text-center">
              <p className="font-display text-xl font-semibold text-zinc-900">
                No case studies match this filter combination
              </p>
              <p className="mt-2 max-w-md text-sm text-zinc-600">
                Try clearing one of the active industry, service, or stage filters to explore all seven projects.
              </p>
              <button
                type="button"
                onClick={clearAllFilters}
                className="mt-6 rounded-full bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
              >
                Reset all filters
              </button>
            </div>
          ) : viewMode === 'list' ? (
            /* Lazarev-Style Editorial Case List */
            <div className="divide-y divide-zinc-200">
              {filteredCases.map((study) => (
                <EditorialCaseRow
                  key={study.id}
                  study={study}
                  onSelect={() => onSelectCase(study.slug)}
                />
              ))}
            </div>
          ) : (
            /* Clean 2-Column Grid View */
            <div className="mt-10 grid gap-x-8 gap-y-12 md:grid-cols-2">
              {filteredCases.map((study) => (
                <GridCaseCard
                  key={study.id}
                  study={study}
                  onSelect={() => onSelectCase(study.slug)}
                />
              ))}
            </div>
          )}

          {/* Bottom Conversion Strip */}
          <div className="mt-16 flex flex-col items-start justify-between gap-6 rounded-2xl border border-zinc-200 bg-[#F7F7F8] p-8 sm:p-10 lg:flex-row lg:items-center">
            <div>
              <h2 className="font-display text-2xl font-bold tracking-tight text-zinc-950">
                Looking for a designer who ships complex systems with clarity?
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-600">
                Available for product design leadership, enterprise UX overhauls, and scalable Figma design system engagements.
              </p>
            </div>
            <button
              type="button"
              onClick={onOpenContact}
              className="shrink-0 whitespace-nowrap rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-emerald-500"
            >
              Let&apos;s Talk
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

interface FilterDropdownProps {
  label: string;
  activeValue: string | null;
  options: string[];
  isOpen: boolean;
  onToggle: () => void;
  onSelect: (value: string) => void;
}

function FilterDropdown({
  label,
  activeValue,
  options,
  isOpen,
  onToggle,
  onSelect,
}: FilterDropdownProps) {
  return (
    <div className="relative">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className={`inline-flex h-10 shrink-0 items-center gap-2 whitespace-nowrap rounded-lg border px-3.5 text-sm font-medium transition-colors duration-150 ${
          activeValue
            ? 'border-zinc-950 bg-zinc-950 text-white'
            : 'border-zinc-200 bg-white text-zinc-700 hover:border-zinc-400 hover:text-zinc-950'
        }`}
      >
        <span>{activeValue ? `${label}: ${activeValue}` : label}</span>
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-150 ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>

      {isOpen && (
        <div
          role="listbox"
          aria-label={`${label} options`}
          className="absolute left-0 top-12 z-30 min-w-[220px] rounded-xl border border-zinc-200 bg-white p-1.5 shadow-lg"
        >
          {options.map((opt) => {
            const isSelected = activeValue === opt;
            return (
              <button
                key={opt}
                type="button"
                role="option"
                aria-selected={isSelected}
                onClick={() => onSelect(opt)}
                className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                  isSelected
                    ? 'bg-emerald-50 font-semibold text-emerald-700'
                    : 'text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950'
                }`}
              >
                <span>{opt}</span>
                {isSelected && <span className="text-xs text-emerald-600">Active</span>}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

function EditorialCaseRow({
  study,
  onSelect,
}: {
  study: CaseStudy;
  onSelect: () => void;
}) {
  return (
    <article className="group py-10 first:pt-8 last:pb-6 lg:py-12">
      <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
        {/* Visual Frame (Left Column) */}
        <div className="lg:col-span-6">
          <button
            type="button"
            onClick={onSelect}
            className="relative block aspect-[16/10] w-full overflow-hidden rounded-2xl bg-zinc-100 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-600"
          >
            <MediaFrame
              src={study.coverImage}
              alt={`${study.client} — ${study.tagline}`}
              fallbackTitle={study.client}
              fallbackGradient={study.fallbackGradient}
              imgClassName="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
            />
          </button>
        </div>

        {/* Editorial Narrative (Right Column) */}
        <div className="flex flex-col justify-between lg:col-span-6">
          {/* Unboxed Metadata Line (Zero-Pill Discipline) */}
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-medium text-zinc-500">
            <span className="font-mono text-zinc-400 tabular-nums">{study.order}</span>
            <span aria-hidden="true">·</span>
            <span className="text-zinc-800">{study.stage}</span>
            <span aria-hidden="true">·</span>
            <span>{study.industries.join(' / ')}</span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">{study.year}</span>
          </div>

          <h2 className="mt-3 font-display text-2xl font-bold leading-snug tracking-tight text-zinc-950 [text-wrap:balance] sm:text-3xl">
            <button
              type="button"
              onClick={onSelect}
              className="text-left transition-colors duration-150 hover:text-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-600"
            >
              {study.client}: {study.headline}
            </button>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-zinc-600">
            {study.shortDescription}
          </p>

          {/* Clean Unboxed Services & Primary Metric */}
          <div className="mt-6 grid gap-4 border-t border-zinc-100 pt-5 sm:grid-cols-2">
            <div>
              <p className="text-xs font-medium text-zinc-400">Scope</p>
              <p className="mt-1 text-sm font-medium text-zinc-800">
                {study.services.join(' · ')}
              </p>
            </div>
            <div>
              <p className="text-xs font-medium text-zinc-400">Key Impact</p>
              <p className="mt-1 text-sm font-semibold text-zinc-950 tabular-nums">
                {study.metrics[0].value} {study.metrics[0].label}
              </p>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-6">
            <button
              type="button"
              onClick={onSelect}
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-zinc-950 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-emerald-600"
            >
              <span>View case</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

function GridCaseCard({
  study,
  onSelect,
}: {
  study: CaseStudy;
  onSelect: () => void;
}) {
  return (
    <article className="group flex flex-col border-b border-zinc-200 pb-8">
      <button
        type="button"
        onClick={onSelect}
        className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-zinc-100 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-600"
      >
        <MediaFrame
          src={study.coverImage}
          alt={`${study.client} — ${study.tagline}`}
          fallbackTitle={study.client}
          fallbackGradient={study.fallbackGradient}
          imgClassName="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
        />
      </button>

      <div className="mt-5 flex flex-wrap items-center gap-2 text-xs font-medium text-zinc-500">
        <span className="font-mono text-zinc-400 tabular-nums">{study.order}</span>
        <span aria-hidden="true">·</span>
        <span className="text-zinc-800">{study.stage}</span>
        <span aria-hidden="true">·</span>
        <span>{study.industries.join(' / ')}</span>
      </div>

      <h2 className="mt-2 font-display text-xl font-bold leading-snug tracking-tight text-zinc-950 [text-wrap:balance]">
        <button
          type="button"
          onClick={onSelect}
          className="text-left transition-colors hover:text-emerald-700"
        >
          {study.client} — {study.tagline}
        </button>
      </h2>

      <p className="mt-2.5 flex-1 text-sm leading-relaxed text-zinc-600">
        {study.shortDescription}
      </p>

      <div className="mt-5 flex items-center justify-between border-t border-zinc-100 pt-4">
        <span className="text-xs font-medium text-zinc-500">
          {study.services.slice(0, 3).join(' · ')}
        </span>
        <button
          type="button"
          onClick={onSelect}
          className="inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-semibold text-zinc-950 transition-colors hover:text-emerald-700"
        >
          <span>View case</span>
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}
