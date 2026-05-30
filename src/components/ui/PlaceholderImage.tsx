interface PlaceholderImageProps {
  label: string;
  icon?: string;
  className?: string;
}

export default function PlaceholderImage({
  label,
  icon = "🌿",
  className = "",
}: PlaceholderImageProps) {
  return (
    <div
      className={`flex items-center justify-center bg-gradient-to-br from-forest-green/10 via-linen-dark/80 to-brand-gold/8 ${className}`}
      aria-label={`${label} — photo coming soon`}
    >
      <div className="p-3 text-center">
        <span className="text-2xl opacity-80" aria-hidden>
          {icon}
        </span>
        <p className="mt-1.5 text-[10px] font-medium uppercase tracking-wider text-forest/45">
          {label}
        </p>
      </div>
    </div>
  );
}
