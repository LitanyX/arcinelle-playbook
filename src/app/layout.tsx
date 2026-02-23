import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Arcinelle Playbook",
  description: "How to turn an AI into an autonomous employee — from zero to its first dollar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0f] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
