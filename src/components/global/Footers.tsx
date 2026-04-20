'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Footer({ links, copyrightText, copyrightLink }) {
  const pathname = usePathname();
  const isHome = pathname === '/';

  if (isHome) return null; // Don't render on homepage

  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="mb-4 lg:mb-0">
          <Link href={copyrightLink || '#'} className="text-sm">
            {copyrightText || '© 2023 Hamariweb.com'}
          </Link>
        </div>
        <div className="text-center lg:text-right">
          <p className="text-sm space-x-4">
            {links?.map((link, index) => (
              <span key={index}>
                {index > 0 && <span className="mx-2">|</span>}
                <Link href={link.url} target='_blank' className="hover:text-yellow-400">
                  {link.text}
                </Link>
              </span>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
}
