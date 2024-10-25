//import localFont from 'next/font/local'
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'


//const aeonik = localFont({ src: '../public/Aeonik-Regular.ttf' })


export const metadata = {
  title: "POLYWORKS",
  description: "Launching soon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-hidden">{children}</body>
      <GoogleAnalytics gaId="G-4QWZDTDD8C" />
    </html>
  );
}
