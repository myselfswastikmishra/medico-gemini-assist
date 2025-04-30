
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Heart className="h-6 w-6 text-medical" />
              <span className="text-xl font-bold">Medico</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your trusted partner in healthcare, providing compassionate and professional medical services.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground">Home</a>
              </li>
              <li>
                <a href="#services" className="hover:text-foreground">Services</a>
              </li>
              <li>
                <a href="#appointment" className="hover:text-foreground">Appointment</a>
              </li>
              <li>
                <a href="#resources" className="hover:text-foreground">Resources</a>
              </li>
              <li>
                <a href="#assistant" className="hover:text-foreground">AI Assistant</a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground">Medical Consultations</a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">Preventive Care</a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">Emergency Services</a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">Specialist Referrals</a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">Telehealth</a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>123 Medical Center Drive</li>
              <li>Healthville, MN 12345</li>
              <li>contact@medico.com</li>
              <li>(555) 123-4567</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Medico. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-foreground">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
