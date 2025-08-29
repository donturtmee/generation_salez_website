import React from "react";
import {motion} from "framer-motion";
import {Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure,} from "@heroui/react";

import {styles} from "../styles";
import {SectionWrapper} from "../hoc";
import {fadeIn, textVariant} from "../utils/motion";
import {testimonials} from "../constants";

const FeedbackCard = ({
                          index,
                          testimonial,
                          name,
                          company,
                          image,
                      }) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const preview =
        typeof testimonial === "string" && testimonial.length > 160
            ? testimonial.substring(0, 160) + "..."
            : testimonial || "";

    return (
        <>
            {/* Card */}
            <motion.div
                variants={fadeIn("", "spring", index * 0.5, 0.75)}
                className={`${styles.borderColor} bg-black-200 p-8 rounded-3xl xs:w-[320px] w-full flex flex-col justify-between`}
            >
                {/* Header */}
                <div className="flex justify-between items-center gap-2">
                    <div className="flex-1 flex flex-col">
                        <p className="text-white font-medium text-[17px]">
                            <span className="text-[#FAC308]">@</span> {name}
                        </p>
                        <p className="mt-1 text-secondary text-[13px]">{company}</p>
                    </div>
                    <img
                        src={image}
                        alt={`feedback_by-${name}`}
                        className="w-10 h-10 object-contain bg-transparent"
                    />
                </div>

                {/* Preview text */}
                <p className="text-white tracking-wider text-[17px] mt-4 flex-1">
                    {preview}
                </p>

                {/* Modal button */}
                {testimonial && testimonial.length > 160 && (
                    <Button
                        size="sm"
                        className="mt-4 bg-[#FAC308] text-black text-[15px] font-semibold self-start"
                        onPress={onOpen}
                    >
                        Citește mai mult
                    </Button>
                )}
            </motion.div>

            {/* Modal */}
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop="opaque">
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="text-lg font-semibold">
                                Testimonial de la {name}
                            </ModalHeader>
                            <ModalBody>
                                <p className="text-secondary text-[14px] mb-2">{company}</p>
                                {/* ✅ Black text in modal */}
                                <p className="text-black text-[17px] leading-relaxed whitespace-pre-line">
                                    {testimonial}
                                </p>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onPress={onClose}>
                                    Închide
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
};

const Feedbacks = () => {
    return (
        <div className={`mt-12 bg-tertiary rounded-[20px]`}>
            <div className={`rounded-2xl ${styles.padding} min-h-[300px]`}>
                <motion.div variants={textVariant()}>
                    <p className={styles.sectionSubText}>
                        Rezultatele vorbesc prin clienții noștri
                    </p>
                    <h2 className={styles.sectionHeadText}>Testimoniale</h2>
                </motion.div>
            </div>

            <div
                className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7 justify-center`}
            >
                {testimonials.map((testimonial, index) => (
                    <FeedbackCard
                        key={testimonial.name}
                        index={index}
                        {...testimonial}
                    />
                ))}
            </div>
        </div>
    );
};

export default SectionWrapper(Feedbacks, "");
