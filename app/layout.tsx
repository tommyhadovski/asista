import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin", "latin-ext"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aiasista.eu"),
  title: "AiAsista – AI, ktorá pomáha vášmu biznisu rásť",
  description:
    "AiAsista je AI, ktorá za vás dvíha telefón, volá zákazníkom, posiela pripomienky a ukazuje vám kde rastie váš biznis. Jedna AI namiesto celého tímu.",
  openGraph: {
    title: "AiAsista – AI, ktorá pomáha vášmu biznisu rásť",
    description:
      "Dvíhame hovory, voláme zákazníkom, posielame pripomienky. 24/7. V slovenčine.",
    locale: "sk_SK",
    type: "website",
    url: "https://aiasista.eu",
    siteName: "AiAsista",
  },
  twitter: {
    card: "summary_large_image",
    title: "AiAsista – AI, ktorá pomáha vášmu biznisu rásť",
    description:
      "Dvíhame hovory, voláme zákazníkom, posielame pripomienky. 24/7. V slovenčine.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sk"
      className={`${inter.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0A0A14] text-[#FAFAF9]">
        <script dangerouslySetInnerHTML={{ __html: `if(window.location.hash)window.scrollTo(0,0);` }} />
        {children}
      </body>
    </html>
  );
}
