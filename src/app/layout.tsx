import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { siteConfig, siteUrl } from "@/config/site";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { RestaurantSchema } from "@/components/experience/restaurant-schema";
import { productionReadiness } from "@/config/production";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: `${siteConfig.name} | Restaurant & Café`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  robots: productionReadiness.ready ? { index: true, follow: true } : { index: false, follow: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fff8f3",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-brand-cream text-brand-ink antialiased">
        <RestaurantSchema />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
