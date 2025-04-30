
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

export function HeroSection() {
  return (
    <section className="py-20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-medical px-3 py-1 text-sm text-primary-foreground">
                Healthcare Reimagined
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Your Health, Our Priority
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Experience personalized healthcare with Medico. Professional services, expert advice, and innovative solutions for your wellbeing.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="px-8" onClick={() => document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })}>
                Book Appointment
              </Button>
              <Button size="lg" variant="outline" className="px-8" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
                Explore Services
              </Button>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Shield className="h-4 w-4 text-medical" />
                <span>Trusted Professionals</span>
              </div>
              <div className="flex items-center gap-1">
                <Shield className="h-4 w-4 text-medical" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-1">
                <Shield className="h-4 w-4 text-medical" />
                <span>Secure Privacy</span>
              </div>
            </div>
          </div>
          <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square">
            <img
              alt="Medical Hero"
              className="object-cover w-full h-full rounded-xl"
              src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=2091&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width="550"
              height="550"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
