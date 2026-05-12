import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Finance Website | Trust-first financial intelligence",
  description:
    "A trust-first financial intelligence platform for learning markets, companies, investing concepts, and personal finance.",
  metadataBase: new URL("https://example.com")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-surface font-sans antialiased">{children}</body>
    </html>
  );
}
