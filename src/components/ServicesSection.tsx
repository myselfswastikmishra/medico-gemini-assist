
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Stethoscope, Calendar, Users, FileText, BriefcaseMedical, Shield } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: Stethoscope,
      title: "Medical Consultations",
      description: "Connect with experienced doctors for personalized healthcare advice."
    },
    {
      icon: Calendar,
      title: "Appointment Scheduling",
      description: "Book appointments with top medical specialists in your area."
    },
    {
      icon: FileText,
      title: "Health Records",
      description: "Securely access and manage your medical history and test results."
    },
    {
      icon: BriefcaseMedical,
      title: "Emergency Services",
      description: "24/7 emergency consultations and quick response support."
    },
    {
      icon: Shield,
      title: "Preventive Care",
      description: "Wellness programs and preventive health services for long-term health."
    },
    {
      icon: Users,
      title: "Family Healthcare",
      description: "Comprehensive healthcare solutions for your entire family."
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/20 dark:bg-secondary/10">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-medical px-3 py-1 text-sm text-primary-foreground">
              Our Services
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Comprehensive Healthcare Solutions
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Professional medical services tailored to meet your unique healthcare needs
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="transition-all hover:shadow-lg">
              <CardHeader className="pb-2">
                <div className="p-2 w-12 h-12 rounded-lg bg-medical/20 dark:bg-medical/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-medical" />
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
