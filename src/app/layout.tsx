import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hệ thống thi trắc nghiệm",
  description: "Ứng dụng tạo câu hỏi trắc nghiệm, tổ chức thi và quản lý kết quả thi. Cung cấp nhiều loại câu hỏi cho người dùng với các tính năng quản lý dễ dàng.",
  keywords: "trắc nghiệm, thi trực tuyến, quản lý câu hỏi, hệ thống thi, ứng dụng thi, multiple choice, quản lý kết quả thi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
