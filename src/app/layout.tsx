import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
// app/layout.tsx
import Analytics from "./components/Analytics";

const notoSansJP = Noto_Sans_JP({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "Growbase Lab - プログラミングスクール",
  description:
    "Growbase Labは、未経験からエンジニアを目指す方のためのプログラミングスクールです。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={notoSansJP.variable}>
      <Analytics />
      <body className="min-h-screen bg-[#111111] text-white">
        <main className="relative overflow-hidden">{children}</main>
      </body>
    </html>
  );
}
