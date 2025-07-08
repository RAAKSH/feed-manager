import Header from "@/components/Header";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#363234] text-[#eee7ea]">
        <Header />
        <main className="w-[80%] max-w-[60rem] mx-auto my-12 p-8 rounded-md bg-[#1f1b1d] min-h-[85vh] shadow-[0_0_6px_rgba(0,0,0,0.5)]">{children}</main>
      </body>
    </html>
  );
}
