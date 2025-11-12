import { KadaneAlgorithm } from "@/components/KadaneAlgorithm";
import { TutorSection } from "@/components/TutorSection";
import { DivideConquerComparison } from "@/components/DivideConquerComparison";
import { PerformanceChart } from "@/components/PerformanceChart";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Code, Sparkles, Zap, TrendingUp } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-accent/10 to-background py-16 px-4">
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />
        
        <div className="container mx-auto max-w-4xl text-center space-y-6 animate-fade-in relative z-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-primary font-medium animate-bounce-in backdrop-blur-sm border border-primary/20">
            <Sparkles className="h-4 w-4 animate-pulse" />
            <span>Interactive Algorithm Learning</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
            Kadane's Algorithm
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hi there! Let's explore one of the most elegant algorithms in computer science together! 🚀
          </p>
          
          <div className="text-sm text-muted-foreground">
            <p>Done by:</p>
            <p className="font-semibold text-foreground mt-1">
              Dharshith (24BCE1777) & Abishek (24BCE5068)
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4 pt-6">
            <a href="#learn" className="block">
              <Card className="border-primary/30 hover:border-primary/50 transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                <CardContent className="pt-6 text-center space-y-2">
                  <BookOpen className="h-10 w-10 mx-auto text-primary animate-float" />
                  <h3 className="font-bold text-lg">Learn</h3>
                  <p className="text-sm text-muted-foreground">Simple explanations with real-life analogies</p>
                </CardContent>
              </Card>
            </a>
            
            <a href="#visualize" className="block">
              <Card className="border-accent/30 hover:border-accent/50 transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                <CardContent className="pt-6 text-center space-y-2">
                  <Code className="h-10 w-10 mx-auto text-accent animate-float" style={{ animationDelay: '0.2s' }} />
                  <h3 className="font-bold text-lg">Visualize</h3>
                  <p className="text-sm text-muted-foreground">Watch the algorithm in action step-by-step</p>
                </CardContent>
              </Card>
            </a>
            
            <a href="#compare" className="block">
              <Card className="border-success/30 hover:border-success/50 transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                <CardContent className="pt-6 text-center space-y-2">
                  <Sparkles className="h-10 w-10 mx-auto text-success animate-float" style={{ animationDelay: '0.4s' }} />
                  <h3 className="font-bold text-lg">Practice</h3>
                  <p className="text-sm text-muted-foreground">Try your own arrays and see how it works</p>
                </CardContent>
              </Card>
            </a>
            
            <a href="#performance" className="block">
              <Card className="border-warning/30 hover:border-warning/50 transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                <CardContent className="pt-6 text-center space-y-2">
                  <TrendingUp className="h-10 w-10 mx-auto text-warning animate-float" style={{ animationDelay: '0.6s' }} />
                  <h3 className="font-bold text-lg">Compare</h3>
                  <p className="text-sm text-muted-foreground">See why it beats other solutions</p>
                </CardContent>
              </Card>
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto max-w-6xl px-4 py-12 space-y-12">
        {/* What is the Problem? */}
        <section className="animate-slide-up">
          <Card className="border-primary/30 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <CardContent className="pt-8 space-y-6 relative z-10">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Zap className="h-10 w-10 text-primary animate-pulse" />
                <h2 className="text-4xl font-bold text-center">
                  What Problem Are We Solving?
                </h2>
                <Zap className="h-10 w-10 text-accent animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>
              <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
                Given an array of numbers (some positive, some negative), find the <strong className="text-foreground text-primary">maximum sum</strong> of 
                any contiguous subarray. 
              </p>
              <div className="bg-muted/50 p-6 rounded-xl border border-border max-w-2xl mx-auto">
                <p className="text-center text-lg mb-3 font-semibold">Example:</p>
                <p className="text-center font-mono text-lg mb-2">
                  <code className="bg-card px-3 py-2 rounded">[-2, 1, -3, 4, -1, 2, 1, -5, 4]</code>
                </p>
                <p className="text-center text-muted-foreground mb-2">↓</p>
                <p className="text-center text-lg">
                  Maximum subarray: <code className="bg-success/20 text-success px-3 py-2 rounded font-bold">[4, -1, 2, 1]</code>
                </p>
                <p className="text-center mt-3">
                  <span className="text-muted-foreground">Sum = </span>
                  <strong className="text-success text-2xl">6</strong> 🏆
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Interactive Visualizer */}
        <section id="visualize" className="animate-slide-up scroll-mt-20">
          <KadaneAlgorithm />
        </section>

        {/* Understanding Section */}
        <section id="learn" className="animate-slide-up scroll-mt-20">
          <h2 className="text-3xl font-bold text-center mb-8">
            Understanding the Magic ✨
          </h2>
          <TutorSection />
        </section>

        {/* Algorithm Comparison */}
        <section id="compare" className="animate-slide-up space-y-8 scroll-mt-20">
          <div className="text-center space-y-3">
            <h2 className="text-4xl font-bold">
              Algorithm Battle Arena ⚔️
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Compare three different approaches and see why Kadane's Algorithm dominates!
            </p>
          </div>
          <DivideConquerComparison />
        </section>

        {/* Performance Chart */}
        <section id="performance" className="animate-slide-up scroll-mt-20">
          <PerformanceChart />
        </section>

        {/* Summary */}
        <section className="animate-slide-up">
          <Card className="border-primary/40 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-success/5" />
            <CardContent className="pt-8 space-y-6 relative z-10">
              <h2 className="text-4xl font-bold text-center flex items-center justify-center gap-3">
                <span className="text-3xl">📝</span>
                Quick Summary
                <span className="text-3xl">🎯</span>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-xl border border-primary/30 shadow-md">
                  <h3 className="font-bold text-xl text-foreground mb-4 flex items-center gap-2">
                    <span className="text-2xl">🎯</span> Key Steps
                  </h3>
                  <ol className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-primary">1.</span>
                      <span>Iterate through the array once</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-primary">2.</span>
                      <span>Add each element to your current sum</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-primary">3.</span>
                      <span>Update the maximum if current sum is larger</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-primary">4.</span>
                      <span>Reset current sum to 0 if it becomes negative</span>
                    </li>
                  </ol>
                </div>

                <div className="bg-gradient-to-br from-success/10 to-success/5 p-6 rounded-xl border border-success/30 shadow-md">
                  <h3 className="font-bold text-xl text-foreground mb-4 flex items-center gap-2">
                    <span className="text-2xl">⚡</span> Complexity
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-card/50 p-4 rounded-lg">
                      <div className="font-bold text-success text-lg mb-1">Time: O(n)</div>
                      <p className="text-sm text-muted-foreground">Single pass through array - can't be faster!</p>
                    </div>
                    <div className="bg-card/50 p-4 rounded-lg">
                      <div className="font-bold text-success text-lg mb-1">Space: O(1)</div>
                      <p className="text-sm text-muted-foreground">Only a few variables needed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-success/10 p-6 rounded-xl border-2 border-primary/30 shadow-lg">
                <h3 className="font-bold text-2xl text-center text-foreground mb-4 flex items-center justify-center gap-2">
                  <span className="text-3xl">✨</span> The Beauty of Kadane's
                </h3>
                <p className="text-lg text-center text-muted-foreground leading-relaxed">
                  Kadane's Algorithm turns a seemingly complex <code className="bg-destructive/20 text-destructive px-2 py-1 rounded">O(n²)</code> problem 
                  into an elegant <code className="bg-success/20 text-success px-2 py-1 rounded">O(n)</code> solution 
                  through one clever observation: <strong className="text-foreground">if your current sum becomes negative, 
                  starting fresh can only improve your results!</strong> 🎯
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-border mt-16 py-10 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto max-w-4xl text-center space-y-4">
          <div className="text-lg">
            <span className="text-muted-foreground">Created by</span>
          </div>
          <div className="space-y-2">
            <p className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Dharshith (24BCE1777)
            </p>
            <p className="text-xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Abishek (24BCE5068)
            </p>
          </div>
          <div className="flex items-center justify-center gap-4 pt-2">
            <span className="text-xs text-muted-foreground">Learn • Visualize • Master</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
