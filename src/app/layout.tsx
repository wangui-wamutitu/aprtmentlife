import "~/styles/globals.css";

import { Inter } from "next/font/google";
import MainNavbar from "~/components/MainNavbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "AprtmentLife",
  description: "Jiachilie by AprtmentLife",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <MainNavbar/>
        <div className={'px-12'}>
          {children}
        </div>
      </body>
    </html>
  );
}
