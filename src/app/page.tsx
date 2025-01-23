import Image from "next/image";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"] });

export const dynamic = 'force-static'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0D1117] text-[#ffd700]">
      <div className="flex flex-col items-center gap-8">
        <div className="relative w-32 h-32 mb-4">
          <Image
            src="/logo_rounded.png"
            alt="NOVA Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        
        <h1 className={`text-6xl ${orbitron.className} tracking-wider bg-gradient-to-r from-[#ffd700] via-[#ff8c00] to-[#ffd700] bg-clip-text text-transparent animate-gradient-x drop-shadow-[0_0_10px_rgba(255,215,0,0.3)]`}>
          NOVA
        </h1>

        {/* Terminal Card */}
        <div className="w-full max-w-2xl bg-black/40 rounded-lg overflow-hidden backdrop-blur-sm border border-[#ffd700]/30 relative scanline">
          {/* Terminal Header */}
          <div className="bg-black/60 px-4 py-2 border-b border-[#ffd700]/20 flex items-center">
            <span className="text-[#ffd700]/80 text-sm font-mono">SYSTEM://NOVA_PROTOCOL_v0.01</span>
            <span className="ml-auto text-[#ffd700]/60 text-xs">22:08:21.665</span>
          </div>

          {/* Terminal Content */}
          <div className="p-6 font-mono text-sm">
            <div className="mb-6">
              <div className="text-[#ffd700]/80 mb-2">PROTOCOL FEATURES</div>
              <div className="grid grid-cols-3 gap-4">
                {[
                  'Decentralized Exchange',
                  'Earn LP Fees',
                  'Fee Reduction: 20%',
                  'Sustainable Project Launchpad',
                  'Project Developer Network',
                  'Revenue Share: 99.9%'
                ].map((process, i) => (
                  <div key={i} className="bg-black/30 p-3 rounded border border-[#ffd700]/10 hover:border-[#ffd700]/30 transition-colors">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#ffd700]/60 animate-pulse"></span>
                      <span className="text-[#ffd700]/90 text-xs">{process}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <span className="text-[#ffd700]/60">$</span> <span className="text-[#ffd700]">solana</span> program show nova_protocol
            </div>
            <div className="bg-black/30 rounded p-3 border border-[#ffd700]/10 mb-6">
              <pre className="text-[#ffd700]/90">
{`Program: NOVA Protocol
Version: 0.1.0
Chain: Solana
Target TVL: $10M+
Launch: Q1 2025
Status: Pre-deployment`}
              </pre>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[#ffd700]/60">$</span>
              <span className="animate-blink">█</span>
            </div>
          </div>
        </div>
        
        <div className="relative mt-4">
          <p className="text-2xl tracking-[0.2em] font-light text-[#ffd700]/90 animate-pulse">
            COMING SOON
          </p>
          <div className="absolute -bottom-2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ffd700] to-transparent"></div>
        </div>
      </div>
    </div>
  );
}
