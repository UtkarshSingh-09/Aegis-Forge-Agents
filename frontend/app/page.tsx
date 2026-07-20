import { CustomCursor } from "@/components/visuals/CustomCursor";
import { Navbar } from "@/components/layout/Navbar";
import { HeroGSAP } from "@/components/sections/HeroGSAP";
import { GameOfNumbers } from "@/components/sections/GameOfNumbers";
import { HexagonScrollGSAP } from "@/components/sections/HexagonScrollGSAP";
import { InteractiveTabsGSAP } from "@/components/sections/InteractiveTabsGSAP";
import { AgentBentoBox } from "@/components/sections/AgentBentoBox";
import { FSIRShowcaseGSAP } from "@/components/sections/FSIRShowcaseGSAP";
import { FooterCTA } from "@/components/sections/FooterCTA";

export default function Home() {
    return (
        <main className="relative min-h-screen selection:bg-emerald-500/30 font-sans tracking-tight">
            <CustomCursor />
            <Navbar />

            <div className="relative z-10 flex flex-col">
                <HeroGSAP />
                <GameOfNumbers />
                <HexagonScrollGSAP />
                <InteractiveTabsGSAP />
                <AgentBentoBox />
                <FSIRShowcaseGSAP />
                <FooterCTA />
            </div>
        </main>
    );
}
