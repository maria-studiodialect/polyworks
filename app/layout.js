//import localFont from 'next/font/local'
import "./globals.css";

//const aeonik = localFont({ src: '../public/Aeonik-Regular.ttf' })


export const metadata = {
  title: "Polyworks Studio",
  description: "Launching soon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
