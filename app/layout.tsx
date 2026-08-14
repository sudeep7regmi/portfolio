import "./globals.css";
import InteractiveBackground from "@/components/InteractiveBackground";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-950">
        <InteractiveBackground />
        {children}
      </body>
    </html>
  );
}

