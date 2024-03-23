import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Players Portal",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head> 
      <script src="https://accounts.google.com/gsi/client" async></script>      </head>
      <body  style={{backgroundColor: 'rgba(0, 0, 0, 0.1)'}} className={inter.className}>{children}</body>
    </html>
  );
}
