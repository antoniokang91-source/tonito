import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TONITO — WE PICK DIFFERENT",
  description: "새로운 피클의 문화를 쓰다.",
  openGraph: {
    title: "TONITO — WE PICK DIFFERENT",
    description: "멕시코 스타일의 아삭한 피클을 만드는 브랜드, TONITO입니다.",
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
        {/* English display font */}
        <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Anton:wght@400&display=swap" />
        {/* English body fonts */}
        <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;700&family=Space+Mono:wght@400;700&display=swap" />
        {/* Korean fonts */}
        <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap" />
        <link href="https://fonts.googleapis.com/css2?family=Anton:wght@400&family=Hanken+Grotesk:wght@400;500;700&family=Space+Mono:wght@400;700&family=Noto+Sans+KR:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
