import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/header/header";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { cn } from "@/lib/utils";
import Footer from "@/components/footer/footer";
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'

export const metadata: Metadata = {
  title: "asterisk/ui",
  description:
    "Beautiful animated components built with Next.js, Typescript, Tailwind CSS, and Framer Motion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className={cn("min-h-screen")}>
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
