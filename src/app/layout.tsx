import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { CONTACT_INFO } from "@/data/contact";
import { PROJECTS } from "@/data/projects";

const spaceGrotesk = localFont({
  src: "./fonts/SpaceGrotesk.woff2",
  weight: "400 700",
  variable: "--font-display",
  display: "swap",
});

const plusJakarta = localFont({
  src: "./fonts/PlusJakartaSans.woff2",
  weight: "400 700",
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = localFont({
  src: "./fonts/JetBrainsMono.woff2",
  weight: "400 700",
  variable: "--font-mono",
  display: "swap",
});

const siteTitle = "Kauan Silva | Desenvolvedor Full Stack — Aplicativos e Sistemas";
const siteDescription =
  "Desenvolvedor Full Stack especializado em aplicativos móveis, sistemas empresariais, plataformas web e APIs sob medida para empresas e empreendedores. Silva Software.";

export const metadata: Metadata = {
  metadataBase: new URL(CONTACT_INFO.domain),
  title: siteTitle,
  description: siteDescription,
  authors: [{ name: CONTACT_INFO.ownerName, url: CONTACT_INFO.domain }],
  creator: CONTACT_INFO.ownerName,
  publisher: CONTACT_INFO.brandName,
  alternates: {
    canonical: "https://devkauan.site/",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "https://devkauan.site/",
    siteName: "Silva Software — Kauan Silva",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kauan Silva — Desenvolvedor Full Stack | Silva Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://devkauan.site/#person",
      name: CONTACT_INFO.ownerName,
      jobTitle: CONTACT_INFO.roleTitle,
      url: "https://devkauan.site/",
      email: `mailto:${CONTACT_INFO.email}`,
      worksFor: {
        "@type": "Organization",
        name: CONTACT_INFO.brandName,
      },
      sameAs: [CONTACT_INFO.linkedinUrl, CONTACT_INFO.githubUrl],
    },
    {
      "@type": "WebSite",
      "@id": "https://devkauan.site/#website",
      url: "https://devkauan.site/",
      name: siteTitle,
      description: siteDescription,
      inLanguage: "pt-BR",
      publisher: { "@id": "https://devkauan.site/#person" },
    },
    {
      "@type": "ItemList",
      name: "Projetos de Kauan Silva",
      itemListElement: PROJECTS.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: project.title,
        description: project.description,
        url: project.liveUrl ?? project.repoUrl ?? "https://devkauan.site/#projetos",
      })),
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${spaceGrotesk.variable} ${plusJakarta.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-[var(--color-black)] text-[var(--color-white)] antialiased selection:bg-[var(--color-yellow)] selection:text-[var(--color-black)]">
        <a href="#conteudo-principal" className="skip-link">
          Pular para o conteúdo principal
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
