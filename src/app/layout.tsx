import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anushka Bakrewal",
  description: "Fashion Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
