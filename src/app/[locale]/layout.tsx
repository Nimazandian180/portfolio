import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/content";
import "../globals.css";
import { assetPath } from "@/lib/paths";
export const metadata: Metadata = {
  title: "Nima Zandian — Front-end Developer",
  description:
    "Front-end developer building thoughtful web experiences with React, Next.js, and TypeScript. Explore MCI products, internal tools, and independent work.",
  icons: { icon: assetPath("/icon.svg") },
};
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return (
    <html lang={locale} dir={locale === "fa" ? "rtl" : "ltr"}>
      <head>
        <style>{`@font-face{font-family:Geist;src:url("${assetPath("/fonts/geist.woff2")}") format("woff2");font-style:normal;font-weight:100 900;font-display:swap}@font-face{font-family:Vazirmatn;src:url("${assetPath("/fonts/vazirmatn.woff2")}") format("woff2");font-style:normal;font-weight:100 900;font-display:swap}`}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}
