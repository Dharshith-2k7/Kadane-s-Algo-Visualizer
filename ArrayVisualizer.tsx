import { cn } from "@/lib/utils";

interface ArrayVisualizerProps {
  array: number[];
  currentIndex?: number;
  maxSubarrayStart?: number;
  maxSubarrayEnd?: number;
  currentSum?: number;
  maxSum?: number;
  emoji?: string;
}

export const ArrayVisualizer = ({
  array,
  currentIndex,
  maxSubarrayStart,
  maxSubarrayEnd,
  currentSum,
  maxSum,
  emoji,
}: ArrayVisualizerProps) => {
  const getElementStyle = (index: number) => {
    if (maxSubarrayStart !== undefined && maxSubarrayEnd !== undefined) {
      if (index >= maxSubarrayStart && index <= maxSubarrayEnd) {
        return "bg-success text-success-foreground border-success animate-pulse-glow";
      }
    }
    
    if (currentIndex !== undefined && index <= currentIndex) {
      return "bg-current text-current-foreground border-current";
    }
    
    return "bg-muted text-muted-foreground border-border";
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-3 justify-center items-center">
        {array.map((num, index) => (
          <div
            key={index}
            className={cn(
              "relative flex items-center justify-center w-16 h-16 rounded-lg border-2 font-bold text-lg transition-all duration-300 hover:scale-110",
              getElementStyle(index)
            )}
          >
            {num}
            {index === currentIndex && emoji && (
              <span className="absolute -top-8 text-3xl animate-bounce">
                {emoji}
              </span>
            )}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-card p-4 rounded-lg border border-border">
          <div className="text-sm text-muted-foreground mb-1">Current Sum</div>
          <div className="text-3xl font-bold text-current">
            {currentSum !== undefined ? currentSum : "—"}
          </div>
        </div>
        
        <div className="bg-card p-4 rounded-lg border border-border">
          <div className="text-sm text-muted-foreground mb-1">Max Sum Found</div>
          <div className="text-3xl font-bold text-success">
            {maxSum !== undefined ? maxSum : "—"}
          </div>
        </div>
      </div>
    </div>
  );
};
