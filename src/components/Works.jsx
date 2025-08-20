import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import { Card, CardFooter, Image, Button } from "@nextui-org/react";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="sm:w-[360px] w-full"
      >
        <Card
          isFooterBlurred
          radius="lg"
          className="relative border-none bg-tertiary rounded-2xl shadow-lg"
        >
          {/* Imaginea proiectului */}
          <Image
            alt={name || "project image"}
            src={image}
            removeWrapper
            className="object-cover w-full h-[230px] rounded-2xl"
          />

          {/* Buton GitHub în colț (păstrează stilul tău) */}
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

          {/* Footer blur ca în exemplul NextUI, dar cu titlu + descriere + buton */}
          <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-2 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small mx-1 z-10">
            <div className="flex min-w-0 flex-col pr-2">
              <p className="text-white/90 text-sm font-semibold truncate">
                {name}
              </p>
              <p className="text-white/70 text-xs line-clamp-2">
                {description}
              </p>
            </div>

            <Button
              className="text-tiny text-white bg-black/20"
              color="default"
              radius="lg"
              size="sm"
              variant="flat"
              onPress={() => window.open(source_code_link, "_blank")}
            >
              Vezi codul
            </Button>
          </CardFooter>
        </Card>

        {/* Tags sub card, păstrând stilul inițial */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
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
        <p className={`${styles.sectionSubText} `}>La ce lucrăm acum?</p>
        <h2 className={`${styles.sectionHeadText}`}>Proiecte</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Proiectele de mai jos ilustrează experiența și abilitățile echipei
          Generation Salez în dezvoltarea de soluții digitale reale. Fiecare
          exemplu este prezentat cu descrieri scurte și tehnologii utilizate,
          demonstrând capacitatea noastră de a rezolva provocări complexe, de a
          lucra cu diverse tehnologii și de a gestiona proiecte eficiente.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

// Works.jsx
export default SectionWrapper(Works, "works");

