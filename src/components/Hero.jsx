import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas/index.js";
import GoldFlowBg from "./GoldFlowBg.jsx";

const Hero = () => {
    return (
        <section className="relative w-full h-screen mx-auto overflow-hidden">
            <GoldFlowBg />
            <div
                className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX}
        flex flex-row items-start gap-5`}
            >
                <div className="flex flex-col justify-center items-center mt-5">
                    <div className="w-5 h-5 rounded-full bg-[#FAC308] shadow-[0_0_24px_#FAC308aa]"/>
                    <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-[#FAC308] to-transparent"/>
                </div>

                <div>
                    <h1 className={`${styles.heroHeadText} text-white`}>
                        Generation<span className="text-[#FAC308]"> Salez</span>
                    </h1>
                    <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                        Construim experiențe digitale
                        <br className="sm:block hidden"/>
                        unice pentru afacerea ta
                    </p>
                </div>
            </div>

            {/* 3D model area (right side) */}
            <div className="absolute inset-0 h-full w-full">
                <ComputersCanvas/>
                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70"/>
            </div>

            {/* Scroll cue */}
            <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
                <a href="#about" aria-label="Scroll to about">
                    <div
                        className="w-[35px] h-[64px] rounded-3xl border-4 border-white/30 flex justify-center items-start p-2 backdrop-blur-sm bg-white/[0.03]">
                        <motion.div
                            animate={{y: [0, 24, 0]}}
                            transition={{duration: 1.5, repeat: Infinity, repeatType: "loop"}}
                            className="w-3 h-3 rounded-full bg-[#FAC308] shadow-[0_0_10px_#FAC308aa] mb-1"
                        />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Hero;
