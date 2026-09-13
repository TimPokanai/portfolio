import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { fontVariables } from "@/theme/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Tim Pokanai",
    template: "%s · Tim Pokanai",
  },
  description: "Software and data systems.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fontVariables} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-obsidian font-sans text-bone">
        <Nav />
        <div className="flex min-h-full flex-1 flex-col pt-32">
          <div className="flex flex-1 flex-col">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
