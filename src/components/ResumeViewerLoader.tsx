"use client";

import dynamic from "next/dynamic";
import { contact } from "@/content/contact";

const ResumeViewer = dynamic(
  () =>
    import("@/components/ResumeViewer").then((module) => module.ResumeViewer),
  {
    ssr: false,
    loading: () => (
      <p className="font-mono text-meta uppercase tracking-meta text-silver">
        {contact.resume.loading}
      </p>
    ),
  },
);

export function ResumeViewerLoader() {
  return <ResumeViewer />;
}
