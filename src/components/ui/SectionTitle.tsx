import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
}

export default function SectionTitle(props: Readonly<SectionTitleProps>) {
  const { title, subtitle, align = "center" } = props;
  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
  };

  const getDecorativeClass = () => {
    if (align === "center") return "mx-auto";
    if (align === "right") return "ml-auto";
    return "";
  };

  return (
    <div className={`mb-16 ${alignClasses[align]}`}>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm text-primary uppercase tracking-[0.2em] mb-3"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl md:text-5xl font-bold text-white"
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className={`h-1 w-20 bg-primary mt-4 ${getDecorativeClass()}`}
      />
    </div>
  );
}