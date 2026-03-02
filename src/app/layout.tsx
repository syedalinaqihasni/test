import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/global/Headers';
import { footerLinks, mainNavItems, moreNavItems } from '@/constants/global';
import Footer from '@/components/global/Footers';
import { GoogleAnalytics,GoogleTagManager } from '@next/third-parties/google'
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Hasni Tube | Almost Everything for EverOne',
  description: 'Almost Everything for EverOne',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-TDGFF9C" />
      <GoogleAnalytics gaId="G-VCFBYYYZS1" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header moreNavItems={moreNavItems} mainNavItems={mainNavItems} />
        <div className="container mx-auto items-center justify-between p-4">
          {children}
        </div>
        <Footer
          links={footerLinks}
          copyrightText="© 2025 Syed Ali Naqi Hasni"
          copyrightLink="https://www.syedalinaqihasni.com"
        />
      </body>
    </html>
  );
}
