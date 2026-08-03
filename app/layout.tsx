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
  title: "Indrajeet Khatarkar | Software Engineer",
  description:
    "Portfolio of Indrajeet Khatarkar - Software Engineer skilled in Java, Selenium Automation, AWS Cloud, SQL and DevOps practices.",
  keywords: [
    "Indrajeet Khatarkar",
    "Software Engineer",
    "Java Developer",
    "Selenium Automation",
    "AWS Cloud",
    "QA Engineer",
    "DevOps",
  ],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}