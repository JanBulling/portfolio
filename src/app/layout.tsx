import "@/styles/globals.css";

import type { Metadata } from "next";

import { fontMono, fontSans } from "@/styles/fonts";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { AnalyticsProvider } from "@/components/analytics-provider";
import { TailwindIndicator } from "@/ui/tailwind-indicator";
import { ColorThemeProvider } from "@/components/color-theme";
import { META_THEME_COLORS } from "@/hooks/use-meta-color";

export const metadata: Metadata = {
  title: {
    default: "Jan Bulling",
    template: `%s | Jan Bulling`,
  },
  description: "Physicist and Web-Developer",
  keywords: [
    "Physics",
    "Web Development",
    "Jan",
    "Bulling",
    "Ulm",
    "Ulm University",
  ],
  authors: [
    {
      name: "Jan Bulling",
      url: "https://jan-bulling.com",
    },
  ],
  creator: "Jan Bulling",
  icons: {
    icon: "/favicon.svg",
    // shortcut: "/favicon-16x16.png",
    // apple: "/apple-touch-icon.png",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      suppressContentEditableWarning
      data-scroll-behavior="smooth"
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || ((!('theme' in localStorage) || localStorage.theme === 'system') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.querySelector('meta[name="theme-color"]').setAttribute('content', '${META_THEME_COLORS.dark}')
                }
              } catch (_) {}
            `,
          }}
        />
        <meta name="theme-color" content={META_THEME_COLORS.light} />
      </head>
      <body
        className={cn(
          "bg-background text-foreground min-h-svh font-sans antialiased",
          fontSans.variable,
          fontMono.variable,
        )}
      >
        <ThemeProvider>
          <ColorThemeProvider>
            {children}
            <TailwindIndicator />
            <AnalyticsProvider />
          </ColorThemeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
