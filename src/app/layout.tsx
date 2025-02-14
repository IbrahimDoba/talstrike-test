import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Import Inter font
import "./globals.css";


const inter = Inter({
  subsets: ["latin"], 
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "TaleStrike Take Home Test",
  description: "Tiktok home feed",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}