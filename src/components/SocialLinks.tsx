import type { SiteContent } from "@/lib/cms/types";

type Props = {
  media: SiteContent["media"];
  className?: string;
  /** light = ivory strip; onDark = forest-green Instagram band */
  tone?: "light" | "onDark";
};

const LABELS: Record<keyof SiteContent["media"]["social"], string> = {
  youtubeChannel: "YouTube",
  instagram: "Instagram",
  linkedin: "LinkedIn",
  facebook: "Facebook",
};

export default function SocialLinks({ media, className = "", tone = "light" }: Props) {
  const entries = Object.entries(media.social) as [
    keyof SiteContent["media"]["social"],
    string,
  ][];

  const pillClass =
    tone === "onDark"
      ? "rounded-full border border-ivory/25 bg-ivory/10 px-4 py-2.5 text-sm font-semibold text-ivory transition-colors hover:border-brand-gold hover:bg-ivory/15 hover:text-brand-gold"
      : "rounded-full border border-brand-crimson/20 bg-ivory px-4 py-2 text-sm font-semibold text-brand-crimson transition-colors hover:border-brand-gold hover:text-brand-gold";

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {entries.map(([key, href]) => (
        <a
          key={key}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={pillClass}
        >
          {LABELS[key]}
        </a>
      ))}
    </div>
  );
}
