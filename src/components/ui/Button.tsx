import { motion } from "framer-motion";
import type { ReactNode, MouseEventHandler } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button(props: Readonly<ButtonProps>) {
  const {
    children,
    variant = "primary",
    size = "md",
    className = "",
    onClick,
    type = "button",
    disabled = false
  } = props;
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const variantClasses = {
    primary: "bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/20",
    outline: "border-2 border-primary text-primary hover:bg-primary/10",
    ghost: "text-gray-300 hover:text-primary hover:bg-white/5"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        rounded-xl font-medium transition-all duration-300
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}
      `}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
}