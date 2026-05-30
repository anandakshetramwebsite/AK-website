import { BRAND_VALUES } from "@/lib/constants";

export default function BrandValuesStrip() {
  return (
    <section
      aria-label="What Ananda Kshethram represents"
      className="border-y border-brand-gold/20 bg-linen-dark px-4 py-8 sm:px-6"
    >
      <div className="container-page text-center">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold">
          The Spirit of Ananda Kshethram
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
          {BRAND_VALUES.map((value, i) => (
            <span key={value} className="inline-flex items-center gap-3">
              <span className="font-serif text-sm italic text-forest sm:text-base">
                {value}
              </span>
              {i < BRAND_VALUES.length - 1 && (
                <span className="hidden text-brand-gold/40 sm:inline" aria-hidden>
                  ·
                </span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
