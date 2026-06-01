import ActivitiesHighlight from "@/components/ActivitiesHighlight";
import FarmActivities from "@/components/FarmActivities";
import SectionEnquiryBar from "@/components/SectionEnquiryBar";

const REVIEW_ACTIVITIES = [
  "Farm Train Ride",
  "Bullock Cart Ride",
  "Village Pond",
  "Mud Bath",
  "60+ Village Games",
  "Box Cricket",
  "Nature Walks",
  "Campfire Experiences",
  "Goushala Experience",
  "Seasonal Activities & Festivals",
];

/** Single activities block — shared header, visual highlights + full list below */
export default function ActivitiesSection() {
  return (
    <div id="activities" className="scroll-mt-20 bg-warm-cream">
      <div className="container-page px-4 pb-4 pt-14 text-center sm:px-6 sm:pt-16 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">
          Activities &amp; Experiences
        </p>
        <h2 className="heading-section mt-3 text-forest">
          The Heart of Every Visit
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-forest/70 sm:text-base">
          Activities are one of the strongest reasons guests choose Ananda
          Kshethram — farm train rides, bullock carts, village games, mud baths,
          campfires, and goushala rituals across 60+ experiences.
        </p>
        <div className="mx-auto mt-5 flex max-w-3xl flex-wrap justify-center gap-1.5">
          {REVIEW_ACTIVITIES.map((name) => (
            <span
              key={name}
              className="rounded-full border border-forest/10 bg-ivory px-2.5 py-1 text-[10px] font-medium text-forest/70 sm:text-[11px]"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
      <ActivitiesHighlight embedded />
      <FarmActivities embedded />
      <div className="container-page pb-12">
        <SectionEnquiryBar
          actions={["enquire"]}
          waText="Hi, I want to know more about activities at Ananda Kshethram"
          compact
        />
      </div>
    </div>
  );
}
