import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  children: ReactNode;
}

const buttonVariants = {
  primary: "bg-green-600 text-white hover:bg-green-700 shadow-lg",
  secondary: "bg-white text-gray-900 hover:bg-gray-50 shadow-lg",
  outline: "border-2 border-gray-300 bg-transparent hover:bg-gray-50",
};

const sizeVariants = {
  sm: "px-4 py-2 text-sm",
  md: "px-8 py-4 text-lg",
  lg: "px-10 py-5 text-xl",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", isLoading, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-semibold rounded-lg",
          "transition-all duration-200",
          "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500",
          "disabled:opacity-50 disabled:pointer-events-none",
          buttonVariants[variant],
          sizeVariants[size],
          className
        )}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
