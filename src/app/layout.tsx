import type { Metadata } from "next";
import { Space_Grotesk, Orbitron } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });
const orbitron = Orbitron({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NOVA",
  description: "Coming Soon",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${orbitron.className} bg-black`}>
        {children}
      </body>
    </html>
  );
}
