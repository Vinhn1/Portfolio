import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

// Cấu hình font Geist Sans cho text thường
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Cấu hình font Geist Mono cho code/monospace text
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata cho SEO và thông tin trang web
export const metadata: Metadata = {
  title: "Adrian's Portfolio",
  description: "Modern & Minimalist JS Mastery Portfolio",
};

/**
 * RootLayout - Layout gốc của ứng dụng Next.js
 * Chức năng: 
 * - Thiết lập cấu trúc HTML cơ bản
 * - Cấu hình font chữ
 * - Thiết lập ThemeProvider cho dark/light mode
 * - Xử lý hydration warning
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {/* ThemeProvider: Quản lý theme dark/light mode */}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
