
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { Card, CardContent } from "@/components/ui/card";

export function AppointmentSection() {
  const [date, setDate] = useState<Date | undefined>(undefined);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Appointment Scheduled",
      description: "Your appointment has been scheduled successfully. We'll contact you soon to confirm.",
    });
  };

  return (
    <section id="appointment" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-medical px-3 py-1 text-sm text-primary-foreground">
              Book Appointment
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Schedule a Visit with Our Specialists
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Easy and convenient booking for all your healthcare needs
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-2">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Doctor's office" 
                className="w-full h-full object-cover aspect-square" 
              />
            </CardContent>
          </Card>
          
          <div className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Enter your name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" required />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="Enter your phone" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service">Service</Label>
                  <Select>
                    <SelectTrigger id="service">
                      <SelectValue placeholder="Select service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="consultation">Medical Consultation</SelectItem>
                      <SelectItem value="checkup">General Checkup</SelectItem>
                      <SelectItem value="emergency">Emergency Care</SelectItem>
                      <SelectItem value="specialist">Specialist Visit</SelectItem>
                      <SelectItem value="followup">Follow-up Visit</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Preferred Date</Label>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="border rounded-md p-4"
                  disabled={(date) => {
                    const today = new Date();
                    return date < today || date > new Date(today.setMonth(today.getMonth() + 2));
                  }}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Additional Notes</Label>
                <Textarea id="message" placeholder="Any specific concerns or requirements..." />
              </div>
              <Button type="submit" className="w-full">Schedule Appointment</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
