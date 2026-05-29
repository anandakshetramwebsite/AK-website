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
        : "text-linen group-hover:text-mango";

  return (
    <div className={`mt-4 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-3 ${textClass}`}>
      <span className="text-sm font-medium">Built by</span>
      <a
        href={AI_DEVELOPER_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 transition-opacity hover:opacity-90"
        aria-label="AI Developer India — visit aideveloperindia.store"
      >
        <Image
          src="/ai-developer-logo.svg"
          alt="AI Developer India logo"
          width={40}
          height={40}
          className="h-10 w-10 object-contain"
          unoptimized
        />
        <span className={`text-sm font-semibold transition-colors ${nameClass}`}>
          AI Developer India
        </span>
      </a>
    </div>
  );
}
