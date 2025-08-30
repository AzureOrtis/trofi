import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trofi - Restaurant Leftover App",
  description: "Find restaurants and leftover food information",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
