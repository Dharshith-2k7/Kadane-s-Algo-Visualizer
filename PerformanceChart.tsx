import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const PerformanceChart = () => {
  const arraySizes = [100, 1000, 5000, 10000, 50000];
  
  const getOperations = (size: number, algorithm: string) => {
    switch (algorithm) {
      case "kadane":
        return size;
      case "divide":
        return size * Math.log2(size);
      case "brute":
        return (size * size) / 2;
      default:
        return 0;
    }
  };

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toFixed(0);
  };

  return (
    <Card className="border-primary/30 shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl">Performance Comparison 📊</CardTitle>
        <p className="text-muted-foreground text-sm">
          Operations required for different array sizes
        </p>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-3 font-semibold">Array Size</th>
                <th className="text-center p-3">
                  <Badge variant="outline" className="bg-success/10 text-success border-success">
                    Kadane's O(n)
                  </Badge>
                </th>
                <th className="text-center p-3">
                  <Badge variant="outline" className="bg-warning/10 text-warning border-warning">
                    Divide O(n log n)
                  </Badge>
                </th>
                <th className="text-center p-3">
                  <Badge variant="outline" className="bg-destructive/10 text-destructive border-destructive">
                    Brute O(n²)
                  </Badge>
                </th>
              </tr>
            </thead>
            <tbody>
              {arraySizes.map((size) => {
                const kadaneOps = getOperations(size, "kadane");
                const divideOps = getOperations(size, "divide");
                const bruteOps = getOperations(size, "brute");
                
                const maxOps = Math.max(kadaneOps, divideOps, bruteOps);
                
                return (
                  <tr key={size} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                    <td className="p-3 font-mono font-semibold">{size.toLocaleString()}</td>
                    <td className="p-3">
                      <div className="space-y-1">
                        <div className="text-center font-mono text-sm text-success font-semibold">
                          {formatNumber(kadaneOps)}
                        </div>
                        <div className="bg-success/20 rounded-full h-2 overflow-hidden">
                          <div
                            className="bg-success h-full rounded-full transition-all"
                            style={{ width: `${(kadaneOps / maxOps) * 100}%` }}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="p-3">
                      <div className="space-y-1">
                        <div className="text-center font-mono text-sm text-warning font-semibold">
                          {formatNumber(divideOps)}
                        </div>
                        <div className="bg-warning/20 rounded-full h-2 overflow-hidden">
                          <div
                            className="bg-warning h-full rounded-full transition-all"
                            style={{ width: `${(divideOps / maxOps) * 100}%` }}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="p-3">
                      <div className="space-y-1">
                        <div className="text-center font-mono text-sm text-destructive font-semibold">
                          {formatNumber(bruteOps)}
                        </div>
                        <div className="bg-destructive/20 rounded-full h-2 overflow-hidden">
                          <div
                            className="bg-destructive h-full rounded-full transition-all"
                            style={{ width: `${(bruteOps / maxOps) * 100}%` }}
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="mt-6 grid md:grid-cols-3 gap-3">
          <div className="bg-success/10 p-4 rounded-lg border border-success/30 text-center">
            <div className="text-2xl mb-1">🏆</div>
            <div className="font-semibold text-success">Kadane's Wins</div>
            <div className="text-xs text-muted-foreground mt-1">Always fastest</div>
          </div>
          
          <div className="bg-warning/10 p-4 rounded-lg border border-warning/30 text-center">
            <div className="text-2xl mb-1">⚡</div>
            <div className="font-semibold text-warning">Divide & Conquer</div>
            <div className="text-xs text-muted-foreground mt-1">2-10x slower</div>
          </div>
          
          <div className="bg-destructive/10 p-4 rounded-lg border border-destructive/30 text-center">
            <div className="text-2xl mb-1">🐌</div>
            <div className="font-semibold text-destructive">Brute Force</div>
            <div className="text-xs text-muted-foreground mt-1">100-1000x slower</div>
          </div>
        </div>

        <div className="mt-6 bg-muted/50 p-4 rounded-lg border border-border">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">💡 Key Insight:</strong> As array size grows, 
            the performance gap becomes massive. With 50,000 elements, Kadane's needs only 50K operations 
            while Brute Force needs 1.25 BILLION operations - that's 25,000x slower!
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
