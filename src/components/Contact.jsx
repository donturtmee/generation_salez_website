import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Toaster, toast } from "react-hot-toast";

import { styles } from "../styles";
import { LogoCanvas } from "./canvas/LogoCanvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    website: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    const toastId = toast.loading("Se trimite mesajul...");
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
          website: form.website || "",
        }),
      });

      if (res.status === 429) {
        toast.error("Prea multe cereri. Încearcă mai târziu.");
        return;
      }

      const data = await res.json().catch(() => ({}));

      if (res.ok && data?.ok) {
        toast.success("Mesaj trimis cu succes!");
        setForm({ name: "", email: "", message: "", website: "" });
      } else {
        toast.error(data?.error || "A apărut o eroare la trimitere.");
      }
    } catch {
      toast.error("Eroare de rețea. Verifică conexiunea.");
    } finally {
      toast.dismiss(toastId);
      setLoading(false);
    }
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <Toaster
        position="top-right"
        containerStyle={{
          top: "100px", // deplasat sub navbar
          right: "16px",
          zIndex: 9999, // peste navbar (care e z-20), dar nu chiar
        }}
      />

      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Ia legătura cu noi</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="absolute -left-[9999px] w-px h-px overflow-hidden">
            <span>Leave this field empty</span>
            <input
              type="text"
              name="website"
              value={form.website}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Numele tău</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Cum te numești?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">E-mailul tău</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Adresa ta de e-mail"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Mesajul tău</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Ce dorești să ne transmiți?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {/* {loading ? "Se trimite ..." : "Trimite"} */}
            Trimite
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <LogoCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
