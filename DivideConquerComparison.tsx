import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const DivideConquerComparison = () => {
  return (
    <Tabs defaultValue="kadane" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="kadane" className="gap-2">
          🏆 Kadane's
        </TabsTrigger>
        <TabsTrigger value="divide" className="gap-2">
          ⚡ Divide & Conquer
        </TabsTrigger>
        <TabsTrigger value="brute" className="gap-2">
          🐌 Brute Force
        </TabsTrigger>
      </TabsList>

      <TabsContent value="kadane" className="mt-6">
        <Card className="border-success/40 shadow-xl">
          <CardHeader>
            <div className="flex items-center justify-between flex-wrap gap-2">
              <CardTitle className="text-2xl">Kadane's Algorithm</CardTitle>
              <div className="flex gap-2">
                <Badge variant="outline" className="bg-success/10 text-success border-success">
                  O(n) Time
                </Badge>
                <Badge variant="outline" className="bg-success/10 text-success border-success">
                  O(1) Space
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-gradient-to-br from-success/5 to-success/10 p-5 rounded-lg border border-success/20">
              <pre className="text-sm font-mono overflow-x-auto">
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
            
            <div className="space-y-3">
              <h4 className="font-bold text-success text-lg flex items-center gap-2">
                ✅ Why It's The Best
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-success mt-1">🚀</span>
                  <span className="text-muted-foreground"><strong className="text-foreground">Optimal Time:</strong> Single pass through array - can't get faster than O(n)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success mt-1">💎</span>
                  <span className="text-muted-foreground"><strong className="text-foreground">Minimal Space:</strong> Only uses a few variables - O(1) space</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success mt-1">🎯</span>
                  <span className="text-muted-foreground"><strong className="text-foreground">Simple & Elegant:</strong> Easy to understand and implement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success mt-1">⚡</span>
                  <span className="text-muted-foreground"><strong className="text-foreground">Cache Friendly:</strong> Sequential access pattern is CPU cache optimal</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success mt-1">🏆</span>
                  <span className="text-muted-foreground"><strong className="text-foreground">Industry Standard:</strong> Used in production systems worldwide</span>
                </li>
              </ul>
            </div>

            <div className="bg-success/10 p-4 rounded-lg border border-success/30">
              <p className="text-sm font-semibold text-success">
                🎖️ The Winner: Perfect balance of speed, space, and simplicity!
              </p>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="divide" className="mt-6">
        <Card className="border-warning/40 shadow-xl">
          <CardHeader>
            <div className="flex items-center justify-between flex-wrap gap-2">
              <CardTitle className="text-2xl">Divide & Conquer</CardTitle>
              <div className="flex gap-2">
                <Badge variant="outline" className="bg-warning/10 text-warning border-warning">
                  O(n log n) Time
                </Badge>
                <Badge variant="outline" className="bg-warning/10 text-warning border-warning">
                  O(log n) Space
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-gradient-to-br from-warning/5 to-warning/10 p-5 rounded-lg border border-warning/20">
              <pre className="text-sm font-mono overflow-x-auto">
{`function divideConquer(arr, left, right):
  if left == right:
    return arr[left]
  
  mid = (left + right) / 2
  
  leftMax = divideConquer(arr, left, mid)
  rightMax = divideConquer(arr, mid+1, right)
  crossMax = maxCrossingSum(arr, left, mid, right)
  
  return max(leftMax, rightMax, crossMax)

function maxCrossingSum(arr, left, mid, right):
  leftSum = -infinity
  sum = 0
  for i from mid to left:
    sum += arr[i]
    leftSum = max(leftSum, sum)
  
  rightSum = -infinity
  sum = 0
  for i from mid+1 to right:
    sum += arr[i]
    rightSum = max(rightSum, sum)
  
  return leftSum + rightSum`}
              </pre>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-bold text-warning text-lg flex items-center gap-2">
                ⚠️ The Middle Ground
              </h4>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="space-y-2">
                  <h5 className="font-semibold text-foreground">✅ Advantages:</h5>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Demonstrates divide-and-conquer paradigm</li>
                    <li>• Good for teaching recursion concepts</li>
                    <li>• Parallelizable subproblems</li>
                    <li>• Can be extended to 2D arrays</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h5 className="font-semibold text-foreground">❌ Disadvantages:</h5>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Slower than Kadane's - O(n log n)</li>
                    <li>• Uses recursion stack - O(log n) space</li>
                    <li>• More complex implementation</li>
                    <li>• Overhead from function calls</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-warning/10 p-4 rounded-lg border border-warning/30">
              <p className="text-sm">
                <strong className="text-warning">⚡ Verdict:</strong> <span className="text-muted-foreground">
                  Interesting academically but slower and more complex than Kadane's. 
                  The extra log n factor and recursion overhead make it less practical.
                </span>
              </p>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="brute" className="mt-6">
        <Card className="border-destructive/40 shadow-xl">
          <CardHeader>
            <div className="flex items-center justify-between flex-wrap gap-2">
              <CardTitle className="text-2xl">Brute Force Approach</CardTitle>
              <div className="flex gap-2">
                <Badge variant="outline" className="bg-destructive/10 text-destructive border-destructive">
                  O(n²) Time
                </Badge>
                <Badge variant="outline" className="bg-destructive/10 text-destructive border-destructive">
                  O(1) Space
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-gradient-to-br from-destructive/5 to-destructive/10 p-5 rounded-lg border border-destructive/20">
              <pre className="text-sm font-mono overflow-x-auto">
{`function bruteForce(arr):
  maxSum = arr[0]
  
  for i in range(len(arr)):
    currentSum = 0
    for j in range(i, len(arr)):
      currentSum += arr[j]
      maxSum = max(maxSum, currentSum)
  
  return maxSum

// Checks every possible subarray:
// [a], [a,b], [a,b,c], [a,b,c,d]...
//      [b], [b,c], [b,c,d]...
//           [c], [c,d]...
//                [d]...`}
              </pre>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-bold text-destructive text-lg flex items-center gap-2">
                ❌ Why It's Inefficient
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">🐌</span>
                  <span className="text-muted-foreground"><strong className="text-foreground">Too Slow:</strong> For n=1000, does 500,000 operations vs Kadane's 1,000</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">♻️</span>
                  <span className="text-muted-foreground"><strong className="text-foreground">Redundant Work:</strong> Recalculates same sums multiple times</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">⏳</span>
                  <span className="text-muted-foreground"><strong className="text-foreground">Doesn't Scale:</strong> Doubles runtime when array size doubles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">💻</span>
                  <span className="text-muted-foreground"><strong className="text-foreground">Cache Misses:</strong> Nested loops cause poor memory access patterns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">🚫</span>
                  <span className="text-muted-foreground"><strong className="text-foreground">Not Production Ready:</strong> Too slow for real-world data sizes</span>
                </li>
              </ul>
            </div>

            <div className="bg-destructive/10 p-4 rounded-lg border border-destructive/30">
              <p className="text-sm">
                <strong className="text-destructive">🛑 Performance Example:</strong> <span className="text-muted-foreground">
                  For array size 10,000: Brute Force takes ~100 million operations vs Kadane's 10,000 operations.
                  That's 10,000x slower! 😱
                </span>
              </p>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};
