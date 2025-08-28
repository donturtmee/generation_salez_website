import {motion} from "framer-motion";
import {styles} from "../styles";
import {ComputersCanvas} from "./canvas/index.js";
import {slideIn} from "../utils/motion.js";

// decorative balls behind everything
// decorative balls behind everything — responsive (mobile/desktop)
const BouncyBalls = () => (
    <div className="pointer-events-none absolute inset-0 -z-10">
        {/* LEFT ball */}
        <motion.div
            className={`
        absolute rounded-full bg-[#FAC308]
        w-[7.5rem] h-[7.5rem] left-3 top-[72%]      /* mobile */
        sm:w-[10rem] sm:h-[10rem] sm:left-[3.5rem] sm:top-[70%]
        md:w-[12rem] md:h-[12rem]
      `}
            animate={{ y: [0, -18, 0], x: [0, 6, 0], scale: [1, 1.02, 1] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* RIGHT ball */}
        <motion.div
            className={`
        absolute rounded-full bg-[#FAC308]
        w-[7.5rem] h-[7.5rem] right-3 top-[16%]     /* mobile */
        sm:w-[10rem] sm:h-[10rem] sm:right-[3.5rem] sm:top-[20%]
        md:w/[12rem] md:h/[12rem]
      `}
            animate={{ y: [0, 16, 0], x: [0, -6, 0], scale: [1, 1.02, 1] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
        />
    </div>
);


const Hero = () => {
    return (
        <section className="relative w-full h-screen mx-auto overflow-hidden">
            {/* bouncy balls background */}
            <BouncyBalls />

            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
            >
                <div
                    className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX}
          flex flex-row items-start gap-5`}
                >
                    <div className="flex flex-col justify-center items-center mt-5">
                        <div className="w-5 h-5 rounded-full bg-[#FAC308] shadow-[0_0_24px_#FAC308aa]" />
                        <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-[#FAC308] to-transparent" />
                    </div>

                    <div>
                        <h1 className={`${styles.heroHeadText} text-white`}>
                            Generation<span className="text-[#FAC308]"> Salez</span>
                        </h1>
                        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                            Construim experiențe digitale
                            <br className="sm:block hidden" />
                            unice pentru afacerea ta
                        </p>
                    </div>
                </div>

                <div className="absolute inset-0 h-full w-full">
                    <ComputersCanvas />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
                </div>

                {/* Scroll cue */}
                <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
                    <a href="#about" aria-label="Scroll to about">
                        <div className="w-[35px] h-[64px] rounded-3xl border-4 border-white/30 flex justify-center items-start p-2 backdrop-blur-sm bg-white/[0.03]">
                            <motion.div
                                animate={{ y: [0, 24, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                                className="w-3 h-3 rounded-full bg-[#FAC308] shadow-[0_0_10px_#FAC308aa] mb-1"
                            />
                        </div>
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
