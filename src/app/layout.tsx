import "@/styles/globals.css";

import { siteConfig } from "@/config";
import { Header, Footer } from "@/components";

import type { Metadata } from "next";
import type { RootLayoutProps } from "@/types";

export const metadata: Metadata = {
    title: siteConfig.title,
    description: siteConfig.description,
    icons: {
        icon: "/logo.svg",
    },
};

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body className="flex flex-col justify-between min-h-screen">
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
