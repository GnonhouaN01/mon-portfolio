

interface BadgeProps {
  readonly children: React.ReactNode;
  readonly variant?: "primary" | "secondary" | "outline";
  readonly size?: "sm" | "md";
  readonly className?: string;
}

export default function Badge({ children, variant = "primary", size = "md", className = ""}: BadgeProps) {
  const sizeClasses = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-1.5 text-sm"
  };

  const variantClasses = {
    primary: "bg-primary/20 text-primary border border-primary/30",
    secondary: "bg-gray-800 text-gray-300 border border-gray-700",
    outline: "bg-transparent text-gray-300 border border-gray-700"
  };

  return (
    <span className={`
      inline-block rounded-full font-medium
      ${sizeClasses[size]}
      ${variantClasses[variant]}
      ${className}
    `}>
      {children}
    </span>
  );
}