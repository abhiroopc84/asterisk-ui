import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "@/styles/globals.css";
import Header from "../components/header/header";
import { ThemeProvider } from "../components/theme/theme-provider";
import { cn } from "@/lib/utils";
import Footer from "@/components/footer/footer";

const jetbrains_mono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "norm/ui",
  description:
    "Beautiful animated components built with Next.js, Typescript, Tailwind CSS, and Framer Motion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen", jetbrains_mono.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col relative">
            <Header />
            <div className="flex-1 h-[calc(100vh-4rem)]">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
