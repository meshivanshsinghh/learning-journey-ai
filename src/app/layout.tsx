import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Lexend } from "next/font/google";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import { Provider } from "@/components/Providers";
const lexend = Lexend({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Learning Journey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(lexend.className, "antialiased min-h-screen pt-16")}>
        <Provider>
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
