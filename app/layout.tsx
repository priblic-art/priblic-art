import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Noto_Serif_KR } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const notoSerifKR = Noto_Serif_KR({
  variable: "--font-kr-serif",
  weight: ["300", "400", "500", "700"],
  preload: false,
});

export const metadata: Metadata = {
  title: "Priblic Art — 장비치",
  description:
    "장비치는 '나'를 말하는 일이 '우리'를 만드는 일임을 증명하는 자리를 만든다",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={`${geist.variable} ${notoSerifKR.variable}`}>
      <body className="bg-[#0a0a0a] text-[#f0ede8] min-h-screen font-sans">
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6">
          <Link
            href="/"
            className="text-xs tracking-[0.3em] uppercase hover:opacity-60 transition-opacity"
          >
            priblic art
          </Link>
          <div className="flex gap-8 text-xs tracking-widest text-stone-500">
            <Link href="/work" className="hover:text-[#f0ede8] transition-colors">
              작업
            </Link>
            <Link href="/shop" className="hover:text-[#f0ede8] transition-colors">
              상점
            </Link>
            <Link href="/about" className="hover:text-[#f0ede8] transition-colors">
              소개
            </Link>
            <Link href="/contact" className="hover:text-[#f0ede8] transition-colors">
              연락
            </Link>
          </div>
        </nav>
        {children}
        <footer className="px-8 py-10 border-t border-stone-900 flex items-center justify-between text-xs text-stone-700">
          <span>© 2026 priblic art — 장비치</span>
          <span>priblic = private + public</span>
        </footer>
      </body>
    </html>
  );
}
