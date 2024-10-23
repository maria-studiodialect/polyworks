//import localFont from 'next/font/local'
import "./globals.css";

//const aeonik = localFont({ src: '../public/Aeonik-Regular.ttf' })


export const metadata = {
  title: "POLYWORKS",
  description: "Launching soon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-hidden">{children}</body>
    </html>
  );
}
