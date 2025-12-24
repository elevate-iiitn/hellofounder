import "./globals.css";
import { poppins, koulen } from "@/lib/fonts";

export const metadata = {
  title: "Indian School of Founders",
  description: "The only B-School for founders, not managers",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${koulen.variable}`}>
      <body
        className="bg-black text-white antialiased"
        style={{
          margin: 0,
          padding: 0,
          width: "100%",
          maxWidth: "100%",
          overflowX: "hidden",
        }}
      >
        {children}
      </body>
    </html>
  );
}
