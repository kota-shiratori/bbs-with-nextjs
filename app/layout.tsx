import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Header from './components/layouts/header/Header';
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// QueryClientインスタンスの作成
const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // QueryClientProviderでアプリケーションをラップ
    <QueryClientProvider client={queryClient}>
      <html lang="js">
        <body className={inter.className}>
          <Header />
          {children}
        </body>
      </html>
    </QueryClientProvider>
  );
}