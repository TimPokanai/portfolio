import { about } from "@/content/about";
import { Reveal } from "@/components/Reveal";
import { withBasePath } from "@/lib/paths";

function AboutFigure() {
  return (
    <figure className="relative aspect-[3/4] overflow-hidden border border-graphite bg-charcoal">
      <img
        src={withBasePath(about.figure.src)}
        alt={about.figure.alt}
        className="absolute inset-0 h-full w-full object-cover object-top grayscale contrast-125"
      />
      <div className="hero-grain pointer-events-none absolute inset-0 opacity-[0.07]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-obsidian/75 to-transparent" />
      <figcaption className="absolute bottom-6 left-6 font-mono text-meta uppercase tracking-meta text-silver">
        {about.figure.caption}
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
