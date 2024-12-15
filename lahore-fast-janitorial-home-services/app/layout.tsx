import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title:
    "Lahore Fast Janitorial Home Services - Professional Home Cleaning Services",
  description:
    "Professional home cleaning services tailored to your needs. Book your cleaning service today and experience the difference.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="selection:bg-blue-300/70   selection:text-blue-700">
        <ThemeProvider attribute="class" defaultTheme="light">
          <Navigation />
          <main className="min-h-screen ">{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
