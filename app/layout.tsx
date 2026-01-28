import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bayside Graphics | Free Mockup by Ryan Cwynar",
  description: "A free website redesign mockup for Bayside Graphics, Coral Springs' trusted printing partner since 1994. Created by Ryan Cwynar.",
  authors: [{ name: "Ryan Cwynar", url: "https://ryancwynar.com" }],
  creator: "Ryan Cwynar",
  publisher: "Byldr",
  robots: "noindex, nofollow",
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><linearGradient id='g' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' style='stop-color:%230066cc'/><stop offset='100%' style='stop-color:%23ff6b35'/></linearGradient></defs><rect fill='url(%23g)' width='100' height='100' rx='15'/><text x='50' y='68' text-anchor='middle' font-size='50' fill='white' font-family='system-ui' font-weight='bold'>BG</text></svg>",
        type: "image/svg+xml",
      },
    ],
  },
  openGraph: {
    title: "Bayside Graphics | Free Mockup",
    description: "A free website redesign mockup created by Ryan Cwynar",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
