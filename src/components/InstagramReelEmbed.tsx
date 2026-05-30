"use client";

import { useEffect } from "react";

type Props = {
  permalink: string;
};

export default function InstagramReelEmbed({ permalink }: Props) {
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
    <div className="flex justify-center overflow-hidden rounded-2xl border border-brand-crimson/15 bg-ivory p-2">
      <blockquote
        className="instagram-media"
        data-instgrm-captioned
        data-instgrm-permalink={permalink}
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: 0,
          borderRadius: 3,
          margin: 1,
          maxWidth: 540,
          minWidth: 326,
          padding: 0,
          width: "99.375%",
        }}
      />
    </div>
  );
}
