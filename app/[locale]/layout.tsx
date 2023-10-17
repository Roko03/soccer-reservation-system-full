import "./globals.scss";
import type { Metadata } from "next";
import { poppins, roboto } from "../styles/fonts";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";

export const metadata: Metadata = {
  title: "Soccer Reservation System",
  description: "Soccer Reservation System",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: any };
}) {
  let messages;
  try {
    messages = (await import(`../../messages/${params.locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={params.locale}>
      <body className={`${poppins.variable} ${roboto.variable}`}>
        <NextIntlClientProvider locale={params.locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
