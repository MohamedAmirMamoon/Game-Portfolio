"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import IntroCard from './components/introCard/page';
import Contact from './components/introCard/contact/Contact';
import Footer from './components/footer/page';
import Navbar from './components/navbar/page';
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [displayChildren, setDisplayChildren] = useState(children);

  useEffect(() => {
    setDisplayChildren(children);
  }, [children]);

  return (
    <html lang="en">
      <head>
        <title>Mo's Portfolio</title>
        <link rel="icon" href="/favicon.ico" type="image/png" />
      </head>
      <body
        
        style={{
          minHeight: "750px", // ✅ Ensures no scrolling until height exceeds 750px
          margin: 0,
          overflowY: "auto", // ✅ Enables vertical scrolling when needed
          display: "flex", // ✅ Enables flexbox
          flexDirection: "column", // ✅ Aligns content properly
          justifyContent: "center", // ✅ Centers content vertically (only if it fits)
          alignItems: "center", // ✅ Centers horizontally
          backgroundImage: "url('/adventuretime.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      >
        <nav className="navbar">
          <Navbar/>

        </nav>
        
        
        
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname} // ✅ Triggers animation when route changes
            initial={{ x: "100%", opacity: 0 }} // Start off-screen (right)
            animate={{ x: 0, opacity: 1 }} // Slide in to position
            exit={{ x: "-100%", opacity: 0 }} // Slide out to the left
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{ width: "100%", height: "100%", position: "absolute" }}
          >
            {displayChildren}
          </motion.div>
        </AnimatePresence>

        <div className="footer">
          <Footer/>
        </div>

      </body>
    </html>
  );

}