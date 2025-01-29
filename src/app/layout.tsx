"use client";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/nav";
import { Square, Tally1, X } from "lucide-react";
import Bar from "@/components/bar";
import Link from "next/link";
import { usePathname } from "next/navigation";

const myFont = localFont({
  src: [
    { path: "garet-font/Garet-Book.woff2", weight: "400" },
    { path: "garet-font/Garet-Heavy.woff2", weight: "700" },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="favicon.ico" />
        <link rel="icon" href="icon.png" />
        <link rel="apple-touch-icon" href="apple-icon.ico" />
      </head>
      <body className={` ${myFont.className} antialiased`}>
        <Nav />
        <div className="min-h-screen relative">
          <Bar />
          {pathname !== "/" && (
            <div className="flex items-center w-full justify-between p-1 bg-gray-100 border-b border-gray-200 shadow-md">
              <div></div>
              <h1 className="text-md font-bold text-gray-700"></h1>
              <div className="flex items-center text-gray-500 space-x-3">
                <Link href="/">
                  <h1 className="text-md font-bold bg-gray-200 p-1 -rotate-90 rounded-full">
                    <Tally1 size={16} />
                  </h1>
                </Link>
                <h1 className="text-md font-bold bg-gray-200 p-1 rounded-full">
                  <Square size={16} />
                </h1>
                <Link href="/">
                  <h1 className="text-md font-bold bg-gray-200 p-1 rounded-full">
                    <X size={16} />
                  </h1>
                </Link>
              </div>
            </div>
          )}
          {children}
          <footer className="invisible lg:visible absolute bottom-32 ml-2 lg:ml-32 items-center w-full lg:bottom-2 text-xs text-gray-500">
            <p>
              Copyright © 2025. Dev Club, in association with Faculty of
              Information and Communication Technology, Mahidol University. All
              rights reserved.
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
