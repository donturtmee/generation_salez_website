import React from "react";
import Tilt from "react-parallax-tilt";
import {motion} from "framer-motion";

import {styles} from "../styles";
import {services} from "../constants";
import {SectionWrapper} from "../hoc";
import {fadeIn, textVariant} from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
    <Tilt
        className="w-[250px] xs:w-[250px] sm:w-[250px] md:w-[250px]"
        tiltMaxAngleX={12}
        tiltMaxAngleY={12}
        scale={1.02}
        transitionSpeed={400}
    >
        <motion.div
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            className=" green-pink-gradient w-full bg-gold-gradient p-[1px] rounded-[16px] sm:rounded-[18px] md:rounded-[20px] shadow-card"
        >
            <div
                className="bg-tertiary rounded-[15px] sm:rounded-[17px] md:rounded-[19px]
                   py-4 sm:py-5 px-6 sm:px-8
                   min-h-[220px] xs:min-h-[230px] sm:min-h-[240px] md:min-h-[280px]
                   flex flex-col justify-evenly items-center"
            >
                <img
                    src={icon}
                    alt={title}
                    className="w-12 h-12 xs:w-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
                />
                <h3 className="text-white text-[16px] xs:text-[17px] sm:text-[18px] md:text-[20px] font-bold text-center">
                    {title}
                </h3>
            </div>
        </motion.div>
    </Tilt>
);

const About = () => {
  return (
      <>
          <motion.div variants={textVariant()}>
              <p className={styles.sectionSubText}>Introducere</p>
              <h2 className={styles.sectionHeadText}>De la design la cod</h2>
          </motion.div>

          <motion.p
              variants={fadeIn("", "", 0.1, 1)}
              className="mt-4 text-secondary text-[20px] max-w-3xl leading-[30px]"
          >
              Generation Salez este o agenție de marketing digital și dezvoltare web,
              specializată în crearea de soluții inovatoare și eficiente pentru
              afaceri moderne. Echipa noastră combină creativitatea cu tehnologia
              pentru a livra proiecte scalabile, interactive și orientate către
              rezultate. Lucrăm alături de clienții noștri pentru a transforma ideile
              în realitate digitală.
          </motion.p>

          <div className="mt-20 flex flex-wrap gap-6 sm:gap-8 lg:gap-10 justify-center sm:justify-start">
              {services.map((service, index) => (
                  <ServiceCard  key={service.title} index={index} {...service} />
              ))}
          </div>
      </>
  );
};

export default SectionWrapper(About, "about");
