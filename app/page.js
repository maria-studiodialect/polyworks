import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-screen w-screen justify-center items-center">
        <div>
        <Image
          src="/polyworks.svg"
          alt="Polyworks Logo"
          width={180}
          height={37}
          priority
          className="w-[50vw]"
        />
        </div>
    </main>
  );
}
