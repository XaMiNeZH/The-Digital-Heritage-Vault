import { Cormorant_Garamond, Crimson_Pro, IM_Fell_English } from "next/font/google";

export const displayFont = IM_Fell_English({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-im-fell",
  style: ["normal", "italic"],
  display: "swap"
});

export const bodyFont = Crimson_Pro({
  subsets: ["latin", "latin-ext"],
  variable: "--font-crimson",
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap"
});

export const statFont = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap"
});
