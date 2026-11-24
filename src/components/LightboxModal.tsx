import { useEffect } from 'react';
import { X } from 'lucide-react';
import { MediaFrame } from './MediaFrame';

interface LightboxModalProps {
  image: {
    src: string;
    title: string;
    caption: string;
  } | null;
  onClose: () => void;
}

export function LightboxModal({ image, onClose }: LightboxModalProps) {
  useEffect(() => {
    if (!image) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [image, onClose]);

  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col justify-between bg-black/92 p-4 backdrop-blur-sm sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={image.title}
      onClick={onClose}
    >
      <div
        className="mx-auto flex w-full max-w-[1280px] items-center justify-between gap-4 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <p className="font-display text-base font-bold sm:text-lg">{image.title}</p>
          <p className="text-xs text-zinc-400 sm:text-sm">{image.caption}</p>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close fullscreen preview"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/15"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      <div
        className="mx-auto my-auto w-full max-w-[1200px] overflow-hidden rounded-2xl border border-white/10 bg-zinc-950"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="aspect-[16/9] w-full">
          <MediaFrame
            src={image.src}
            alt={image.title}
            fallbackTitle={image.title}
          />
        </div>
      </div>

      <div className="mx-auto text-center text-xs text-zinc-500">
        Press ESC or click outside to close
      </div>
    </div>
  );
}
