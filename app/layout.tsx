import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import { SettingsProvider } from "./_components/settings-context";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const minecraftFont = localFont({
  src: [
    {
      path: "./fonts/Minecraft_Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Minecraft_Bold.otf",
      weight: "700",
      style: "bold",
    },
    {
      path: "./fonts/Minecraft_Italic.otf",
      weight: "400",
      style: "italic",
    },
    // {
    //   path: "./fonts/Minecraft_BoldItalic.otf",
    //   weight: "700",
    //   style: "bold-italic",
    // },
  ],
  variable: "--font-minecraft",
});

export const metadata: Metadata = {
  title: "Minecraft",
  description: "Trying to recreate Minecraft UI from scratch",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${minecraftFont.variable}`}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          background: "url(/image.png) no-repeat center center",
          backgroundSize: "cover",
        }}
      >
        <SettingsProvider>{children}</SettingsProvider>
      </body>
    </html>
  );
}
