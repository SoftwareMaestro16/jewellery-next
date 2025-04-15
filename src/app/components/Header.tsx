'use client'

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/50 border-b-2 flex justify-between p-1.5 px-6 py-1.5 sm:py-2.5">      
    <div>
        <Link href={"/"} className='flex flex-row items-center justify-center gap-2 cursor-pointer'>

        <Image src='/vera-logo.png' alt='vera logo' width={35} height={35} priority />
        <h1 className='text-4xl font-bold'>VERA</h1>
        </Link>
        
    </div>

      <div className='sm:hidden flex items-center'>
        <button onClick={toggleMenu} className='space-y-2'>
          <div className={`w-8 h-1 bg-black transition-all ${isMenuOpen ? 'rotate-45 translate-y-3' : ''}`}></div>
          <div className={`w-8 h-1 bg-black transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-8 h-1 bg-black transition-all ${isMenuOpen ? '-rotate-45 -translate-y-3' : ''}`}></div>
        </button>
      </div>

      <div className={`sm:hidden absolute top-16 left-0 w-full bg-white shadow-lg transition-all ${isMenuOpen ? 'block' : 'hidden'}`}>
        <nav className='flex flex-col items-center gap-5 p-5'>
          <Link href="/about" className='text-2xl font-bold'>
            About
          </Link>
          <Link href="/shop" className='text-2xl font-bold'>
            Jewelry
          </Link>
          <Link href="/contacts" className='text-2xl font-bold'>
            Contacts
          </Link>
        </nav>
      </div>

      <nav className='hidden sm:flex flex-row gap-8 items-center'>
        <Link href="/about" className='text-2xl font-bold hover:underline transition-transform duration-300'>
          About
        </Link>
        <Link href="/shop" className='text-2xl font-bold hover:underline transition-transform duration-300'>
          Jewelry
        </Link>
        <Link href="/contacts" className='text-2xl font-bold hover:underline transition-transform duration-300'>
          Contacts
        </Link>
      </nav>

      <nav className='flex flex-row gap-4 items-center'>
        <Link href="/profile">
          <Image src='/profile.png' alt='profile' width={35} height={35} priority />
        </Link>
        <Link href="/cart">
          <Image src='/cart.png' alt='cart' width={35} height={35} priority />
        </Link>
      </nav>
    </header>
  );
}