'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [isClient, setIsClient] = useState(false);

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
      <Link href="mailto:info@polyworks.studio" className='hover:underline justify-self-end mt-20'>info@polyworks.studio</Link>
    </div>
  );
}
