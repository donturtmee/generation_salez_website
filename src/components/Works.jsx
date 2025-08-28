import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import { Button, Card, CardFooter, Image } from "@nextui-org/react";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  textColor = "white",
}) => {
  const darkText = textColor === "black";

  const nameCls = darkText ? "text-black" : "text-white/90";
  const descCls = darkText ? "text-black" : "text-white/90";
  //   const btnCls = darkText ? "text-white bg-black/90" : "text-white bg-black/20";
  const btnCls = darkText ? "text-white bg-black/40" : "text-white bg-black/40";

  const footerOverlay = darkText
    ? "before:bg-white/10 border-black/20"
    : "before:bg-white/10 border-white/20";

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="w-full"
    >
      <Tilt options={{ max: 45, scale: 1, speed: 450 }} className="w-full">
        <Card
          isFooterBlurred
          radius="lg"
          className="relative w-full h-full border-none bg-tertiary rounded-M shadow-lg"
        >
          <Image
            alt={name || "project image"}
            src={image}
            removeWrapper
            className="object-cover w-full h-[330px] rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              aria-label="Open source code"
              role="button"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>

          <CardFooter
            className={`justify-between ${footerOverlay} border-1 overflow-hidden py-3
                        absolute before:rounded-xl rounded-large bottom-1
                        w-[calc(100%_-_8px)] shadow-small mx-1 z-10`}
          >
            <div className="flex min-w-0 flex-col pr-3">
              {/* title — a bit smaller than last time */}
              <p
                className={`${nameCls} font-semibold truncate text-lg sm:text-l`}
              >
                {name}
              </p>
              {/* description */}
              <p
                className={`${descCls} line-clamp-2 text-sm sm:text-base leading-relaxed`}
              >
                {description}
              </p>
            </div>

            {/* button */}
            <Button
              className={`px-5 sm:px-6 ${btnCls} text-[15px] sm:text-[16px]`}
              color="default"
              radius="lg"
              size="md"
              variant="flat"
              onPress={() => window.open(source_code_link, "_blank")}
            >
              <ExternalLink className="w-5 h-5" />
            </Button>
          </CardFooter>
        </Card>

        {/* tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[15px] sm:text-[16px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Din idee în produs</p>
        <h2 className={`${styles.sectionHeadText}`}>Proiecte</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[20px] max-w-3xl leading-[30px]"
        >
          Portofoliul de mai jos arată experiența și abilitățile echipei
          Generation Salez în realizarea de soluții digitale orientate spre
          rezultate. Fiecare exemplu include o descriere scurtă și stack-ul
          tehnic, evidențiind modul în care gestionăm provocări complexe,
          combinăm tehnologii variate și ducem proiectele la bun sfârșit.
        </motion.p>
      </div>

      {/* Exact două pe rând, cardurile se întind pe toată lățimea coloanei */}
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "works");
