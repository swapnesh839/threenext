import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Storeprovider from "@/lib/reduxtoolkit/store/Storeprovider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Swapnesh.io",
  description: "Three js Portfolio",
  icons: {
    icon:"/assets/img/logomini.ico",
    shortcut:"/assets/img/logomini.ico",
    apple:"/assets/img/logomini.png",
    other: [
      { rel: "icon", url: "/assets/img/favicon.ico" },
      { rel: "icon", type: "image/png", sizes: "32x32", url: "/assets/img/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", url: "/assets/img/favicon-16x16.png" },
      { rel: "apple-touch-icon", sizes: "180x180", url: "/assets/img/apple-touch-icon.png" }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="false" className={inter.className}>
        <Storeprovider>
        <div className="relative bg-transparent">
          <Header />
          {children}
        </div>
        </Storeprovider>
      </body>
    </html>
  );
}
