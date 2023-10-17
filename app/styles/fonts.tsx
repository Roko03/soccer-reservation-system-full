import { Poppins, Roboto } from "next/font/google";

export const poppins = Poppins({
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--poppins",
});

export const roboto = Roboto({
  display: "swap",
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--roboto",
});
