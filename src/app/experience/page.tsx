import type { Metadata } from "next";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";

export const metadata: Metadata = {
  title: "Experience",
};

export default function ExperiencePage() {
  return <ExperienceTimeline />;
}
