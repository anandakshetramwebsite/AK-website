"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getFarmShareWhatsAppUrl, SITE_URL } from "@/lib/constants";

/** 🥭 + SHARE stacked in one grid cell so the label sits on the fruit */
function MangoShareIcon() {
  return (
    <span className="relative inline-grid shrink-0 place-items-center">
      <span className="col-start-1 row-start-1 flex items-center justify-center leading-none">
        <span
          className="inline-block rotate-45 text-[5.5rem] drop-shadow-[0_4px_12px_rgba(0,0,0,0.35)] sm:text-[6rem]"
          aria-hidden
        >
          🥭
        </span>
      </span>

      <span className="col-start-1 row-start-1 flex items-center justify-center">
        <span className="share-label-flash">
          <span className="share-label-stroke block text-[11px] font-black uppercase leading-none sm:text-[13px]">
            SHARE
          </span>
          <span className="share-label-shine" aria-hidden>
            <span className="share-label-shine-bar" />
          </span>
        </span>
      </span>
    </span>
  );
}

export default function ShareMangoFloater() {
  const [shareHref, setShareHref] = useState(() =>
    getFarmShareWhatsAppUrl(SITE_URL)
  );
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setShareHref(getFarmShareWhatsAppUrl(window.location.origin));
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReducedMotion(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const motionProps = reducedMotion
    ? {}
    : {
        animate: {
          y: [0, 10, 0],
          x: [0, 5, 0],
        },
        transition: {
          duration: 4.2,
          repeat: Infinity,
          ease: "easeInOut" as const,
        },
      };

  return (
    <motion.a
      href={shareHref}
      target="_blank"
      rel="noopener noreferrer"
      {...motionProps}
      className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-[max(0.75rem,env(safe-area-inset-right))] z-40 flex items-center justify-center touch-manipulation"
      aria-label="Share Ananda Kshethram with a friend on WhatsApp"
      title="Share on WhatsApp"
    >
      <MangoShareIcon />
    </motion.a>
  );
}
