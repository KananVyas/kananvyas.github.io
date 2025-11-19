import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'Kanan Vyas | AI Engineer',
  description: 'Portfolio of Kanan Vyas, an AI Engineer specializing in Agent Building, Agent Optimization & Agent Evals.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;700&family=Inter:wght@700;900&family=Playfair+Display:wght@700;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body bg-background text-foreground antialiased selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
