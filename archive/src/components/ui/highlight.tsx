import { cn } from "@/lib/utils"

interface HighlightProps {
  children: React.ReactNode;
  className?: string;
}

export function Highlight({ children, className }: HighlightProps) {
  return (
    <span className={cn(
      "bg-gradient-to-r from-yellow-400 via-yellow-300 to-blue-300 text-transparent bg-clip-text",
      className
    )}>
      {children}
    </span>
  );
} 
