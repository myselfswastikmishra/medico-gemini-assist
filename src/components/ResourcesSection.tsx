
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function ResourcesSection() {
  const resources = [
    {
      title: "Understanding Blood Pressure",
      description: "Learn about what your blood pressure numbers mean and how to maintain healthy levels.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Heart Health"
    },
    {
      title: "Nutrition for Immune Support",
      description: "Discover the key nutrients and foods that help strengthen your immune system.",
      image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Nutrition"
    },
    {
      title: "Managing Stress and Anxiety",
      description: "Practical techniques for reducing stress and managing anxiety in your daily life.",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2082&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Mental Health"
    }
  ];

  return (
    <section id="resources" className="py-20 bg-secondary/10">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-medical px-3 py-1 text-sm text-primary-foreground">
              Health Resources
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Knowledge for Better Health
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Expert insights and information to help you make informed health decisions
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-video relative">
                <img 
                  src={resource.image} 
                  alt={resource.title} 
                  className="object-cover w-full h-full" 
                />
                <div className="absolute top-4 left-4">
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-medical text-primary-foreground">
                    {resource.category}
                  </span>
                </div>
              </div>
              <CardHeader>
                <CardTitle>{resource.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {resource.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="p-0 h-auto font-medium">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" variant="outline">
            View All Resources
          </Button>
        </div>
      </div>
    </section>
  );
}
