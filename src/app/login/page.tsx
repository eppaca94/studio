
'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { auth, googleProvider, facebookProvider } from "@/lib/firebase";
import { signInWithEmailAndPassword, signInWithPopup, User } from "firebase/auth";
import { Separator } from "@/components/ui/separator";
import { GoogleIcon } from "@/components/icons/google-icon";
import { FacebookIcon } from "@/components/icons/facebook-icon";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";


export default function LoginPage() {
  const { toast } = useToast();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSuccessfulLogin = (user: User) => {
    toast({
        title: "Login Successful",
        description: "Welcome back!",
    });
    router.push('/');
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      handleSuccessfulLogin(userCredential.user);
    } catch (err: any) {
      setError(err.message);
      toast({
        title: "Login Failed",
        description: "Invalid email or password.",
        variant: "destructive",
      });
    }
  }

  const handleSocialLogin = async (provider: typeof googleProvider | typeof facebookProvider) => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const userDocRef = doc(db, "users", user.uid);
      const userDoc = await getDoc(userDocRef);

      if (!userDoc.exists()) {
          await setDoc(userDocRef, {
              email: user.email,
              coins: 0,
              name: user.displayName,
              photoURL: user.photoURL,
          });
      }
      
      handleSuccessfulLogin(user);
    } catch (err: any) {
      setError(err.message);
      toast({
        title: "Login Failed",
        description: err.message,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen pt-28 px-4 bg-background">
      <Card className="w-full max-w-md shadow-2xl">
        <form onSubmit={handleSubmit}>
          <CardHeader className="text-center">
            <CardTitle className="font-headline text-3xl">Welcome Back!</CardTitle>
            <CardDescription>Enter your credentials to access your account.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button className="w-full" type="submit">Login</Button>
            
            <div className="relative w-full">
                <Separator className="w-full" />
                <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-card px-2 text-xs text-muted-foreground">OR</span>
            </div>

            <div className="w-full grid grid-cols-2 gap-4">
                <Button variant="outline" type="button" onClick={() => handleSocialLogin(googleProvider)}>
                    <GoogleIcon className="mr-2 h-5 w-5" /> Google
                </Button>
                <Button variant="outline" type="button" onClick={() => handleSocialLogin(facebookProvider)}>
                    <FacebookIcon className="mr-2 h-5 w-5" /> Facebook
                </Button>
            </div>

            <p className="text-sm text-center text-muted-foreground">
              Don&apos;t have an account?{" "}
              <Button variant="link" asChild className="p-0">
                  <Link href="/signup">Sign up</Link>
              </Button>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
