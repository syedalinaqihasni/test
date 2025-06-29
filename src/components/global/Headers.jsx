'use client';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header({ moreNavItems, mainNavItems }) {
  const [isMoreOpen, setMoreOpen] = useState(false);  
  const pathname = usePathname();
  const isHome = pathname === '/';

  if (isHome) return null; // Don't render on homepage

  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="text-lg font-bold">
          <Link href={'/'}>Hasni Tube</Link>
        </div>
        <nav className="flex space-x-4">
          {mainNavItems?.map((item, index) => (
            <Link
              key={index}
              href={item?.href}
              className="hover:text-yellow-400"
            >
              {item?.name}
            </Link>
          ))}

          <div className="relative">
            <button
              onClick={() => setMoreOpen(!isMoreOpen)}
              className="hover:text-yellow-400 focus:outline-none"
            >
              More
            </button>

            {isMoreOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-black shadow-lg rounded">
                {moreNavItems?.map((item, index) => (
                  <Link
                    key={index}
                    href={item?.href}
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    {item?.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
