
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export function ResourcesSection() {
  const [selectedResource, setSelectedResource] = useState<number | null>(null);
  
  const resources = [
    {
      title: "Understanding Blood Pressure",
      description: "Learn about what your blood pressure numbers mean and how to maintain healthy levels.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Heart Health",
      fullContent: "Blood pressure is the force of blood pushing against the walls of arteries. It's measured using two numbers: systolic pressure (when the heart beats) and diastolic pressure (when the heart rests). A normal blood pressure reading is less than 120/80 mmHg. Elevated blood pressure ranges from 120-129 systolic and less than 80 diastolic. High blood pressure (hypertension) stage 1 is 130-139 systolic or 80-89 diastolic. Stage 2 is 140+ systolic or 90+ diastolic. Keep your blood pressure in check by maintaining a healthy weight, exercising regularly, limiting sodium and alcohol intake, and managing stress effectively. 💓"
    },
    {
      title: "Nutrition for Immune Support",
      description: "Discover the key nutrients and foods that help strengthen your immune system.",
      image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Nutrition",
      fullContent: "A strong immune system relies heavily on proper nutrition. Key nutrients include Vitamin C (found in citrus fruits, bell peppers), Vitamin D (sunlight, fatty fish, fortified foods), Zinc (meat, shellfish, legumes), and probiotics (yogurt, fermented foods). Antioxidant-rich foods like berries, leafy greens, and nuts help combat oxidative stress. Protein is essential for antibody production—include lean meats, eggs, or plant proteins in your diet. Stay hydrated and limit sugar intake, as excessive sugar can suppress immune function. Incorporating a colorful variety of fruits and vegetables ensures you get a wide spectrum of immune-supporting nutrients. 🥦🍊"
    },
    {
      title: "Managing Stress and Anxiety",
      description: "Practical techniques for reducing stress and managing anxiety in your daily life.",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2082&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Mental Health",
      fullContent: "Chronic stress can significantly impact both mental and physical health. Effective stress management techniques include deep breathing exercises, which activate your parasympathetic nervous system and reduce stress hormones. Regular physical activity releases endorphins that improve mood and reduce anxiety. Mindfulness meditation helps bring awareness to the present moment, preventing rumination on past or future concerns. Establishing healthy boundaries in work and personal relationships protects your mental space. Adequate sleep (7-9 hours) is crucial for stress resilience. Consider limiting caffeine and alcohol, which can exacerbate anxiety. If stress becomes overwhelming, don't hesitate to seek professional support from a therapist or counselor. 🧘‍♀️"
    },
    {
      title: "Sleep Hygiene Fundamentals",
      description: "Essential practices for better sleep quality and improved overall health.",
      image: "https://images.unsplash.com/photo-1455203983502-939932ba1d50?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Wellness",
      fullContent: "Quality sleep is foundational to good health. Maintain a consistent sleep schedule by going to bed and waking up at the same time every day, even on weekends. Create a restful environment by keeping your bedroom dark, quiet, and cool (65-68°F is ideal). Avoid screens 1-2 hours before bedtime, as blue light suppresses melatonin production. Establish a calming pre-sleep routine that might include reading, gentle stretching, or a warm bath. Limit caffeine after noon and avoid large meals, alcohol, and nicotine before bedtime. Regular exercise promotes better sleep quality, but try to complete vigorous workouts at least 3-4 hours before bedtime. If you can't fall asleep after 20 minutes, get up and do something relaxing until you feel sleepy. 😴"
    },
    {
      title: "Preventive Health Screenings",
      description: "Age-appropriate health screenings that can detect conditions early when they're most treatable.",
      image: "https://images.unsplash.com/photo-1579154341098-e4e158cc7f50?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Prevention",
      fullContent: "Regular health screenings are crucial for early detection of potential health issues. Blood pressure should be checked at least once every two years, or more frequently if you have risk factors. Cholesterol screening is recommended every 4-6 years for adults, starting at age 20. Diabetes screening is advised for adults with high blood pressure or those who are overweight. Cancer screenings vary by gender and age: mammograms for breast cancer (women 45+), Pap tests for cervical cancer (women 21-65), colonoscopies for colorectal cancer (adults 45+), and skin examinations for skin cancer. Bone density tests are recommended for women 65+ and men 70+. Regular dental check-ups, eye exams, and vaccinations complete a comprehensive preventive care strategy. Always consult with your healthcare provider about which screenings are appropriate for you based on your personal and family medical history. 🩺"
    },
    {
      title: "Heart-Healthy Exercise",
      description: "Fitness strategies to strengthen your cardiovascular system and improve heart health.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Fitness",
      fullContent: "Regular cardiovascular exercise is essential for heart health. Aim for at least 150 minutes of moderate-intensity aerobic activity or 75 minutes of vigorous activity weekly. Moderate activities include brisk walking, swimming, and cycling, while vigorous activities include running, high-intensity interval training (HIIT), and cardio dance classes. Strength training at least twice weekly complements cardio by improving overall fitness and metabolism. Start gradually if you're new to exercise, and consider working with a fitness professional to create a safe, effective program. Remember that consistency matters more than intensity—find activities you enjoy so you'll stick with them long-term. Monitor your heart rate during exercise to ensure you're working at an appropriate intensity level. Always check with your healthcare provider before starting a new exercise regimen, especially if you have existing heart conditions or risk factors. 💪"
    }
  ];

  const handleReadMore = (index: number) => {
    setSelectedResource(index);
  };

  const handleCloseDialog = () => {
    setSelectedResource(null);
  };

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
                <Button variant="ghost" className="p-0 h-auto font-medium" onClick={() => handleReadMore(index)}>
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" variant="outline" onClick={() => document.getElementById('resources')?.scrollIntoView({ behavior: 'smooth' })}>
            View All Resources
          </Button>
        </div>

        <Dialog open={selectedResource !== null} onOpenChange={handleCloseDialog}>
          {selectedResource !== null && (
            <DialogContent className="sm:max-w-[525px]">
              <DialogHeader>
                <DialogTitle>{resources[selectedResource].title}</DialogTitle>
                <DialogDescription className="text-xs text-muted-foreground mt-1">
                  Category: {resources[selectedResource].category}
                </DialogDescription>
              </DialogHeader>
              <div className="aspect-video mb-4">
                <img 
                  src={resources[selectedResource].image} 
                  alt={resources[selectedResource].title} 
                  className="object-cover w-full h-full rounded-md" 
                />
              </div>
              <p className="text-sm leading-relaxed">
                {resources[selectedResource].fullContent}
              </p>
              <Button className="mt-4" onClick={handleCloseDialog}>Close</Button>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
}
