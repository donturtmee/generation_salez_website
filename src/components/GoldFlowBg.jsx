import { motion } from "framer-motion";

const GOLD = "#FAC308";

export default function GoldFlowBg() {
    const w = 1440, h = 900;
    const COUNT = 6;        // fewer lines
    const SPACING = 30;     // distance between lines
    const WAVE = 14;        // subtle “breathing”
    const lines = Array.from({ length: COUNT }, (_, i) => i);

    // Left-origin lines that end at the right edge (no left→right slide)
    const leftD = (i, a = 0) => {
        const o = i * SPACING;
        return `M0 ${h * 0.72 + o}
            C ${w * 0.15} ${h * 0.62 + o + a},
              ${w * 0.55} ${h * 0.50 + o - a},
              ${w} ${h * 0.58 + o + a}`;
    };

    return (
        <div className="absolute inset-0 -z-10 overflow-hidden">
            {/* base */}
            <div className="absolute inset-0 bg-[#0A0B0F]" />

            {/* flowing gold lines — one side only, subtle morph, never disappear */}
            <svg
                viewBox={`0 0 ${w} ${h}`}
                preserveAspectRatio="none"
                className="absolute inset-0 w-full h-full"
            >
                <defs>
                    <linearGradient id="gold-stroke" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%"   stopColor={GOLD} stopOpacity="0.35" />
                        <stop offset="50%"  stopColor={GOLD} stopOpacity="0.9" />
                        <stop offset="100%" stopColor={GOLD} stopOpacity="0.35" />
                    </linearGradient>
                </defs>

                {lines.map((i) => (
                    <motion.path
                        key={`l-${i}`}
                        d={leftD(i, 0)}
                        stroke="url(#gold-stroke)"
                        strokeWidth={1.2}
                        fill="none"
                        // subtle breathing morph only
                        animate={{ d: [leftD(i, -WAVE), leftD(i, WAVE), leftD(i, -WAVE)] }}
                        transition={{ duration: 10 + i * 0.25, repeat: Infinity, ease: "easeInOut" }}
                        style={{ filter: "drop-shadow(0 0 6px rgba(250,195,8,0.35))" }}
                    />
                ))}
            </svg>

            {/*/!* drifting accent glows (optional) *!/*/}
            {/*<motion.div*/}
            {/*    className="absolute -left-24 -bottom-24 w-[50vw] h-[50vw] rounded-full"*/}
            {/*    style={{ background: "radial-gradient(closest-side, #FAC30833, transparent 70%)", filter: "blur(60px)" }}*/}
            {/*    animate={{ x: [0, 30, -20, 0], y: [0, -20, 25, 0], scale: [1, 1.05, 0.98, 1] }}*/}
            {/*    transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}*/}
            {/*/>*/}
            {/*<motion.div*/}
            {/*    className="absolute -right-20 -top-28 w-[42vw] h-[42vw] rounded-full"*/}
            {/*    style={{ background: "radial-gradient(closest-side, #FAC30826, transparent 70%)", filter: "blur(70px)" }}*/}
            {/*    animate={{ x: [0, -25, 15, 0], y: [0, 22, -18, 0], scale: [1, 0.97, 1.04, 1] }}*/}
            {/*    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}*/}
            {/*/>*/}
        </div>
    );
}
