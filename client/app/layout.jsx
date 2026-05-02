import "./globals.css";
import Footer from "./components/Footer";
import { Fraunces, Space_Grotesk } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-serif",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata = {
  title: "EcoLoop | Sustainable Marketplace",
  description:
    "EcoLoop is a sustainable marketplace for reusing, reselling, and rediscovering eco-friendly products.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${spaceGrotesk.variable}`}>
        <div className="app-shell">
          <div className="app-shell__content">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
