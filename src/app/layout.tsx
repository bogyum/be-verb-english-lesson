import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Be동사 vs 일반동사 영어 문법 수업",
  description: "Next.js, TypeScript, Framer Motion으로 구현된 인터랙티브 영어 문법 교육 애플리케이션",
  keywords: ["영어", "문법", "Be동사", "일반동사", "교육", "인터랙티브"],
  authors: [{ name: "김보겸" }],
  creator: "김보겸",
  publisher: "김보겸",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://bogyum.github.io'),
  alternates: {
    canonical: '/be-verb-english-lesson',
  },
  openGraph: {
    title: "Be동사 vs 일반동사 영어 문법 수업",
    description: "인터랙티브 영어 문법 교육 애플리케이션",
    url: 'https://bogyum.github.io/be-verb-english-lesson',
    siteName: 'Be동사 vs 일반동사 수업',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Be동사 vs 일반동사 영어 문법 수업",
    description: "인터랙티브 영어 문법 교육 애플리케이션",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
