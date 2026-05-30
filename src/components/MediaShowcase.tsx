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
        isForest ? "section-pad bg-linen-dark" : "section-pad bg-warm-cream"
      }
    >
      <div className="container-page">
        <div className="text-center">
          <p
            className={
              isForest
                ? "text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold"
                : "text-xs uppercase tracking-[0.2em] text-brand-gold"
            }
          >
            {isForest ? "From the Farm" : "Watch & Follow"}
          </p>
          <h2
            className={
              isForest
                ? "heading-section mt-3 text-forest"
                : "heading-section mt-3 text-brand-crimson"
            }
          >
            {isForest ? "Moments Worth Sharing" : media.sectionTitle}
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

        <div
          className={
            isForest
              ? "mt-10 rounded-2xl bg-forest-green px-4 py-10 text-ivory sm:mt-12 sm:rounded-3xl sm:px-6 sm:py-12 md:px-10"
              : hideVideos
                ? "mt-6"
                : "mt-12"
          }
        >
          <p
            className={
              isForest
                ? "text-center text-xs uppercase tracking-[0.22em] text-brand-gold"
                : undefined
            }
          >
            {isForest ? "@anandakshethram" : null}
          </p>
          <h3
            className={
              isForest
                ? "mt-2 text-center font-serif text-2xl font-light italic text-ivory sm:text-3xl md:text-4xl"
                : "text-center font-serif text-2xl text-brand-crimson"
            }
          >
            {isForest ? media.sectionTitle : media.instagram.headline}
          </h3>
          <p
            className={
              isForest
                ? "mt-2 text-center text-sm text-ivory/75"
                : "mt-2 text-center text-sm text-midnight-crimson/80"
            }
          >
            {media.instagram.note}
          </p>
          <div className="mt-6 grid gap-6 sm:mt-8 sm:gap-8 lg:grid-cols-2 lg:items-start">
            <InstagramReelEmbed permalink={media.instagram.reelUrl} />
            <div className="flex flex-col justify-center gap-4">
              <SocialLinks media={media} className="justify-center lg:justify-start" />
              <a
                href={media.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  isForest
                    ? "text-center text-sm font-semibold text-ivory hover:text-brand-gold lg:text-left"
                    : "text-center text-sm font-semibold text-brand-crimson hover:text-brand-gold lg:text-left"
                }
              >
                Follow @anandakshethram →
              </a>
              <a
                href={media.social.youtubeChannel}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  isForest
                    ? "text-center text-sm font-semibold text-ivory/90 hover:text-brand-gold lg:text-left"
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
