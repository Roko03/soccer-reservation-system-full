import "./globals.scss";
import type { Metadata } from "next";
import { poppins, roboto } from "./styles/fonts";

export const metadata: Metadata = {
  title: "Soccer Reservation System",
  description: "Soccer Reservation System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${roboto.variable}`}>
        {children}
      </body>
    </html>
  );
}
