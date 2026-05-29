import Link from "next/link";
import type { SiteContent } from "@/lib/cms/types";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import InstagramReelEmbed from "@/components/InstagramReelEmbed";
import SocialLinks from "@/components/SocialLinks";

type Props = {
  media: SiteContent["media"];
  variant?: "crimson" | "forest";
  hideVideos?: boolean;
};

export default function MediaShowcase({
  media,
  variant = "crimson",
  hideVideos = false,
}: Props) {
  const isForest = variant === "forest";

  return (
    <section
      id="videos"
      className={
        isForest
          ? "bg-linen-dark py-24"
          : "brand-section-spacing bg-warm-cream"
      }
    >
      <div className={isForest ? "mx-auto max-w-7xl px-6" : "brand-container"}>
        <div className="text-center">
          <p
            className={
              isForest
                ? "text-sm font-semibold uppercase tracking-[0.2em] text-mango"
                : "text-xs uppercase tracking-[0.2em] text-brand-gold"
            }
          >
            Watch & Follow
          </p>
          <h2
            className={
              isForest
                ? "mt-3 font-serif text-4xl font-bold text-forest md:text-5xl"
                : "mt-3 font-serif text-3xl text-brand-crimson md:text-5xl"
            }
          >
            {media.sectionTitle}
          </h2>
          <p
            className={
              isForest
                ? "mx-auto mt-4 max-w-2xl text-forest/70"
                : "mx-auto mt-4 max-w-2xl text-midnight-crimson/80"
            }
          >
            {media.sectionSubtitle}
          </p>
        </div>

        {!hideVideos && (
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {media.youtubeVideos.map((video) => (
              <YouTubeEmbed key={video.id} videoId={video.id} title={video.title} />
            ))}
          </div>
        )}

        <div className={hideVideos ? "mt-6" : "mt-12"}>
          <h3
            className={
              isForest
                ? "text-center font-serif text-2xl text-forest"
                : "text-center font-serif text-2xl text-brand-crimson"
            }
          >
            {media.instagram.headline}
          </h3>
          <p
            className={
              isForest
                ? "mt-2 text-center text-sm text-forest/70"
                : "mt-2 text-center text-sm text-midnight-crimson/80"
            }
          >
            {media.instagram.note}
          </p>
          <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:items-start">
            <InstagramReelEmbed permalink={media.instagram.reelUrl} />
            <div className="flex flex-col justify-center gap-4">
              <SocialLinks media={media} className="justify-center lg:justify-start" />
              <a
                href={media.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  isForest
                    ? "text-center text-sm font-semibold text-forest hover:text-mango lg:text-left"
                    : "text-center text-sm font-semibold text-brand-crimson hover:text-brand-gold lg:text-left"
                }
              >
                Follow @anandakshethram on Instagram →
              </a>
              <a
                href={media.social.youtubeChannel}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  isForest
                    ? "text-center text-sm font-semibold text-forest hover:text-mango lg:text-left"
                    : "text-center text-sm font-semibold text-brand-crimson hover:text-brand-gold lg:text-left"
                }
              >
                Subscribe on YouTube →
              </a>
            </div>
          </div>
        </div>

        {!isForest && (
          <p className="mt-8 text-center text-sm text-midnight-crimson/60">
            <Link href="/gallery" className="underline hover:text-brand-gold">
              View gallery
            </Link>{" "}
            for more moments from the farm.
          </p>
        )}
      </div>
    </section>
  );
}
