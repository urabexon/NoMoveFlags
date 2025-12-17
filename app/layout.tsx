// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import Providers from "@/components/Providers";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "NoMoveFlags",
//   description: "NoMoveFlags is a flag quiz app for GeoGuessr's No Move / Country Streak mode.",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="ja">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         <Providers>
//           <Header />
//           {children}
//           <Footer />
//         </Providers>
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NoMoveFlags",
  description:
    "NoMoveFlags is a flag quiz app for GeoGuessr's No Move / Country Streak mode.",

  openGraph: {
    title: "NoMoveFlags",
    description:
      "A fast flag quiz for GeoGuessr No Move / Country Streak players.",
    url: "https://nomoveflags.pages.dev",
    siteName: "NoMoveFlags",
    images: [
      {
        url: "https://guess-national-flag.pages.dev/ogp-image.svg",
        width: 1200,
        height: 630,
        alt: "NoMoveFlags – GeoGuessr Flag Quiz",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "NoMoveFlags",
    description:
      "A fast flag quiz for GeoGuessr No Move / Country Streak players.",
    images: ["https://guess-national-flag.pages.dev/ogp-image.svg"],
  },

  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
