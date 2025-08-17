'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-[#30483D] shadow-sm transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container  mx-auto px-4">
        <div className="flex items-center justify-between h-16 max-w-6xl ">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-900">
              <Image
                src="/poolder-logo-wit.svg"
                alt="Logo"
                width={125}
                height={25}
              />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
