import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Target, Zap } from "lucide-react";

export const TutorSection = () => {
  return (
    <div className="space-y-6">
      <Card className="border-accent/30 shadow-lg">
        <CardContent className="pt-6 space-y-4">
          <div className="flex items-start gap-4">
            <Lightbulb className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold mb-2">The Core Intuition 💡</h3>
              <p className="text-muted-foreground leading-relaxed">
                Imagine tracking your happiness throughout a day. If your overall mood drops below zero (you're having a really bad time), 
                you'd "reset" and start fresh from the next moment. But you remember your happiest streak! 
                That's exactly how Kadane's Algorithm works - it tracks the current sum, resets when it goes negative, 
                and always remembers the maximum sum found.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-primary/30 shadow-lg">
        <CardContent className="pt-6 space-y-4">
          <div className="flex items-start gap-4">
            <Target className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold mb-2">Real-Life Analogy 🎯</h3>
              <p className="text-muted-foreground leading-relaxed">
                Think of a business tracking daily profits and losses. Some days you gain (+4, +2), some days you lose (-3, -1). 
                If your running total ever goes negative (overall loss), a smart business would "reset" and focus on the next opportunity. 
                But they'd always remember their best profit streak! The algorithm finds that maximum profit period.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-success/30 shadow-lg">
        <CardContent className="pt-6 space-y-4">
          <div className="flex items-start gap-4">
            <Zap className="h-8 w-8 text-success flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold mb-2">Why It's Brilliant ⚡</h3>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">One Pass:</strong> Unlike checking every possible subarray (O(n²)), 
                  Kadane's algorithm only needs to look at each number once (O(n)).
                </p>
                <p>
                  <strong className="text-foreground">Smart Resets:</strong> When the current sum goes negative, 
                  continuing would only make things worse, so we reset to 0 and start fresh.
                </p>
                <p>
                  <strong className="text-foreground">Memory:</strong> We always keep track of the best sum we've seen, 
                  so even if we reset, we never lose our best answer.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
