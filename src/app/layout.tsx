import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TONITO Pickle — PICK DIFFERENT",
  description: "멕시코 8년, 한국 재료로 담다. 갓 담은 신선함을 냉장 코너에서 만나요.",
  openGraph: {
    title: "TONITO Pickle — PICK DIFFERENT",
    description: "갓 담은 신선함 · 냉장 생 피클 · 오직 국산 재료",
    type: "website",
  },
  other: {
    "naver-site-verification": [
      "cd15aca3a3b0e621f7d5aaf2899fcc197bc61523",
      "0fa772ea3e6027e7611d384824f88a776fde8cdd",
    ],
    "google-site-verification": "nO7Ob0C8EgDECc9f5LdIN-CzRAuE8or0cYokmS1OGak",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Hanken+Grotesk:wght@400;500;700&family=Space+Mono:ital,wght@0,400;0,700&family=Noto+Sans+KR:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
