import type { Metadata } from "next";
import "./globals.css";
import { Urbanist } from "next/font/google"
const font = Urbanist({subsets:["latin"]})

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";

export const metadata: Metadata = {
  title: "In Shope",
  description: "In shope e-commerse store where you can find your needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className}`}
      >
        <ToastProvider />
        <ModalProvider />
        <Navbar />
        {children}
        <Footer  />
      </body>
    </html>
  );
}
