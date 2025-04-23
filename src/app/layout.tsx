import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Pizzeria",
  description: "Pizzeria al horno.",
  icons: {
    icon: "/images/favicon.webp",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="bg-black">
      <body className="relative">
        {/* Fondo borroso - Corregido overflow */}
        <div className="fixed inset-0 bg-[url('/images/background.webp')] bg-cover blur-sm z-[-1] scale-105" />

        <div className="flex flex-col min-h-screen mx-auto max-w-[1920px]">
          <Header />
          
          {/* Contenedor de contenido centrado */}
          <main className="flex-grow flex flex-col items-center justify-center w-full px-4 sm:px-8">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}