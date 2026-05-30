export const metadata = {
  title: "Game Livo Ink",
  description: "Gaming Landing Page"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
