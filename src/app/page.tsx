import Image from "next/image";

export const dynamic = 'force-static'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <div className="flex flex-col items-center gap-8">
        <div className="relative w-48 h-48 mb-8">
          <Image
            src="/logo_rounded.png"
            alt="NOVA Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        
        <h1 className="text-8xl font-bold tracking-wider bg-gradient-to-r from-[#ffd700] via-[#ff8c00] to-[#ffd700] bg-clip-text text-transparent animate-gradient-x drop-shadow-[0_0_10px_rgba(255,215,0,0.3)]">
          NOVA
        </h1>
        
        <div className="relative">
          <p className="text-2xl tracking-[0.2em] font-light text-white/90 animate-pulse">
            COMING SOON
          </p>
          <div className="absolute -bottom-2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FFB800] to-transparent"></div>
        </div>
      </div>
    </div>
  );
}
