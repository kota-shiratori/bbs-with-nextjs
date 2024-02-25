import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/layouts/header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BBS with Next.js14",
  description: "Next.js14で掲示板Webアプリケーションを作成",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="js">
      <body className={inter.className}>
        <Header />
        {children}
        </body>
    </html>
  );
}
