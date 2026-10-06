import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Portfolio } from "@/components/portfolio";
import { isLocale } from "@/lib/content";
export const dynamicParams = false;
export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "fa" }];
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const title =
    locale === "fa"
      ? "نیما زندیان — توسعه‌دهنده فرانت‌اند"
      : "Nima Zandian — Front-end Developer";
  const description =
    locale === "fa"
      ? "پروژه‌ها و تجربه‌های نیما زندیان؛ توسعه‌دهنده فرانت‌اند با React، Next.js و TypeScript."
      : "Thoughtful interfaces. Real-world impact. Explore Nima’s front-end work for MCI, internal tools, and independent clients.";
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      locale: locale === "fa" ? "fa_IR" : "en_US",
    },
    twitter: { card: "summary_large_image", title, description },
  };
}
export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <Portfolio locale={locale} />;
}
