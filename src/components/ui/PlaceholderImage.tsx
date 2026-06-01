import Image from "next/image";

interface PlaceholderImageProps {
  label: string;
  className?: string;
  src?: string;
  priority?: boolean;
  sizes?: string;
}

export default function PlaceholderImage({
  label,
  className = "",
  src,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 33vw",
}: PlaceholderImageProps) {
  if (src) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image
          src={src}
          alt={label}
          fill
          className="object-cover"
          sizes={sizes}
          priority={priority}
        />
      </div>
    );
  }

  return (
    <div
      className={`flex items-center justify-center border border-forest/8 bg-gradient-to-br from-linen-dark/90 to-ivory/80 ${className}`}
      aria-label={`${label} — photograph forthcoming`}
    >
      <div className="px-4 py-3 text-center">
        <div className="mx-auto mb-2 h-px w-8 bg-brand-gold/50" aria-hidden />
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-forest/50">
          {label}
        </p>
      </div>
    </div>
  );
}
