import { about } from "@/content/about";
import { Reveal } from "@/components/Reveal";

function AboutFigure() {
  return (
    <figure className="relative aspect-[3/4] overflow-hidden border border-graphite bg-charcoal">
      <div className="about-figure-mesh absolute inset-0" />
      <div className="hero-grain absolute inset-0 opacity-[0.07]" />
      <svg
        aria-hidden
        viewBox="0 0 200 320"
        className="absolute inset-0 h-full w-full text-silver/40"
      >
        <path
          d="M36 304 V148 C36 64 68 28 100 28 C132 28 164 64 164 148 V304"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.6"
        />
        <path
          d="M100 28 V304"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.4"
          opacity="0.35"
        />
      </svg>
      <figcaption className="absolute bottom-6 left-6 font-mono text-meta uppercase tracking-meta text-silver">
        {about.figureCaption}
      </figcaption>
    </figure>
  );
}

export function About() {
  return (
    <main className="editorial-grid px-8 pb-24 pt-16 tablet:px-16 tablet:pb-32 tablet:pt-24 desktop:px-24">
      <p className="hero-copy col-span-12 flex items-center gap-4 font-mono text-meta uppercase tracking-meta text-silver desktop:col-span-7 desktop:col-start-2">
        <span aria-hidden className="inline-block h-px w-8 bg-lavender-muted" />
        {about.kicker}
      </p>
      <h1 className="hero-copy hero-copy-delay-1 col-span-12 mt-8 font-display font-medium text-h1 text-bone desktop:col-span-8 desktop:col-start-2">
        {about.statement}
      </h1>
      <div className="hero-copy hero-copy-delay-2 col-span-12 mt-16 border-t border-graphite desktop:col-span-8 desktop:col-start-2" />

      <Reveal className="col-span-12 mt-16 desktop:col-span-5 desktop:col-start-2 desktop:mt-24">
        <div className="flex flex-col gap-8">
          {about.body.map((paragraph, index) => (
            <p key={index} className="font-sans text-body text-silver">
              {paragraph}
            </p>
          ))}
        </div>
      </Reveal>
      <Reveal
        className="col-span-12 mt-16 desktop:col-span-4 desktop:col-start-8 desktop:mt-24"
        delayMs={80}
      >
        <AboutFigure />
      </Reveal>

      <div className="col-span-12 mt-24 border-t border-graphite desktop:col-span-8 desktop:col-start-2 desktop:mt-32" />

      <Reveal className="col-span-12 mt-16 desktop:col-span-3 desktop:col-start-2">
        <p className="font-mono text-meta uppercase tracking-meta text-lavender-muted">
          {about.approachLabel}
        </p>
      </Reveal>
      <Reveal className="col-span-12 mt-8 desktop:col-span-6 desktop:col-start-5 desktop:mt-16">
        <div className="flex flex-col gap-8">
          {about.approach.map((paragraph, index) => (
            <p key={index} className="font-sans text-body text-silver">
              {paragraph}
            </p>
          ))}
        </div>
      </Reveal>

      <Reveal className="col-span-12 mt-24 desktop:col-span-7 desktop:col-start-5 desktop:mt-32">
        <blockquote className="font-display text-h2 text-bone">
          {about.pullQuote}
        </blockquote>
      </Reveal>
    </main>
  );
}
