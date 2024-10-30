'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TfiEmail } from "react-icons/tfi";
import { motion } from 'framer-motion';


export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const [isHovered, setIsHovered] = useState(false);


  useEffect(() => {
    setIsClient(true); // To ensure this runs only on the client
  }, []);

  return (
    <div className="aeonik flex flex-col h-screen w-screen justify-center justify-between items-center bg-black text-white pb-[22vh] pt-24 md:pt-4 md:pb-16 overflow-hidden">
      <div>
        {isClient && (
          <Image
            src="/polyworks_loop.gif"
            alt="Polyworks Logo"
            width={1920}
            height={1920}
            priority
            className="w-[75vh] md:w-[55vh] md:mt-[15vh]"
          />
        )}
      </div>
      <Link href="mailto:info@polyworks.studio" className="md:mt-20 flex justify-center tracking-wider text-xs hover:underline">
        CONTACT
      </Link>
    </div>
  );
}
