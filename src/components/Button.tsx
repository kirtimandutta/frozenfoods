import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-accent-foreground hover:bg-accent-hover shadow-[0_4px_24px_rgba(46,230,168,0.25)]",
  secondary:
    "bg-surface-elevated text-foreground hover:opacity-90 border border-border",
  ghost: "bg-transparent text-foreground hover:bg-surface-elevated",
};

export function Button({
  children,
  variant = "primary",
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`pressable inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-medium tracking-tight ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
