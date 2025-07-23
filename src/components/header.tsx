"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Gamepad2, Menu, Trophy, Wallet, X, LogOut, UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";


const navLinks = [
  { href: "/", label: "Games", icon: Gamepad2 },
  { href: "/tournaments", label: "Tournaments", icon: Trophy },
];

export function AppHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);
    router.push('/');
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check scroll position on initial load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const UserMenu = () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
            <Avatar className="h-10 w-10">
                <AvatarImage src={user?.photoURL ?? ''} alt={user?.displayName ?? 'User'} />
                <AvatarFallback>
                    {user?.email?.[0].toUpperCase() ?? <UserCircle />}
                </AvatarFallback>
            </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">My Account</p>
            <p className="text-xs leading-none text-muted-foreground">
              {user?.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/wallet">
            <Wallet className="mr-2 h-4 w-4" />
            <span>Wallet</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  return (
    <header className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-card/95 shadow-md backdrop-blur-sm" : "bg-transparent",
      )}>
      <div className="container mx-auto px-4">
        <div className={cn(
            "relative flex items-center justify-between transition-all duration-300",
            scrolled ? "h-20" : "h-28"
          )}>
          
          <div className={cn(
            "flex items-center gap-2 transition-all duration-500", 
            scrolled ? "opacity-100" : "opacity-0 -translate-x-full pointer-events-none"
          )}>
             <Link href="/" className="flex items-center gap-2">
              <Gamepad2 className="text-primary w-12 h-12" />
              <span className="font-bold font-headline text-primary text-4xl">
                QBOGame
              </span>
            </Link>
          </div>

          <div 
            className={cn(
              "absolute left-1/2 flex items-center gap-2 transition-all duration-500",
              scrolled ? "opacity-0 -translate-x-full pointer-events-none" : "opacity-100 -translate-x-1/2"
            )}
          >
            <Link href="/" className="flex items-center gap-2">
              <Gamepad2 className="text-primary w-12 h-12" />
              <span className="font-bold font-headline text-primary text-4xl">
                QBOGame
              </span>
            </Link>
          </div>
            
          <div className="flex-1 flex items-center justify-center">
              <nav className={cn("hidden md:flex items-center gap-6 ml-6 transition-opacity duration-500",
                scrolled ? "opacity-100" : "opacity-0 pointer-events-none"
              )}>
                  {navLinks.map((link) => (
                  <Button key={link.href} variant="ghost" asChild>
                      <Link href={link.href} className="text-md font-medium text-muted-foreground hover:text-primary">
                      {link.label}
                      </Link>
                  </Button>
                  ))}
                  {user && (
                    <Button variant="ghost" asChild>
                        <Link href="/wallet" className="text-md font-medium text-muted-foreground hover:text-primary">
                        Wallet
                        </Link>
                    </Button>
                  )}
              </nav>
          </div>

          <div className="flex justify-end">
             <div className="hidden md:flex items-center gap-2">
                {user ? <UserMenu /> : (
                  <div className={cn("flex items-center gap-2 transition-opacity duration-500", scrolled ? "opacity-100" : "opacity-0 pointer-events-none")}>
                    <Button variant="outline" asChild>
                      <Link href="/login">Login</Link>
                    </Button>
                    <Button className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                      <Link href="/signup">Sign Up</Link>
                    </Button>
                  </div>
                )}
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
                    {[...navLinks, ...(user ? [{ href: "/wallet", label: "Wallet", icon: Wallet }] : [])].map((link) => (
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
                    {user ? (
                        <Button variant="outline" size="lg" onClick={() => { handleLogout(); closeMobileMenu(); }}>
                          <LogOut className="mr-2 h-4 w-4" />
                          Logout
                        </Button>
                    ) : (
                      <>
                        <Button variant="outline" asChild size="lg" onClick={closeMobileMenu}>
                          <Link href="/login">Login</Link>
                        </Button>
                        <Button className="bg-accent hover:bg-accent/90" asChild size="lg" onClick={closeMobileMenu}>
                          <Link href="/signup">Sign Up</Link>
                        </Button>
                      </>
                    )}
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
