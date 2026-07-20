"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Shield } from "lucide-react";

export const Navbar = () => {
    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-5 left-1/2 -translate-x-1/2 w-full max-w-5xl z-50 px-4"
        >
            <div className="glass-panel rounded-full px-6 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <Shield className="w-6 h-6 text-emerald-400" />
                        <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse blur-[1px]" />
                    </div>
                    <span className="font-mono font-bold tracking-widest text-slate-100 text-sm">AEGIS-FORGE</span>
                </div>

                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/dashboard" className="text-sm font-medium text-slate-400 hover:text-emerald-400 transition-colors">
                        Architecture (Dashboard)
                    </Link>
                    <Link href="#crisis-section" className="text-sm font-medium text-slate-400 hover:text-emerald-400 transition-colors">
                        Eco-Impact
                    </Link>
                    <Link href="#hexagon-scroll-section" className="text-sm font-medium text-slate-400 hover:text-emerald-400 transition-colors">
                        FSIR Protocol
                    </Link>
                </nav>

                <div>
                    <Link href="/interview/room" className="relative group flex items-center justify-center overflow-hidden rounded-full px-6 py-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-medium text-sm transition-all hover:bg-emerald-500/20 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                        <span className="relative z-10">Deploy Green AI</span>
                        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent" />
                    </Link>
                </div>
            </div>
        </motion.header>
    );
};
