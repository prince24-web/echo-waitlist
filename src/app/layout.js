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

export const metadata = {
  title: "Echo – Vibe-First Marketing for Founders",
   icons: {
    icon: "/icon1.png",
  },
  description:
    "Echo helps modern founders automate content without losing their voice. Build in public, post with purpose, and never sound cringe.",
  metadataBase: new URL("https://echo-waitlist.vercel.app"), // update with your actual domain
  openGraph: {
    title: "Echo – Vibe-First Marketing for Founders",
    description:
      "Automate content, not your personality. Echo helps you stay visible, consistent, and authentic online.",
    url: "https://echo-waitlist.vercel.app",
    siteName: "Echo",
    images: [
      {
        url: "/preview.png", // make sure this exists in your public folder
        width: 1200,
        height: 630,
        alt: "Echo – Vibe-First Marketing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Echo – Vibe-First Marketing for Founders",
    description:
      "Marketing that sounds like you. Echo helps you build online without burnout or cringe posts.",
    images: ["/preview.png"],
    creator: "@pceegalaxy", // optional: your Twitter handle
  },
  keywords: [
    "Echo",
    "marketing automation",
    "content tool",
    "founder tools",
    "build in public",
    "Twitter automation",
    "startup marketing",
    "vibe-first marketing",
  ],
  authors: [{ name: "Code Monarch" }],
  creator: "Code Monarch",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
