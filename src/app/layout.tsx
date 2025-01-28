import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "./nav";

const myFont = localFont({
  src: [
    { path: "garet-font/Garet-Book.woff2", weight: "400" },
    { path: "garet-font/Garet-Heavy.woff2", weight: "700" },
  ],
});

export const metadata: Metadata = {
  title: "ICTPC | Desktop",
  description: "ICTxDST Sport Games 2025 Programming Competition",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="favicon.ico" />
        <link rel="icon" href="icon.png" />
        <link rel="apple-touch-icon" href="apple-icon.ico" />
      </head>
      <body className={` ${myFont.className} antialiased`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
