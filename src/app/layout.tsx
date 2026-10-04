import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./enhancements.css";

export const metadata: Metadata = {
  title: "Tasneem | Homeopathy Student · Future Doctor",
  description: "A personal portfolio tracing Tasneem's journey from Satkhira to Dhaka — through homeopathy, creativity, and a future in care.",
  applicationName: "Tasneem Portfolio",
  icons: { icon: "/icon.svg" },
  openGraph: {
    title: "Tasneem — A journey in care & curiosity",
    description: "Homeopathy student, future doctor, artist.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B1F4B",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
