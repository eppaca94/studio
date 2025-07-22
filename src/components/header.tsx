"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Gamepad2, Menu, Trophy, Wallet, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Games", icon: Gamepad2 },
  { href: "/tournaments", label: "Tournaments", icon: Trophy },
  { href: "/wallet", label: "Wallet", icon: Wallet },
];

export function AppHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-card shadow-md" : "bg-transparent",
      )}>
      <div className="container mx-auto px-4">
        <div className={cn(
            "relative flex items-center justify-between transition-all duration-300",
            scrolled ? "h-20" : "h-32",
          )}>
          
          <div className={cn("flex items-center gap-2 transition-all duration-500", 
            scrolled ? "opacity-100" : "opacity-0"
          )}>
             <Link href="/" className="flex items-center gap-2">
              <Gamepad2 className="text-primary w-8 h-8" />
              <span className="font-bold font-headline text-primary text-2xl">
                QBOGame
              </span>
            </Link>
          </div>
            
          <div className="flex-1">
              <nav className={cn("hidden md:flex items-center transition-all duration-500",
                scrolled ? "gap-6 ml-6 opacity-100" : "gap-12 justify-center opacity-0"
              )}>
                  {navLinks.map((link) => (
                  <Button key={link.href} variant="ghost" asChild>
                      <Link href={link.href} className="text-md font-medium text-muted-foreground hover:text-primary">
                      {link.label}
                      </Link>
                  </Button>
                  ))}
              </nav>
          </div>

          <div className={cn("absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500",
             scrolled ? "opacity-0 -translate-y-10" : "opacity-100"
          )}>
            <Link href="/" className="flex items-center gap-2 pointer-events-none md:pointer-events-auto">
              <Gamepad2 className="text-primary w-12 h-12" />
              <span className="font-bold font-headline text-primary text-4xl">
                QBOGame
              </span>
            </Link>
          </div>

          <div className="flex-1 flex justify-end">
            <div className={cn("hidden md:flex items-center gap-2 transition-opacity duration-500",
                scrolled ? "opacity-100" : "opacity-0"
              )}>
                <Button variant="outline" asChild>
                <Link href="/login">Login</Link>
                </Button>
                <Button className="bg-accent hover:bg-accent/90" asChild>
                <Link href="/signup">Sign Up</Link>
                </Button>
            </div>
          </div>


          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-card p-0">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-6 border-b">
                    <Link href="/" onClick={closeMobileMenu} className="flex items-center gap-2">
                       <Gamepad2 className="w-8 h-8 text-primary" />
                      <span className="text-xl font-bold font-headline text-primary">QBOGame</span>
                    </Link>
                    <Button variant="ghost" size="icon" onClick={closeMobileMenu}>
                      <X />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </div>
                  <nav className="flex-grow p-6 flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={closeMobileMenu}
                        className="flex items-center gap-4 text-lg font-medium text-muted-foreground hover:text-primary transition-colors p-2 rounded-md hover:bg-secondary"
                      >
                        <link.icon className="w-6 h-6" />
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                  <div className="p-6 border-t mt-auto flex flex-col gap-4">
                    <Button variant="outline" asChild size="lg" onClick={closeMobileMenu}>
                      <Link href="/login">Login</Link>
                    </Button>
                    <Button className="bg-accent hover:bg-accent/90" asChild size="lg" onClick={closeMobileMenu}>
                      <Link href="/signup">Sign Up</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
