import { contact } from "@/content/contact";
import { site } from "@/content/site";
import { ContactForm } from "@/components/ContactForm";
import { ResumeViewerLoader } from "@/components/ResumeViewerLoader";
import { Reveal } from "@/components/Reveal";

export function Contact() {
  return (
    <main className="editorial-grid px-8 pb-24 pt-16 tablet:px-16 tablet:pb-32 tablet:pt-24 desktop:px-24">
      <p className="hero-copy col-span-12 flex items-center gap-4 font-mono text-meta uppercase tracking-meta text-silver desktop:col-span-7 desktop:col-start-2">
        <span aria-hidden className="inline-block h-px w-8 bg-lavender-muted" />
        {contact.kicker}
      </p>
      <h1 className="hero-copy hero-copy-delay-1 col-span-12 mt-8 font-display font-medium text-h1 text-bone desktop:col-span-8 desktop:col-start-2">
        {contact.statement}
      </h1>
      <div className="hero-copy hero-copy-delay-2 col-span-12 mt-16 border-t border-graphite desktop:col-span-8 desktop:col-start-2" />

      <Reveal className="col-span-12 mt-16 desktop:col-span-4 desktop:col-start-2 desktop:mt-24">
        <p className="font-sans text-body text-silver">{contact.lede}</p>
        <a
          href={contact.mailto}
          className="mt-8 inline-block font-mono text-meta tracking-wide text-lavender-muted transition-colors duration-500 ease-out hover:text-bone"
        >
          {site.email}
        </a>
      </Reveal>
      <Reveal
        className="col-span-12 mt-16 desktop:col-span-5 desktop:col-start-7 desktop:mt-24"
        delayMs={80}
      >
        <ContactForm />
      </Reveal>

      <div className="col-span-12 mt-24 border-t border-graphite desktop:col-span-10 desktop:col-start-2 desktop:mt-32" />

      <Reveal className="col-span-12 mt-16 desktop:col-span-10 desktop:col-start-2 desktop:mt-24">
        <ResumeViewerLoader />
      </Reveal>
    </main>
  );
}
