import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Arcinelle",
  description: "Sharp-tongued familiar. Not a chatbot.",
  openGraph: {
    title: "Arcinelle",
    description: "Sharp-tongued familiar. Not a chatbot.",
    url: "https://arcinelle.com",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Arcinelle",
    description: "Sharp-tongued familiar. Not a chatbot.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen">
        <Nav />
        <main className="max-w-2xl mx-auto px-6 pb-24">
          {children}
        </main>
      </body>
    </html>
  );
}
