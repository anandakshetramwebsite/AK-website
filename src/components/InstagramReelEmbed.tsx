"use client";

import { useEffect } from "react";

type Props = {
  permalink: string;
  /** Tighter embed for homepage side column */
  compact?: boolean;
};

export default function InstagramReelEmbed({ permalink, compact = false }: Props) {
  useEffect(() => {
    let cancelled = false;

    const process = () => {
      if (cancelled) return;
      const instgrm = (
        window as Window & { instgrm?: { Embeds: { process: () => void } } }
      ).instgrm;
      instgrm?.Embeds.process();
    };

    const existing = document.querySelector(
      'script[src*="instagram.com/embed.js"]'
    );

    if (existing) {
      process();
      return () => {
        cancelled = true;
      };
    }

    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.onload = process;
    document.body.appendChild(script);

    return () => {
      cancelled = true;
    };
  }, [permalink]);

  return (
    <div
      className={`mx-auto w-full overflow-hidden rounded-2xl border bg-ivory p-2 ${
        compact
          ? "max-w-[300px] border-forest/10 lg:max-w-none"
          : "max-w-[340px] border-ivory/15 sm:max-w-[380px] lg:mx-0 lg:max-w-[400px]"
      }`}
    >
      <div
        className={`overflow-y-auto overscroll-contain rounded-xl scrollbar-hide ${
          compact
            ? "max-h-[min(55vh,420px)] sm:max-h-[380px] lg:max-h-[340px]"
            : "max-h-[min(72vh,560px)] sm:max-h-[min(68vh,520px)] lg:max-h-[480px]"
        }`}
      >
        <blockquote
          className="instagram-media !mx-auto !mb-0 !min-w-0"
          data-instgrm-captioned
          data-instgrm-permalink={permalink}
          data-instgrm-version="14"
          style={{
            background: "#FFF",
            border: 0,
            borderRadius: 3,
            margin: "0 auto",
            maxWidth: "100%",
            minWidth: 280,
            padding: 0,
            width: "100%",
          }}
        />
      </div>
    </div>
  );
}
