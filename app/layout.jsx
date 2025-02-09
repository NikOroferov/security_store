import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Security store",
  description: "Магазин товарів безпеки",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>

        <main className="">
          {children}
        </main>
        
        <Footer/>
      </body>
    </html>
  );
}
