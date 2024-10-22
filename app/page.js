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
    <div className="aeonik flex flex-col h-screen w-screen justify-center md:justify-between items-center bg-black text-white pb-16 md:py-10">
      <div>
        {isClient && (
          <Image
            src="/polyworks_loop.gif"
            alt="Polyworks Logo"
            width={1920}
            height={1920}
            priority
            className="w-[90vw] md:w-[35vw] md:mt-[15vh]"
          />
        )}
      </div>
      <Link href="mailto:info@polyworks.studio" className="mt-20 flex justify-center">
      {/* Parent container for the icon and text */}
      <motion.div
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="relative flex items-center justify-center cursor-pointer"
        style={{ width: isHovered ? '200px' : '40px' }} // Adjust width dynamically
      >
        {/* Email Icon */}
        <motion.div
          animate={isHovered ? { x: -80 } : { x: 0 }} // Move left when hovered
          transition={{ type: 'spring', stiffness: 300, damping: 50, duration: 0.3 }}
          className="text-xl bg-black"
        >
          <TfiEmail />
        </motion.div>

        {/* Sliding email text */}
        <motion.span
          initial={{ x: -50, opacity: 0 }} // Hidden and offset initially
          animate={isHovered ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }} // Slide in when hovered
          transition={
            isHovered 
            ? {x: { stiffness: 300, damping: 50, transition: 0.4, delay: 0.2 }, opacity: {stiffness: 300, damping: 50, transition: 0.6, delay: 0.3}}
            : { stiffness: 300, damping: 50, transition: 0.8 }
          } // Spring animation
          className="absolute left-10 overflow-hidden whitespace-nowrap hover:underline"
        >
          info@polyworks.studio
        </motion.span>
      </motion.div>
    </Link>
    </div>
  );
}
