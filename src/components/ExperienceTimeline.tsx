import { experience, experienceIndex } from "@/content/experience";
import { Reveal } from "@/components/Reveal";

export function ExperienceTimeline() {
  return (
    <main className="editorial-grid px-8 pb-24 pt-16 tablet:px-16 tablet:pb-32 tablet:pt-24 desktop:px-24">
      <p className="hero-copy col-span-12 flex items-center gap-4 font-mono text-meta uppercase tracking-meta text-silver desktop:col-span-7 desktop:col-start-2">
        <span aria-hidden className="inline-block h-px w-8 bg-lavender-muted" />
        {experienceIndex.kicker}
      </p>
      <h1 className="hero-copy hero-copy-delay-1 col-span-12 mt-8 font-display font-medium text-h1 text-bone desktop:col-span-8 desktop:col-start-2">
        {experienceIndex.statement}
      </h1>
      <div className="hero-copy hero-copy-delay-2 col-span-12 mt-16 border-t border-graphite desktop:col-span-8 desktop:col-start-2" />

      <ol className="relative col-span-12 mt-16 border-l border-graphite pl-8 desktop:col-span-8 desktop:col-start-3 desktop:mt-24 desktop:pl-16">
        {experience.map((entry, index) => (
          <li key={entry.id} className="relative pb-24 last:pb-0">
            <span
              aria-hidden
              className="absolute top-3 -left-8 h-px w-4 bg-lavender-muted desktop:-left-16 desktop:w-8"
            />
            <Reveal delayMs={index * 70}>
              <p className="font-mono text-meta uppercase tracking-meta text-silver">
                {entry.dates}
              </p>
              <h2 className="mt-4 font-display text-h2 text-bone">
                {entry.role}
              </h2>
              <p className="mt-2 font-display text-h3 text-bone">
                {entry.company}
              </p>
              <p className="mt-4 font-mono text-meta uppercase tracking-meta text-silver">
                {entry.location}
              </p>
              <div className="mt-8 flex flex-col gap-6">
                {entry.summary.map((paragraph, paragraphIndex) => (
                  <p
                    key={paragraphIndex}
                    className="font-sans text-body text-silver"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </main>
  );
}
