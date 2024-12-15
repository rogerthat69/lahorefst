"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles, Home, Wrench, Info, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { ModeToggle } from "@/components/ui/ModeToggle";

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Services", href: "/services", icon: Wrench },
  { name: "About", href: "/about", icon: Info },
  { name: "Contact", href: "/contact", icon: Phone },
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const pathname = usePathname();
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
            setShowHeader(false);
          } else {
            setShowHeader(true);
          }

          lastScrollY.current = currentScrollY;
          ticking.current = false;
        });

        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="sticky top-0 z-50">
      <motion.header
        initial={false}
        animate={{
          y: showHeader ? 0 : -100,
          opacity: showHeader ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
          ease: "easeInOut",
        }}
        className="bg-blue-800 shadow-sm"
      >
        <nav
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          aria-label="Top"
        >
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center duration-300 transition-all">
              <Link
                href="/"
                className="flex items-center space-x-2 active:scale-95 duration-300 transition-all"
              >
                <Sparkles className="h-8 w-8 text-blue-500 dark:text-blue-400" />
                <span className="lg:text-xl md:text-sm hidden md:block font-bold text-background dark:text-gray-200">
                  Lahore Fast Janitorial Home Services
                </span>
                <span className="text-md text-gray-200 md:hidden font-bold ">
                  Lahore Fast Janitorial Home Services
                </span>
              </Link>
            </div>
            <div className="hidden md:flex md:items-center md:space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-base font-medium transition-colors flex items-center gap-2 group",
                    pathname === item.href
                      ? "text-sky-400 dark:text-blue-400 underline underline-offset-4 decoration-2"
                      : "text-gray-300 hover:text-blue-200 dark:hover:text-gray-100"
                  )}
                >
                  <item.icon className="h-4 w-4 group-hover:text-blue-400 group-hover:scale-125 transition-all duration-300 dark:group-hover:text-blue-400" />
                  {item.name}
                </Link>
              ))}
              <Button
                asChild
                className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white"
              >
                <Link href="/booking">Book Now</Link>
              </Button>
              <ModeToggle />
            </div>
            <div className="md:hidden flex flex-row items-center gap-2 z-50">
              <ModeToggle />
              <button
                aria-expanded={mobileMenuOpen}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex aspect-square h-fit select-none flex-col items-center justify-center rounded-full"
              >
                <motion.div
                  style={{
                    width: "20px",
                    borderTop: "2px solid white",
                    transformOrigin: "center",
                  }}
                  className="text-gray-200"
                  initial={{ translateY: "-3px" }}
                  animate={
                    mobileMenuOpen
                      ? { rotate: "45deg", translateY: "1px" }
                      : { translateY: "-3px", rotate: "0deg" }
                  }
                  transition={{ bounce: 0, duration: 0.1 }}
                />
                <motion.div
                  transition={{ bounce: 0, duration: 0.1 }}
                  style={{
                    width: "20px",
                    borderTop: "2px solid white",
                    transformOrigin: "center",
                  }}
                  className="text-gray-200"
                  initial={{ translateY: "3px" }}
                  animate={
                    mobileMenuOpen
                      ? { rotate: "-45deg", translateY: "-1px" }
                      : { translateY: "3px", rotate: "0deg", scaleX: 1 }
                  }
                />
              </button>
            </div>
          </div>
          {mobileMenuOpen && (
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetContent
                side="right"
                className="w-[300px] sm:w-[400px] pt-52 flex flex-col items-center"
              >
                <SheetHeader className="text-center">
                  <SheetTitle className="text-2xl font-bold">Menu</SheetTitle>
                </SheetHeader>
                <div className="space-y-2 pt-2  flex flex-col items-center w-full">
                  {navigation.map((item) => (
                    <SheetClose asChild key={item.name}>
                      <Link
                        href={item.href}
                        className={cn(
                          "px-2 py-2 text-xl font-medium text-center flex items-center gap-2",
                          pathname === item.href
                            ? "text-blue-600 dark:text-blue-400"
                            : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
                        )}
                      >
                        <item.icon className="h-5 w-5" />
                        {item.name}
                      </Link>
                    </SheetClose>
                  ))}
                  <SheetClose asChild>
                    <Button
                      className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-center mt-20"
                      asChild
                    >
                      <Link href="/booking">Book Now</Link>
                    </Button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          )}
        </nav>
      </motion.header>
    </div>
  );
}
