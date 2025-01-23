import Image from "next/image";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"] });

export default function Brand() {
  return (
    <div className="h-screen flex items-center justify-center bg-[#0D1117]">
      <div className="w-[600px] bg-black/40 rounded-lg overflow-hidden backdrop-blur-sm border border-[#ffd700]/30 relative scanline">
        {/* Terminal Header */}
        <div className="bg-black/60 px-4 py-2 flex items-center justify-between">
          <span className="text-[#ffd700] text-sm font-mono">SYSTEM://NOVA_PROTOCOL_v0.01</span>
          <span className="text-[#ffd700] text-sm font-mono">22:08:21.665</span>
        </div>

        {/* Terminal Content */}
        <div className="p-6 font-mono">
          <div className="mb-4">
            <span className="text-[#ffd700]">$ solana program deploy ./target/deploy/nova_protocol.so</span>
          </div>
          <pre className="text-[#ffd700] mb-6 pl-2">
{`Program Id: ████████████████████████████████████████
RPC URL: https://api.mainnet-beta.solana.com
Deployment Successful

NOVA
Solana DEX & Launchpad Protocol
Status: Initializing deployment...`}</pre>
          <div className="flex items-center gap-2">
            <span className="text-[#ffd700]">$</span>
            <span className="animate-blink text-[#ffd700]">█</span>
          </div>
        </div>
      </div>
    </div>
  );
} 