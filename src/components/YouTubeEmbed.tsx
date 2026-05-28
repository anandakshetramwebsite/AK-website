type Props = {
  videoId: string;
  title: string;
};

export default function YouTubeEmbed({ videoId, title }: Props) {
  return (
    <div className="overflow-hidden rounded-2xl border border-brand-crimson/15 bg-midnight-crimson/5 shadow-lg">
      <div className="relative aspect-video w-full">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
          loading="lazy"
        />
      </div>
      <p className="px-4 py-3 text-sm font-medium text-midnight-crimson/80">{title}</p>
    </div>
  );
}
