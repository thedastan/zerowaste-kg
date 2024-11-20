'use client';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import HeaderHero from '.';
import HeaderDetail from './index-detail';

const Header = () => {
  const pathname = usePathname();
  const [isHero, setIsHero] = useState(false);

  useEffect(() => {
    if (pathname === "/1" || pathname === "/2" || pathname === "/3" || pathname === "/4" || pathname === "/5") {
      setIsHero(true); // Render HeaderHero
    } else {
      setIsHero(false); // Render HeaderDetail
    }
  }, [pathname]);

  return (
    <div>
      {!isHero ? <HeaderHero /> : <HeaderDetail />}
    </div>
  );
};

export default Header;
