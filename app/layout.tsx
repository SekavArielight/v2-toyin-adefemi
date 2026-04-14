import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Toyin Adefemi Counsels",
  description:
    "Biblical counseling for youth, young adults, and families rooted in trauma-informed, Scripture-centered care.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
