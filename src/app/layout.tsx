import clsx from "clsx";

import { ThemeProvider } from "@/components/provider/theme-provider";
import { CustomProvider } from "@/state/store";

import "@/app/globals.css";

import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-spaceGrotesk",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={spaceGrotesk.variable} id="body">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <CustomProvider>{children}</CustomProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
