import "./globals.css";
// import DarkVeil from "./darkveil";
export const metadata = {
  title: "hellofounder",
  description: "nextjs + react + tailwindcss."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
