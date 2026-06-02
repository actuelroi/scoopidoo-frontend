import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Provider } from "@/Provider/Provider";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.scoopidoo.fr"), // Change to your domain

  title: {
    default: "Scoopidoo | Boutique N°1 pour Chiens en France",
    template: "%s | Scoopidoo",
  },

  description:
    "Scoopidoo est la référence en France pour tous les besoins de votre chien. Découvrez une large sélection de nourriture premium, jouets, accessoires, gadgets innovants, produits de soin et équipements de qualité pour le bien-être de votre compagnon.",

  keywords: [
    "boutique chien",
    "accessoires chien",
    "nourriture chien",
    "jouets chien",
    "gadgets chien",
    "produits pour chiens",
    "alimentation canine",
    "animalerie en ligne",
    "scoopidoo",
    "chien france",
    "collier chien",
    "laisse chien",
    "panier chien",
    "soins chien",
    "leader chien france",
  ],

   icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/logo.png' 
     
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/apple-touch-icon.png',
    },
  ],

  authors: [{ name: "Scoopidoo" }],
  creator: "Scoopidoo",
  publisher: "Scoopidoo",

  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.scoopidoo.fr",
    siteName: "Scoopidoo",
    title: "Scoopidoo | Tout pour votre chien",
    description:
      "Leader en France des produits pour chiens : alimentation, jouets, accessoires, gadgets et bien plus encore.",
    images: [
      {
        url: "logo.png",
        width: 1200,
        height: 630,
        alt: "Logo Scoopidoo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Scoopidoo | Boutique N°1 pour Chiens en France",
    description:
      "Découvrez des milliers de produits pour chiens : nourriture, accessoires, jouets, gadgets et soins.",
    images: ["/Image/logo.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://www.scoopidoo.fr",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FCFBF9]">
        {children}
        <Provider />
        <Toaster richColors />
      </body>
    </html>
  );
}