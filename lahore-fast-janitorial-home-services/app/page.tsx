"use client";

import Link from "next/link";
import { Facebook, Instagram, Phone } from "lucide-react";
import ReactLenis from "@studio-freight/react-lenis";
import { HeroSection } from "@/components/sections/hero-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { ServicesSection } from "@/components/sections/services-section";
import { BookingPolicy } from "@/components/sections/booking-policy";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState, useEffect } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("hasLoaded");

    if (hasLoaded) {
      setIsLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem("hasLoaded", "true");
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen  w-screen flex items-center justify-center bg-background">
        <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <ReactLenis root>
      <div className="fixed right-3 md:right-4 select-none bottom-5 flex flex-col gap-1.5 md:gap-2 z-50">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="hover:scale-110 transition-all duration-300">
              <Link
                href="tel:+923224473071"
                className="flex items-center justify-center h-10 w-10 md:w-12 md:h-12 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                <Phone className="w-5 h-5 md:w-6 md:h-6" />
              </Link>
            </TooltipTrigger>
            <TooltipContent side="left">Phone</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="hover:scale-110 transition-all duration-300">
              <Link
                href="https://www.instagram.com/lahorefastjanitorailservices/"
                className="flex items-center justify-center h-10 w-10 md:w-12 md:h-12 rounded-full bg-red-600 text-white hover:bg-blreue-700 transition-colors"
              >
                <Instagram className="w-5 h-5 md:w-6 md:h-6" />
              </Link>
            </TooltipTrigger>
            <TooltipContent side="left">Instagram</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="hover:scale-110 transition-all duration-300">
              <Link
                href="https://www.facebook.com/profile.php?id=61570051358548&mibextid=ZbWKwL"
                className="flex items-center justify-center h-10 w-10 md:w-12 md:h-12 rounded-full bg-sky-600 text-white hover:bg-sky-700 transition-colors"
              >
                <Facebook className="w-5 h-5 md:w-6 md:h-6" />
              </Link>
            </TooltipTrigger>
            <TooltipContent side="left">Facebook</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="hover:scale-110 transition-all duration-300">
              <Link
                href="https://wa.me/+923224473071"
                className="flex items-center justify-center h-10 w-10 md:w-12 md:h-12 rounded-full shadow-sm"
              >
                <Image
                  src="/icons/whatsapp.png"
                  alt="WhatsApp"
                  width={32}
                  height={32}
                  className="w-9 h-9 md:w-10 md:h-10 bg-muted-foreground rounded-full"
                />
              </Link>
            </TooltipTrigger>
            <TooltipContent side="left">WhatsApp</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="flex flex-col min-h-screen mx-auto">
        <HeroSection />
        <FeaturesSection />
        <BookingPolicy />
        <ServicesSection />
       
      </div>
    </ReactLenis>
  );
}
