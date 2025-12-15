import "./globals.css";

export const metadata = {
  title: "helloFounder",
  description: "nextjs + react + tailwindcss.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
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