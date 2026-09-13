"use client";

import { FormEvent, useState } from "react";
import { contact } from "@/content/contact";
import { site } from "@/content/site";

const fieldClassName =
  "mt-2 w-full resize-none border-0 border-b border-graphite bg-transparent py-2 font-sans text-body text-bone placeholder:text-silver/40 rounded-none transition-colors duration-500 ease-out focus:border-lavender-muted focus:outline-none";

const labelClassName =
  "font-mono text-meta uppercase tracking-meta text-silver";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !message) {
      return;
    }

    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

    if (!formspreeId) {
      const subject = encodeURIComponent(`Portfolio — ${name}`);
      const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
      const mailbox = document.createElement("a");
      mailbox.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      mailbox.click();
      setStatus("sent");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) {
        throw new Error("Formspree rejected the note");
      }

      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-8">
      <label className="block">
        <span className={labelClassName}>{contact.form.name}</span>
        <input
          required
          type="text"
          name="name"
          autoComplete="name"
          className={fieldClassName}
        />
      </label>
      <label className="block">
        <span className={labelClassName}>{contact.form.email}</span>
        <input
          required
          type="email"
          name="email"
          autoComplete="email"
          className={fieldClassName}
        />
      </label>
      <label className="block">
        <span className={labelClassName}>{contact.form.message}</span>
        <textarea
          required
          name="message"
          rows={5}
          className={fieldClassName}
        />
      </label>
      <div className="flex flex-wrap items-baseline gap-8">
        <button
          type="submit"
          disabled={status === "sending"}
          className="border-0 border-b border-graphite bg-transparent pb-1 font-sans text-body text-bone transition-colors duration-500 ease-out hover:border-lavender-muted hover:text-lavender-muted disabled:cursor-wait disabled:text-silver"
        >
          {status === "sending" ? contact.form.sending : contact.form.submit}
        </button>
        {status === "sent" ? (
          <p className="font-mono text-meta uppercase tracking-meta text-silver">
            {contact.form.sent}
          </p>
        ) : null}
        {status === "error" ? (
          <p className="font-mono text-meta uppercase tracking-meta text-silver">
            {contact.form.error}{" "}
            <a
              href={contact.mailto}
              className="text-lavender-muted transition-colors duration-500 ease-out hover:text-bone"
            >
              {site.email}
            </a>
          </p>
        ) : null}
      </div>
    </form>
  );
}
