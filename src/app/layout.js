import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Oswald } from 'next/font/google';
import { Playfair_Display, Poppins } from 'next/font/google';
import Head from "next/head";

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['700'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400'] });

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '600'], // kullanacağın kalınlıklar
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "HAIR CODE",
  description: "Zarafet burada başlar.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${oswald.className} scroll-smooth`}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Head>
        <link rel="icon" href="/haircode-favicon.ico" type="image/x-icon" />
      </Head>
        {children}
      </body>
    </html>
  );
}
