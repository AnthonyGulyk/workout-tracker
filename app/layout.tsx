import { ThemeSwitcher } from "@/components/theme-switcher";
import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Workout Tracker",
  description: "Track your fitness journey and achieve your goals",
};

const geistSans = Geist({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geistSans.className} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-background text-foreground">
            <nav className="border-b">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                  <div className="flex items-center">
                    <Link href="/" className="font-bold text-xl">
                      Workout Tracker
                    </Link>
                  </div>
                  <div className="flex items-center gap-4">
                    <ThemeSwitcher />
                    {/* We'll add auth buttons here later */}
                  </div>
                </div>
              </div>
            </nav>

            {children}

            <footer className="border-t">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex justify-between items-center">
                  <p className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Workout Tracker
                  </p>
                  <div className="flex items-center gap-4">
                    <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                      Privacy
                    </Link>
                    <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                      Terms
                    </Link>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
