import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const AlgorithmComparison = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <Card className="border-success/30 shadow-lg">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl">Kadane's Algorithm</CardTitle>
            <Badge variant="outline" className="bg-success/10 text-success border-success">
              O(n)
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-muted/50 p-4 rounded-lg">
            <pre className="text-sm font-mono">
{`function kadane(arr):
  currentSum = 0
  maxSum = arr[0]
  
  for num in arr:
    currentSum += num
    maxSum = max(maxSum, currentSum)
    if currentSum < 0:
      currentSum = 0
  
  return maxSum`}
            </pre>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-success">✅ Advantages:</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Linear time complexity - single pass</li>
              <li>Constant space O(1)</li>
              <li>Highly efficient for large arrays</li>
              <li>Simple and elegant solution</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="border-destructive/30 shadow-lg">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl">Brute Force</CardTitle>
            <Badge variant="outline" className="bg-destructive/10 text-destructive border-destructive">
              O(n²)
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-muted/50 p-4 rounded-lg">
            <pre className="text-sm font-mono">
{`function bruteForce(arr):
  maxSum = arr[0]
  
  for i in range(len(arr)):
    currentSum = 0
    for j in range(i, len(arr)):
      currentSum += arr[j]
      maxSum = max(maxSum, currentSum)
  
  return maxSum`}
            </pre>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-destructive">❌ Disadvantages:</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Quadratic time complexity - nested loops</li>
              <li>Inefficient for large arrays</li>
              <li>Checks all possible subarrays</li>
              <li>Wastes computation on redundant checks</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
