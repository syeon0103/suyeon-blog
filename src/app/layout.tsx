import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from 'react';


export const metadata: Metadata = {
    title: "suyeon blog",
    description: "수연이 블로그",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body >{children}</body>
        </html>
    );
}
