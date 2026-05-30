import Image from "next/image";

const AI_DEVELOPER_URL = "https://aideveloperindia.store";

type Props = {
  /** dark = crimson footer, light = forest footer, cream = linen strip */
  tone?: "dark" | "light" | "cream";
};

export default function BuiltByCredit({ tone = "dark" }: Props) {
  const textClass =
    tone === "dark"
      ? "text-gold-mist/70"
      : tone === "cream"
        ? "text-forest/70"
        : "text-linen/70";
  const nameClass =
    tone === "dark"
      ? "text-gold-mist group-hover:text-brand-gold"
      : tone === "cream"
        ? "text-forest group-hover:text-mango"
        : "text-linen group-hover:text-brand-gold";

  return (
    <div
      className={`flex flex-col items-center justify-center gap-1 text-[10px] leading-tight sm:flex-row sm:gap-1.5 sm:text-[11px] ${textClass}`}
    >
      <span className="font-medium opacity-80">Built by</span>
      <a
        href={AI_DEVELOPER_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-1.5 transition-opacity hover:opacity-90"
        aria-label="AI Developer India — visit aideveloperindia.store"
      >
        <Image
          src="/ai-developer-logo.png"
          alt=""
          width={18}
          height={18}
          className="h-[18px] w-[18px] shrink-0 object-contain"
          unoptimized
        />
        <span className={`font-medium transition-colors ${nameClass}`}>
          AI Developer India
        </span>
      </a>
    </div>
  );
}
