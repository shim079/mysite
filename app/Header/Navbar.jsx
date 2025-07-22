import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import SpotlightCard from './SpotlightCard';

export default function Navbar() {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setShowNavbar(false); // Scrolling down
            } else {
                setShowNavbar(true); // Scrolling up
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <div>
            
            <SpotlightCard className={`left-0 w-60 h-20 rounded-r-3xl fixed top-0 z-50 flex items-center px-16 backdrop-blur-md bg-[#4e4e5a62] transition-transform duration-350 ${showNavbar ? 'translate-x-0' : '-translate-x-full'
                }`}>
                {/* LEFT: Name */}
                <div className='text-[rgba(255,_0,_182,_0.15)]  text-3xl font-light font-sans'>
                    SHAIMA
                </div>
            </SpotlightCard>

            <SpotlightCard className={`font-light font-sans right-0 w-120 h-20 rounded-l-3xl fixed top-0 z-50 flex items-center px-9 backdrop-blur-md bg-[#4e4e5a62] transition-transform duration-350 ${showNavbar ? 'translate-x-0' : 'translate-x-full'
                }`}>
                {/* RIGHT: Nav Links */}
                <div className='hidden md:flex ml-auto space-x-4 font-sans'>
                    <a href='/' className='text-white  hover:text-black rounded-lg p-2'>
                        Home
                    </a>
                    <Link href='/Services' className='text-white  hover:text-black rounded-lg p-2'>
                        Services
                    </Link>
                    <a href='/Project' className='text-white  hover:text-black rounded-lg p-2'>
                        Projects
                    </a>
                    <a href='/About' className='text-white  hover:text-black rounded-lg p-2'>
                        About
                    </a>
                    <a href='/Contact' className='text-white  hover:text-black rounded-lg p-2'>
                        Contact
                    </a>
                </div>
            </SpotlightCard>
        </div>
    );
}
