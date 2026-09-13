import { site } from "./site";

export const contact = {
  kicker: "Contact / 04 / Correspondence",
  statement: "A note, a question, a brief.",
  lede: "Prefer email. The record below can be read here or taken with you.",
  emailLabel: "Email me",
  downloadLabel: "Download résumé",
  form: {
    name: "Name",
    email: "Email",
    message: "Message",
    submit: "Send",
    sending: "Sending",
    sent: "Sent. I will read it.",
    error: "The note could not be sent. Use email instead.",
  },
  resume: {
    href: "/resume/tim-pokanai-resume.pdf",
    downloadName: "Tim-Pokanai-Resume.pdf",
    loading: "Drawing the record…",
    failed: "The résumé could not be drawn here. Download the file instead.",
  },
  mailto: `mailto:${site.email}`,
} as const;
