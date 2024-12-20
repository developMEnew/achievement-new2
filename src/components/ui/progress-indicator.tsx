import { cn } from "@/lib/utils";

interface ProgressIndicatorProps {
  progress: number;
  className?: string;
}

export function ProgressIndicator({ progress, className }: ProgressIndicatorProps) {
  return (
    <div className={cn("h-2 bg-gray-200 rounded-full overflow-hidden", className)}>
      <div 
        className="h-full bg-blue-500 rounded-full transition-all duration-300"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}