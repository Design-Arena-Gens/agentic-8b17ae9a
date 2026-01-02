import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";
import "./globals.css";

const inconsolata = Inconsolata({
  subsets: ["latin"],
  variable: "--font-inconsolata"
});

export const metadata: Metadata = {
  title: "Allagash Disappearance Case Series",
  description:
    "Evidence-first series naming for the Allagash wilderness disappearance investigation."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inconsolata.variable}>
      <body>{children}</body>
    </html>
  );
}
