import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FoodSaveBR - Reduzindo o Desperdício de Alimentos no Brasil",
  description:
    "Aprenda sobre o desperdício de alimentos no Brasil, descubra maneiras de reduzir o desperdício e conecte-se com bancos de alimentos e ONGs.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}