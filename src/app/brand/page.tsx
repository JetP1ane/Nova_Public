import Image from "next/image";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"] });

export default function Brand() {
  return (
    <div className="h-[500px] w-[1500px] flex items-center justify-center bg-[#0D1117]">
      <div className="w-[1300px] bg-black/40 rounded-lg overflow-hidden backdrop-blur-sm border border-[#ffd700]/30 relative scanline">
        {/* Terminal Header */}
        <div className="bg-black/60 px-6 py-3 flex items-center justify-between">
          <span className="text-[#ffd700] text-base font-mono">SYSTEM://NOVA_PROTOCOL_v0.01</span>
          <span className="text-[#ffd700] text-base font-mono">22:08:21.665</span>
        </div>

        {/* Terminal Content */}
        <div className="p-8 font-mono">
          <div className="mb-6">
            <span className="text-[#ffd700] text-lg">$ solana program deploy ./target/deploy/nova_protocol.so</span>
          </div>
          <pre className="text-[#ffd700] text-lg mb-8 pl-4 leading-relaxed">
{`Program Id: ████████████████████████████████████████
RPC URL: https://api.mainnet-beta.solana.com
Deployment Successful

NOVA
Solana DEX & Launchpad Protocol
Status: Initializing deployment...`}</pre>
          <div className="flex items-center gap-2">
            <span className="text-[#ffd700] text-lg">$</span>
            <span className="animate-blink text-[#ffd700] text-lg">█</span>
          </div>
        </div>
      </div>
    </div>
  );
} 