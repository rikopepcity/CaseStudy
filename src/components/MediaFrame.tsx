import { useState } from 'react';
import { Layers } from 'lucide-react';

interface MediaFrameProps {
  src: string;
  alt: string;
  fallbackTitle: string;
  fallbackGradient?: string;
  className?: string;
  imgClassName?: string;
}

export function MediaFrame({
  src,
  alt,
  fallbackTitle,
  fallbackGradient = 'from-zinc-900 via-zinc-800 to-emerald-950',
  className = '',
  imgClassName = '',
}: MediaFrameProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br ${fallbackGradient} p-8 text-white ${className}`}
        role="img"
        aria-label={alt}
      >
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 bg-white/5">
            <Layers className="h-5 w-5 text-emerald-400" aria-hidden="true" />
          </div>
          <span className="font-display text-lg font-semibold tracking-tight text-white/90">
            {fallbackTitle}
          </span>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading="lazy"
      onError={() => setHasError(true)}
      className={`h-full w-full object-cover ${imgClassName}`}
    />
  );
}
