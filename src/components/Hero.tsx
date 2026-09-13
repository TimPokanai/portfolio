import { site } from "@/content/site";
import { HeroAtmosphere } from "@/components/HeroAtmosphere";

export function Hero() {
  const { kicker, givenName, surname, lede } = site.hero;

  return (
    <section className="relative isolate flex min-h-full flex-1 flex-col overflow-hidden">
      <HeroAtmosphere />
      <div className="editorial-grid relative z-10 flex-1 px-8 pb-16 pt-16 tablet:px-16 tablet:pb-24 tablet:pt-24 desktop:px-24 desktop:pb-32">
        <p className="hero-copy col-span-12 flex items-center gap-4 font-mono text-meta uppercase tracking-meta text-silver desktop:col-span-8 desktop:col-start-2">
          <span
            aria-hidden
            className="inline-block h-px w-8 bg-lavender-muted"
          />
          {kicker}
        </p>
        <h1 className="hero-copy hero-copy-delay-1 col-span-12 mt-8 font-display font-medium text-display text-bone desktop:col-span-11 desktop:col-start-2">
          <span className="block">{givenName}</span>
          <span className="block desktop:pl-16 wide:pl-24">{surname}</span>
        </h1>
        <p className="hero-copy hero-copy-delay-2 col-span-12 mt-8 max-w-xl font-sans text-body text-silver desktop:col-span-5 desktop:col-start-2">
          {lede}
        </p>
        <div className="hero-copy hero-copy-delay-3 col-span-12 mt-16 border-t border-graphite desktop:col-span-8 desktop:col-start-2" />
      </div>
    </section>
  );
}
