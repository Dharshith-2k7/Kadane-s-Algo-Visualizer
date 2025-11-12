import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrayVisualizer } from "./ArrayVisualizer";
import { Play, Pause, RotateCcw, FastForward, SkipBack, SkipForward, Eye } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface Step {
  index: number;
  currentSum: number;
  maxSum: number;
  maxStart: number;
  maxEnd: number;
  emoji: string;
  message: string;
}

export const KadaneAlgorithm = () => {
  const [array, setArray] = useState([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
  const [inputValue, setInputValue] = useState(array.join(", "));
  const [steps, setSteps] = useState<Step[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1000);
  const [showAllSteps, setShowAllSteps] = useState(false);

  const runKadane = (arr: number[]): Step[] => {
    const stepsList: Step[] = [];
    let currentSum = 0;
    let maxSum = arr[0];
    let maxStart = 0;
    let maxEnd = 0;
    let tempStart = 0;

    arr.forEach((num, i) => {
      currentSum += num;

      if (currentSum > maxSum) {
        maxSum = currentSum;
        maxStart = tempStart;
        maxEnd = i;
        stepsList.push({
          index: i,
          currentSum,
          maxSum,
          maxStart,
          maxEnd,
          emoji: "🏆",
          message: `New max found! Sum = ${maxSum}`,
        });
      } else if (currentSum > 0) {
        stepsList.push({
          index: i,
          currentSum,
          maxSum,
          maxStart,
          maxEnd,
          emoji: "🔥",
          message: `Current sum growing: ${currentSum}`,
        });
      } else {
        stepsList.push({
          index: i,
          currentSum,
          maxSum,
          maxStart,
          maxEnd,
          emoji: "💔",
          message: "Sum went negative, will reset soon",
        });
      }

      if (currentSum < 0) {
        currentSum = 0;
        tempStart = i + 1;
      }
    });

    return stepsList;
  };

  const handleArrayInput = () => {
    try {
      const newArray = inputValue
        .split(",")
        .map((s) => parseInt(s.trim()))
        .filter((n) => !isNaN(n));
      
      if (newArray.length === 0) {
        toast.error("Please enter valid numbers");
        return;
      }
      
      setArray(newArray);
      const newSteps = runKadane(newArray);
      setSteps(newSteps);
      setCurrentStep(0);
      setIsPlaying(false);
      toast.success("Array updated!");
    } catch (error) {
      toast.error("Invalid input format");
    }
  };

  useEffect(() => {
    const newSteps = runKadane(array);
    setSteps(newSteps);
  }, [array]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && currentStep < steps.length - 1) {
      interval = setInterval(() => {
        setCurrentStep((prev) => prev + 1);
      }, speed);
    } else if (currentStep >= steps.length - 1) {
      setIsPlaying(false);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentStep, steps.length, speed]);

  const currentStepData = steps[currentStep];

  return (
    <div className="space-y-6">
      <Card className="border-primary/20 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl">Interactive Visualizer</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter numbers separated by commas"
              className="flex-1"
            />
            <Button onClick={handleArrayInput}>Set Array</Button>
          </div>

          {currentStepData && (
            <>
              <ArrayVisualizer
                array={array}
                currentIndex={currentStepData.index}
                maxSubarrayStart={currentStepData.maxStart}
                maxSubarrayEnd={currentStepData.maxEnd}
                currentSum={currentStepData.currentSum}
                maxSum={currentStepData.maxSum}
                emoji={currentStepData.emoji}
              />
              
              {showAllSteps && (
                <div className="mt-6 bg-muted/30 p-4 rounded-lg border border-border max-h-64 overflow-y-auto">
                  <h4 className="font-semibold mb-3 text-sm">All Steps:</h4>
                  <div className="space-y-2">
                    {steps.map((step, idx) => (
                      <div
                        key={idx}
                        className={cn(
                          "p-2 rounded text-xs transition-all cursor-pointer hover:bg-muted",
                          idx === currentStep ? "bg-primary/20 border border-primary" : "bg-card"
                        )}
                        onClick={() => {
                          setCurrentStep(idx);
                          setIsPlaying(false);
                        }}
                      >
                        <span className="font-mono">Step {idx + 1}:</span> {step.emoji} {step.message}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}

          <div className="bg-muted/50 p-4 rounded-lg border border-border">
            <p className="text-center text-lg font-medium">
              {currentStepData?.message || "Ready to start!"}
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex gap-2 justify-center items-center flex-wrap">
              <Button
                variant="outline"
                size="icon"
                onClick={() => {
                  setCurrentStep(0);
                  setIsPlaying(false);
                }}
                title="Reset to start"
              >
                <RotateCcw className="h-4 w-4" />
              </Button>
              
              <Button
                variant="outline"
                size="icon"
                onClick={() => {
                  if (currentStep > 0) {
                    setCurrentStep(currentStep - 1);
                    setIsPlaying(false);
                  }
                }}
                disabled={currentStep === 0}
                title="Previous step"
              >
                <SkipBack className="h-4 w-4" />
              </Button>
              
              <Button
                variant="default"
                onClick={() => setIsPlaying(!isPlaying)}
                className="gap-2 shadow-md hover:shadow-lg transition-shadow"
              >
                {isPlaying ? (
                  <>
                    <Pause className="h-4 w-4" /> Pause
                  </>
                ) : (
                  <>
                    <Play className="h-4 w-4" /> Play
                  </>
                )}
              </Button>

              <Button
                variant="outline"
                size="icon"
                onClick={() => {
                  if (currentStep < steps.length - 1) {
                    setCurrentStep(currentStep + 1);
                    setIsPlaying(false);
                  }
                }}
                disabled={currentStep >= steps.length - 1}
                title="Next step"
              >
                <SkipForward className="h-4 w-4" />
              </Button>
              
              <Button
                variant="outline"
                size="icon"
                onClick={() => {
                  setCurrentStep(steps.length - 1);
                  setIsPlaying(false);
                }}
                title="Skip to end"
              >
                <FastForward className="h-4 w-4" />
              </Button>

              <select
                value={speed}
                onChange={(e) => setSpeed(Number(e.target.value))}
                className="h-10 px-3 rounded-md border border-input bg-background hover:bg-muted transition-colors"
              >
                <option value={2000}>🐢 Slow</option>
                <option value={1000}>⚡ Normal</option>
                <option value={500}>🚀 Fast</option>
                <option value={250}>💨 Ultra Fast</option>
              </select>
            </div>
            
            <div className="flex justify-center">
              <Button
                variant="secondary"
                onClick={() => setShowAllSteps(!showAllSteps)}
                className="gap-2"
              >
                <Eye className="h-4 w-4" />
                {showAllSteps ? "Hide All Steps" : "Show All Steps"}
              </Button>
            </div>
          </div>

          <div className="text-center text-sm text-muted-foreground">
            Step {currentStep + 1} of {steps.length}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
