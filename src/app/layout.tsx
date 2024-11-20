import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.scss";
import Providers from "./provider";
import { SITE_NAME } from "@/constants/seo/seo.constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
		default: SITE_NAME,
		template: `%s | ${SITE_NAME}`
	},
	description: 'The movie “Kurak” is stories of violence, denial of womens rights and freedoms, based on real events'

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
         <Providers> 
          
        {children}
        </Providers>
        </body>
    </html>
  );
}
