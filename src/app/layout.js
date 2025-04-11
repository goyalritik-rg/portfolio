import { Poppins } from "next/font/google";
import "./globals.css";

import { Analytics } from "@vercel/analytics/react";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "404 Skills Found",
  description: "Hello, I’m Responsive",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-sans antialiased bg-neutral-950 text-white`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
