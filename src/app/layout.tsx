import "./globals.css";
import type { Metadata, Viewport } from "next";
import { ViewTransitions } from 'next-view-transitions';
import Footer from './components/footer/page';
import Navbar from './components/navbar/page';

export const metadata: Metadata = {
  title: "Mo's Portfolio",
  icons: {
    icon: "/favicon.ico",
  },
};

// viewport-fit=cover is required by the env(safe-area-inset-*) rules in
// globals.css. User zoom is intentionally left enabled (no maximumScale /
// userScalable) for accessibility.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    /* ViewTransitions bridges the browser View Transitions API to App Router
       navigation: it holds the transition open until the new route has actually
       mounted, which a bare document.startViewTransition() around router.push()
       cannot do. Slide keyframes live in globals.css. */
    <ViewTransitions>
      <html lang="en">
        <body>
          <nav className="navbar">
            <Navbar/>
          </nav>

          {/* .page-shell reserves the fixed navbar / footer bands — see globals.css */}
          <div className="page-shell">
            {children}
          </div>

          <div className="footer">
            <Footer/>
          </div>

        </body>
      </html>
    </ViewTransitions>
  );
}
