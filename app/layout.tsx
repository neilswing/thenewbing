import type { Metadata } from "next";
import { Inter, Sacramento, Source_Code_Pro } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import AdSense from "./component/AdSenseScript";

const inter = Inter({ subsets: ["latin"] });
const scp = Source_Code_Pro({ subsets: ["latin"] });
const sacramento = Sacramento({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "BingBlong AI",
  description: "Generated by swing media",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <AdSense pId="ca-pub-4592814778191453"/>
      </head>
      <body className={scp.className}>{children}</body>
    </html>
  );
}
