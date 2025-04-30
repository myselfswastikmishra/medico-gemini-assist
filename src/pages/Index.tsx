
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { AppointmentSection } from "@/components/AppointmentSection";
import { ResourcesSection } from "@/components/ResourcesSection";
import { GeminiAssistant } from "@/components/GeminiAssistant";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <HeroSection />
          <ServicesSection />
          <AppointmentSection />
          <ResourcesSection />
          <GeminiAssistant />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
