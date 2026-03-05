import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export default function Card(props: Readonly<CardProps>) {
  const { children, className = "", hover = true, onClick } = props;
  return (
    <motion.div
      onClick={onClick}
      whileHover={hover ? { y: -8, transition: { duration: 0.3 } } : {}}
      className={`
        bg-gradient-to-br from-dark-light to-dark
        rounded-2xl overflow-hidden
        border border-gray-800
        shadow-xl
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}