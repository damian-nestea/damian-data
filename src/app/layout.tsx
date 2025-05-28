import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Damian Data Blog",
  description:
    "Minhas anotações e aprendizados sobre ciência de dados e outros temas.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className=" p-4 sm:p-6 max-w-3xl mx-auto">
        <header className="mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Damiandev Blog
          </h1>
          <nav className="mt-4 flex gap-4 text-sm">
            <a href="/" className="hover:underline">
              Home
            </a>
            <a href="/sobre" className="hover:underline">
              Sobre
            </a>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
