
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-40 w-full border-b bg-background/90 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Heart className="h-6 w-6 text-medical" />
          <span className="text-xl font-bold">Medico</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex gap-6 text-sm">
            <a href="#" className="transition-colors hover:text-primary">
              Home
            </a>
            <a href="#services" className="transition-colors hover:text-primary">
              Services
            </a>
            <a href="#appointment" className="transition-colors hover:text-primary">
              Appointment
            </a>
            <a href="#resources" className="transition-colors hover:text-primary">
              Resources
            </a>
            <a href="#assistant" className="transition-colors hover:text-primary">
              AI Assistant
            </a>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button>Contact Us</Button>
          </div>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden border-t p-4 bg-background/95 backdrop-blur-sm">
          <div className="flex flex-col space-y-4">
            <a
              href="#"
              className="transition-colors hover:text-primary"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a
              href="#services"
              className="transition-colors hover:text-primary"
              onClick={toggleMenu}
            >
              Services
            </a>
            <a
              href="#appointment"
              className="transition-colors hover:text-primary"
              onClick={toggleMenu}
            >
              Appointment
            </a>
            <a
              href="#resources"
              className="transition-colors hover:text-primary"
              onClick={toggleMenu}
            >
              Resources
            </a>
            <a
              href="#assistant"
              className="transition-colors hover:text-primary"
              onClick={toggleMenu}
            >
              AI Assistant
            </a>
            <Button className="w-full">Contact Us</Button>
          </div>
        </div>
      )}
    </nav>
  );
}
