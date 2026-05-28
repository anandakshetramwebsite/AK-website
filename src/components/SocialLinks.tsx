import type { SiteContent } from "@/lib/cms/types";

type Props = {
  media: SiteContent["media"];
  className?: string;
};

const LABELS: Record<keyof SiteContent["media"]["social"], string> = {
  youtubeChannel: "YouTube",
  instagram: "Instagram",
  linkedin: "LinkedIn",
  facebook: "Facebook",
};

export default function SocialLinks({ media, className = "" }: Props) {
  const entries = Object.entries(media.social) as [
    keyof SiteContent["media"]["social"],
    string,
  ][];

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {entries.map(([key, href]) => (
        <a
          key={key}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-brand-crimson/20 bg-ivory px-4 py-2 text-sm font-semibold text-brand-crimson transition-colors hover:border-brand-gold hover:text-brand-gold"
        >
          {LABELS[key]}
        </a>
      ))}
    </div>
  );
}
