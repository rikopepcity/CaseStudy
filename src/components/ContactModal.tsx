import { FormEvent, useEffect, useState } from 'react';
import { Check, Copy, Send, X } from 'lucide-react';
import { DESIGNER_PROFILE } from '../data/caseStudies';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PROJECT_SCOPES = [
  'Product Redesign',
  'Design System',
  'Enterprise UX',
  'Mobile & Web App',
  'UX Audit',
];

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [scope, setScope] = useState('Product Redesign');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(DESIGNER_PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Please complete your name, email, and brief project summary.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setMessage('');
    setError('');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      onClick={handleResetAndClose}
    >
      <div
        className="relative w-full max-w-xl rounded-2xl border border-zinc-200 bg-white p-6 shadow-2xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold tracking-wider text-emerald-700">
              Start a Conversation
            </p>
            <h2
              id="contact-modal-title"
              className="mt-1 font-display text-2xl font-bold tracking-tight text-zinc-950"
            >
              Let&apos;s Talk About Your Product
            </h2>
          </div>

          <button
            type="button"
            onClick={handleResetAndClose}
            aria-label="Close contact dialog"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-950"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        {/* Direct Email Copy Strip */}
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-zinc-200 bg-[#F7F7F8] px-4 py-3">
          <div>
            <p className="text-xs text-zinc-500">Direct email</p>
            <p className="text-sm font-semibold text-zinc-950">
              {DESIGNER_PROFILE.email}
            </p>
          </div>
          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-800 transition-colors hover:border-zinc-400"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
                <span>Copied</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Copy email</span>
              </>
            )}
          </button>
        </div>

        {submitted ? (
          <div className="mt-8 rounded-xl border border-emerald-200 bg-emerald-50/70 p-6 text-center">
            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-emerald-600 text-white">
              <Check className="h-5 w-5" aria-hidden="true" />
            </div>
            <h3 className="mt-4 font-display text-lg font-bold text-zinc-950">
              Inquiry received, {name}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-700">
              Thank you for reaching out regarding <span className="font-semibold">{scope}</span>. Ruturaj will respond to <span className="font-semibold">{email}</span> within one business day.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href={`mailto:${DESIGNER_PROFILE.email}?subject=${encodeURIComponent(
                  `Portfolio Inquiry: ${scope} — ${name}`
                )}&body=${encodeURIComponent(message)}`}
                className="rounded-full border border-zinc-300 bg-white px-5 py-2 text-xs font-semibold text-zinc-900 transition-colors hover:border-zinc-950"
              >
                Open in Mail App
              </a>
              <button
                type="button"
                onClick={handleResetAndClose}
                className="rounded-full bg-zinc-950 px-5 py-2 text-xs font-semibold text-white transition-colors hover:bg-zinc-800"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <span className="block text-xs font-medium text-zinc-700">
                Project Focus
              </span>
              <div className="mt-2 flex flex-wrap gap-2">
                {PROJECT_SCOPES.map((item) => {
                  const active = scope === item;
                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setScope(item)}
                      className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors ${
                        active
                          ? 'border-zinc-950 bg-zinc-950 text-white'
                          : 'border-zinc-200 bg-white text-zinc-700 hover:border-zinc-400'
                      }`}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-medium text-zinc-700"
                >
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Alex Mehta"
                  className="mt-1.5 w-full rounded-lg border border-zinc-300 px-3.5 py-2.5 text-sm text-zinc-950 placeholder:text-zinc-400 focus:border-emerald-600 focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-medium text-zinc-700"
                >
                  Work Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex@company.com"
                  className="mt-1.5 w-full rounded-lg border border-zinc-300 px-3.5 py-2.5 text-sm text-zinc-950 placeholder:text-zinc-400 focus:border-emerald-600 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="block text-xs font-medium text-zinc-700"
              >
                Project Brief
              </label>
              <textarea
                id="contact-message"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your product goals, timeline, and key UX challenges..."
                className="mt-1.5 w-full rounded-lg border border-zinc-300 px-3.5 py-2.5 text-sm text-zinc-950 placeholder:text-zinc-400 focus:border-emerald-600 focus:outline-none"
              />
            </div>

            {error && (
              <p className="text-xs font-medium text-red-600" role="alert">
                {error}
              </p>
            )}

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={handleResetAndClose}
                className="rounded-full px-4 py-2.5 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-500"
              >
                <span>Send Inquiry</span>
                <Send className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
