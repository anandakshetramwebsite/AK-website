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

  if (isForest) {
    return (
      <section id="videos" className="section-pad bg-linen-dark">
        <div className="container-page">
          <div className="grid items-start gap-8 lg:grid-cols-[1fr_300px] lg:gap-10 xl:grid-cols-[1fr_320px]">
            <div className="text-center lg:text-left">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">
                @anandakshethram · Agri Tourism Hyderabad
              </p>
              <h2 className="heading-section mt-3 text-forest">
                {media.sectionTitle}
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-forest/70 sm:text-base lg:mx-0">
                {media.instagram.note}
              </p>

              <SocialLinks
                media={media}
                tone="light"
                className="mt-6 justify-center lg:justify-start"
              />
            </div>

            <div className="mx-auto w-full max-w-[300px] lg:mx-0 lg:max-w-none lg:justify-self-end">
              <InstagramReelEmbed
                permalink={media.instagram.reelUrl}
                compact
              />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="videos" className="section-pad bg-warm-cream">
      <div className="container-page">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-brand-gold">
            Watch & Follow
          </p>
          <h2 className="heading-section mt-3 text-brand-crimson">
            {media.sectionTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-midnight-crimson/80">
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
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="font-serif text-2xl text-brand-crimson">
              {media.instagram.headline}
            </h3>
            <p className="mt-2 text-sm text-midnight-crimson/80">
              {media.instagram.note}
            </p>
          </div>

          <div className="mt-6 grid gap-6 sm:mt-8 sm:gap-8 lg:grid-cols-2 lg:items-start">
            <InstagramReelEmbed permalink={media.instagram.reelUrl} />
            <div className="flex flex-col justify-center gap-4">
              <SocialLinks
                media={media}
                tone="light"
                className="justify-center lg:justify-start"
              />
              <div className="flex flex-col gap-3">
                <a
                  href={media.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center text-sm font-semibold text-brand-crimson hover:text-brand-gold lg:text-left"
                >
                  Follow on Instagram
                </a>
                <a
                  href={media.social.youtubeChannel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center text-sm font-semibold text-brand-crimson hover:text-brand-gold lg:text-left"
                >
                  Subscribe on YouTube
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
